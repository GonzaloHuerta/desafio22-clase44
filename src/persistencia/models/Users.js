import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

export default model('users', userSchema);