
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('matprimxprov', table => {
      table.increments();

      table.string('razonsocialprov');
      table.string('nomcomatprim');
      table.string('nomquimatprim')
      table.float('precio_us_dll');
      table.float('precio_mx_peso');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('matprimxprov');
};
