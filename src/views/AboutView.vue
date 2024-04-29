<script>
import HistorySwiperVue from "../components/HistorySwiper.vue"

export default {
  components: {
    HistorySwiperVue
  }
}
</script>

<template>
  <div class="about pt-[75px]">
    <!-- breadcrumbs  -->
    <div class="max-w-[1250px] mx-auto">
      <div class="text-sm breadcrumbs mt-[15px]">
        <ul>
          <li @click="$router.push('/')"
            class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">{{
              $t("header.home") }}</li>
          <li class="roboto-medium text-[#1A85FF]">About electrogen</li>
        </ul>
      </div>
    </div>

    <!-- video  -->
    <div class="mt-[15px]">
      <video autoplay loop muted
        src="https://electrogenco.com/wp-content/uploads/2023/09/08.14.42_4dbc168a.mp4"></video>
    </div>

    <!-- about 1  -->
    <section class="bg min-h-[100vh] flex items-center flex-col justify-center text-center">
      <h3
        class="w-[500px] border-b-[1px] border-[#003366] roboto-black pb-[15px] text-[#003366] font-[700] text-[20px]">
        We Draw Inspiration From Innovative Concepts
      </h3>
      <p class="max-w-[500px]  pb-[15px] mt-[50px] roboto-medium font-[700] text-[18px] leading-[35px]">
        Electrogen Company is a major supplier of electric motors for both household and industrial purposes. The
        company boasts a diverse portfolio of over fifty motor types, catering to the needs of its customers both in
        Iran and abroad. Established in one of Iran’s most significant industrial hubs in 1990, Electrogen currently
        operates in the country’s capital. With a production area of 165,000 square meters and a workforce of over 1500
        skilled workers, Electrogen has the resources to serve its customers satisfactorily.
        The company’s innovative and practical approach has helped it to establish a strong foothold in regional
        countries. Its extensive export experience and vast production capacities have positioned Electrogen to become a
        leading player in the industry.
      </p>
    </section>

    <!-- swiper  -->
    <section class="mt-[50px] max-w-[1200px] mx-auto">
      <h3 class="mx-auto w-[max-content] text-[#032055] mb-[30px] roboto-black text-[26px]">
        HISTORY OF ELECTROGEN COMPANY
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <div class="h-[570px]  rounded-[15px]">
        <HistorySwiperVue />
      </div>
    </section>

    <!-- about 2  -->
    <section class="bg min-h-[100vh] flex items-center flex-col justify-center text-center">
      <h3
        class="w-[500px] border-b-[1px] border-[#003366] roboto-black pb-[15px] text-[#003366] font-[700] text-[20px]">
        WE ARE MOVING IN CREATIVITY AND EVOLVING DIRECTION
      </h3>
      <p class="max-w-[500px]  pb-[15px] mt-[50px] roboto-medium font-[700] text-[18px] leading-[35px]">
        Improving the living standards of consumers is a crucial objective for any production group as it forms the
        basis for growth and success. To attain this goal, it is necessary to leverage the knowledge and expertise of
        industry professionals, implement innovative ideas, and excel in various aspects of the industry.
      </p>
      <p class="max-w-[500px]  pb-[15px] mt-[10px] roboto-medium font-[700] text-[18px] leading-[35px]">
        Electrogen, with its unwavering commitment to past accomplishments and future aspirations, is constantly
        exploring new approaches and practical product development strategies. This dedication has propelled Electrogen
        towards a path of sustained progress and expansion.
      </p>
    </section>

    <!-- photos  -->
    <section class="max-w-[1200px] mx-auto flex flex-wrap justify-between">
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
        In the Path Advancement ...
      </h3>
      <img class="w-[100%]" src="../assets/map.png" alt="map">
    </section>

    <!-- grades  -->
    <section class="flex flex-col items-center">
      <img src="https://electrogenco.com/en/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-19-at-11.01.37.jpeg" alt="image">
      <img class="my-[50px]" src="https://electrogenco.com/en/wp-content/uploads/2024/03/stat_Resized.jpg" alt="image">
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
