// require express, mongoose
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// connect to mongoose
mongoose.connect('mongodb+srv://ryanair:ryanair@cluster0.asja0.mongodb.net/neoVerify?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected to DB');
    }
);

app.use(express.json());

const plannerRoute = require('./routes/storage');  

app.use('/v1/', plannerRoute);

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});