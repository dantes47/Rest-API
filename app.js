const express = require('express');
const path = require('path');
const app = express();
const {v4} = require('uuid');

let CONTACTS = [
    {id: v4(), name: 'Danny', value: '+00-234-345-23', marked: false}
]

app.use(express.json())

// GET
app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1500)
});

// POST
app.post('/api/contacts', (req, res) => {
    const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

// DELETE
app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Contact was deleted..'})
})

// PUT
app.put('/api/contacts/:id', (req, res) => {
    const indx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[indx] = req.body
    res.json(CONTACTS[indx])
})

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'));
});

app.listen(3000, () => console.log('Server is running on port 3000..'));