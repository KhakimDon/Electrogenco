<template>
  <swiper :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :navigation="true" :slidesPerView="3" :spaceBetween="30" :modules="modules" class="mySwiper">
    <slot></slot>
  </swiper>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
    }
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>


<style>
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  margin: 0 !important;
  transform: translate(0) !important;
  position: static !important;
}

.mySwiper .swiper-button-next::after,
.mySwiper .swiper-button-prev::after {
  display: none !important;
}

.mySwiper .swiper-button-next {
  width: 50px !important;
  margin: 0 53% !important;
  display: block !important;
  background-image: url("../assets/r.png") !important;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: -43px !important;
}

.mySwiper .swiper-button-prev {
  width: 50px !important;
  margin: 0 46% !important;
  margin-top: 30px !important;
  display: block !important;
  background-image: url("../assets/l.png") !important;
  background-size: contain;
  background-position: center center;
  background-position: 0px center;
  background-repeat: no-repeat;
}

.mySwiper .swiper-pagination {
  display: none !important;
}

.mySwiper .swiper {
  width: 100%;
  height: 100%;
}

.mySwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sponsor:hover {
  filter: grayscale(0) !important;
}

.sponsor {
  transition-duration: 0.3s;
  filter: grayscale(1);
  height: 40px !important;
  width: initial !important;
}
</style>