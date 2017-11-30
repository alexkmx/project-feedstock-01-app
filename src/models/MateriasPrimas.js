const { Model } = require('objection');

class MateriasPrimas extends Model {
  static get tableName () {
    return 'materiasprimas';
  }

  // static get relationMappings(){
  //   const FormMatPrim = require('./FormMatPrim.js');
  //
  //   return {
  //     formulas_matprim:{
  //       relation: Model.HasManyRelation,
  //       modelClass: FormMatPrim,
  //       join: {
  //         from: 'materiasprimas.id',
  //         to: 'formulas_matprim.materiasprimasId',      //Creo la relación de usuario y modelo de twe
  //
  //       }
  //     }
  //   };
  // }

  static get relationMappings(){
    const MatPrimxProv = require('../models/MatPrimxProv.js');

    return {
      matprimxprov:{
        relation: Model.HasManyRelation,
        modelClass: MatPrimxProv,
        join: {
          from: 'materiasprimas.id',
          to: 'matprimxprov.materiasprimasId',      //Creo la relación de usuario y modelo de twe

        }
      }
    };
  }
}

module.exports = MateriasPrimas;
