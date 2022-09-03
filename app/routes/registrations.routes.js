const express = require('express');
const { body, validationResult } = require('express-validator');

// Creacion de constantes de llamados (peticiones HTTP)
const {
    getAllRegistration,
    createRegistration,
    updateRegistration,
    cancelRegistration,
} = require('../controllers/registrations.controller');

// definimos constante de tipo con los verbos
const registrationRouter = express.Router();

// invocacion de consulta
registrationRouter.get('/', getAllRegistration);

// invocacion de insercion
registrationRouter.post('/entry/:id', createRegistration);

// invocacion de actualizacion
registrationRouter.patch('/exit/:id', updateRegistration);

registrationRouter.patch('/cancell/:id', cancelRegistration);

// exportamos recursos
module.exports = { registrationRouter };
