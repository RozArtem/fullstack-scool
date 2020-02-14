const mongoose = require('mongoose');


require('dotenv').config();


const  mongoDBUri = process.env.ATLAS_URI;

const connectDB = async () => {

    try {
        await mongoose.connect(

            mongoDBUri,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true 
                
            }
        );
                
        console.log('MongoDB is Connected...');

    } catch (err) {
        
        console.log('Ooops, something bad happened, could not connect to the database!');
        console.error(err.message);
       
        

    }
}

module.exports = connectDB;