
const path=require('path');
const { register, getProfile, login, forgetPassword, resetPassword } = require('../controllers/authController');

const multerErrorHandler = require('../middleWare/multerErrorHandler');
const { isAuthenticateUser } = require('../middleWare/authenticate');

const router=require('express').Router();



router.route('/register').post(multerErrorHandler,register);
router.route('/login').post(login);
router.route('/getProfile').get(isAuthenticateUser,getProfile);
router.route('/password/forget').post(forgetPassword);
router.route('/password/reset/:token').post(resetPassword);

// admin routes


module.exports=router;
