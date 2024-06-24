<script lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
             ru : [
     "Двигатель воздушной завесы-90 Вт",
 "Двигатель воздушной завесы-45 Вт",
 "Двигатель с разделением каналов (кондиционер)-600 Вт",
 "Двигатель с разделением каналов (кондиционер)-360 Вт",
 "Двигатель с разделением каналов (кондиционер)-250 Вт",
 "Двигатель с разделением каналов (кондиционер)-187 Вт",
  "Двигатель с разделением каналов (кондиционер)-600 Вт",
 "Вытяжной вентилятор-AL (четырехскоростной)",
 "Вытяжной вентилятор (четырехскоростной)",
 "Вытяжной двигатель-одновальный-AL (четырехскоростной)",
 "Вытяжной вентилятор (трехскоростной)",
           "Вытяжной двигатель-одновальный (четырехскоростной)",
 "Вытяжной двигатель-одновальный (трехскоростной)",
 "Вытяжной двигатель-одновальный (трехскоростной)",
 "Вытяжной двигатель-Тип K (четырехскоростной)",
 "Двигатель вентилятора-45 Вт",
 "Двигатель вентилятора-25 Вт",
 "Двигатель вентилятора-30 Вт",
 "Двигатель вентилятора-25 Вт",
 "Двигатель вентилятора-16 Вт",
 "Двигатель вентилятора-10 Вт-AL",
 "Вентилятор Двигатель-10 Вт",
 "Двигатель вентилятора-5 Вт-AL",
 "Двигатель вентилятора-5 Вт-AL",
           "Двигатель вентилятора отопительного агрегата-48 Вт helal",
 "Двигатель вентилятора отопительного агрегата-39 Вт helal",
 "Двигатель фанкойла-1/30 л.с.-Двойной вал",
 "Двигатель фанкойла-1/30 л.с.-двойной вал",
 "Двигатель фанкойла-1/25 л.с.-Двойной вал",
 "Двигатель фанкойла-1/25 л.с.-Одиночный вал",
 "Двигатель фанкойла-1/20 л.с.-Двойной вал",
 "Двигатель фанкойла-1/20 л.с.-одиночный вал",
 "Двигатель фанкойла-1/16 л.с.-двухвальный",
 "Двигатель фанкойла-1/16 л.с.-одновальный",
           "Двигатели промышленных вытяжных вентиляторов",

    
    
    
],
 uz : [
  
     "havo pardasi dvigateli-90 Vt",
     "havo pardasi dvigateli-45 Vt",
     "kanalli Split Motor (konditsioner)-600 Vt",
     "kanalli Split Motor (konditsioner)-360 Vt",
     "kanalli Split Motor (konditsioner)-250 Vt",
     "kanalli Split Motor (konditsioner)-187 Vt",
     "kanalli Split Motor (konditsioner)-600 Vt",
     "kaput puflagich-AL (to'rt tezlikda)",
     "Kaputli puflagich (to'rt tezlikli)",
     "Hood Motor-yagona mil-AL (to'rt-tezlikda)",
     "Kaputli puflagich (uch tezlikli)",
     "Hood Motor-yagona mil (to'rt-tezlikda)",
     "Hood Motor-yagona mil (uch-tezlikda)",
     "Hood Motor-yagona mil (uch-tezlikda)",
     "Hood Motor-turi K (to'rt-tezlikda)",
     "Fan Motor-45 Vt",
     "Fan Motor-25 Vt",
     "Fan Motor-30 Vt",
     "Fan Motor-25 Vt",
     "Fan Motor-16 Vt",
     "Fan Motor-10 Vt-AL",
     "Fan Motor-10 Vt",
     "Fan Motor-5 Vt-AL",
     "Fan Motor-5 Vt-AL",
     "isitish birligi Fan Motor-48 Vt helal",
     "isitish birligi Fan Motor-39 Vt helal",
     "Fan halqa Motor-1/30hp-ikki mil",
     "Fan halqa Motor-1/30hp-ikki mil",
     "Fan halqa Motor-1/25hp-ikki mil",
     "Fan halqa Motor-1/25hp-yagona mil",
     "Fan halqa Motor-1/20hp-ikki mil",
     "Fan halqa Motor-1/20hp-yagona mil",
     "Fan halqa Motor-1/16hp-ikki mil",
     "Fan halqa Motor-1/16hp-yagona mil",
     "sanoat chiqarish Fan motorlar",

  
  
  
],
            mobile: false,
            burger: false,
            filters: [
                {
                    en: "OUTPUT POWER",
                    uz: "chiqish quvvati",
                    ru: "выходная мощность",
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
                                title: "Heating Unit Fan Motor-48W helal",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-39W helal",
                                specifications: {
                                    Power: "39 W",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                            en: {
                                title: "Heating Unit Fan Motor-30W helal",
                                specifications: {
                                    Power: "30 W",
                                },
                            },
                        },
                    ],
                },
            ],
            finV: false,
        }
    },
    mounted() {
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'ru'
        this.fallback = this.massiv[1].prod
        this.fin()
    },
    methods: {
        fin(){
            for (let i = 0; i < this.massiv[1].prod.length; i++) {
            this.massiv[1].prod[i].ru = {  
                title: this.ru[i],  
            };
            this.massiv[1].prod[i].uz = {
                title: this.uz[i],
            };
            this.finV = true
        }
        },
        filter() {
            this.burger = false
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []
            // uz: "chiqish quvvati",
            // ru: "выходная мощность",
            if (event.target.dataset.filterby == "OUTPUT POWER" || event.target.dataset.filterby == "выходная мощность" || event.target.dataset.filterby == "chiqish quvvati") {
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
    <div id="begin" class="pt-[75px]">
        <!-- breadcrumbs  -->
        <div id="breadcrumbs" class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("All_products") }}
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">{{ $t("1.4") }}</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px] sm:mt-[20px]">
            <h3 class="mx-auto w-[max-content]  sm:text-[22px] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                {{ $t("1.4") }}
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>

            <div class="flex items-start gap-[25px] sm:flex-col sm:px-[20px] sm:gap-[0px]">

                <div v-if="!this.mobile">
                    <div @click="accordion()" v-for="item of this.filters" :key="item.id" data-accordion="false"
                        class="w-[280px] h-[55px] duration-[.3s] overflow-hidden border-[1px] mb-[25px] rounded-[15px]">
                        <div
                            class="uppercase flex justify-between items-center cursor-pointer hover:bg-slate-100 duration-[.3s] roboto-bold p-[15px] text-[#1B3F7B] text-[15px]">
                            {{ item[$t('lang')] }}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-5 h-5 duration-[.3s]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div class="h-[0px] duration-[3s]">
                            <ul class="pb-[10px]">
                                <li @click="filter()" v-for="i of item.items" :data-value="i"
                                    :data-filterby="item[$t('lang')]" :key="i.id"
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

                    <Cards @click="$router.push(`/heating-unit-motors/heating-unit-fan/${item.id}`)" :title="item[$t('lang')].title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

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