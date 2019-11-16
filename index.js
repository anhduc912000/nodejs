const express = require('express'),
        bodyParser = require('body-parser'),

        app = express(),
        port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = require('./api/routers/todoListRouter');
router(app);

app.use(function(req, res){
    res.status(404).send({ url: req.originalUrl + 'not found'})
});

app.listen(port, function(req, res){
    console.log(' todo List Restful Api server started on' +port)
})