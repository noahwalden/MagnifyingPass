const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const User = require('../models/User')


// This is an example of middleware
// where we look at a request and process it!
router.use(function(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
});


router.use((req,res,next) => {
  if (req.session.username) {
    res.locals.loggedIn = true
    res.locals.username = req.session.username
    res.locals.user = req.session.user
  } else {
    res.locals.loggedIn = false
    res.locals.username = null
    res.locals.user = null
  }
  next()
})


router.get("/login", (req,res) => {
  res.locals.loginFailed = false
  res.render("login")
})

router.post('/login',
  async (req,res,next) => {
    try {
      const {username,passphrase} = req.body
      const hash = crypto.createHash('sha256');
      hash.update(passphrase);
      const encrypted = hash.digest('hex')
      const user = await User.findOne({username:username,passphrase:encrypted})

      if (user) {
        req.session.username = username //req.body
        req.session.user = user
        res.redirect('/')
      } else {
        req.session.username = null
        req.session.user = user
        res.locals.loginFailed = true
        res.render('login')
      }
    }catch(e){
      next(e)
    }
  })

router.post('/signup',
  async (req,res,next) =>{
    try {
      const {username,passphrase,email,firstName,lastName} = req.body
        const hash = crypto.createHash('sha256');
        hash.update(passphrase);
        const encrypted = hash.digest('hex')
        
        const user = new User(
          {username:username,
           firstName:firstName,
           lastName:lastName,
           passphrase:encrypted,
           email:email,
           updates:"updates" in req.body
          })
        
        await user.save()
        req.session.username = user.username
        req.session.user = user
        res.redirect('/')
    }catch(e){
      next(e)
    }
  })

router.get('/logout', (req,res) => {
  req.session.destroy()
  res.redirect('/');
})

module.exports = router;
