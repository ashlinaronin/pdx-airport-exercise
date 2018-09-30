const router = require("koa-router")();
const { getWeather, getWeatherForMonth } = require("../services/weather");

router.get("/today/:latitude/:longitude", async ctx => {
  try {
    // TODO: verify params present
    ctx.body = await getWeather(ctx.params.latitude, ctx.params.longitude);
  } catch (err) {
    console.error(err);
    ctx.throw(500, "Weather: error fetching weather from external API");
  }
});

router.get("/month/:month/:latitude/:longitude", async ctx => {
  try {
    ctx.body = await getWeatherForMonth(
      ctx.params.month,
      ctx.params.latitude,
      ctx.params.longitude
    );
  } catch (err) {
    console.erorr(err);
    ctx.throw(500, "Weather: error fetching month's weather from external API");
  }
});

module.exports = router;
