
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('formulas_matprim', table => {
      table.increments();

      table.string('nombreformula');
      table.string('nombrematprim');
      table.float('porcentaje');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('formulas_matprim');
};
