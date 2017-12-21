const bcrypt = require('bcrypt')

const dataRows = [
  { email: 'usuario@feedstock.com', password: bcrypt.hashSync('12345', 12) }
];

exports.seed = function(knex, Promise) {
  return knex('user')
    .del()
    .then(() => {
      return knex('user')
        .insert(dataRows);
    });
}
