const router = require("koa-router")();
const { getWeather } = require("../services/weather");

router.get("/:latitude/:longitude", async ctx => {
  try {
    // TODO: verify params present
    ctx.body = await getWeather(ctx.params.latitude, ctx.params.longitude);
  } catch (err) {
    console.error(err);
    ctx.throw(500, "Weather: error fetching weather from external API");
  }
});

module.exports = router;
