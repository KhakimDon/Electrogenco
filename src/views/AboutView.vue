<script lang="ts">
import HistorySwiperVue from "../components/HistorySwiper.vue"
import { defineComponent } from 'vue'

export default defineComponent( {
  components: {
    HistorySwiperVue
  },
  mounted(){
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})
</script>

<template>
  <div id="begin" class="about pt-[75px]">
    <!-- breadcrumbs  -->
    <div id="breadcrumbs" class="max-w-[1250px] mx-auto">
      <div class="text-sm breadcrumbs mt-[15px]">
        <ul>
          <li @click="$router.push('/')"
            class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">{{
              $t("header.home") }}</li>
          <li class="roboto-medium text-[#1A85FF]">{{ $t("breadcrumbs.about") }}</li>
        </ul>
      </div>
    </div>

    <!-- video  -->
    <div class="mt-[15px]">
      <video autoplay loop muted
        src="https://electrogenco.com/wp-content/uploads/2023/09/08.14.42_4dbc168a.mp4"></video>
    </div>

    <!-- about 1  -->
    <section class="bg min-h-[100vh] sm:px-[20px] flex items-center flex-col justify-center text-center">
      <h3
        class="w-[500px] sm:w-[300px] sm:mt-[70px] border-b-[1px] border-[#003366] roboto-black pb-[15px] text-[#003366] font-[700] text-[20px]">
        {{$t("about.title")}}
      </h3>
      <p class="max-w-[500px] sm:leading-[25px] sm:mt-[30px] pb-[15px] mt-[50px] roboto-medium font-[700] text-[18px] leading-[35px]">
        {{$t("about.text")}}
      </p>
    </section>

    <!-- swiper  -->
    <section class="mt-[50px] max-w-[1200px] mx-auto sm:px-[20px]">
      <h3 class="mx-auto w-[max-content] sm:text-[20px] sm:w-[300px] sm:text-center text-[#032055] mb-[30px] roboto-black text-[26px]">
        {{ $t("history.title") }}
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <div class="h-[570px] sm:h-[max-content] rounded-[15px]">
        <HistorySwiperVue />
      </div>
    </section>

    <!-- about 2  -->
    <section class="bg min-h-[100vh] flex items-center sm:px-[20px] flex-col justify-center text-center">
      <h3
        class="w-[500px]  sm:w-[300px] sm:mt-[70px] border-b-[1px] border-[#003366] roboto-black pb-[15px] text-[#003366] font-[700] text-[20px]">
        {{ $t("about2.title") }}
      </h3>
      <p class="max-w-[500px] sm:leading-[25px] sm:mt-[30px]  pb-[15px] mt-[50px] roboto-medium font-[700] text-[18px] leading-[35px]">
        {{ $t("about2.text") }}
      </p>
      <p class="max-w-[500px] sm:leading-[25px] sm:mt-[5px]  pb-[15px] mt-[10px] roboto-medium font-[700] text-[18px] leading-[35px]">
        {{ $t("about2.text2") }}
      </p>
    </section>

    <!-- photos  -->
    <section class="max-w-[1200px] mx-auto sm:px-[20px] sm:gap-[20px] flex flex-wrap justify-between">
      <img class="w-[390px] rounded-[15px]"
        src="https://electrogenco.com/en/wp-content/uploads/2024/03/Small-banners-02_EN.jpg" alt="image">
      <img class="w-[390px] rounded-[15px]"
        src="https://electrogenco.com/en/wp-content/uploads/2024/03/Small-banners-01_EN.jpg" alt="image">
      <img class="w-[390px] rounded-[15px]"
        src="https://electrogenco.com/en/wp-content/uploads/2024/03/Small-banners-04_En.jpg" alt="image">
    </section>

    <!-- map  -->
    <section class="max-w-[1200px] mx-auto mt-[150px]">
      <h3
        class="w-[max-content] mx-auto border-b-[1px] text-[#0F3A77] mb-[50px] pb-[20px] border-[#BFCBDB] text-[26px] font-[600]">
        {{ $t("map") }}
      </h3>
      <img class="w-[100%]" src="../assets/map.png" alt="map">
    </section>

    <!-- grades  -->
    <section class="flex flex-col items-center">
      <img src="https://electrogenco.com/en/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-19-at-11.01.37.jpeg" alt="image">
      <img class="my-[50px] sm:my-[30px]" src="https://electrogenco.com/en/wp-content/uploads/2024/03/stat_Resized.jpg" alt="image">
      <img src="https://electrogenco.com/en/wp-content/uploads/2024/03/Certifications-02.jpg" alt="image">
    </section>


  </div>
</template>

<style scoped>
.bg {
  background-image: url('https://electrogenco.com/en/wp-content/uploads/2024/03/About-1.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
