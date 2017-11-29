const dataRows = [
  {
    nombre_comercial: 'agua desmineralizada',
    nombre_quimico: 'agua desmin',
    unidad: 'Lt.',
    precio_us_dll: 0.08,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'glicerina',
    nombre_quimico: 'glicerina',
    unidad: 'Lt.',
    precio_us_dll: 1.18,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'alcohol cetilico',
    nombre_quimico: 'alcohol cetil',
    unidad: 'Lt.',
    precio_us_dll: 0.98,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'palmitrato de isopropilo',
    nombre_quimico: 'palmitrato de iso',
    unidad: 'Lt.',
    precio_us_dll: 8.74,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'sorbitol',
    nombre_quimico: 'sorbitol_usp',
    unidad: 'Kg.',
    precio_us_dll: 2.91,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'fragancia',
    nombre_quimico: 'fragancia',
    unidad: 'Lt.',
    precio_us_dll: 24.88,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'conservador_2',
    nombre_quimico: 'germabenII',
    unidad: 'Lt.',
    precio_us_dll: 6.38,
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
    nombre_comercial: 'extractos vegetales',
    nombre_quimico: 'extractos vegetales',
    unidad: 'Lt.',
    precio_us_dll: 4.34,
    precio_mx_peso: 0.00,
  },{
    nombre_comercial: 'pantenol',
    nombre_quimico: 'pantenol',
    unidad: 'Lt.',
    precio_us_dll: 9.69,
    precio_mx_peso: 0.00,
  }
];

exports.seed = function(knex, Promise) {
  return knex('productos_grupomerk')
    .del()
    .then(() => {
      return knex('productos_grupomerk')
        .insert(dataRows);
    })
}
