const dataRows = [
{
   base: 'Crema',
   nombre:'Crema Corporal',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
},{
   base: 'Aceite',
   nombre:'Aceite para Masaje',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
},{
   base: 'Fragancia',
   nombre:'Fragancia Ambiental',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
},{
   base: 'Gel',
   nombre:'Gel de Ducha',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
},{
   base: 'Crema',
   nombre:'Crema Facial',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
},{
   base: 'Gel',
   nombre:'Gel para Cabello',
   unidad: 'Lt.',
   porcentaje: 100.00,
   totalunidad: 0.0
}

];

exports.seed = function(knex, Promise) {
  return knex('formulas')
    .del()
    .then(() => {
      return knex('formulas')
        .insert(dataRows);
    });
}
