const Router = require('express').Router;
const FormMatPrim = require('../models/FormMatPrim.js');
const Formulas = require('../models/Formulas.js');
const MateriasPrimas = require('../models/MateriasPrimas.js');
const Proveedores = require('../models/Proveedores.js');
const MatPrimxProv = require('../models/MatPrimxProv.js');

const apiRouter = Router();

//RELACIONES

//Materias primas por formula

function getForMatPrim(req, res) {     //Consulta
   FormMatPrim

    .query()
    .then(data => res.json(data));
}

function getFormMatPrimById(req, res) {     //Consulta individual
  FormMatPrim

    .query()
    .findById(req.params.id)  //busqueda con parámetro dinámico
    .then(FormMatPrim => {
      res.json(FormMatPrim).status(200);
    })
    .catch(error => {
      res.send(error).status(500);
  });
}

function createForMatPrim (req, res) {     //Crear
  FormMatPrim

    .query()
    .insert(req.body)            //Genera nueva relación formula x materia prima
    .then(newFormatprim => {
      return json (newFormatprim).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);

    });
  }

function updateFormMatPrim(req, res) {     //Actualizar
  FormMatPrim

    .query()
    .updateAndFetchById(req.params.id, req.body)
    .then(formMatPrimUpdated => {
      return res.json(formMatPrimUpdated).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);
    })
  }

function deleteFormMatPrimById(req, res) {     //Eliminar
  FormMatPrim

  .query()
  .deleteById(req.params.id)
  .then(formMatPrimDeleted => {
    return res.json({
      rowsDeleted: formMatPrimDeleted
      });
    })
    .catch(error => {
      return res.send(error).status(500);
    })
  }

//Materias primas por proveedor

function getMatPrimxProv(req, res){  //Consultar
   MatPrimxProv

  .query()
  .then(data => res.json(data));
}

function getMatPrimxProvById(req, res) {     //Consulta individual
  MatPrimxProv

    .query()
    .findById(req.params.id)  //busqueda con parámetro dinámico
    .then(MatPrimxProv => {
      res.json(MatPrimxProv).status(200);
    })
    .catch(error => {
      res.send(error).status(500);
  });
}

function createMatPrimxProv (req, res) {     //Crear
  MatPrimxProv

    .query()
    .insert(req.body)            //Genera nueva relación materia prima x proveedor
    .then(newMatprimxprov => {
      return json (newMatprimxprov).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);

    });
  }

function updateMatPrimxProv(req, res) {     //Actualizar
    MatPrimxProv

      .query()
      .updateAndFetchById(req.params.id, req.body)
      .then(MatPrimxProvUpdated => {
        return res.json(MatPrimxProvUpdated).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      })
    }

function deleteMatPrimxProv(req, res) {     //Eliminar
  MatPrimxProv

  .query()
  .deleteById(req.params.id)
  .then(MatPrimxProvDeleted => {
    return res.json({
      rowsDeleted: MatPrimxProvDeleted
      });
    })
    .catch(error => {
      return res.send(error).status(500);
    })
  }

  function deleteProvAndRelatedMatPrimById (req, res) {
    // Get User to delete from DB.
    Proveedores

      .query()
      .where('id', req.params.id)
      .first()
      .returning('*')
      .then(proveedoresToDelete => {
        // Delete all tweets from this User.
        return proveedoresToDelete
          .$relatedQuery('matprimxprov') // eager name declared in the relation
          .delete()
          .where('proveedoresId', proveedoresToDelete.id)
          .returning('*')
          .then(matprimxprovDeleted => {
            return proveedoresToDelete
          })
          .catch(error => {
            return res.send(error).status(500);
          });
      })
      .then(proveedores => {
        return Proveedores
          .query()
          .deleteById(proveedores.id)
          .then(() => {
            return proveedores;
          })
      })
      .then(proveedoresDeleted => {
        res.json(proveedoresDeleted).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      });
  }

//FORMULAS

function getAllFormulas(req, res) {     //Consultar
   Formulas

    .query()
    .eager('formulas_matprim')
    .then(data => res.json(data));
}

function getFormulaById(req, res) {     //Consulta individual
  Formulas
    .query()
    .findById(req.params.id)  //busqueda con parámetro dinámico
    .then(Formulas => {
      res.json(Formulas).status(200);
    })
    .catch(error => {
      res.send(error).status(500);
  });
}

function createFormula(req, res) {     //Crear
  Formulas

    .query()
    .insert(req.body)            //Genera nueva formula
    .then(newFormula => {
      return json (newFormula).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);

    });
  }

function updateFormula(req, res) {     //Actualizar
    Formulas

      .query()
      .updateAndFetchById(req.params.id, req.body)
      .then(formulaUpdated => {
        return res.json(formulaUpdated).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      })
    }

function deleteFormulaById(req, res) {     //Eliminar
  Formulas

  .query()
  .deleteById(req.params.id)
  .then(formulaDeleted => {
    return res.json({
      rowsDeleted: formulaDeleted
      });
    })
    .catch(error => {
      return res.send(error).status(500);
    })
  }

//Materiaprima

function getAllMatPrim(req, res) {     //Consulta
   MateriasPrimas

    .query()
    // .eager('formulas_matprim')
    .eager('matprimxprov')
    .then(data => res.json(data));
}

function getMatPrimById(req, res) {     //Consulta individual
  MateriasPrimas
    .query()
    .findById(req.params.id)  //busqueda con parámetro dinámico
    .then(MatPrim => {
      res.json(MatPrim).status(200);
    })
    .catch(error => {
      res.send(error).status(500);
  });
}

function createMatPrim(req, res) {     //Crear
  MateriasPrimas

    .query()
    .insert(req.body)            //Genera nueva Materia Prima
    .then(newMatPrim => {
      return json (newMatPrim).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);

    });
  }

function updateMatPrimById(req, res) {     //Actualizar
    MateriasPrimas

      .query()
      .updateAndFetchById(req.params.id, req.body)
      .then(matprimUpdated => {
        return res.json(matprimUpdated).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      })
    }

function deleteMatPrimById(req, res) {     //Eliminar
  MateriasPrimas

    .query()
    .deleteById(req.params.id)
    .then(matprimDeleted => {
      return res.json({
        rowsDeleted: matprimDeleted
        });
      })
      .catch(error => {
        return res.send(error).status(500);
      })
    }

//Proveedores

function getAllProv(req, res){     //Consulta
  Proveedores

  .query()
  .eager('matprimxprov')
  .then(data => res.json(data));
}

function getProvById(req, res) {     //Consulta individual
  Proveedores

    .query()
    .findById(req.params.id)  //busqueda con parámetro dinámico
    .then(Proveedores => {
      res.json(Proveedores).status(200);
    })
    .catch(error => {
      res.send(error).status(500);
  });
}

function createProv(req, res) {     //Crear
  Proveedores

    .query()
    .insert(req.body)            //Genera nuevo proveedor
    .then(newProv => {
      return json (newProv).status(200);
    })
    .catch(error => {
      return res.send(error).status(500);

    });
  }

function updateProvById(req, res) {     //Actualizar
    Proveedores

      .query()
      .updateAndFetchById(req.params.id, req.body)
      .then(provUpdated => {
        return res.json(provUpdated).status(200);
      })
      .catch(error => {
        return res.send(error).status(500);
      })
    }

function deleteProvById(req, res) {     //Eliminar
    Proveedores

      .query()
      .deleteById(req.params.id)
      .then(provDeleted => {
        return res.json({
          rowsDeleted: provDeleted
          });
        })
        .catch(error => {
          return res.send(error).status(500);
        })
      }


//Endpoint Materiasprimas

apiRouter
  .get('/materiasprimas', getAllMatPrim)
  .get('/materiasprimas/:id', getMatPrimById) //Con parámetro dinámico
  .post('/materiasprimas', createMatPrim)      //Crea nueva materia prima
  .put('/materiasprimas/:id', updateMatPrimById)  //Me actualiza una materia prima
  .delete('/materiasprimas/:id', deleteMatPrimById);  //Elimina materia prima

//Endpoint Formulas
apiRouter
  .get('/formulas', getAllFormulas)
  .get('/formulas/:id', getFormulaById) //Con parámetro dinámico
  .post('/formulas', createFormula)      //Crea nueva formula
  .put('/formulas/:id', updateFormula)  //Me actualiza una formula
  .delete('/formulas/:id', deleteFormulaById)  //Elimina formula

//Endpoint proveedor
  .get('/proveedores', getAllProv)
  .get('/proveedores/:id', getProvById) //Con parámetro dinámico
  .post('/proveedores', createProv)      //Crea nuevo proveedor
  .put('/proveedores/:id', updateProvById)  //Me actualiza un proveedor
  .delete('/proveedores/:id', deleteProvById)  //Elimina proveedor
  .delete('/proveedores/:id', deleteProvAndRelatedMatPrimById);  //Elimina proveedor y materias primas relacionadas

//ENDPONT TABLA RELACIONES

//Materia prima por formula
  .get('/formulas_materiaprima', getForMatPrim)
  .get('/formulas_materiaprima/:id', getFormMatPrimById) //Con parámetro dinámico
  .post('/formulas_materiaprima', createForMatPrim)      //Crea nuevarelación formula x materia prima
  .put('/formulas_materiaprima/:id', updateFormMatPrim)  //Me actualiza una relación form materia prima
  .delete('/formulas_materiaprima/:id', deleteFormMatPrimById)  //Elimina relación formula materia prima

//Materia prima por proveedor
  .get('/materiasprimasporproveedor', getMatPrimxProv)
  .get('/materiasprimasporproveedor/:id', getMatPrimxProvById) //Con parámetro dinámico
  .post('/materiasprimasporproveedor', createMatPrimxProv)      //Crea nuevarelación materia prima x proveedor
  .put('/materiasprimasporproveedor/:id', updateMatPrimxProv)  //Me actualiza una relación materia prima x proveedor
  .delete('/materiasprimasporproveedor/:id', deleteMatPrimxProv)  //Elimina relación materia prima por proveedor


module.exports = apiRouter;
