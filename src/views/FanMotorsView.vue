<script lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            mobile: false,
            burger: false,
            filters: [
                {
                    en: "OUTPUT POWER",
                    ru: "ВЫХОДНАЯ МОЩНОСТЬ",
                    uz: "CHIQISH QUVVATI",
                    items: {
                        en: ["10 W",
                            "16 W",
                            "25 W",
                            "30 W",
                            "39 W",
                            "45 W",
                            "48 W",
                            "5 W",],
                        ru: ["10 W",
                            "16 W",
                            "25 W",
                            "30 W",
                            "39 W",
                            "45 W",
                            "48 W",
                            "5 W",],
                        uz: ["10 W",
                            "16 W",
                            "25 W",
                            "30 W",
                            "39 W",
                            "45 W",
                            "48 W",
                            "5 W",],
                    }
                },
                {
                    en: "CONDUCTOR MATERIAL",
                    ru: "МАТЕРИАЛ ПРОВОДНИКА",
                    uz: "O'TKAZUVCHI MATERIAL",
                    items: {
                        en: ["AL",
                            "CU",],
                        ru: ["AL",
                            "CU",],
                        uz: ["AL",
                            "CU",],
                    }
                },
                {
                    en: "NUMBER OF SPEED",
                    ru: "Количество скоростей",
                    uz: "Tezlik soni",
                    items: {
                        en: ["four-speed",
                            "Single-speed",
                            "Three-speed",
                            "Two-speed",],
                        ru: ["Четыре скоростей",
                            "Одна скорость",
                            "Три скоростей",
                            "Две скоростей",],
                        uz: ["To'rt tezlikli",
                            "Bir tezlikli",
                            "Uch tezlikli",
                            "Ikki tezlikli",],
                    }
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
                            en: {
                                title: "Duct Split Motor (Air-conditioner)-600W",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                            ru: {
                                title: "Двигатель с разделением каналов (кондиционер)-600W",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                            uz: {
                                title: "Kanalli ajratilgan motor (konditsioner)-600W",
                                specifications: {
                                    Power: "45 W",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            en: {
                                title: "Hood Blower-AL (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "four-speed",
                                },
                            },
                            ru: {
                                title: "Вентилятор вытяжки-AL (четырехскоростной)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "Четыре скорости",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori-AL (To'rt tezlik)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "To'rt tezlik",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            en: {
                                title: "Hood Blower (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Four-speed",
                                },
                            },
                            ru: {
                                title: "Вентилятор вытяжкиs (четырехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Четыре скорости",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori (To'rt tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "To'rt tezlik",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            en: {
                                title: "Hood Motor-Single Shaft-AL (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "four-speed",
                                },
                            },
                            ru: {
                                title: "Мотор Единый-мотор AL (четырехскоростной)",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "Четыре скорости",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori Motor-Yagona AL (To'rt tezlik)",
                                 specifications: {
                                    ConductorMaterial: "AL",
                                    Speed: "To'rt tezlik",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            en: {
                                title: "Hood Motor-Single Shaft (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "four-speed",
                                },
                            },
                            ru: {
                                title: "Мотор вытяжки-один (четырехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Четыре скорости",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori Motor-Yagona (To'rt tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "To'rt tezlik",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4925.jpg",
                            en: {
                                title: "Hood Blower (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                            ru: {
                                title: "Вентилятор вытяжки (трехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Три скорости",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori (Uch tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Uch tezlik",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4982.png",
                            en: {
                                title: "Hood Motor-Single Shaft (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                            ru: {
                                title: "Мотор вытяжки единыймотор (трехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori Motor-Yagona (Uch tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Uch tezlik",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                            en: {
                                title: "Hood Motor-Single Shaft (Three-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                            ru: {
                                title: "Мотор вытяжки единый мотор вал (трехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori Motor-Yagona  (Uch tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Uch tezlik",
                                },
                            },
                        },
                        {
                            id: 9,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4979.png",
                            en: {
                                title: "Hood Motor-Type K (Four-speed)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "four-speed",
                                },
                            },
                            ru: {
                                title: "Мотор вытяжки-Тип К (четырехскоростной)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "четырехскоростной",
                                },
                            },
                            uz: {
                                title: "Shamollatish ventilyatori Motor-Turi K (To'rt tezlik)",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "To'rt tezlik",
                                },
                            },
                        },
                        {
                            id: 10,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-45W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Single-speed",
                                    Power: "45 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-45W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Односкоросной",
                                    Power: "45 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-45W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Bir tezlik",
                                    Power: "45 W",
                                },
                            },
                        },
                        {
                            id: 11,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Two-speed",
                                    Power: "25 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Двухскоростной",
                                    Power: "25 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Ikki tezlik",
                                    Power: "25 W",
                                },
                            },
                        },
                        {
                            id: 12,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-30W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Two-speed",
                                    Power: "30 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-30W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Двухскоростной",
                                    Power: "30 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-30W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Speed: "Ikki tezlik",
                                    Power: "30 W",
                                },
                            },
                        },
                        {
                            id: 13,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "25 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "25 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-25W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "25 W",
                                },
                            },
                        },
                        {
                            id: 14,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-16W",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "16 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-16W",
                                 specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "16 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-16W",
                                 specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "16 W",
                                },
                            },
                        },
                        {
                            id: 15,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-10W-AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "10 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-10W - AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "10 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-10W - AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "10 W",
                                },
                            },
                        },
                        {
                            id: 16,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-10W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "10 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-10W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "10 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-10W",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "10 W",
                                },
                            },
                        },
                        {
                            id: 17,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-5W-AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "5 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-5W - AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "5 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-5W - AL",
                                specifications: {
                                    ConductorMaterial: "AL",
                                    Power: "5 W",
                                },
                            },
                        },
                        {
                            id: 18,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8097.png",
                            en: {
                                title: "Fan Motor-5W-AL",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "5 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора-5W - AL",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "5 W",
                                },
                            },
                            uz: {
                                title: "Ventilyator Motor-5W - AL",
                                specifications: {
                                    ConductorMaterial: "CU",
                                    Power: "5 W",
                                },
                            },
                        },
                        {
                            id: 19,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8136.png",
                            en: {
                                title: "Heating Unit Fan Motor-48W",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора отопительного блока-48W",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                            uz: {
                                title: "Heating Unit Fan Motor-48W",
                                specifications: {
                                    Power: "48 W",
                                },
                            },
                        },
                        {
                            id: 20,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4938.png",
                            en: {
                                title: "Heating Unit Fan Motor-39W",
                                specifications: {
                                    Power: "39 W",
                                },
                            },
                            ru: {
                                title: "Мотор вентилятора отопительного блока-39W",
                                specifications: {
                                    Power: "39 W",
                                },
                            },
                            uz: {
                                title: "Heating Unit Fan Motor-39W",
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
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(() => {
            this.fallback = this.massiv[2].prod
            this.$i18n.locale = 'ru'
        }, 200);

    },
    methods: {
        filter() {
            this.burger = false
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "OUTPUT POWER" ||
                event.target.dataset.filterby == "ВЫХОДНАЯ МОЩНОСТЬ" ||
                event.target.dataset.filterby == "CHIQISH QUVVATI"
            ) {
                let filtered = this.massiv[2].prod.filter(item => item.en.specifications.Power == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "CONDUCTOR MATERIAL" ||
                event.target.dataset.filterby == "МАТЕРИАЛ ПРОВОДНИКА" ||
                event.target.dataset.filterby == "O'TKAZUVCHI MATERIAL") {
                let filtered = this.massiv[2].prod.filter(item => item.en.specifications.ConductorMaterial == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "NUMBER OF SPEED" ||
                event.target.dataset.filterby == "Количество скоростей" ||
                event.target.dataset.filterby == "Tezlik soni") {
                let filtered = this.massiv[2].prod.filter(item => item.en.specifications.Speed == event.target.dataset.value)
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
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("1.8") }}
                    </li>
                    <li class="roboto-medium text-[#1A85FF]">{{ $t("2.1") }}</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px] sm:mt-[20px]">
            <h3 class="mx-auto w-[max-content] sm:text-[22px] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                {{ $t("2.1") }}
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
                                <li @click="filter()" v-for="i of item.items[$t('lang')]"
                                    :data-value="item.items.en[item.items[$i18n.locale].indexOf(i)]"
                                    :data-filterby="item[$i18n.locale]" :key="i.id"
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

                <div class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards @click="$router.push(`/ventilation-motors/fan-motors/${item.id}`)" :title="item[$t('lang')].title"
                        :img="item.img" v-for="item of this.fallback" :key="item.id" />

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