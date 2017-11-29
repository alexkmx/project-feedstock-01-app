
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('proveedores', table => {
      table.increments();

      table.string('razon_social');
      table.string('rfc');
      table.string('direccion');
      table.string('telefono1');
      table.string('telefono2');
      table.string('correo_e');
      table.string('contacto1');
      table.string('contacto2');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('proveedores');
};
