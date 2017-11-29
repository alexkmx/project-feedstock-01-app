const { Model } = require('objection');

class Formula extends Model {
  static get tableName () {
    return 'formulas';
  }
}
