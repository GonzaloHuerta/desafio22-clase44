import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBUSER = process.env.DB_USER;
const DBPASS = process.env.DB_PASS;
const DBNAME = process.env.DB_NAME;

export async function connectDb(){
    try {
        await mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}@cluster0.o7pgm.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la db con éxito")
    } catch (error) {
        console.log(error)
    }
}