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
                        "100 W",
                        "125 W",
                        "150 W",
                        "175 W",
                        "240 W",
                        "370 W",
                        "450 W",
                        "50 W",
                        "550 W",
                        "750 W",
                    ]
                },


            ],
            fallback: [],
            massiv: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8061blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HN series-750W (Three-phase)",
                        specifications: {
                            Power: "750 W",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/woocommerce-placeholder-600x600.png",
                    // ----
                    en: {
                        title: "Burner Motor-HN series-550W",
                        specifications: {
                            Power: "550 W",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_4954.png",
                    // ----
                    en: {
                        title: "Burner Motor-HN series-450W",
                        specifications: {
                            Power: "450 W",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_4954.png",
                    // ----
                    en: {
                        title: "Burner Motor-HN series-370W",
                        specifications: {
                            Power: "370 W",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series-175W",
                        specifications: {
                            Power: "175 W",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series-150W",
                        specifications: {
                            Power: "150 W",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series-125W",
                        specifications: {
                            Power: "125 W",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series- 100W",
                        specifications: {
                            Power: "100 W",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series- 50W",
                        specifications: {
                            Power: "50 W",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8046-blur.png",
                    // ----
                    en: {
                        title: "Burner Motor-HA series-240W",
                        specifications: {
                            Power: "240 W",
                        },
                    },
                },
            ],
            mobile: false,
            burger: false,
        }
    },
    mounted() {
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(() => {
            this.fallback = this.massiv
            this.$i18n.locale = 'en'
        }, 200);

    },
    methods: {
        filter() {
            this.burger = false
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Power == event.target.dataset.value)
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
    <div id="begin" class="pt-[75px]">
        <!-- breadcrumbs  -->
        <div id="breadcrumbs" class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>

                    <li class="roboto-medium text-[#1A85FF]">Burner Motors</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]  sm:mt-[20px]">
            <h3 class="mx-auto sm:text-[22px] w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Burner Motors
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="flex items-start gap-[25px] sm:flex-col sm:px-[20px] sm:gap-[0px]">

                <div v-if="!this.mobile">
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

                <div v-if="this.mobile" @click="this.burger = true"
                    class="w-[280px] sm:w-[100%] h-[55px] sm:max-h-[45px] duration-[.3s] overflow-hidden border-[1px] mb-[25px] rounded-[15px]">
                    <div
                        class="uppercase flex justify-between items-center cursor-pointer hover:bg-slate-100 duration-[.3s] roboto-bold p-[15px] sm:text-[13px] sm:p-[12px] text-[#1B3F7B] text-[15px]">
                        {{ $t("filter") }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-5 h-5 duration-[.3s]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>

                <div v-if="this.mobile" :class="{filterBurgeractive: this.burger}" class="filterBurger ">
                    <div class="filterBurgerwrp p-[10px]">
                        <div class="overflow-y-auto h-[100%] pb-[100px] w-[100%]">
                            <div @click="this.burger = false" class="mb-[20px] bg-[red] w-[max-content] rounded-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-6 text-white h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </div>
                            <div>
                                <div class="w-[100%]">
                                    <div @click="accordion()" v-for="item of this.filters" :key="item.id"
                                        data-accordion="false"
                                        class="w-[100%] h-[55px] duration-[.3s] overflow-hidden border-[1px] mb-[15px] rounded-[15px]">
                                        <div
                                            class="uppercase flex justify-between items-center cursor-pointer hover:bg-slate-100 duration-[.3s] roboto-bold p-[15px] text-[#1B3F7B] text-[15px]">
                                            {{ item.title }}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" class="w-5 h-5 duration-[.3s]">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>

                                        </div>
                                        <div class="h-[0px] duration-[3s]">
                                            <ul class="pb-[10px]">
                                                <li @click="filter()" v-for="i of item.items" :data-value="i"
                                                    :data-filterby="item.title" :key="i.id"
                                                    class="p-[15px] flex items-center font-[600] hover:text-[#1A94FF] duration-75 cursor-pointer">
                                                    <div class="h-[8px] mr-[8px] w-[8px] rounded-[50%] bg-[#b2d2ee]">
                                                    </div> {{ i }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards @click="$router.push(`/burder-motors/${item.id}`)" :title="item.en.title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

                </div>


            </div>
        </div>
    </div>
</template>

<style>
.filterBurgeractive {
    background: rgba(0, 0, 0, 0.634) !important;
    pointer-events: fill !important;
}

.filterBurgeractive .filterBurgerwrp {
    transform: translateX(0%);
}

.filterBurger {
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
    z-index: 999999;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    transition-duration: .3s;
}

.filterBurgerwrp {
    height: 100%;
    width: 70%;
    transition-duration: .3s;
    background: white;
    transform: translateX(100%);
}
</style>