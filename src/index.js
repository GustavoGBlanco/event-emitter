// src/index.js
// Punto de entrada de la aplicación. Aquí registramos los listeners
// y ejecutamos acciones que generen eventos.

const { registerUserListeners } = require('./listeners/userListeners');
const { loginUser } = require('./services/userService');

// Inicializamos los listeners del sistema
registerUserListeners();

// Simulamos el login de un usuario
loginUser('Gustavo');
