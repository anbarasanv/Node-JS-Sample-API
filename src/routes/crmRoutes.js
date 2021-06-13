import {addNewContact,
        getContact,
        getContactWithId,
        updateContact,
        deleteContact} from '../controllers/crmControllers';

const routes = (app)=>{
    app.route('/contact')
        .get((req, res, next)=>{
            // Middleware
            console.log(`request from: ${req.originalUrl}`)
            console.log(`request type: ${req.method}`)
            next();
        }, getContact)

        .post(addNewContact);

    app.route('/contact/:contactId')
        .get((req, res, next)=>{
            next();
        },getContactWithId)

        .put(updateContact)

        .delete(deleteContact);
}

export default routes;