
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('matprimxprov', table => {
      table
        .integer('materiasprimasId')
        .unsigned()
        .references('id')
        .inTable('materiasprimas');

      return table;
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('matprimxprov', table => {
      table.dropForeign('materiasprimasId');
      table.dropColumn('materiasprimasId');

      return table;
    });
};
