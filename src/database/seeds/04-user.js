const dataRows = [
  { email: 'usuario@feedstock.com', password: 12345 }
];

exports.seed = function(knex, Promise) {
  return knex('user')
    .del()
    .then(() => {
      return knex('user')
        .insert(dataRows);
    });
}
