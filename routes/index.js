const router = require('express').Router(); //requires express's router 
const apiRoutes = require('./api'); //imports /api route

router.use('/api', apiRoutes); 

router.use((req, res) => {  
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;