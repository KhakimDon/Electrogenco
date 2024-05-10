<script lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            filters: [
                {
                    title: "NUMBER OF PHASE",
                    items: ["1", "3"]
                },
                {
                    title: "OUTPUT POWER",
                    items: [
                        "1.5 HP",
                        "0.5 HP",
                        "1 HP",
                        "2 HP",
                        "3 HP",
                    ]
                },
                {
                    title: "PHASE NUMBER",
                    items: [
                        "1", "3"
                    ]
                },
                {
                    title: "NUMBER OF IMPELLER",
                    items: [
                        "Single-Impeller",
                        "Two-impeller"
                    ]
                },
            ],
            fallback: [],
            massiv: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    en: {
                        title: "Three Phase Water Pump-3HP-Two Impellers (CBT310)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "3 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    en: {
                        title: "Three Phase Water Pump-2HP-Two Impellers (CBT210)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "2 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    en: {
                        title: "Three Phase Water Pump-1.5HP-Two Impellers (CBT160)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "1.5 HP",
                            Phase: "3",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-3HP-Two Impellers (CB310)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "3 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-2HP-Two Impellers (CB210)",
                        specifications: {
                            Impeller: "Two-impeller",
                            Power: "2 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4995.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-1.5HP (CB160)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1.5 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4999.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-1HP (CAM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4997-1.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-1HP (KPM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "1 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4997-1.jpg",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-1HP (KPM100)",
                        specifications: {
                            Impeller: "Single-Impeller",
                            Power: "0.5 HP",
                            Phase: "1",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6078.png",
                    // ----
                    en: {
                        title: "Two-propeller three-phase electropump (CBT210) 2HP",
                        specifications: {
                            voltage: "10 Volts",
                        },
                        appearance: {
                            color: "Yellow",
                        },
                    },
                },
                {
                    id: 11,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6027-.png",
                    // ----
                    en: {
                        title: "Single Phase Water Pump-1HP (CM100)",
                        specifications: {
                            Power: "1 HP",
                            Impeller: "Single-Impeller",
                            Phase: "1",
                        },
                    },
                },
            ],
            mobile: false,
            burger: false,
            ru: [
                "Трехфазный водяной насос-3 л.с.-Два рабочих колеса (CBT310)",
                "Трехфазный водяной насос-2 л.с.-Два рабочих колеса (CBT 210)",
                "Трехфазный водяной насос-1,5 л.с.-Два рабочих колеса (CBT160)",
                "Однофазный водяной насос-3 л.с.-Два рабочих колеса (CB310)",
                "Однофазный водяной насос-2 л.с.-Два рабочих колеса (CB210)",
                "Однофазный водяной насос-1,5 л.с. (CB160)",
                "Однофазный водяной насос-1 л.с. (CAM100)",
                "Однофазный водяной насос Фазный водяной насос мощностью 1 л.с. (KPM100)",
                "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                "Двухвинтовой трехфазный электронасос (CBT210) мощностью 2 л.с.",
                "Однофазный водяной насос мощностью 1 л.с. (CM100)",
            ],
                finV: false,

            uz: [
                "Uch fazali suv nasosi-3 ot kuchi-ikkita pervanel (CBT310)",
                "Uch fazali suv nasosi - 2 ot kuchi-ikkita pervanel (CBT 210)",
                "Uch fazali suv nasosi - 1,5 ot kuchi-ikkita pervanel (CBT160)",
                "Bir fazali suv nasosi - 3 ot kuchi-ikkita pervanel (CB310)",
                "Bir fazali suv nasosi-2 ot kuchi-ikkita pervanel (CB210)",
                "Bir fazali suv nasosi - 1,5 ot kuchi (CB160)",
                "Bir fazali suv nasosi - 1 ot kuchi (CAM100)",
                "Bir fazali suv nasosi 1 ot kuchiga ega fazali suv nasosi (KPM100)",
                "1 ot kuchiga ega bir fazali suv nasosi (KPM100)",
                "2 ot kuchiga ega ikki vintli uch fazali elektr nasos (CBT210)",
                "1 ot kuchiga ega bir fazali suv nasosi (CM100)",
            ],
        }
    },
    mounted() {
        this.fin()
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(() => {
            this.fallback = this.massiv
        }, 200);

    },
    methods: {
        fin(){
            for (let i = 0; i < this.massiv.length; i++) {
            this.massiv[i].ru = {
                title: this.ru[i],  
            };
            this.massiv[i].uz = {
                title: this.uz[i],
            };
            console.log(this.massiv[i]);
        }
        this.finV = true
        },
        filter() {
            this.burger = false
            // console.log(event.target.dataset.filterby);
            // console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "NUMBER OF PHASE") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Phase == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Power == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "PHASE NUMBER") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Phase == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "NUMBER OF IMPELLER") {
                let filtered = this.massiv.filter(item => item[this.$t("lang")].specifications.Impeller == event.target.dataset.value)
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
                    <li class="roboto-medium text-[#1A85FF]">Water Pumps</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] sm:mt-[20px] mx-auto mt-[50px]">
            <h3 class="mx-auto sm:text-[22px] w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                WaterPumps
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

                <div v-if="this.mobile" :class="{ filterBurgeractive: this.burger }" class="filterBurger ">
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

                <div v-if="this.finV" class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards @click="$router.push(`/water-pumps/${item.id}`)" :title="item[$t('lang')].title" :img="item.img"
                        v-for="item of this.fallback" :key="item.id" />

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