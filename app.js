const express = require('express');
const path = require('path');
const app = express();

const CONTACTS = [
    {id: 1, name: 'Danny', value: '+00-234-345-23', marked: false}
]

app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
});

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.listen(3000, () => console.log('Server is running on port 3000..'));