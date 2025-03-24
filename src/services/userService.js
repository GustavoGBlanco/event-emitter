// src/services/userService.js
// Aquí se simula una operación de negocio, como el login de un usuario.
// Al finalizar, emitimos un evento personalizado.
const { emitUserLoggedIn } = require('../events/userEvents');

function loginUser(name) {
  const user = {
    name,
    time: new Date().toISOString()
  };

  // Emitimos el evento indicando que el usuario se ha logueado
  emitUserLoggedIn(user);
}

module.exports = {
  loginUser
};
