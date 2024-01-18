const { name } = require("ejs");

 function block(id,status){
    console.log("ajax",id,status);

    $.ajax({
        url:'/admin/updateuser/'+`${id}/${status}`,
        method:"get",
        // data:{id:id,status:status},
        success:function(response){
                window.location.reload()
                alert(response.msg)
        },
        error:function (err){
            alert("something error in your college")
        }

    })
 }

// Catagory remove
function remove(id,name){
    console.log("ajax",id,name);
    let resutl=confirm("Are you sure")
    if(resutl==true){
        $.ajax({
            url:'/admin/catagory/'+`${id}/${name}`,
            method:'get',
            success:function(response){
                window.location.reload()
                alert(response.msg)
            },
            error:function(err){
                alert("something error")
            }

        })


    }
    
}
//Brand remove 
function removeBrand(id,name){
    console.log("ajax",id,name);
    let result =confirm("Are you sure..")
    if(result==true){
        $.ajax({
            url:'/admin/deletbrand/'+`${id}/${name}`,
            method:"get",
            success:function(response){
                window.location.reload()
                alert(response.msg)
            },
            error:function(err){
                alert("something error")
            }
        })
    }


}
// --------------PRODUCTS-------------------------------------------------------------------------------------------------------------------------
function Block(id,status){
    console.log("ajax",id,status);
    $.ajax({
        url:'/admin/updateProduct/'+`${id}/${status}`,
        method:"get",
        success:function(response){
            window.location.reload()
            alert(response.msg)
        },
        error:function(err){
            alert("Something wrong ")
        }
    })
}
function removeProduct(id,productName){
    console.log("ajax",id,productName);
    let data=confirm("Are you sure.")
    if(data==true){
        $.ajax({
            url:'/admin/deleteProduct/'+`${id}/${productName}`,
            method:"get",
            success:function(response){
                window.location.reload()
                alert(response.msg)

            },
            error:function(err){
                alert("Something problem")
            }
        })
    }
   
}

function removeimg(images,id){
    console.log("working ajax");
    console.log(images,id);
    let result=confirm("Admin are you sure..")
    if(result==true){
        $.ajax({
            url:'/admin/DeleteImages/'+`${images}/${id}`,
            method:"get",
            success:function(response){
                window.location.reload()
                alert(response.msg)
            },
            error:function(err){
                alert("Something problem")
            }
        })
    }
}