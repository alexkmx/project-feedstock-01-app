const { Model } = require('objection');

class ProdServEmpre extends Model {
  static get tableName () {
    return 'productos_serviciosempresariales';
  }
}

module.exports = ProdServEmpre;
