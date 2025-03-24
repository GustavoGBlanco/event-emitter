# Node Event Emitter Project

Este proyecto es una aplicación Node.js que utiliza el módulo `EventEmitter` para implementar un sistema de eventos personalizado. La arquitectura modular permite emitir y escuchar eventos de manera desacoplada, ideal para flujos asincrónicos y manejo flexible de lógica de negocio. La aplicación puede ejecutarse tanto con Docker como sin Docker, ofreciendo flexibilidad para diferentes entornos de desarrollo.

---

## ¿Qué es EventEmitter en Node.js?

Node.js proporciona un módulo central llamado `events` que permite implementar el **patrón Observer**. Este patrón se utiliza para manejar eventos de forma asincrónica y desacoplada, haciendo que tu aplicación sea más flexible y modular.

La clase `EventEmitter` es la piedra angular para emitir y escuchar eventos personalizados en Node.js.

---

## ¿Por qué usar EventEmitter?

- Desacopla el flujo de eventos de la lógica de negocios.
- Facilita la escritura de código más limpio y mantenible.
- Ideal para manejar múltiples acciones que ocurren en diferentes momentos (logs, notificaciones, respuestas en cascada, etc).

---

## Estructura del Proyecto

```
node-event-emitter-project/
├── src/
│   ├── core/
│   │   └── eventBus.js          # Instancia central del EventEmitter
│   ├── events/
│   │   └── userEvents.js        # Definición y emisión de eventos
│   ├── listeners/
│   │   └── userListeners.js     # Suscripción a eventos y lógica de respuesta
│   ├── services/
│   │   └── userService.js       # Lógica de negocio que dispara eventos
│   └── index.js                 # Punto de entrada de la app
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## Proyecto Base Funcional

### 1. `core/eventBus.js`
Instancia única compartida del `EventEmitter` (patrón Singleton).

```js
// src/core/eventBus.js
const EventEmitter = require('events');
const eventBus = new EventEmitter();

module.exports = eventBus;
```

---

### 2. `events/userEvents.js`
Centraliza la emisión de eventos relacionados al usuario.

```js
// src/events/userEvents.js
const eventBus = require('../core/eventBus');

const emitUserLoggedIn = (user) => {
  eventBus.emit('user:loggedIn', user);
};

module.exports = {
  emitUserLoggedIn
};
```

---

### 3. `listeners/userListeners.js`
Escucha y reacciona a los eventos de usuario.

```js
// src/listeners/userListeners.js
const eventBus = require('../core/eventBus');

// Listener para cuando un usuario inicia sesión
function registerUserListeners() {
  eventBus.on('user:loggedIn', (user) => {
    console.log(`✅ Usuario logueado: ${user.name} a las ${user.time}`);
  });
}

module.exports = {
  registerUserListeners
};
```

---

### 4. `services/userService.js`
Contiene la lógica de negocio. Simula el inicio de sesión de un usuario.

```js
// src/services/userService.js
const { emitUserLoggedIn } = require('../events/userEvents');

function loginUser(name) {
  const user = {
    name,
    time: new Date().toISOString()
  };

  // Emitimos el evento de que el usuario inició sesión
  emitUserLoggedIn(user);
}

module.exports = {
  loginUser
};
```

---

### 5. `index.js`
Punto de entrada. Registra los listeners y ejecuta la acción.

```js
// src/index.js
const { registerUserListeners } = require('./listeners/userListeners');
const { loginUser } = require('./services/userService');

// Inicializa listeners
registerUserListeners();

// Simula login
loginUser('Gustavo');
```

---

## Resultado Esperado

Al ejecutar:
```bash
node src/index.js
```

Verás en consola:
```
✅ Usuario logueado: Gustavo a las 2025-03-24T15:00:00.000Z
```

---

## Patrones de Arquitectura y Patrones de Diseño Utilizados

### Arquitectura

- **Modularización**: Separación clara por responsabilidad (core, events, listeners, services).
- **Layered Architecture**: Separación entre capas de lógica, eventos y listeners.

### Diseño

- **Observer**: `EventEmitter` implementa el patrón Observer.
- **Singleton**: `eventBus.js` es una instancia única reutilizada por toda la aplicación.

---

## Configuración del Proyecto

1. Clonar el repositorio:
```bash
git clone <url-del-repo>
cd node-event-emitter-project
```
2. Instalar dependencias:
```bash
npm install
```

---

## Uso Sin Docker

```bash
node src/index.js
```

---

## Uso Con Docker

1. Construir imagen:
```bash
docker build -t node-event-emitter .
```
2. Ejecutar:
```bash
docker-compose up
```

---

## Extensión Recomendada

- Agregar múltiples eventos (`user:registered`, `user:deleted`, etc.).
- Listeners asincrónicos (como logs o integraciones externas).
- Manejadores de errores globales.

---

## Contacto

Gustavo Blanco  
[GitHub](https://github.com/GustavoGBlanco)  
[Email](mailto:gustavogblanco@gmail.com)
