
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('matprimxprov', table => {
      table
        .integer('proveedoresId')
        .unsigned()
        .references('id')
        .inTable('proveedores');

      return table;
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('matprimxprov', table => {
      table.dropForeign('proveedoresId');
      table.dropColumn('proveedoresId');

      return table;
    });
};
