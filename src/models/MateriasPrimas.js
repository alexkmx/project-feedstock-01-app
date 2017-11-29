const { Model } = require('objection');

class MateriasPrimas extends Model {
  static get tableName () {
    return 'materiasprimas';
  }
  static get relationMappings(){
    const FormMatPrim = require('./FormMatPrim.js');

    return {
      formulas_matprim:{
        relation: Model.HasManyRelation,
        modelClass: FormMatPrim,
        join: {
          from: 'materiasprimas.id',
          to: 'formulas_matprim.materiasprimasId',      //Creo la relación de usuario y modelo de twe

        }
      }
    };
  }
}

module.exports = MateriasPrimas;
