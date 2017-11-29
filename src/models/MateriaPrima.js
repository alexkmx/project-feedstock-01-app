const {Model} = require('objection');

class MateriaPrima extends Model {
 static get tableName(){
  return 'materiasprimas';
  }
 }

module.exports = MateriaPrima;
