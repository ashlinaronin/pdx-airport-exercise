const Koa = require("koa");
const cors = require("koa-cors");
const cash = require("koa-cash");
const convert = require("koa-convert");
const LRU = require("lru-cache");
const logger = require("koa-logger");
const app = new Koa();
const weatherRoutes = require("./routes/weather");
const router = require("koa-router")();
const cache = LRU(1000);

app.use(logger());
app.use(cors());

// Cache responses to avoid unnecessary calls to external API
app.use(
  convert(
    cash({
      get: key => cache.get(key),
      set: (key, value) => cache.set(key, value)
    })
  )
);

app.use(async (ctx, next) => {
  const cashed = await ctx.cashed();
  if (cashed) return;
  await next();
});

app.use(router.allowedMethods());
app.use(router.routes());

router.use("/weather", weatherRoutes.routes());

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on port ${port}`);
