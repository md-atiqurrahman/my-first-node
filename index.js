const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'putin', email: 'putin@gmail.com', status: 'President' },
    { id: 2, name: 'jo byden', email: 'jo byden@gmail.com', status: 'President' },
    { id: 3, name: 'jeleneski', email: 'jeleneski@gmail.com', status: 'President' },
    { id: 4, name: 'imran khan', email: 'imran khan@gmail.com', status: 'President' },
    { id: 5, name: 'justin trudo', email: 'justin trudo@gmail.com', status: 'President' },
    { id: 6, name: 'nodendro modi', email: 'nodendro modi@gmail.com', status: 'President' },
    { id: 7, name: 'sheikh hasina', email: 'sheikh hasina@gmail.com', status: 'President' }
]

app.get('/', (req, res) => {
    res.send('I can use node in my project for first time in my coding life')
});

app.get('/user', (req, res) => {
    res.send({ id: 1, name: 'Atiqur rahman', job: 'web-developer' })
});

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users)
    }
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'peanuts', 'orange', 'pineapple', 'guava'])
})
app.get('/users/:userId', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.userId);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log('Example app listening on port', port)
})