const Router = require('express').Router;
const FormMatPrim = require('../models/FormMatPrim.js');
const Formulas = require('../models/Formulas.js');
const MateriasPrimas = require('../models/MateriasPrimas.js');
const Proveedores = require('../models/Proveedores.js');
const ProdAseProf = require('../models/ProdAsesoresProfesionales.js');
const ProdGreffex = require('../models/ProdGreffex.js');
const ProdGpoMerk = require('../models/ProdGrupoMerk.js');
const ProdProdPracticos = require('../models/ProdProductosPracticos.js');
const ProdServEmpre = require('../models/ProdServiciosEmpresariales')

const apiRouter = Router();

function getForMatPrim(req, res) {
   FormMatPrim

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
    .eager('formulas_matprim')
    .then(data => res.json(data));
}

function getAllProve(req, res){
  Proveedores

  .query()
  .then(data => res.json(data));
}

function getProdAseProf(req, res){
  ProdAseProf

  .query()
  .then(data => res.json(data));
}

function getProdGreffex(req, res){
  ProdGreffex

  .query()
  .then(data => res.json(data));
}

function getProdGrupMerk(req, res){
  ProdGpoMerk

  .query()
  .then(data => res.json(data));
}

function getProdProdPract(req, res){
  ProdProdPracticos

  .query()
  .then(data => res.json(data));
}

function getProdServEmp(req, res){
  ProdServEmpre

  .query()
  .then(data => res.json(data));
}

apiRouter
  .get('/formulas_materiaprima', getForMatPrim)
  .get('/formulas', getAllFormulas)
  .get('/materiasprimas', getAllMatPrim)
  .get('/proveedores', getAllProve)
  .get('/asesoresprofesionales', getProdAseProf)
  .get('/greffex', getProdGreffex)
  .get('/grupomerk', getProdGrupMerk)
  .get('/productospracticos', getProdProdPract)
  .get('/serviciosempresariales', getProdServEmp);

module.exports = apiRouter;
