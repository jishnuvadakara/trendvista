const express=require('express')
const router=express.Router()
const adminhelper=require('../controller/admin-helper')
const admincontroller = require('../controller/admincontroller')
const middleman=require('../middlewares/session')
const catagorycontroller=require('../controller/catagorycontroller')
const productcontroller=require('../controller/productcontroller')
const Upload=require('../middlewares/multer')


//--------Login----------------------------------------------------------------------------------------------------------------------------
router.get('/',adminhelper.getadminlog)
router.post('/adminlogin',adminhelper.postadminlog)
// router.get('/adminDashboard',adminhelper.postadminlog)

//***********************Controlling***********************************************************************************
//---------------------------------------------------------Customers----------------------------------------------------------
router.get('/userlist',middleman.verifyAdmin,admincontroller.getCustomer)
router.get('/updateuser/:id/:status',middleman.verifyAdmin,admincontroller.updateUser)
//---Search---
router.post('/search',admincontroller.SearchUser)

//----------------Catagory-----------------------------------------
router.get('/catagory',middleman.verifyAdmin,admincontroller.getCatagory)
//--------ADD--
router.get('/addcatagory',middleman.verifyAdmin,catagorycontroller.getaddcatagory)
router.post('/addcatagory',middleman.verifyAdmin,catagorycontroller.postaddcatagory)
//---Edit--------
router.get('/editcatagory/:id',middleman.verifyAdmin,catagorycontroller.getEditcatagory)
router.post('/editcatagory',middleman.verifyAdmin,catagorycontroller.postEditcatagory)
router.get('/catagory/:id/:name',middleman.verifyAdmin,catagorycontroller.deleteCatagory)


//------------------------------BRAND----------------------------------------------------------------
router.get('/addbrand',middleman.verifyAdmin,catagorycontroller.getAddBrand)
router.post('/addbrand',middleman.verifyAdmin,catagorycontroller.postAddBrand)
router.get('/editbrand/:id',middleman.verifyAdmin,catagorycontroller.geteditbrand)
router.post('/editbrand',middleman.verifyAdmin,catagorycontroller.postEditbrand)
router.get('/deletbrand/:id/:name',middleman.verifyAdmin,catagorycontroller.Deletebrand)


//--------------------------------Product----------------------------------------------
const Fields=[
    {name:"images1",maxCount:1},
    {name:"images2",maxCount:1},
    {name:"images3",maxCount:1},
    {name:"images4",maxCount:1},
]

router.get('/product',middleman.verifyAdmin,admincontroller.getProduct)
//----ADDP--
router.get('/addproducts',middleman.verifyAdmin,productcontroller.getAddproduct)
router.post('/addproducts',Upload.fields(Fields),productcontroller.postAddproduct)
//--BlockP
router.get('/updateProduct/:id/:status',middleman.verifyAdmin,productcontroller.Updateproduct)
//--DELETEP--
router.get('/deleteProduct/:id/:productName',middleman.verifyAdmin,productcontroller.Deleteproduct)
//--Edit--
router.get('/editproduct/:id',middleman.verifyAdmin,productcontroller.getEditproduct)
router.post('/editproduct/:id',Upload.any(),productcontroller.postEditproduct)
router.get('/DeleteImages/:imgname/:id',productcontroller.DeleteImages)














//----------ADMIN LOGOUT------------------------------------------------------
router.get('/signout',adminhelper.addlogout)
module.exports= router