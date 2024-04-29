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
          <li class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">{{
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


    <section class="second-section min-h-[100vh] flex items-center flex-col justify-center text-center">
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


    <section class="mt-[50px] max-w-[1200px] mx-auto">
      <h3 class="mx-auto w-[max-content] text-[#032055] mb-[30px] roboto-black text-[26px]">
        HISTORY OF ELECTROGEN COMPANY
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <div class="h-[570px]  rounded-[15px]">
        <HistorySwiperVue />
      </div>
    </section>

  </div>
</template>

<style scoped></style>
