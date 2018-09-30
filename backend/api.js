const Koa = require("koa");
const cors = require("koa-cors");
const logger = require("koa-logger");
const app = new Koa();
const weatherRoutes = require("./routes/weather");
const router = require("koa-router")();

router.use("/weather", weatherRoutes.routes());

app
  .use(logger())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on port ${port}`);
