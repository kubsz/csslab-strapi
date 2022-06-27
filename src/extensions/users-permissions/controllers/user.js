const _ = require("lodash");
const utils = require("@strapi/utils");

const { sanitize } = utils;

const sanitizeOutput = (user, ctx) => {
  const schema = strapi.getModel("plugin::users-permissions.user");
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = {
  async metoo(ctx) {
    const user = ctx.state.user;

    ctx.query.populate = "*";

    if (!user) {
      return ctx.unauthorized();
    }

    ctx.body = await sanitizeOutput(user, ctx);
  },
};
