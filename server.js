const express = require('express');
const fs = require('fs-extra');
const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');
const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');   //Importo el archivo
const ejs = require('ejs');
const {Model} = require ('objection');


const app = express();

const appDb = connectToDb(dbConfigObj.development);

Model.knex(appDb);
app.locals.db = appDb;

const PATH = `${__dirname}/src/views/home.html`;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use('/api/v1/productos', apiRouter);

app.engine('ejs', ejs.renderFile);
app.set('view engine','ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(`${__dirname}/public`))

app.use((req, res) => {
  res.send('<h1>404. Not found.</h1>')
});

// app.use('/', (req, res) => {
//   fs
//   .readFile(PATH, 'utf-8')
//   .then(data => {
//     res.send(data)
//   })
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App lisening on port ${PORT}`);
});
