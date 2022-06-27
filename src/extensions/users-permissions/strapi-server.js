const _ = require("lodash");
const utils = require("@strapi/utils");

const { sanitize } = utils;

const sanitizeOutput = (user, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = (plugin) => {
  plugin.controllers.user.me = async (ctx) => {
    if (!ctx.state || !ctx.state.user) {
      return ctx.unauthorized();
    }
    const user = await strapi.entityService.findOne("plugin::users-permissions.user", ctx.state.user.id, { populate: { image: true } });
    ctx.body = await sanitizeOutput(user, ctx);
  };

  return plugin;
};
