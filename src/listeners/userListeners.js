// src/listeners/userListeners.js
// Este módulo escucha los eventos del sistema y ejecuta acciones asociadas.
// Ideal para logging, notificaciones, auditoría, etc.
const eventBus = require('../core/eventBus');

function registerUserListeners() {
  // Cuando se detecta el evento 'user:loggedIn', ejecutamos esta función
  eventBus.on('user:loggedIn', (user) => {
    console.log(`✅ Usuario logueado: ${user.name} a las ${user.time}`);
  });
}

module.exports = {
  registerUserListeners
};
