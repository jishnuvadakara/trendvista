const express=require('express');
const router=express.Router()
const Userhelper=require('../controller/controller')
const Usercontroller=require('../controller/usercontroller');
const middleman=require('../middlewares/session')
const productcntroller=require('../controller/productcontroller');
const controller = require('../controller/controller');
const usercontroller = require('../controller/usercontroller');
const AddressController=require('../controller/addressController');
const addressController = require('../controller/addressController');
// const usercontroller = require('../controller/usercontroller');

 //login

router.get('/login', middleman.userExist,Userhelper.getLogin);
router.post('/login',Userhelper.postLogin)

//signup
router.get('/signup2',middleman.userExist,Userhelper.getSignupOtp)
router.post('/signup2',Userhelper.postSignupOtp)

//resendotp
router.get('/resenOtp')


//signUp user
router.get('/getSignup',Userhelper.getSignup)
router.post('/signUp',Userhelper.postSignup)


//get page--------------------------------------------------------
router.get('/',middleman.userExist,Usercontroller.getGustpage)
router.get('/userhome',middleman.verifyUser,Usercontroller.getUserpage)
//------User home


//---------------------------------------list the product page------
router.get('/allprodcuts',middleman.verifyUser,Usercontroller.Productslist)

//-------single products---------------------
router.get('/singleproducts/:id',middleman.verifyUser,Usercontroller.ProductDetail)

//-------------------------------userprofile--------------
router.get('/userprofile',middleman.verifyUser,usercontroller.Userprofile)

//---Add----
router.post('/postaddaddress',middleman.verifyUser,AddressController.postAddress)
//---Edit---
router.post('/posteditaddress',middleman.verifyUser,addressController.EditAddress)
//---Delete-
router.get('/deleteAddress/:id',middleman.verifyUser,addressController.DeleteAdress)










//-----------------------User logout-----------------
router.get('/logout',controller.Userlogout)

module.exports=router;