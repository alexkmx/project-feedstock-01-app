
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('formulas_matprim', table => {
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
    .table('formulas_matprim', table => {
      table.dropForeign('materiasprimasId');
      table.dropColumn('materiasprimasId');

      return table;
    });
};
