"use strict";

/**
 *  category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const uid = "api::category.category";

module.exports = createCoreController("api::category.category", ({ strapi }) => ({
  async find(ctx) {
    const query = {
      ...ctx.query,
    };
    return await strapi.entityService.findMany(uid, query);
  },
}));
