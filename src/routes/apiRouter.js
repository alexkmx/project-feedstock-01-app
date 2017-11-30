const Router = require('express').Router;
const FormMatPrim = require('../models/FormMatPrim.js');
const Formulas = require('../models/Formulas.js');
const MateriasPrimas = require('../models/MateriasPrimas.js');
const Proveedores = require('../models/Proveedores.js');
const MatPrimxProv = require('../models/MatPrimxProv.js');

const apiRouter = Router();

function getForMatPrim(req, res) {
   FormMatPrim

    .query()
    .then(data => res.json(data));
}

function getMatPrimxProv(req, res){
   MatPrimxProv

  .query()
  .then(data => res.json(data));
}

function getAllFormulas(req, res) {
   Formulas

    .query()
    .eager('formulas_matprim')
    .then(data => res.json(data));
}

function getAllMatPrim(req, res) {
   MateriasPrimas

    .query()
    // .eager('formulas_matprim')
    .eager('matprimxprov')
    .then(data => res.json(data));
}

function getAllProve(req, res){
  Proveedores

  .query()
  .eager('matprimxprov')
  .then(data => res.json(data));
}

apiRouter
  .get('/formulas_materiaprima', getForMatPrim)
  .get('/materiasprimasporproveedor', getMatPrimxProv)
  .get('/formulas', getAllFormulas)
  .get('/materiasprimas', getAllMatPrim)
  .get('/proveedores', getAllProve)

module.exports = apiRouter;
