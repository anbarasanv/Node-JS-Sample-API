import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    firstName:{
        type: String,
        required: 'Enter the first name'
    },
    lastName:{
        type: String,
        required: 'Enter the last name'
    },
    company:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: Number,
    },
    createdDate:{
        type: Date,
        default: Date.now()
    }

});