<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :loop="true" :pagination="pagination" :modules="modules"
        class="mySwiper2">
        <swiper-slide>
            <div class="sm:flex-col h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px] sm:p-[20px]">
                <div class="h-[100%] w-[100%]  rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/Group-pics-05.jpg" alt="image">
                </div>
                <div class="flex-1 sm:order-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] sm:text-[20px] sm:leading-[30px] text-left roboto-bold">{{ $t("history.2017.title") }}</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular sm:leading-[24px] sm:mt-[10px] sm:text-[15px]">{{ $t("history.2017.text") }}</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="sm:flex-col h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px] sm:p-[20px]">
                <div class="h-[100%] w-[100%]  rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/49-Copy-1.jpg" alt="image">
                </div>
                <div class="flex-1 sm:order-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] sm:text-[20px] sm:leading-[30px] text-left roboto-bold">{{ $t("history.1991.title") }}</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular sm:leading-[24px] sm:mt-[10px] sm:text-[15px]">{{ $t("history.1991.text") }}</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="sm:flex-col h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px] sm:p-[20px]">
                <div class="h-[100%] w-[100%]  rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/Group-pics-03.jpg" alt="image">
                </div>
                <div class="flex-1 sm:order-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] sm:text-[20px] sm:leading-[30px] text-left roboto-bold">{{ $t("history.1985.title") }}</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular sm:leading-[24px] sm:mt-[10px] sm:text-[15px]">{{ $t("history.1985.text") }}</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="sm:flex-col h-[100%] group gap-[15px] flex w-[100%] bg-[#F8F8F8] rounded-[15px] p-[60px] sm:p-[20px]">
                <div class="h-[100%] w-[100%]  rounded-[17px] overflow-hidden">
                    <img class="h-[100%] group-hover:scale-[1.5] duration-[1.5s] w-[100%] object-cover" src="https://electrogenco.com/en/wp-content/uploads/2024/03/014-Copy-1.jpg" alt="image">
                </div>
                <div class="flex-1 sm:order-1">
                    <p class="text-[#2E4F85] mb-[10px] leading-[40px] text-[22px] sm:text-[20px] sm:leading-[30px] text-left roboto-bold">{{ $t("history.1980.title") }}</p>
                    <hr class="border-[#1A85FF] w-[40px]">
                    <p class="text-left leading-[35px] text-[17px] roboto-regular sm:leading-[24px] sm:mt-[10px] sm:text-[15px]">{{ $t("history.1980.text") }}</p>
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
@media screen and (max-width: 650px) {
    .mySwiper2 .swiper-pagination-bullet {
        margin: 0px 10px !important;
        font-size: 20px !important;
    }
}
</style>