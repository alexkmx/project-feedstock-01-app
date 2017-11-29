const dataRows = [
  {
    nombre_comercial: 'aceite',
    nombre_quimico: 'aceite',
    unidad: 'Lt.',
    precio_us_dll: 1.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'glicerina',
    nombre_quimico: 'glicerina',
    unidad: 'Lt.',
    precio_us_dll: 1.18,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'acido estearico',
    nombre_quimico: 'acido estearico',
    unidad: 'Lt.',
    precio_us_dll: 0.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'dimeticona',
    nombre_quimico: 'dimeticona',
    unidad: 'Kg.',
    precio_us_dll: 1.48,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'carbomero',
    nombre_quimico: 'carbomer',
    unidad: 'Kg.',
    precio_us_dll: 3.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'fragancia',
    nombre_quimico: 'fragancia',
    unidad: 'Lt.',
    precio_us_dll: 24.88,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'conservador_1',
    nombre_quimico: 'germaben +',
    unidad: 'Lt.',
    precio_us_dll: 6.43,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'vitamina',
    nombre_quimico: 'vitamina e liquida',
    unidad: 'Lt.',
    precio_us_dll: 10.71,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'agua deionizada',
    nombre_quimico: 'agua deion',
    unidad: 'Lt.',
    precio_us_dll: 2.98,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'agua desmineralizada',
    nombre_quimico: 'agua desmin',
    unidad: 'Lt.',
    precio_us_dll: 0.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'extractos vegetales',
    nombre_quimico: 'extractos vegetales',
    unidad: 'Lt.',
    precio_us_dll: 4.34,
    precio_mx_peso: 0.00,
  },{
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
  }
];

exports.seed = function(knex, Promise) {
  return knex('productos_asesoresprofesionales')
    .del()
    .then(() => {
      return knex('productos_asesoresprofesionales')
        .insert(dataRows);
    })
}
