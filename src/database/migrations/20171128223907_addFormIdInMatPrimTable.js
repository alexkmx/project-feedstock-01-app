
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('materiasprimas', table => {
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
    .table('materiasprimas', table => {
      table.dropForeign('formulasId');
      table.dropColumn('formulasId');

      return table;
    });
};
