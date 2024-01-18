const User=require('../models/userModel')
const catagories=require('../models/catagoryModel')
const Brand=require('../models/brandModel')
const products=require('../models/productModel')



module.exports={
    getCustomer:async (req,res)=>{
        try{
           console.log('customers----------------------------------------------------------------------------');
            const data=await User.find()
            res.render('Admin/userlist',{user:data})
        }catch(err){
            console.log(err);
        }
    },
    updateUser:async (req,res)=>{
        try{
            console.log("update----------------------------------------------------------------------------");
            const id=req.params.id
            const status=req.params.status
            console.log(status);
            var msg;
            const detail= await User.findOne({_id:id})
            if(detail.status=='active'){
                await User.updateOne({_id:id},{$set:{status:"block"}})
                msg="block"
            }else{
                await User.updateOne({_id:id},{$set:{status:"active"}})
                msg="unblock"
            }

            res.json({msg:`${msg} successfully`})

        }catch(err){
            console.log("yes come: Update place",err);
        }
    },
    //search user-------------------------------------
    SearchUser:async(req,res)=>{
        try{
            const searchData=req.body
            console.log(searchData);
            const user= await User.find({
                name:{$regex:"^"+searchData.search,$options:"i"},
            })
            res.render('Admin/userlist',{user})

        }catch(err){
            console.log("search side",err);
        }
        },















    // catagory page 
    getCatagory: async (req,res)=>{
        try{
            // const index=0
            const[catagory,Brands]= await Promise.all([
                catagories.find(),
                Brand.find()
            ])
            // console.log("server is ok ",catagories);
            res.render('admin/catagory',{catagory,Brands})


        }catch(err){
            console.log("come up catagory",err);
        }
    },
    //-------------Product controller----------------------------------------
    getProduct:async(req,res)=>{
        const data=await products.find()
        res.render('admin/product',{data})
    }



}
