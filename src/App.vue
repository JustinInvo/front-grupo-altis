<template>
  <div class="container-fluid">
    <Banner/>
    <div class="content-principal">
      <Navbar/>
      <Whatsapp/>
      <RouterView style="margin-top: 56px;" />
      <Footer/>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { Modal } from 'bootstrap';
import Navbar from '@/components/navbar.vue';
import Banner from '@/components/banner.vue';
import Footer from '@/components/footer.vue';
import Whatsapp from '@/components/whatsapp.vue';
// import catalogue from '@/components/catalogue.vue'
import './assets/scss/index.scss'
</script>
