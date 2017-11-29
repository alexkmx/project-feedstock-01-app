const { Model } = require('objection');

class Formulas extends Model {
  static get tableName () {
    return 'formulas';
  }

  static get relationMappings(){
    const FormMatPrim = require('./FormMatPrim.js');

    return {
      formulas_matprim:{
        relation: Model.HasManyRelation,
        modelClass: FormMatPrim,
        join: {
          from: 'formulas.id',
          to: 'formulas_matprim.formulasId',      //Creo la relación de usuario y modelo de twe

        }
      }
    };
  }
}

module.exports = Formulas;
