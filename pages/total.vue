<template>
    <div>
      <!-- Your existing code here -->
  
      <!-- Receipt Section -->
      <div class="container mt-4">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">ใบเสร็จ</h5>
          </div>
          <div class="card-body">
            <!-- Product details loop -->
            <div v-for="(product, index) in products" :key="index" class="mb-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <img :src="product.image" alt="Product Image" class="me-3" style="width: 80px; height: 80px; object-fit: contain;">
                  <div>
                    <p class="mb-1">{{ product.name }}</p>
                    <p class="mb-0" style="font-size: 18px;">{{ product.price }} บาท</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <button class="btn btn-outline-danger me-2" @click="removeProduct(index)">ลบ</button>
                  <div class="d-flex">
                    <button class="btn btn-light" @click="decrementQuantity(index)">-</button>
                    <p class="mb-0 mx-2">{{ product.quantity }}</p>
                    <button class="btn btn-light" @click="incrementQuantity(index)">+</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of Product details loop -->
  
            <!-- Total Price Section -->
            <div class="d-flex justify-content-between">
              <p class="mb-1" style="font-size: 20px;">ราคารวม</p>
              <div class="d-flex">
                <p class="mb-0 me-2" style="font-size: 20px; color: rgb(255, 145, 0);">{{ totalPrice }}</p>
                <p class="mb-0" style="font-size: 15px; color: rgb(80, 80, 80);">บาท</p>
              </div>
            </div>
            <!-- End of Total Price Section -->
  
            <!-- Next Button -->
            <button class="btn btn-success form-control mt-3" @click="proceedToNext">ถัดไป</button>
            <!-- End of Next Button -->
          </div>
        </div>
      </div>
      <!-- End of Receipt Section -->
  
      <!-- Your existing code here -->
    </div>
  </template>
  
  <script setup>
  
  import { ref, computed } from 'vue';
  import html2canvas from 'html2canvas';
  const cart_state = ref(0);
  const product_price = ref(250);
  
  const products = ref([
    { name: 'มะนาว', price: product_price, image: '../img/carrot.png', quantity: 1 },
    { name: 'มะเขือเทศ', price: product_price, image: '../img/tomato.png', quantity: 2 },
    // Add more products as needed
  ]);
  
  const totalPrice = computed(() => {
    return products.value.reduce((total, product) => total + product.price * product.quantity, 0);
  });
  
  function incrementQuantity(index) {
    products.value[index].quantity++;
  }
  
  function decrementQuantity(index) {
    if (products.value[index].quantity > 1) {
      products.value[index].quantity--;
    }
  }
  
  function removeProduct(index) {
    products.value.splice(index, 1);
  }
  
  function proceedToNext() {
    // Add your logic for the next step
    console.log('Proceeding to next step...');
  }
  function captureScreen() {
  const elementToCapture = document.getElementById('app'); // แทน 'app' ด้วย ID หรือ class ของ element ที่ต้องการบันทึก

  html2canvas(elementToCapture).then(canvas => {
    const image = canvas.toDataURL(); // รูปภาพเป็น data URL
    const link = document.createElement('a');
    link.href = image;
    link.download = 'screenshot.png'; // กำหนดชื่อไฟล์ที่ต้องการ
    link.click();
  });
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
  