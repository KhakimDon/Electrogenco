<script lang="ts">
import Cards from '../components/Cards.vue'
import { useBlogStore } from "../stores/products"


export default {
    components: { Cards },
    data() {
        return {
            filters: [
                {
                    title: "OUTPUT POWER",
                    items: [
                        "1.1 kW",
                        "1.5 kW",
                        "11 KW",
                        "120 W",
                        "15 kW",
                        "18.5 kW",
                        "180 W",
                        "2.2 kW",
                        "22 kW",
                        "250 W",
                        "3 kW",
                        "30 kW",
                        "37 kW",
                        "370 W",
                        "4 kW",
                        "45 kW",
                        "5.5 kW",
                        "500 W",
                        "55 kW",
                        "550 W",
                        "7.5 kW",
                        "750 W",
                    ]
                },
                {
                    title: "FRAME MATERIAL",
                    items: [
                        "Aluminium", "Cast Iron"
                    ]
                },
                {
                    title: "FRAME SIZE",
                    items: [
                        "100",
                        "112",
                        "132",
                        "160",
                        "180",
                        "200",
                        "225",
                        "250",
                        "63",
                        "71",
                        "80",
                        "90"
                    ]
                },
                {
                    title: "NUMBER OF POLE",
                    items: [
                        "2",
                        "4",
                        "6",
                    ]
                },
                {
                    title: "MOUNTING TYPE",
                    items: [
                        "IMB3",
                        "IMB5",
                        "IMB14",
                        "IMB34",
                        "IMB35",
                    ]
                },
            ],
            useBlogStore: useBlogStore(),
            fallback: [],
        }
    },
    mounted() {
        setTimeout(() => {
            this.fallback = this.useBlogStore.electric_motors
        }, 200);
        
    },
    methods: {
        filter(){
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []
            
            if(event.target.dataset.filterby == "OUTPUT POWER"){
                let filtered = this.useBlogStore.electric_motors.filter(item => item[this.$t("lang")].specifications.Power.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby ==  "FRAME MATERIAL"){
                let filtered = this.useBlogStore.electric_motors.filter(item => item[this.$t("lang")].appearance.FrameMaterial.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby ==  "FRAME SIZE"){
                let filtered = this.useBlogStore.electric_motors.filter(item => item[this.$t("lang")].specifications.size.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby ==  "NUMBER OF POLE"){
                let filtered = this.useBlogStore.electric_motors.filter(item => item[this.$t("lang")].specifications.pole.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby ==  "MOUNTING TYPE"){
                let filtered = this.useBlogStore.electric_motors.filter(item => item[this.$t("lang")].specifications.type.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            
        },
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
        }
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
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">Industrial Electric Motors</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Industrial Electric Motors
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
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div class="h-[0px] duration-[3s]">
                            <ul class="pb-[10px]">
                                <li @click="filter()" v-for="i of item.items" :data-value="i" :data-filterby="item.title" :key="i.id"
                                    class="p-[15px] flex items-center font-[600] hover:text-[#1A94FF] duration-75 cursor-pointer">
                                    <div class="h-[8px] mr-[8px] w-[8px] rounded-[50%] bg-[#b2d2ee]"></div> {{ i }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards :title="item.en.title" :img="item.img" v-for="item of this.fallback" :key="item.id" />
                    
                </div>


            </div>
        </div>
    </div>
</template>

<style>
</style>