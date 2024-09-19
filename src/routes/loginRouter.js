const { Router } = require('express');
const router = Router();
 
const { loginPost } = require("../controller/loginController");
 
router.post('/store/login', loginPost);
 
module.exports = router;