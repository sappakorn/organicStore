<template >
    <div class="kanit-regular">
    <div class="container mb-2" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.120); ">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid ps-0  pt-0">
            <a class="navbar-brand" style=" height: 80px;width: 200px;" href="#"><img style=" width: 110%;height:50px" src="../img/logo-sm.png" alt=""></a>
            </div> 
            
            
        </nav>
    </div>
    <div class="container">
        <div class="text-center pt-2">
                <h1  style="color:#ffaf2f;">เพิ่มสินค้าใหม่</h1>
        </div>
        
    
    </div>
    
    <div class="container ">
        <div class="">
    
        
    
        <div class="dropdown my-2   ">
        <button class="btn btn-warning dropdown-toggle form-control" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            เลือกชื่อผัก
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>
    
    
        
    
    
                <div class="card m-0 p-1 mb-2" style="height:2rem;height:6rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
                    <div class="d-flex justify-content-between ">
    
                        <img src="../img/lemon.png" style="width:80px;height:100%;object-fit: contain;" class="card-img-top " alt="..."> 
                        <div >
                            <p class="ps-3 mt-1">มะนาว</p>
                          
                        </div> 
                        <div class="">
                            <p class="text-end pe-1"><img src="../img/trash-bin.png" alt=""></p>
                            
                            <div class="d-flex ">
    
                                <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"   >-</button>
                                <p class="text-center "  >
                                <button style="height: 32px;width: 32px;border:1px solid #ffffff;background-color: rgb(255, 255, 255);"   > 1 </button>
                                </p>
                                 <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  >+</button>
                                 
                            </div>
                        </div>       
                    </div>
                </div> 
    
        </div>
    </div>
    <div class="fixed-bottom pt-2" style="box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.120); ">
        <div class="container-fluid" style="height: 100px;">
                <div class="d-flex justify-content-around  ">     
                    <p style="font-size: 23px;color:rgb(80, 80, 80);">ทั้งหมด</p>
                    <div class="d-flex ">
                        <p class="pt-1 mt-auto " style="font-size: 23px;color:rgb(255, 145, 0);"> 1 </p>
                        <p class="pb-1 ps-1 mt-auto " style="font-size: 15px;color:rgb(80, 80, 80);"> รายการ</p>
                    </div>
                </div>
                <button class="btn btn-success form-control ">เพิ่ม</button>
            </div>
    </div>
</div>
        
    </template>
    
    
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    .kanit-regular {
      font-family: 'Kanit', sans-serif;
      font-weight: 400;
      font-style: normal;
    }
    </style>