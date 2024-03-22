<template lang="">
<div class="kanit-regular">
<div class="container mb-2" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.120); ">
<nav class="navbar navbar-expand-lg ">
    <div class="container-fluid ps-0 pe-2 pt-2">
    <a class="navbar-brand" style=" height: 80px;width: 200px;" href="#"><img style=" width: 110%;height:50px" src="../img/logo-sm.png" alt=""></a>
    <div >
        <img src="../img/shopping-cart.png" style="height: 25px;width: 25px;" alt="">
        <p class="text-center " style="color:#ffffff;position: relative;top: -35px;left:12px;height: 25px;width: 25px;border-radius: 100%; background-color: rgb(255, 179, 16);">
        <b>
            {{ cart_state }}
        </b>
        </p>
    </div> 
    
    </div>
    
</nav>
</div>
<div class="container ">
    <div class="">
        <div class="">

            <div class="card m-0 p-1 mb-2" style="height:2rem;height:6rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
                <div class="d-flex justify-content-between ">

                    <img src="../img/lemon.png" style="width:80px;height:100%;object-fit: contain;" class="card-img-top " alt="..."> 
                    <div >
                        <p class="ps-3 mt-1">มะนาว</p>
                        <p class="ps-3" style="font-size:25px">{{product_price}} บาท</p>
                    </div> 
                    <div class="">
                        <p class="text-end pe-1"><img src="../img/trash-bin.png" alt=""></p>
                        
                        <div class="d-flex ">

                            <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
                            <p class="text-center "  >
                            <button style="height: 32px;width: 32px;border:1px solid #ffffff;background-color: rgb(255, 255, 255);"   > {{ cart_state }}</button>
                            </p>
                             <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
                             
                        </div>
                    </div>       
                </div>
            </div> 
           
            <div class="card m-0 p-1 mb-2" style="height:2rem;height:6rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
                <div class="d-flex justify-content-between ">

                    <img src="../img/carrot.png" style="width:80px;height:100%;object-fit: contain;" class="card-img-top " alt="..."> 
                    <div >
                        <p class="ps-3 mt-1">แครอท</p>
                        <p class="ps-3" style="font-size:25px">{{product_price}} บาท</p>
                    </div> 
                    <div class="">
                        <p class="text-end pe-1"><img src="../img/trash-bin.png" alt=""></p>
                        
                        <div class="d-flex ">

                            <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
                            <p class="text-center "  >
                            <button style="height: 32px;width: 32px;border:1px solid #ffffff;background-color: rgb(255, 255, 255);"   > {{0}}</button>
                            </p>
                             <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
                             
                        </div>
                    </div>       
                </div>
            </div> 
            <div class="card m-0 p-1 mb-2" style="height:2rem;height:6rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
                <div class="d-flex justify-content-between ">

                    <img src="../img/red-pepper.png" style="width:80px;height:100%;object-fit: contain;" class="card-img-top " alt="..."> 
                    <div >
                        <p class="ps-3 mt-1">พริกแดง</p>
                        <p class="ps-3" style="font-size:25px">{{product_price}} บาท</p>
                    </div> 
                    <div class="">
                        <p class="text-end pe-1"><img src="../img/trash-bin.png" alt=""></p>
                        
                        <div class="d-flex ">

                            <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
                            <p class="text-center "  >
                            <button style="height: 32px;width: 32px;border:1px solid #ffffff;background-color: rgb(255, 255, 255);"   > {{ 0}}</button>
                            </p>
                             <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
                             
                        </div>
                    </div>       
                </div>
            </div> 

        </div>

    </div>
</div>


<div class="fixed-bottom pt-2" style="box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.120); ">
    <div class="container-fluid" style="height: 100px;">
        <div class="d-flex justify-content-around  ">     
            <p style="font-size: 23px;color:rgb(80, 80, 80);">ราคารวม</p>
            <div class="d-flex ">
                <p class="pt-1 mt-auto " style="font-size: 23px;color:rgb(255, 145, 0);"> {{product_price*cart_state}} </p>
                <p class="pb-1 ps-1 mt-auto "style="font-size: 15px;color:rgb(80, 80, 80);"> บาท</p>
            </div>
        </div>
        <button class="btn btn-success form-control ">ถัดไป</button>
    </div>
</div>
</div>


    
</template>

<script setup>

import { ref, reactive } from 'vue'
const cart_state =ref(0);//นำข้อมูลส่วนนี้มาจาก database 
const product_price=ref(250)
function count_up(){
    cart_state.value++
}
function count_down(){
    if (cart_state.value > 0) {
    cart_state.value--;
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');

.kanit-regular {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-style: normal;
}

</style>