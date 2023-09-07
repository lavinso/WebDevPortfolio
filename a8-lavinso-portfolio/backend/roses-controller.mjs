// Controllers for the Rose Collection

import 'dotenv/config';
import express from 'express';
import * as roses from './roses-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/roses', (req,res) => { 
    roses.createRose(
        req.body.name, 
        req.body.color,
        req.body.fragrance, 
        req.body.breeder,
        req.body.type,
        req.body.year,
        req.body.date
        )
        .then(rose => {
            res.status(201).json(rose);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Invalid submission. Please check that name, color, fragrance, breeder, type, and year of introduction are included in submission and that the rose is not already in the database.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/roses', (req, res) => {
    roses.retrieveRoses()
        .then(rose => { 
            if (rose !== null) {
                res.json(rose);
            } else {
                res.status(404).json({ Error: 'Invalid request. A rose by this name is not in the database. Please check for typos or alternative names' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve the rose at this time. Please check your network connection' });
        });
});


// RETRIEVE by ID controller
app.get('/roses/:_id', (req, res) => {
    roses.retrieveRoseByID(req.params._id)
    .then(rose => { 
        if (rose !== null) {
            res.json(rose);
        } else {
            res.status(404).json({ Error: 'The rose with the provided ID is not found in the database, please check the ID entered for typos.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve the rose by ID at this time. Please check your network connection.' });
    });

});


// UPDATE controller ************************************
app.put('/roses/:_id', (req, res) => {
    roses.updateRose(
        req.params._id, 
        req.body.name, 
        req.body.color,
        req.body.fragrance, 
        req.body.breeder,
        req.body.type,
        req.body.year,
        req.body.date
    )
    .then(rose => {
        res.json(rose);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Unable to update the file. Please check that the rose is in the database.' });
    });
});


// DELETE Controller ******************************
app.delete('/roses/:_id', (req, res) => {
    roses.deleteRoseById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Rose successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Unable to delete: rose not found in the database.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Delete not successful. Please check your connection and try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});