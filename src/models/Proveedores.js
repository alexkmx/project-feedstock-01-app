const { Model } = require('objection');

class Proveedores extends Model {
  static get tableName () {
    return 'proveedores';
  }

  static get relationMappings(){
    const MatPrimxProv = require('./MatPrimxProv.js');

    return {
      matprimxprov:{
        relation: Model.HasManyRelation,
        modelClass: MatPrimxProv,
        join: {
          from: 'proveedores.id',
          to: 'matprimxprov.proveedoresId',      //Creo la relación de usuario y modelo de twe

        }
      }
    };
  }
}

module.exports = Proveedores;
