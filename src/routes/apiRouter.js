const Router = require('express').Router;
const MateriaPrima = require('../models/MateriaPrima.js');
const Formulas = require('../models/Formula.js');

const apiRouter = Router();

function getAllFormulas(req, res) {
   const db = req.app.locals.db;

   db
    .select()
    .table('formulas')
    .then(data => res.json(data));
}

function getAllMatPrim (req, res) {
  MateriaPrima

    .query()
    .then(data => res.json(data));
}

function getAllProve(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('proveedores')
  .then(data => res.json(data));
}

function getProdGrupMerk(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('productos_grupomerk')
  .then(data => res.json(data));
}

function getProdGreffex(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('productos_greffex')
  .then(data => res.json(data));
}

function getProdAseProf(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('productos_asesoresprofesionales')
  .then(data => res.json(data));
}

function getProdProdPract(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('productos_productospracticos')
  .then(data => res.json(data));
}

function getProdServEmp(req, res){
  const {db} = req.app.locals;

  db
  .select()
  .table('productos_serviciosempresariales')
  .then(data => res.json(data));
}

apiRouter
  .get('/formulas', getAllFormulas)
  .get('/materiasprimas', getAllMatPrim)
  .get('/proveedores', getAllProve)
  .get('/grupomerk', getProdGrupMerk)
  .get('/greffex', getProdGreffex)
  .get('/asesoresprofesionales', getProdAseProf)
  .get('/productospracticos', getProdProdPract)
  .get('/serviciosempresariales', getProdServEmp);

module.exports = apiRouter;
