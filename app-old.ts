import { createServer } from 'http';

interface Persona {
    id: number,
    name: string
}

createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const persona:Persona = {
        id: 1,
        name: 'Hector Orlando Guavita Rojas'
    }
    res.write( JSON.stringify(persona));
    res.end();
})
    .listen(8080);

console.log('Escuchando el puerto: ', 8080);

