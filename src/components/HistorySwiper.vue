<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :loop="true" :pagination="pagination" :modules="modules"
        class="mySwiper2">
        <swiper-slide>
            <div class="h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px]">
                <div class="h-[100%] w-[50%] bg-yellow rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/Group-pics-05.jpg" alt="image">
                </div>
                <div class="flex-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] text-left roboto-bold">We Gazed Into The Boundless Expanse of The Future, and We Ascended</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular">The rapid advancement of Electrogen has led us to become the top electric motor manufacturers in the country. As a result, we needed a larger and better-equipped platform. We upgraded our factory space and gained access to modern facilities, which allowed us to achieve our desired outcomes. Today, after many years, we are recognized as the largest producer of water pumps and electric motors in Iran, with 1500 skilled workers. We are always striving to reach new heights, as we firmly believe that there are no limits to what we can accomplish.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px]">
                <div class="h-[100%] w-[50%] bg-yellow rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/49-Copy-1.jpg" alt="image">
                </div>
                <div class="flex-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] text-left roboto-bold">We Made Efforts To Address The Requirements of Society...</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular">The home appliance industry was filled with numerous producers. This situation made an intensely competitive market for brands. On the other hand, Due to the limited production of electric motors and high demand for these types of products in the country, there was an opportunity to start producing electromotors. In 1991, a new company called Electrogen was established to produce all types of electric motors in Iran.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px]">
                <div class="h-[100%] w-[50%] bg-yellow rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/Group-pics-03.jpg" alt="image">
                </div>
                <div class="flex-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] text-left roboto-bold">We Adjusted Ourselves To The Prevailing Conditions of The Nation</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular">The country was going through a period of significant transformation and it was crucial to establish self-sufficient industries and create employment opportunities for citizens. So we have restructured our operations to adapt to the current conditions of the country. As a result, we have rebranded our company as “Iran Refrigeration Industries,” with a focus on manufacturing refrigerators and freezers.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px]">
                <div class="h-[100%] w-[50%] bg-yellow rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/014-Copy-1.jpg" alt="image">
                </div>
                <div class="flex-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] text-left roboto-bold">The Establishment of What is known Today as Electrogen...</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular">Our story began with the establishment of Jeanlight, a company that was supposed to focus most of its activities on the export and import of electrical equipment and home appliances.</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        let years = ['2017', "1991",'1985', '1980']
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (years[index])+ '</span>';
                },
            },
            modules: [Pagination, Navigation],
        };
    },
};
</script>


<style>
.swiper-pagination {
    height: 40px;
    bottom: initial !important;
    top: 0 !important;
    align-items: center !important;
    display: flex !important;
    justify-content: center !important;
}

.mySwiper2 .swiper-pagination-bullet {
    width: max-content !important;
    height: 20px !important;
    text-align: center !important;
    line-height: 20px !important;
    font-size: 22px !important;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: rgba(128, 128, 128, 0.603) !important;
    opacity: 1 !important;
    background: transparent !important;
    margin: 0px 30px !important;
    transition-duration: .3s !important;
}

.mySwiper2 .swiper-pagination-bullet-active {
    transition-duration: .3s !important;
    color: #032055 !important;
    font-size: 28px !important;
}


.swiper {
    width: 100%;
    height: 100%;
}

.mySwiper2 .swiper-slide {
    text-align: center;
    font-size: 18px;
    border-radius: 20px !important;
    margin-top: 70px !important;
    background: transparent !important;
    height: calc(100% - 70px);
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.mySwiper2 .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mySwiper2 .swiper {
    margin-left: auto;
    margin-right: auto;
}
</style>