<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import './style.css'


export default {
  components: {
    Header,
    Footer
  },
  mounted(){
    document.cookie = "locale=en"
  }
}

</script>

<template>
  <div>
    <Header />
    <!-- <h1> {{ $t('cart')  }}</h1>
  <button @click="$i18n.locale = 'en'">en</button>
  <button @click="$i18n.locale = 'ru'">ru</button> -->
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped></style>
