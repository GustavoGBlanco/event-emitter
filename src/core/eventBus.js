// src/core/eventBus.js
// Esta es la instancia única del EventEmitter compartida por toda la aplicación.
// Nos permite emitir y escuchar eventos desde cualquier módulo.
const EventEmitter = require('events');
const eventBus = new EventEmitter();

module.exports = eventBus;
