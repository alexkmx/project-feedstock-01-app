
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('formulas', table => {
      table.increments();

      table.string('base');
      table.string('nombre');
      table.string('unidad');
      table.float('porcentaje');
      table.float('totalunidad');
    });
};


exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('formulas');
};
