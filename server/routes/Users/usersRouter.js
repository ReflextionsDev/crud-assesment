var express = require('express');
var router = express.Router();
const { createUserDB, getUserDB, updateUserDB, deleteUserDB } = require('./controller/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-user', createUserDB)
router.get('/get-user/:id', getUserDB)
router.put('/update-user', updateUserDB)
router.delete('/delete-user/:id', deleteUserDB)

module.exports = router;