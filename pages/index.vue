<template lang="">
  <div class="kanit-regular">
  <div class="container-fluid  pt-5"  style="background-color: #ffffff;color:#000000;">
    
    <div class="row justify-content-center"">
      <div class="col-md-6">
        <div class="text-center ">
          <img  src="../img/logobig.png" style="max-width: 56%; heith:auto;" alt="">
        </div>
          
          <div class="mt-4 mx-2 " >
            <h4 class="card-title text-center mb-4">เข้าสู่ระบบ</h4>
            <form>
              <div class="form-group">
               
                <input  type="text" v-model="username" class="form-control my-2"  placeholder="เบอร์โทรศัพท์ " >
              </div>
              <div class="form-group">
                
                <input type="password" v-model="password" class=" form-control my-2"   placeholder="รหัสผ่าน">
              </div>
              <div class="text-center mt-4">
                <button  @click="onLogin()"  class="border border-warning form-control  " style="color:#ffffff;background-image: linear-gradient(to right, #ff9f00, #f49200, #e88500, #dc7900, #d06d00, #d06d00, #d06d00, #d06d00, #dc7900, #e88500, #f49200, #ff9f00);" > <b>เข้าสู่ระบบ</b> </button>
              </div>
              
            </form>

            <div class=" text-center mt-3"><a href="Register" style="text-decoration:none ;color:#3E3E3E ">สมัครสมาชิก</a></div >
          </div>
         
        <div class="vh-100">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
import axios from 'axios'

const username = ref()
const password = ref()

/* async function onLogin(){
  const res = await axios.post(`http://localhost:8080/user-profile/login`,{
    'username' : username.value,
    'password' : password.value 
  })
  if(res.data.status == 1){
    console.log("login success")
  }
} */

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap');

.kanit-regular {
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>