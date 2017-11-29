const dataRows = [
{
   razon_social: 'Grupo Merk',
   rfc:'GRM021648N34',
   direccion:'Pase de la Reforma No.4569, Col. Lomas de Chapultepec C.P.45607',
   telefono1:'52(55)2216-2390',
   telefono2:'52(55)2326-2370',
   correo_e: 'malbarran@grupomerk.com',
   contacto1:'Mauricio Albarran',
   contacto2: 'Esteban Becerril'
},{
  razon_social: 'Greffex SA',
  rfc:'GFE784516V49',
  direccion:'Plaza Polanco No.49-C, Col. Los Morales C.P.32607',
  telefono1:'52(55)1216-3390',
  telefono2:'52(55)4326-6370',
  correo_e: 'darmitia@greffex.com.mx',
  contacto1:'Dolores Armitia',
  contacto2: 'Marina Deschilld'
},{
  razon_social: 'Asesores Profesionales SR',
  rfc:'ASP223467K31',
  direccion:'Presa la angostura, Col. Hirrigacion C.P.45322',
  telefono1:'52(55)2116-2000',
  telefono2:'52(55)8726-5430',
  correo_e: 'pmerino@profesas21.com',
  contacto1:'Pantaleon Merino',
  contacto2: 'Mario Morales'
},{
  razon_social: 'Servcios Empresariales',
  rfc:'SEE342145J01',
  direccion:'Torre Omega Piso 22 No.43, Col. Los Cipreses C.P.341607',
  telefono1:'52(55)1216-3390',
  telefono2:'52(55)4326-6370',
  correo_e: 'darmenta@eservicios.mx',
  contacto1:'Daniel Armenta',
  contacto2: 'Emilia Carrasco'
},{
  razon_social: 'Productos Practicos SA',
  rfc:'PRP211316H23',
  direccion:'Sonora No.349, Col. Condesa C.P.22017',
  telefono1:'52(55)1823-0450',
  telefono2:'52(55)3290-6871',
  correo_e: 'mromero@produprax.mx',
  contacto1:'Miguel Romero',
  contacto2: 'Cynthia Duenas'
}

];

exports.seed = function(knex, Promise) {
  return knex('proveedores')
    .del()
    .then(() => {
      return knex('proveedores')
        .insert(dataRows);
    });
}
