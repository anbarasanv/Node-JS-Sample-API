import mongoose from 'mongoose';
import {contactSchema} from '../models/crmModel';

const Contact = mongoose.model('Contact', contactSchema);

export const addNewContact = (req, res) =>{
    let newContact = Contact(req.body);

    newContact.save((err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContact = (req, res)=>{
    Contact.find({}, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    });
}

export const getContactWithId = (req, res) =>{
    Contact.findById(req.params.contactId, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact)
    });
}

export const updateContact = (req, res) =>{
    Contact.findOneAndUpdate({_id: req.params.contactId},
    req.body, {new:true, useFindAndModify:false}, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) =>{
    Contact.remove({_id:req.params.contactId}, (err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json({message:'successfully contact has been deleted!'});
    });
}