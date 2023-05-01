"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // cargar express.
const hbs_1 = __importDefault(require("hbs")); // cargar el Handlebars.
const dotenv_1 = __importDefault(require("dotenv")); // cargar las variables de entorno.
dotenv_1.default.config(); // cargar las variables de entorno.
const app = (0, express_1.default)();
const port = process.env.PORT;
// Handlebars
app.set('view engine', 'hbs');
hbs_1.default.registerPartials(__dirname + '/views/partials');
// Middleware: Servir contenido estático, en este caso el public/index.html
app.use(express_1.default.static('public'));
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
    console.log(`Example app listening on port ${port}`);
});
