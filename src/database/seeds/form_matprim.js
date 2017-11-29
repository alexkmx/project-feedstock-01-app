const dataRows = [
{
   nombreformula: 'Crema',
   nombrematprim:'agua desmineralizada',
   porcentaje: 70.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'aceite',
   porcentaje: 9.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'glicerina',
   porcentaje: 4.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'acido estearico',
   porcentaje: 2.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'alcohol cetilico',
   porcentaje: 1.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'dimeticona',
   porcentaje: 1.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'palmitrato de isopropilo',
   porcentaje: 1.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'propilenglicol',
   porcentaje: 5.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'sorbitol',
   porcentaje: 3.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'carbomero',
   porcentaje: 0.5,
},{
   nombreformula: 'Crema',
   nombrematprim:'fragancia',
   porcentaje: 2.0,
},{
   nombreformula: 'Crema',
   nombrematprim:'conservador_1',
   porcentaje: 0.5,
},{
   nombreformula: 'Crema',
   nombrematprim:'conservador_2',
   porcentaje: 0.5,
},{
   nombreformula: 'Crema',
   nombrematprim:'edta',
   porcentaje: 0.2,
},{
   nombreformula: 'Crema',
   nombrematprim:'vitamina',
   porcentaje: 0.3,
},{
   nombreformula: 'Fragancia Ambiental',
   nombrematprim:'alcohol deionizado',
   porcentaje: 78.0,
},{
   nombreformula: 'Fragancia Ambiental',
   nombrematprim:'agua deionizada',
   porcentaje: 10.0,
},{
   nombreformula: 'Fragancia Ambiental',
   nombrematprim:'fragancia',
   porcentaje: 11.0,
},{
   nombreformula: 'Fragancia Ambiental',
   nombrematprim:'conservador_1',
   porcentaje: 0.5,
},{
   nombreformula: 'Fragancia Ambiental',
   nombrematprim:'conservador_2',
   porcentaje: 0.5,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'agua deionizada',
   porcentaje: 0.5,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'extractos vegetales',
   porcentaje:11.0,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'acticeramida',
   porcentaje: 4.0,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'pantenol',
   porcentaje: 0.5,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'aceite de jojoba',
   porcentaje: 3.5,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'aceite de germen de trigo',
   porcentaje: 4.0,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'conservador_1',
   porcentaje: 0.5,
},{
   nombreformula: 'Gel de Ducha',
   nombrematprim:'conservador_2',
   porcentaje: 0.5,
}
];

exports.seed = function(knex, Promise) {
  return knex('formulas_matprim')
    .del()
    .then(() => {
      return knex('formulas_matprim')
        .insert(dataRows);
    });
}
