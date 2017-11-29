const { Model } = require('objection');

class ProdProdPracticos extends Model {
  static get tableName () {
    return 'productos_productospracticos';
  }
}

module.exports = ProdProdPracticos;
