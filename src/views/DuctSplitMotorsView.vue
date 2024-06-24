<script  lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            mobile: false,
            burger: false,
            filters: [
                {
                    title: "OUTPUT POWER",
                    items: [
                        "187 W",
                        "250 W",
                        "360 W",
                        "600 W",
                    ]
                },

            ],
            fallback: [],
            massiv: [
                {
                    id: "air-curtain-motor",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/tahviye.svg",
                    title_en: "Air Curtain Motor",
                    sub_en: "",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4935.jpg",
                            // ----
                            en: {
                                title: "Air Curtain Motor-90W",
                                specifications: {
                                    Power: "90 W",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5714.png",
                            // ----
                            en: {
                                title: "Air Curtain Motor-45W",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                        },
                    ],
                },

                {
                    id: "duct-split-motors",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/tahviye.svg",
                    title_en: "Duct Split Motors",
                    sub_en: "",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                            // ----
                            ru: {title: "Двигатель с разделением каналов (кондиционер)-600W"},
                            uz: {title: "Kanallari ajratilgan dvigatel (konditsioner) - 600W"},
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-600W",
                                specifications: {
                                    Power: "600 W",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                            // ----
                            ru: {title: "Двигатель с разделением каналов (кондиционер)-360W"},
                            uz: {title: "Kanallari ajratilgan dvigatel (konditsioner) - 360W"},
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-360W",
                                specifications: {
                                    Power: "360 W",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                            // ----
                            ru: {title: "Двигатель с разделением каналов (кондиционер)-250W"},
                            uz: {title: "Kanallari ajratilgan dvigatel (konditsioner) - 250W"},
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-250W",
                                specifications: {
                                    Power: "250 W",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5999.png",
                            // ----
                            ru: {title: "Двигатель с разделением каналов (кондиционер)-187W"},
                            uz: {title: "Kanallari ajratilgan dvigatel (konditsioner) - 187W"},
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-187W",
                                specifications: {
                                    Power: "187 W",
                                },
                            },
                        },
                    ],
                },

                {
                    id: "fan-motors",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/tahviye.svg",
                    title_en: "Fan Motors",
                    sub_en: "",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            // ----
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-600W",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            // ----
                            en: {
                                title: "Hood Blower-AL (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "four-speed",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            // ----
                            en: {
                                title: "Hood Blower (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            // ----
                            en: {
                                title: "Hood Motor-Single Shaft-AL (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "four-speed",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            // ----
                            en: {
                                title: "Hood Blower (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            // ----
                            en: {
                                title: "Hood Motor-Single Shaft (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "four-speed",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4982.png",
                            // ----
                            en: {
                                title: "Hood Motor-Single Shaft (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                            // ----
                            en: {
                                title: "Hood Motor-Single Shaft (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 9,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                            // ----
                            en: {
                                title: "Hood Motor-Type K (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "four-speed",
                                },
                            },
                        },
                        {
                            id: 10,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-45W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Single-speed",
                                    Power: "45 W",
                                },
                            },
                        },
                        {
                            id: 11,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Two-speed",
                                    Power: "25 W",
                                },
                            },
                        },
                        {
                            id: 12,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-30W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Two-speed",
                                    Power: "30 W",
                                },
                            },
                        },
                        {
                            id: 13,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "25 W",
                                },
                            },
                        },
                        {
                            id: 14,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-16W",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "16 W",
                                },
                            },
                        },
                        {
                            id: 15,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-10W-AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "10 W",
                                },
                            },
                        },
                        {
                            id: 16,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-10W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "10 W",
                                },
                            },
                        },
                        {
                            id: 17,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-5W-AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "5 W",
                                },
                            },
                        },
                        {
                            id: 18,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            // ----
                            en: {
                                title: "Fan Motor-5W-AL",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "5 W",
                                },
                            },
                        },
                        {
                            id: 19,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                            // ----
                            en: {
                                title: "Heating Unit Fan Motor-48W helal",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                        },
                        {
                            id: 20,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            // ----
                            en: {
                                title: "Heating Unit Fan Motor-39W helal",
                                specifications: {
                                    Power: "39 W",
                                },
                            },
                        },
                    ],
                },

                {
                    id: "fan-coil-motors",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/tahviye.svg",
                    title_en: "Fan Coil Motors",
                    sub_en: "FAN COIL MOTORS",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/30HP-Double Shaft",
                                specifications: {
                                    Power: "1/30 HP",
                                    Shaft: "Double-shaft",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/30HP-Double Shaft",
                                specifications: {
                                    Power: "1/30 HP",
                                    Shaft: "Single-shaft",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/25HP-Double Shaft",
                                specifications: {
                                    Power: "1/25 HP",
                                    Shaft: "Double-shaft",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/25HP-Single Shaft",
                                specifications: {
                                    Power: "1/25 HP",
                                    Shaft: "Single-shaft",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/20HP-Double Shaft",
                                specifications: {
                                    Power: "1/20 HP",
                                    Shaft: "Double-shaft",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/20HP-Single Shaft",
                                specifications: {
                                    Power: "1/20 HP",
                                    Shaft: "Single-shaft",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5686.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/16HP-Double Shaft",
                                specifications: {
                                    Power: "1/16 kW",
                                    Shaft: "Double-shaft",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5766.png",
                            // ----
                            en: {
                                title: "Fan Coil Motor-1/16HP-Single Shaft",
                                specifications: {
                                    Power: "1/16 kW",
                                    Shaft: "Single-shaft",
                                },
                            },
                        },
                    ],
                },
                {
                    id: "industrial-exhaust-fan-motors",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/tahviye.svg",
                    title_en: "Industrial Exhaust Fan Motors",
                    sub_en: "INDUSTRIAL EXHAUST FAN MOTORS",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8109.png",
                            // ----
                            en: {
                                title: "Industrial Exhaust Fan Motors",
                                specifications: {
                                    Power: "165 W",
                                },
                            },
                        },
                    ],
                },
            ]
        }
    },
    mounted() {
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        setTimeout(() => {
            this.fallback = this.massiv[1].prod
            this.$i18n.locale = 'ru'
        }, 200);

    },
    methods: {
        filter() {
            this.burger = false
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "OUTPUT POWER") {
                let filtered = this.massiv[1].prod.filter(item => item[this.$t("lang")].specifications.Power.toLowerCase().split(' ').join('') == event.target.dataset.value.toLowerCase().split(' ').join(''))
                this.fallback = filtered
            }

        },
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
                        {{ $t("1.8") }}
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">{{ $t("1.9") }}</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px] sm:mt-[20px]">
            <h3 class="mx-auto w-[max-content] max-w-[90%] text-center sm:text-[22px] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                {{ $t("1.9") }}
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="flex items-start gap-[25px] sm:flex-col sm:px-[20px] sm:gap-[0px]">

             
                
         


                <div class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards @click="$router.push(`/ventilation-motors/duct-split-motors/${item.id}`)" :title="item[$t('lang')].title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

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