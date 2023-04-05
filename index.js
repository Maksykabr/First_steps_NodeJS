const express = require('express');
// const ejs = require('ejs');


const app = express();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.render('index')
    console.log('Succes conection')
});


app.get('/about', (req, res) => {
    res.render('about')
});


app.get('/:user_name/:id', (req, res) => {
    let data = { user_name: req.params.user_name, id: req.params.id, hobbies: ['cars', 'animals', 'skiing'] };
    res.render('user', data);
    console.log('Succes conection');
});

app.get('/:username', (req, res) => {
    let data = { username: req.params.username, hobbies: ['cars', 'animals', 'skiing'] };
    res.render('user_1', data);
    console.log('Succes conection');
});

app.post('/check_user', (req, res) => {
    let username = req.body.username;
    if (username == '')
        return res.redirect('/')
    else
        return res.redirect('/' + username)
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
});
