
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// ============= Models==============

const{ User } = require('./models/user');

// ===========Middleware=============
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

//==============USERS====================

app.get('/api/users/auth',auth, (req,res)=>{
  res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      cart: req.user.cart,
      history: req.user.history

  })
})

app.post('/api/users/register',(req,res)=>{
  const user = new User(req.body);

  user.save((err,doc)=>{
       if(err) return res.json({success:false,err})
      res.status(200).json({
          success:true,
          doc
          
      })
  })
});

app.post('/api/users/login',(req,res)=>{
  // find email
  User.findOne({"email":req.body.email},(err,user)=>{
      if(!user) return res.json({loginSuccess:false,message:'Auth failed, email not found'});

      // check password
      user.comparePassword(req.body.password, (err, isMatch)=>{
          if(!isMatch) return res.json({loginSuccess:false,message:'Wrong password'});

          // generate a token
          user.generateToken((err,user)=>{
              if(err) return res.status(400).send(err);
              res.cookie('w_auth',user.token).status(200).json({
                  loginSuccess: true
              })
          })
      })
  })
})

app.get('/api/user/logout', auth,(req,res)=>{
  User.findByIdAndUpdate(
      { _id:req.user._id},
      {token: ''},
      (err,doc)=>{
          if(err) return res.json({sucess: false, err});
          return res.status(200).send({
              success: true
          })
      }
  )
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});