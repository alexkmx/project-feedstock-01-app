const { Model } = require('objection');

class ProdGreffex extends Model {
  static get tableName () {
    return 'productos_greffex';
  }
}

module.exports = ProdGreffex;
