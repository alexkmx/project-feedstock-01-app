
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('formulas_matprim', table => {
      table
        .integer('formulasId')
        .unsigned()
        .references('id')
        .inTable('formulas');

      return table;
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('formulas_matprim', table => {
      table.dropForeign('formulasId');
      table.dropColumn('formulasId');

      return table;
    });
};
