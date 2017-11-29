const { Model } = require('objection');

class ProdAseProf extends Model {
  static get tableName () {
    return 'productos_asesoresprofesionales';
  }
}

module.exports = ProdAseProf;
