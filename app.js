const express = require('express');
const path = require('path');
const app = express();

const CONTACTS = [
    {id: 1, name: 'Danny', value: '+00-234-345-23', marked: false}
]

// GET
app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1500)
});

// POST
app.post('/api/contacts', (req, res) => {

})

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.listen(3000, () => console.log('Server is running on port 3000..'));