<script lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            filters: [
                {
                    title: "OUTPUT POWER",
                    items: [
                        "30 W",
                        "39 W",
                        "45 W",
                        "48 W",
                        "60 W",
                    ]
                }
            ],
            fallback: [],
            massiv: [
                {
                    id: "heating-unit-pumps",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
                    title_en: "Heating Unit Pumps",
                    sub_en: "HEATING UNIT PUMPS",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8118.png",
                            en: {
                                title: "Heating Unit Water Pump-Type E",
                                specifications: {
                                    type: "Type E",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8127.png",
                            en: {
                                title: "Heating Unit Water Pump-Type A",
                                specifications: {
                                    type: "Type A",
                                },
                            },
                        },
                    ],
                },
                {
                    id: "heating-unit-fan",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
                    title_en: "Heating Unit Fan",
                    sub_en: "HEATING UNIT FAN",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-60W (Kaman)",
                                specifications: {
                                    Power: "60 W",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-45W (Kaman)",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-30W (Kaman)",
                                specifications: {
                                    Power: "30 W",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                            en: {
                                title: "Heating Unit Fan Motor-48W (Helal)",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-39W (Helal)",
                                specifications: {
                                    Power: "39 W",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                            en: {
                                title: "Heating Unit Fan Motor-30W (Helal)",
                                specifications: {
                                    Power: "30 W",
                                },
                            },
                        },
                    ],
                },
            ]
        }
    },
    mounted() {
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'en'
        this.fallback = this.massiv[1].prod
    },
    methods: {
        filter() {
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []
            if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.massiv[1].prod.filter(item => item.en.specifications.Power.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
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
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        Heating Unit Motors
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">Heating Unit Fan</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Heating Unit Fan
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

                    <Cards @click="$router.push(`/heating-unit-motors/heating-unit-fan/${item.id}`)" :title="item.en.title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

                </div>


            </div>
        </div>
    </div>
</template>

<style></style>