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
                        "13.2 kW",
                        "5.5 kW",
                        "6.1 kW",
                        "7.3 kW",
                        "9.2 kW",
                    ]
                },
                {
                    title: "NUMBER OF SPEED",
                    items: [
                        "Single-speed",
                        "Single-speed (VVVF)",
                        "Two-speed",
                        "Two-speed (AC2)",
                    ]
                },

            ],
            useBlogStore: useBlogStore(),
            massiv: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type S-5.5KW (Two-speed)",
                        specifications: {
                            Power: "5.5 kW",
                            Speed: "Two-speed",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type S-7.3KW (Single-speed)",
                        specifications: {
                            Power: "7.3 kW",
                            Speed: "Single-speed",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4963.jpg",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type S-5.5KW (Single-speed)",
                        specifications: {
                            Power: "5.5 kW",
                            Speed: "Single-speed",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-6.1KW (Two-speed)",
                        specifications: {
                            Power: "6.1 kW",
                            Speed: "Two-speed (AC2)",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-7.3KW (Single-speed)",
                        specifications: {
                            Power: "9.2 kW",
                            Speed: "Single-speed",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-7.3KW (Single-speed)",
                        specifications: {
                            Power: "7.3 kW",
                            Speed: "Single-speed",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-7.3KW (Single-speed)",
                        specifications: {
                            Power: "13.2 kW",
                            Speed: "Single-speed",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/8153.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8152-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type M-6.1KW (Two-speed)",
                        specifications: {
                            Power: "6.1 kW",
                            Speed: "Two-speed (AC2)",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/8153.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8152-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type M-9.2KW (Single-speed)",
                        specifications: {
                            Power: "9.2  kW",
                            Speed: "Single-speed (VVVF)",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/8153.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8152-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type M-9.2KW (Single-speed)",
                        specifications: {
                            Power: "7.3  kW",
                            Speed: "Single-speed (VVVF)",
                        },
                    },
                },
                {
                    id: 11,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/8153.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8152-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type M-6.1KW (Single-speed)",
                        specifications: {
                            Power: "6.1  kW",
                            Speed: "Single-speed (VVVF)",
                        },
                    },
                },
                {
                    id: 12,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/8153.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8152-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type M-13.2KW (Single-speed)",
                        specifications: {
                            Power: "13.2 kW",
                            Speed: "Single-speed (VVVF)",
                        },
                    },
                },
                {
                    id: 13,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-7.3KW (Two-speed)",
                        specifications: {
                            Power: "7.2 kW",
                            Speed: "Two-speed (AC2)",
                        },
                    },
                },
                {
                    id: 14,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070.png",
                    additionalImages: [
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8070-300x214.png",
                        "https://electrogenco.com/en/wp-content/uploads/2023/09/8153-300x200.png",
                    ],
                    en: {
                        title: "Elevator Stator & Rotor-Type E-6.1KW (Two-speed)",
                        specifications: {
                            Power: "6.1 kW",
                            Speed: "Two-speed (AC2)",
                        },
                    },
                },
            ],
            fallback: [],
        }
    },
    mounted() {
        this.fallback = this.massiv

    },
    methods: {
        filter() {
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Power.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "NUMBER OF SPEED") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Speed.split(' ').join('') == event.target.dataset.value.split(' ').join(''))
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
                    <li class="roboto-medium text-[#1A85FF]">Elevator Motors</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Elevator Motors
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