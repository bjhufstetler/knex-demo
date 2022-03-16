const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')["development"]);

app.get('/', (req, res) => {
    res.send('Application up and running');
});

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(petNames)
        })
})

app.listen(port, () => {
    console.log('Knex app running!');
});

//SELECT p.name, t.name AS type, f.name AS food FROM pet p INNER JOIN pet_type t ON p.pet_type_id = t.id INNER JOIN pet_food_type f ON p.pet_food_type_id = f.id; 