const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: true}));

const env = process.env.ENV || 'local';
const dbUrl = process.env.MONGO_DB || db.url;
const dbName = process.env.DB_NAME || 'Assignment';

console.log('connecting to ' + dbUrl + ' and db ' + dbName);
MongoClient.connect(dbUrl, (err, database) => {
    if (err) return console.log(err);

    const database1 = database.db(dbName);
    require('./app/routes')(app, database1);    
    app.listen(port, () => {
        console.log('We are Live on '+ port);
    });
});