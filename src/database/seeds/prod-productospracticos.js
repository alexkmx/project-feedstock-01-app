const dataRows = [
  {
    nombre_comercial: 'botella cristal 1 lt. tapa',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.20,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'botella cristal 500 ml. tapa',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.18,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'botella cristal 250 ml. tapa',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'botella cristal 1 lt. spray',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.28,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'botella cristal 500 ml. spray',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.21,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'botella cristal 250 ml. spray',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.12,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'tarro nacarado 300ml Modelo odissey',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.48,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'tarro nacarado 150ml Modelo sunrise',
    nombre_quimico: 'na',
    unidad: 'pza.',
    precio_us_dll: 0.28,
    precio_mx_peso: 0.00,
  }
];

exports.seed = function(knex, Promise) {
  return knex('productos_productospracticos')
    .del()
    .then(() => {
      return knex('productos_productospracticos')
        .insert(dataRows);
    })
}
