const User=require('../models/userModel')
const products=require('../models/productModel')
const catagory=require('../models/catagoryModel')
const Brand=require('../models/brandModel')
const Address=require('../models/addressModel')

module.exports={
    getGustpage:async (req,res)=>{
        try{
           
            const data= await products.find({catagory:'Flagship Mobiles',status:'active'})
            res.render('user/gusthome',{data})
        }catch(err){
            console.log(err);
        }
    },
    getUserpage:async (req,res)=>{
        try{
            const [product,allproduct]= await Promise.all([
                products.find({catagory:'Flagship Mobiles',status:'active'}),
                products.find()
              ])
              console.log("username:",req.session.user);
              console.log(req.session.email)
              
              res.render('user/userhome',{product,user:req.session.user,allproduct})

        }catch(err){
            console.log(err);
        }
    },
   
    //-----------------------------------------------------------------
    Productslist:async(req,res)=>{
        try{
            const[allprodts,countprodts,brandcount,catagories]=await Promise.all([
                products.find(),
                products.find().count(),
                Brand.aggregate([{$group:{_id:"$Brandname",count:{$sum:1}}}]),
                catagory.find()
            ])
            res.render('user/allproducts',{allprodts,countprodts,brandcount,catagories})
        }catch(err){
            console.log("come Up user side productcontroller-1",err);
        }
    },
    //------------------Single Productss------------------
    ProductDetail:async(req,res)=>{
        try{
            const id= req.params.id
            console.log(id);
            const prdt=await products.find({_id:id})
            res.render('user/singleproduct',{product:prdt[0]})

        }catch(err){
            console.log("come up user side productcontroller-2",err)

        }
    },


    //--------------------------------------Userprofile------------------------------------------

    Userprofile:async(req,res)=>{
        try{
            

            const userData= await User.findOne({name:req.session.user})
            console.log(req.session.user,"jijijiji");
            // console.log(userData);
            const userID=userData._id
            console.log(userID);
            const userAdd=await Address.find({userId:userID})
            res.render('user/userprofile',{userData,userAdd,})

        }catch(err){
            console.log(err);
        }
    },

   
}