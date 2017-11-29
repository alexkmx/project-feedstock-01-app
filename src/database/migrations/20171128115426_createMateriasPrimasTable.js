
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('materiasprimas', table => {
      table.increments();

      table.string('nombre_comercial');
      table.string('nombre_quimico');
      table.string('unidad');
      table.float('precio_us_dll');
      table.float('precio_mx_peso');
      table.float('existencia_almacen');
    });
};


exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('materiasprimas');
};
