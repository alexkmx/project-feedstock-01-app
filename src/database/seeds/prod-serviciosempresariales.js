const dataRows = [
  {
    nombre_comercial: 'empaque carton p/tarro odissey',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.02,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'empaque carton p/tarro sunrise',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.01,
    precio_mx_peso: 0.00,
  }
];

exports.seed = function(knex, Promise) {
  return knex('productos_serviciosempresariales')
    .del()
    .then(() => {
      return knex('productos_serviciosempresariales')
        .insert(dataRows);
    })
}
