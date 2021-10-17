/**
 * Math Routes for complex calculations such as mean, median, mode, etc
 */

 const express = require('express');
 const router = express.Router();
 const mathController = require('../controllers/mathController')
 
 router.post('/mean', mathController.mean);
 router.post('/median', mathController.median);
 router.post('/mode', mathController.mode);
 
 module.exports = router;
 
 