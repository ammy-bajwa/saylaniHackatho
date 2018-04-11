const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/parkingSystemDB");

var userSchema = new mongoose.Schema({
    fullName: { type: String, min: 6, max: 25 },
    email: { type: String, unique: true },
    password: String,
    bookings: Object,
});
var parkingSchema = new mongoose.Schema({
   chiniot:{type:Array,maxlength:5},
   bwana:{type:Array,maxlength:5},
   jhang:{type:Array,maxlength:5}
});
var orderSchema = new mongoose.Schema({
    duration: String,
    date: String
});

var Order = mongoose.model('orders', orderSchema);
var Parking = mongoose.model('parking', parkingSchema);
var User = mongoose.model('users', userSchema);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/orderSpot', (req, res) => {
    console.log(req.body);
    var newOrder = new Order(
        {
            duration: req.body.parkingDuration,
            date: req.body.parkingDate
        }
    );
    newOrder.save();
    res.end();
})

app.post('/signIn', (req, res) => {
    // console.log(req.body);
    User.findOne({ email: req.body.loginUserEmail, password: req.body.loginUserPassword },
        function (err, user) {
            if (err) return handleError(err);
            res.status(200).json(user);
        });
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    var newUser = new User(
        {
            fullName: req.body.userFullName,
            email: req.body.userEmail,
            password: req.body.userPassword
        }
    );
    newUser.save(function (err) {
        if (err) throw err;
        // res.json(newUser);
        // saved!
    });
    res.end();
})

app.listen(8080, () => {
    console.log('server is running at port 8080');
});