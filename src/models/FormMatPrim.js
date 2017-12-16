const {Model} = require('objection');

class FormMatPrim extends Model {
 static get tableName(){
  return 'formulas_matprim';
  }
 }

module.exports = FormMatPrim;
