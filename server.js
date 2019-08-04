const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE, { useNewUrlParser: true })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// ============= Models==============

const { User } = require("./models/user");

// Event Model
const { Event } = require("./models/event");
// Event Model


// ===========Middleware=============
const { auth } = require("./middleware/auth");
const { admin } = require("./middleware/admin");

//==============USERS====================

app.get("/api/users/auth", auth, (req, res) => {
  res.status(200).json({

    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role

  })

})

app.post('/api/users/register', (req, res) => {

  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      doc
    });
  });
});

app.post("/api/users/login", (req, res) => {
  // find email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found"
      });

    // check password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      // generate a token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true
          });
      });
    });
  });
});

app.get("/api/user/logout", auth, (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    
    if (err) return res.json({ sucess: false, err });
    return res.status(200).send({
      success: true
      
    });
    
  });
});
// =====================Events=========================

app.post("/api/users/event", auth, function (req, res) {
  console.log(req.user);

  Event.create(req.body)
    .then(function (dbEvent) {

      return User.findOneAndUpdate({ _id: req.user._id }, { $push: { events: dbEvent._id } }, { new: true });
    })
    .then(function (dbEvent) {

      res.json(dbEvent);
    })
    .catch(function (err) {

      res.json(err);
    });
});

// event get
app.get('/api/users/events/', auth, function (req, res) {
  User.find({ _id: req.user._id })
    .then(dbUser => {

      Event.find({ _id: { $in: dbUser[0].events } })
        .sort({ date: 1 })
        .then(dbEvent => {
         
          res.json(dbEvent);
        })

    })
    .catch(err => res.status(422).json(err));
});

// event Delete
app.get('/api/users/events/:id', auth, function (req, res) {

  
  Event.findById({ _id: req.params.id })
   .then(dbModel => {dbModel.remove()})
    .then(dbModel => res.json(dbModel))
    
   .catch(err => res.status(422).json(err));

});


// app.get('/api/events/page/:id', function (req, res) {

  
//   Event.findOne({ _id: req.params._id })
//     .then(dbModel => res.json(dbModel))
//    .catch(err => res.status(422).json(err));

// });
// ==========================Profile==========================

// post

// get


// ========================Tickets=============================

// Post

//  Get






const port = process.env.PORT || 3002;

// Start the API server
app.listen(port, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
