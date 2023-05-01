import express from 'express';  // cargar express.
import hbs from 'hbs';          // cargar el Handlebars.
import dotenv from 'dotenv';    // cargar las variables de entorno.
dotenv.config();                // cargar las variables de entorno.

const app = express();
const port = process.env.PORT;
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware: Servir contenido estático, en este caso el public/index.html
app.use(express.static('public'));

// enviar datos del "controlador a la vista: name y title,  al home.hbs"
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Hector Orlando',
        title: 'Curso de Node'
    });
});

// app.get('/index', (req, res) => {
//     res.send(__dirname + '/public/index.html');
// });

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Hector Orlando',
        title: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Hector Orlando',
        title: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})