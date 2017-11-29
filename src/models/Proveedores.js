const { Model } = require('objection');

class Proveedores extends Model {
  static get tableName () {
    return 'proveedores';
  }
}

module.exports = Proveedores;
