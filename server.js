
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
const path = require("path")

const app = express();
const port = process.env.PORT || 4000;

const inventoryRoutes = require('./routes/inventory')
const userRoutes = require('./routes/user')
  
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors()); 
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

if (process.env.NODE_ENV === 'production') { 
    // Serve any static files
    app.use(express.static(path.join(__dirname,'client/build/')));

    app.get(['/','/list','/update','/create','/remove','/signup','/signin'], function(req, res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.sendFile(path.join(__dirname, 'client/build','index.html'));
    });
}

// Connection URL
const uri = process.env.MONGODB_URI

// Initialize Connection Once and Create Connection Pool
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    function(err) {
        if (err) throw err;
        console.log('Database Connected');
    })

// Routes that should handle requests
app.use('/inv', inventoryRoutes);
app.use('/user', userRoutes);


// Catch errors that go beyond the above routes
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// Passes direct errors
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(port, function() {
    console.log("Server is running on Port: " + port)
})