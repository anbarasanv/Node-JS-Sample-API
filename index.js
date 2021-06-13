import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyParse Setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Serving static files:
app.use(express.static('public'));

routes(app);

app.get('/', (req, res)=>{
    res.send(`Node express server running on the port ${PORT}`);
});

app.listen(PORT, ()=>{
    console.log(`your server is running on ${PORT}`);
});
