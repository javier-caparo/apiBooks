const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`HTTP Server listening at http://localhost:${port} ...`);
})

app.get('/', (req, res) => {
    res.send('working...');
})

const users = [
    { id: 1, name: 'test', email: 'test@test' , password:'12345' },
    { id: 2, name: 'test2', email: 'test2@test' , password:'23456' },
    { id: 3, name: 'test3', email: 'test3@test' , password:'34567' }
]
let id = 4;

app.get('/api/Users', (req, res) => {
    res.status(200).send(users);    
})

app.get('/api/Users/:id', (req, res) => {
    let user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('user not found')
    res.status(200).send(user)    
})

app.post('/api/Users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    users.push(user);
    res.status(200).send(user);
   }    
);

app.post('/api/Users/login', (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
    };
    users.find()
    res.status(200).send('User logged');
    next();
})


const books = [
    {   titulo: 'Cracking the Conding Interview',
        idioma: 'English',
        descripcion: 'Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best.',
        portada: '',
        precio: '13.50',
        link_amazon: 'https://www.amazon.com/dp/0984782850/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=PWAE41VNT9KP8W1WEZJ5&pf_rd_t=101&pf_rd_p=17f561b1-c457-4304-a09b-6a2ce880abe5&pf_rd_i=13270229011',
        autor: 'Gayle Laakmann McDowell ',
        oferta: '0',
        id: 1,
        index: ''},
        {   titulo: 'Python for Data Science For Dummies',
        idioma: 'English',
        descripcion: 'The fast and easy way to learn Python programming and statistics',
        portada: '',
        precio: '19.00',
        link_amazon: 'https://www.amazon.com/dp/0984782850/ref=s9_acsd_hps_bw_c2_x_1_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=PWAE41VNT9KP8W1WEZJ5&pf_rd_t=101&pf_rd_p=17f561b1-c457-4304-a09b-6a2ce880abe5&pf_rd_i=13270229011',
        autor: 'John Paul Mueller  ',
        oferta: '0',
        id: 2,
        index: ''} 
]

app.get('/api/books', (req, res) => {
    res.status(200).send(books);    
})

app.get('/api/books/:id', (req, res) => {
    let book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('book not found')
    res.status(200).send(book)      
})