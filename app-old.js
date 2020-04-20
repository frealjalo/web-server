const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    let salida = {
        name: 'Freddy Jaramillo',
        estado: 'Casado',
        hijos: 2,
        edad: 41,
        pais: 'España'
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');