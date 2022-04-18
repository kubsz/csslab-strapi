"use strict";

/**
 *  component controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const uid = "api::component.component";

module.exports = createCoreController("api::component.component", ({ strapi }) => ({
  async find(ctx) {
    const query = { ...ctx.query, populate: { props: true } };
    return await strapi.entityService.findMany(uid, query);
  },
}));
