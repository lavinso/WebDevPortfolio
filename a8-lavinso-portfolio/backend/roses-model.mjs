// Models for the Rose Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Unable to connect to MongoDB server.' });
    } else  {
        console.log('Connected to MongoDB.');
    }
});

// SCHEMA: Define the collection's schema.
const roseSchema = mongoose.Schema({
	name:    { type: String, required: true },
    color:    { type: String, required: true },
    fragrance:   { type: Number, required: true, min: 0, max:5 },
    breeder:    { type: String, required: true },
    type:    { type: String, required: true },
	year:     { type: Number, required: true },
    date:     {type: Date, required:true, min: '1700-01-01', default: Date.now}  
});

// Compile the model from the schema 
// by defining the collection name "roses".
const roses = mongoose.model('Rose', roseSchema);


// CREATE model *****************************************
const createRose = async (name, color, fragrance, breeder, type, year, date) => {
    const rose = new roses({ 
        name: name,  
        color: color,
        fragrance: fragrance,
        breeder: breeder,
        type: type, 
        year: year,
        date: date

    });
    return rose.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveRoses = async () => {
    const query = roses.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRoseByID = async (_id) => {
    const query = roses.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRoseById = async (_id) => {
    const result = await roses.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRose = async (_id, name, color, fragrance, breeder, type, year, date) => {
    const result = await roses.replaceOne({_id: _id }, {
        name: name, 
        color: color,
        fragrance: fragrance,
        breeder: breeder,
        type: type, 
        year: year,
        date: date
    });
    return { 
        _id: _id, 
        name: name, 
        color: color,
        fragrance: fragrance,
        breeder: breeder,
        type: type, 
        year: year, 
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createRose, retrieveRoses, retrieveRoseByID, updateRose, deleteRoseById }