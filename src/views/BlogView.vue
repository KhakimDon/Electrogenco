<script lang="ts">
import { useBlogStore } from "../stores/blog"

export default {
    data() {
        return {
            fallback: [],
            filters: [
                {
                    title: "Categories of articles",
                    items: [
                        "All Content",
                        "Exhibitions and Events",
                        "Technical Articles",
                    ]
                },
            ],
            useBlogStore: useBlogStore(),
        }
    },
    methods: {
        accordion() {
            let a = event.currentTarget.children[1].children[0].getBoundingClientRect().height
            if (event.currentTarget.dataset.accordion == 'false') {
                event.currentTarget.children[0].children[0].style.transform = 'rotate(180deg)'
                event.currentTarget.style.height = (a + 50) + 'px'
                event.currentTarget.dataset.accordion = 'true'
            } else {
                event.currentTarget.children[0].children[0].style.transform = 'rotate(0deg)'
                event.currentTarget.style.height = '55px'
                event.currentTarget.dataset.accordion = "false"
            }
        },
        filter(i){
            console.log(i);
            
        }
    },
    mounted(){
        this.fallback = this.useBlogStore.blogs
    }
}

</script>

<template>
    <div class="pt-[75px]">
        <div class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#1A85FF]">
                        Information
                    </li>
                </ul>
            </div>
        </div>
        <div class="max-w-[1250px] mx-auto">
            <div class="max-w-[1250px] mx-auto mt-[50px]">
                <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                    Information
                    <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
                </h3>
                <div class="flex items-start gap-[25px]">

                    <div>
                        <div @click="accordion()" v-for="item of this.filters" :key="item.id" data-accordion="false"
                            class="w-[280px] h-[55px] duration-[.3s] overflow-hidden border-[1px] mb-[25px] rounded-[15px]">
                            <div
                                class="uppercase flex justify-between items-center cursor-pointer hover:bg-slate-100 duration-[.3s] roboto-bold p-[15px] text-[#1B3F7B] text-[15px]">
                                {{ item.title }}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-5 h-5 duration-[.3s]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                            <div class="h-[0px] duration-[3s]">
                                <ul class="pb-[10px]">
                                    <li @click="filter(i)" v-for="i of item.items" :data-value="i"
                                        :data-filterby="item.title" :key="i.id"
                                        class="p-[15px] flex items-center font-[600] hover:text-[#1A94FF] duration-75 cursor-pointer">
                                        <div class="h-[8px] mr-[8px] w-[8px] rounded-[50%] bg-[#b2d2ee]"></div> {{ i }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="flex-1 flex gap-[25px] flex-wrap">
                        <div v-for="item of this.fallback" :key="item.id" class="cursor-pointer max-w-[30%] overflow-hidden">
                            <div class="basis-[390px] group">
                                <div :style="`background-image: url('${item.img}'); background-position: center center; background-size: cover`"
                                    class="h-[180px] imgees relative flex items-end pb-[20px] w-[100%] bg-[whitesmoke] rounded-[20px] overflow-hidden">

                                    <span class="flex items-center roboto-regular text-white z-[2]">
                                        <div class="h-[1px] mr-[10px] w-[50px] bg-white"></div>{{ item.data }}
                                    </span>

                                </div>
                                <div
                                    class="my-[20px] text-[#032055] text-[20px] roboto-medium text-left group-hover:text-[#0652dd] duration-[.3s]">
                                    {{ item[$t("eleven.blog_title")] }} </div>
                                <div class="text-left roboto-regular text-[#878787]">
                                    {{ item[$t("eleven.blog_subtitle")] }}
                                </div>
                                <div class="flex items-center mt-[20px] group-hover:text-[#0652dd] duration-[.3s]">
                                    {{ $t("eleven.read") }}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[15px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<style>

.imgees:hover::after{
    background: rgba(0, 0, 0, 0.136);
}
.imgees::after{
    transition-duration: .3s;
    content: '';
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.431);
    position: absolute;
    left: 0 !important;
    z-index: 1;
    bottom: 0 !important;
}
</style>