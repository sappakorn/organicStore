<template lang="">
<div class="kanit-regular">
<div class="container mb-2" style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.120); ">
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ps-0 pe-2 pt-2">
    <a class="navbar-brand" style=" height: 80px;width: 200px;" href="#"><img style=" width: 110%;height:50px" src="../img/logo-sm.png" alt=""></a>
    <div >
      <a href="shopping_cart"><img src="../img/shopping-cart.png" style="height: 25px;width: 25px;" alt=""></a>
      
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
  <div class="row pe-1 ps-1 my-2">

    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/carrot.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">แครอท</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/lemon.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">มะนาว</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/red-pepper.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">พริกแดง</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>

    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/green-pepper.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">พริกเขียว</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/carrot.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3"></p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    <div class="col-lg-3 col-6  my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/lemon.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">โหระพา</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    <div class="col-lg-3 col-6 my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/red-pepper.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">โหระพา</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>

    <div class="col-lg-3 col-6 my-2">
      <div class="card m-0" style="width: 11.5rem;height:18rem;box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;">
        <div class="d-flex justify-content-center  mt-3">
          <img src="../img/green-pepper.png" style="max-width: 100%;height:auto;object-fit: cover;" class="card-img-top " alt="...">
        </div>
        
        <div class="mb-2 mt-4">
          <p class="card-title ps-3">โหระพา</p>
          <p class="card-text ps-3" style="font-size:13px">ราคา 300 บาท/กก.</p>
        </div>
        <div class=" d-flex justify-content-between  px-3 pb-2">
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_down" >-</button>
          <button style="border-radius: 100%;height: 32px;width: 32px;border:1px solid #e5e5e5"  @click="count_up" >+</button>
        </div>

      </div> 
    </div>
    
    
    
  </div>
</div>
</div>   


    
</template>

<script setup>

import { ref, reactive } from 'vue'
const cart_state =ref(0);

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