const { Model } = require('objection');

class ProdGpoMerk extends Model {
  static get tableName () {
    return 'productos_grupomerk';
  }
}

module.exports = ProdGpoMerk;
