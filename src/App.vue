<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import './style.css'


export default {
  components: {
    Header,
    Footer
  },
  data(){
    return{
      preloader: true
    }
  },
  mounted(){
    document.cookie = "locale=en"
    setTimeout(() => {
      this.preloader = false
    }, 3000);
  }
}

</script>

<template>
  <div>
    <div v-if="this.preloader" class="preloader">
      <img class="h-[70px]" src="../public/logo.png" alt="img">
      <span class="loading loading-dots bg-[#032055] loading-lg"></span>
    </div>
    <Header />
    <!-- <h1> {{ $t('cart')  }}</h1>
  <button @click="$i18n.locale = 'en'">en</button>
  <button @click="$i18n.locale = 'ru'">ru</button> -->
    <RouterView />
    <Footer/>
  </div>
</template>

<style>
  @media screen and (max-width: 650px) {
    #breadcrumbs{
      padding: 0px 20px;
    }
    #breadcrumbs div ul li{
      font-size: 11px;
    }
    #begin{
      padding-top: 55px !important;
    }
    .preloader img {
      transform: scale(0.6);
    }
    .preloader span {
      transform: scale(0.6) translateY(-35px);
    }
  }

  .preloader{
    height: 100vh;
    width: 100%;
    position: fixed;
    background: white;
    z-index: 9999999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
</style>
