const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    /* let salida = {
        name: 'Freddy Jaramillo',
        estado: 'Casado',
        hijos: 2,
        edad: 41,
        pais: 'España'
    };
    res.send(salida); */
    let variables = {
        nombre: 'freDdy jaramILlo'
    };
    res.render('home', variables);
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});