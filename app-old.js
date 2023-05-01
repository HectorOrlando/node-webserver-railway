"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
(0, http_1.createServer)((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const persona = {
        id: 1,
        name: 'Hector Orlando Guavita Rojas'
    };
    res.write(JSON.stringify(persona));
    res.end();
})
    .listen(8080);
console.log('Escuchando el puerto: ', 8080);
