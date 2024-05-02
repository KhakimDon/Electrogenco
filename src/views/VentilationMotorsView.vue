<script lang="ts" >
import { useBlogStore } from "../stores/products"


export default {
    components: {
    },
    data() {
        return {
            useBlogStore: useBlogStore(),
        }
    },
    mounted(){
        
        this.$i18n.locale = 'en'
    }
}
</script>

<template>
    <div class="pt-[75px]">

        <!-- breadcrumbs  -->
        <div class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-regular hover:text-[#1A85FF] duration-[.3s] text-[#1B3F7B]">
                        {{$t("header.home") }}</li>
                    <li class="roboto-medium text-[#1A85FF]">Ventilation Motors</li>
                </ul>
            </div>
        </div>

        <section class="mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Ventilation Motors
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="max-w-[1200px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
                <div @click="$router.push(`/ventilation-motors/${item.id}`)" v-for="item of this.useBlogStore.ventilation_motors" :key="item.id"
                    class="product_hover_block cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] h-[200px] basis-[30%] flex-1 rounded-[20px]">
                    <div class=" flex items-center justify-start h-[100%] w-[100%]">
                        <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
                            <img class="h-[70px]" :src="item.img">
                        </figure>
                        <div class="flex-1">
                            <h4 class="roboto-bold text-[#032055] text-[19px] leading-[35px]"> {{
                                item.title_en }} </h4>
                            <p class="uppercase mt-[15px] roboto-regular tracking-[2px]	 text-[13px]">{{
                                item.sub_en }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="opacity-0  product_hover_block cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] h-[200px] basis-[30%] flex-1 rounded-[20px]">
                    <div class=" flex items-center justify-start h-[100%] w-[100%]">
                        <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
                        </figure>
                        <div class="flex-1">
                            <h4 class="roboto-bold text-[#032055] text-[19px] leading-[35px]">
                            </h4>
                            <p class="uppercase mt-[15px] roboto-regular tracking-[2px]	 text-[13px]"> </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
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
