function deleteAddress(id){
    Swal.fire({
        title: "Are you sure?",
        text: "You will remove this address",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the deletion action here
           $.ajax({
            url:"deleteAddress/"+`${id}`,
            method:"get",
            success:function(response){
                Swal.fire({
                    text:response.msg,
                    icon:"success",
                    timer:3000,
                    showConfirmButton:false
                })
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            },
            error:function(err){
                Swal.fire({
                    text:"Something wrong!",
                    icon:'error',
                    showConfirmButton:false
                })
                console.log("Sweet-error",err);
            }

           
           })
        }
    });
    
}