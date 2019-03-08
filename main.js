const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('./middlewares/jwt');
const cors = require('cors');

// Database
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aston', {
    useNewUrlParser: true
});

// Application
app = express();
api = express.Router();

// App Middlewares
app.use('/api', api);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));

api.use(cors());
api.use(bodyParser.json());
api.use(cookieParser());
api.use(jwt);

// Routing
require('./routes');

app.listen(3000);