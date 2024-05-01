<script lang="ts">
import Cards from '../components/Cards.vue'
import { useBlogStore } from "../stores/products"


export default {
    components: { Cards },
    data() {
        return {
            filters: [
                {
                    title: "NUMBER OF PHASE",
                    items: [
                        "1",
                    ]
                },
                {
                    title: "OUTPUT POWER",
                    items: [
                        "1/2 HP",
                        "1/20 HP",
                        "1/3 HP",
                        "1/4 HP",
                        "1/5 HP",
                        "1/6 HP",
                        "1/8 HP",
                        "150 W",
                        "180 W",
                        "187 W",
                        "250 W",
                        "3/4 HP",
                        "390 W",
                        "500 W",
                        "70 W",
                        "75 W",
                        "80 W",
                    ]
                },
                {
                    title: "EFFICIENCY CLASS",
                    items: [
                        "A",
                        "C",
                        "D",
                        "E",
                    ]
                },
                {
                    title: "CONDUCTOR MATERIAL",
                    items: [
                        "AL",
                        "CU",

                    ]
                },
                {
                    title: "NUMBER OF SPEED",
                    items: [
                        "Three-speed",
                        "Two-speed",

                    ]
                },
                {
                    title: "PHASE NUMBER",
                    items: [
                        "1",
                    ]
                },

            ],
            useBlogStore: useBlogStore(),
            fallback: [],
        }
    },
    mounted() {
        setTimeout(() => {
            this.fallback = this.useBlogStore.water_pumps_for_desert_cooler[0].prod
            this.$i18n.locale = 'en'
        }, 200);

    },
    methods: {
        filter() {
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "NUMBER OF PHASE") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Phase == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Power == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "EFFICIENCY CLASS") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Class == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "CONDUCTOR MATERIAL") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Material == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "NUMBER OF SPEED") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Speed == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "PHASE NUMBER") {
                let filtered = this.useBlogStore.water_pumps_for_desert_cooler[0].prod.filter(item => item[this.$t("lang")].specifications.Phase == event.target.dataset.value)
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
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        Motors And Water Pumps For Desert Cooler
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">Motors For Desert Cooler</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Motors For Desert Cooler
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
                                <li @click="filter()" v-for="i of item.items" :data-value="i"
                                    :data-filterby="item.title" :key="i.id"
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

<style></style>