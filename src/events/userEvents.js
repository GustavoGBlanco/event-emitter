// src/events/userEvents.js
// Este módulo centraliza la lógica de emisión de eventos relacionados a usuarios.
const eventBus = require('../core/eventBus');

// Emitimos un evento indicando que un usuario ha iniciado sesión
const emitUserLoggedIn = (user) => {
  eventBus.emit('user:loggedIn', user);
};

module.exports = {
  emitUserLoggedIn
};
