const dataRows = [
{
   base: 'Crema',
   nombre:'Crema Corporal',
   unidad: 'Lt.',
   totalunidad: 0.0
},{
   base: 'Fragancia',
   nombre:'Fragancia Ambiental',
   unidad: 'Lt.',
   totalunidad: 0.0
},{
   base: 'Aceite',
   nombre:'Aceite para Masaje',
   unidad: 'Lt.',
   totalunidad: 0.0
},{
   base: 'Gel',
   nombre:'Gel de Ducha',
   unidad: 'Lt.',
   totalunidad: 0.0
},{
   base: 'Crema',
   nombre:'Crema Facial',
   unidad: 'Lt.',
   totalunidad: 0.0
},{
   base: 'Gel',
   nombre:'Gel para Cabello',
   unidad: 'Lt.',
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
