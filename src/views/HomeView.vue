<script lang="ts" >
import { useProductCategoryStore } from "../stores/productCategory"
import { useElectrogenGlanceStore } from "../stores/electrogenAtAGlance"
import { useInfiniteMovementStore } from "../stores/InfiniteMovement"
import { useBlogStore } from "../stores/blog"

import SwiperComp from '../components/SwiperComp.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: { SwiperComp, Swiper, SwiperSlide, },
  data() {
    return {
      product_category: useProductCategoryStore(),
      useElectrogenGlanceStore: useElectrogenGlanceStore(),
      useInfiniteMovementStore: useInfiniteMovementStore(),
      useBlogStore: useBlogStore(),
      perview: 3,
    }
  },
  mounted(){
    var x = window.matchMedia("(max-width: 650px)")
    if (x.matches) {
      this.perview = 1
    }
  }
}


</script>

<template>
  <main>
    <section class="pt-[70px]">
      <video class="w-[100%] max-h-[95vh] object-cover"
        src="https://electrogenco.com/en/wp-content/uploads/2024/03/New-Banner_4MB.mp4" muted loop autoplay></video>
    </section>

    <section class="second-section sm:h-[max-content] sm:py-[100px] sm:max-w-[100%] sm:px-[20px] h-[100vh] flex items-center flex-col justify-center text-center">
      <h1
        class="w-[500px] sm:max-w-[100%] border-b-[1px] border-[#003366] roboto-black pb-[15px] text-[#003366] font-[700] text-[20px]">
        {{ $t("second.title")  }}</h1>
      <article
        class="max-w-[500px] border-b-[1px] border-[#003366] pb-[15px] mt-[50px] roboto-medium font-[700] text-[18px] leading-[35px] sm:leading-[28px]">
        {{ $t("second.text")  }}
      </article>
      <p class="max-w-[500px] mt-[20px] roboto-medium font-[700] text-[18px]">
        {{ $t("second.subtext")  }}
      </p>
    </section>

    <section>
      <video class="w-[100%] max-h-[90vh] object-cover" muted loop autoplay
        src="https://electrogenco.com/en/wp-content/uploads/2024/03/WhatsApp-Video-2023-12-09-at-2.33.42-PM.mp4"></video>
    </section>
    
    <section class="py-[100px] sm:pb-[50px]">
      <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-black text-[26px]">
        {{ $t("fourth.text") }}
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>

      <div class="max-w-[1200px] sm:w-[100%] sm:px-[10px] sm:flex-nowrap sm:overflow-auto flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
        <div @click="$router.push(item.route)" v-for="item of product_category.productCategory" :class="{hidden: item.id == 6 || item.id == 7}" :key="item.id"
          class="product_hover_block sm:min-w-[300px] cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] h-[200px] basis-[30%] flex-1 rounded-[20px]">
          <div class=" flex items-center justify-start h-[100%] w-[100%]">
            <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
              <img class="h-[70px]" :src="item.img">
            </figure>
            <div class="flex-1">
              <h4 class="roboto-bold text-[#032055] text-[19px] leading-[35px]"> {{ item[$t('fourth.title')] }} </h4>
              <p class="uppercase mt-[15px] roboto-regular tracking-[2px]	 text-[13px]">{{ item[$t('fourth.subtitle')] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="third-section h-[90vh] sm:h-[70vh] sm:px-[20px]">
      <div class="max-w-[1250px] flex items-center justify-end h-[100%] mx-auto">
        <p class="roboto-black text-white text-center max-w-[500px] leading-[38px] text-[19px]">
         {{ $t("fiveth") }}
        </p>
      </div>
    </section>

    <section class="py-[100px] sm:py-[50px]">
      <h3 class="mx-auto sm:text-[19px] w-[max-content] text-[#032055] mb-[40px] roboto-black text-[26px]">
        {{ $t('sixth.text') }}
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <SwiperComp :class="{ arrowHidden: useInfiniteMovementStore.infinite_Movement.length < 4 }"
        class="max-w-[1200px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
        <swiper-slide v-for="item of useInfiniteMovementStore.infinite_Movement" :key="item.id"
          class="product_hover_block cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] basis-[300px] flex-1 rounded-[20px]">
          <div class="flex-col flex items-center justify-start h-[100%] w-[100%]">
            <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
              <img class="h-[70px]" :src="item.img">
            </figure>
            <div class="flex-1">
              <h4 class="roboto-bold text-[#032055] text-[20px]  leading-[35px] mt-[20px]"> {{
                item[$t('sixth.title')] }} </h4>
              <p class="uppercase  mt-[15px] roboto-regular tracking-[1px] text-[13px]">{{
                item[$t('sixth.subtitle')] }}</p>
            </div>
          </div>
        </swiper-slide>
      </SwiperComp>
    </section>

    <section>
      <div class="relative max-w-[1200px] mx-auto flex gap-[20px] flex-wrap sm:flex-col sm:px-[20px]">
        <div class="bg-[#eaeaea] grow h-[400px] basis-[35%] rounded-[15px] overflow-hidden">
          <img class="objet-cover h-[100%] w-[100%]"
            src="https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%A2%D8%B4%D9%BE%D8%B2%D8%AE%D8%A7%D9%86%D9%87.jpg"
            alt="image">
        </div>
        <div class="bg-[#E5E8ED] grow h-[400px] basis-[35%] rounded-[15px] overflow-hidden">
          <img class="objet-cover h-[100%] w-[100%]"
            src="https://electrogenco.com/en/wp-content/uploads/2024/03/%DA%A9%D9%88%D9%84%D8%B1.jpg" alt="image">
        </div>
        <div class="bg-[#E5E8ED] h-[250px] grow basis-[30%] rounded-[15px] overflow-hidden">
          <img class="objet-cover h-[100%] w-[100%]"
            src="https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%A7%D8%B3%D8%A7%D9%86%D8%B3%D9%88%D8%B1.jpg"
            alt="image">
        </div>
        <div class="bg-[#E5E8ED] h-[250px] grow basis-[30%] rounded-[15px] overflow-hidden">
          <img class="objet-cover h-[100%] w-[100%]"
            src="https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%A2%D8%B4%D9%BE%D8%B2%D8%AE%D8%A7%D9%86%D9%872.jpg"
            alt="image">
        </div>
        <div class="bg-[#E5E8ED] h-[250px] grow basis-[30%] rounded-[15px] overflow-hidden">
          <img class="objet-cover h-[100%] w-[100%]"
            src="https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%B4%D9%88%D9%81%D8%A7%DA%98.jpg" alt="image">
        </div>
      </div>
    </section>

    <section class="py-[100px] sm:py-[50px]">
      <h3 class="mx-auto w-[max-content] sm:text-[19px] text-[#032055] mb-[40px] roboto-black text-[26px]">
        {{ $t("eight.text") }}
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <SwiperComp class="max-w-[1200px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
        <swiper-slide v-for="item of useElectrogenGlanceStore.electrogenGlance" :key="item.id"
          class="product_hover_block cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] basis-[300px] flex-1 rounded-[20px]">
          <div class="flex-col flex items-center justify-start h-[100%] w-[100%]">
            <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
              <img class="h-[70px]" :src="item.img">
            </figure>
            <div class="flex-1">
              <h4 class="roboto-bold text-[#032055] text-[20px] mb-[-30px] leading-[35px] mt-[20px]"> {{
                item[$t("eight.title")] }} 
              </h4>
              <p class="uppercase  mt-[15px] opacity-0 roboto-regular tracking-[1px] text-[13px]">{{
                item.subtitle_eng }}</p>
            </div>
          </div>
        </swiper-slide>
      </SwiperComp>
    </section>

    <section class="h-[90vh] sm:h-[max-content] seven-screen">
      <video autoplay muted src="https://electrogenco.com/wp-content/uploads/2024/02/Banner.mp4"></video>
    </section>

    <section class="py-[100px]">
      <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-black text-[26px]">
        {{$t("ten")}}
        <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
      </h3>
      <SwiperComp :slidesPerView="6" class="max-w-[1200px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
        <swiper-slide class="cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor"
            src="https://electrogenco.com/en/wp-content/uploads/2023/01/%D9%84%D9%88%DA%AF%D9%88-2.png" alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor"
            src="https://electrogenco.com/en/wp-content/uploads/2023/01/a7f0364a99d44237%DB%B218d1ba193a8e6cb8-1.png"
            alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor" src="https://electrogenco.com/en/wp-content/uploads/2023/01/Layer-2.png" alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor" src="https://electrogenco.com/en/wp-content/uploads/2023/01/logoen.png" alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor" src="https://electrogenco.com/en/wp-content/uploads/2023/06/SAVALAN-1.png" alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor" src="https://electrogenco.com/en/wp-content/uploads/2023/06/Butane-Logo1-300x185-1.png"
            alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor" src="https://electrogenco.com/en/wp-content/uploads/2023/06/English-Logo-since-1-1.png"
            alt="image">
        </swiper-slide>
        <swiper-slide class=" cursor-pointer overflow-hidden sponsorwrp">
          <img class="sponsor"
            src="https://electrogenco.com/en/wp-content/uploads/2023/06/07444620230129_%D9%84%D9%88%DA%AF%D9%88-%D9%85%D8%B4%D9%87%D8%AF-%D8%AF%D9%88%D8%A7%D9%85-Copy-1.png"
            alt="image">
        </swiper-slide>
      </SwiperComp>
    </section>


    <section >
      <div class="max-w-[1200px] mx-auto sm:px-[20px]">
        <div>
          <span class="text-[#BFBEBE] roboto-medium font-[600] text-[20px]">{{ $t("eleven.suptitle") }}</span>
          <h2 class="text-[26px] mt-[10px] roboto-black font-[1000] text-[#032055]">{{ $t("eleven.title") }}</h2>
          <hr class="h-[1px] border-[#032055] w-[40px]">
        </div>
        <div>
          <SwiperComp :slidesPerView="this.perview"
            class="max-w-[1200px] mt-[50px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
            <swiper-slide @click="$router.push(`blog/${item.id}`)" v-for="item of useBlogStore.blogs" :key="item.id" class="cursor-pointer overflow-hidden">

              <div class="basis-[390px] group">
                <div :style="`background-image: url('${item.img}'); background-position: center center; background-size: cover`" class="h-[280px] relative flex items-end pb-[30px] w-[100%] bg-[whitesmoke] rounded-[20px] overflow-hidden">
                  <span class="flex items-center roboto-regular text-white"><div class="h-[1px] mr-[10px] w-[50px] bg-white"></div>{{ item.data  }}</span>
                </div>
                <div class="my-[20px] text-[#032055] text-[20px] roboto-medium text-left group-hover:text-[#0652dd] duration-[.3s]"> {{  item[$t("eleven.blog_title")] }} </div>
                <div class="text-left roboto-regular text-[#878787]">
                  {{  item[$t("eleven.blog_subtitle")] }}
                </div>
                <div class="flex items-center mt-[20px] group-hover:text-[#0652dd] duration-[.3s]">
                  {{$t("eleven.read")}}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 ml-[15px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </div>
              </div>
              
            </swiper-slide>

          </SwiperComp>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>

.group-cont:hover .group-item{
  color: #0652dd !important;
}
.seven-screen video {
  height: 100%;
  width: 100%;
}

.arrowHidden .swiper-button-next {
  display: none !important;
}

.arrowHidden .swiper-button-prev {
  display: none !important;
}

.third-section {
  background-size: cover;
  background-position: center center;
  background-image: url("https://electrogenco.com/en/wp-content/uploads/2024/03/Banners_MotorElements_Resized.jpg");
}

.second-section {
  background-image: url('https://electrogenco.com/en/wp-content/uploads/2024/03/About-1.jpg');
  background-size: cover;
  background-position: center center;
}

.product_hover_block div figure {
  position: relative;
}

.product_hover_block div figure::after {
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 50%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  transition-duration: .5s;
  background: #032055;
  z-index: -1;
  transition-timing-function: linear;
}

.product_hover_block:hover figure::after {
  opacity: 1 !important;
  transform: scale(20) !important;
}

.product_hover_block:hover figure {
  background: #1a3d7d;
}

.product_hover_block:hover figure img {
  filter: brightness(0) invert(1);
}

.product_hover_block:hover h4 {
  color: white;
}

.product_hover_block:hover p {
  color: white;
}

.product_hover_block:hover img {
  transform: rotate(360deg);
  transition-duration: .5s;
}
</style>
