<script lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            filters: [
                {
                    title: "CONDUCTOR MATERIAL",
                    items: [
                        "AL",
                        "CU",
                    ]
                },
                {
                    title: "APPLICATION",
                    items: [
                        "Evaporative Cooler",
                        "Portable Cooler",
                    ]
                },


            ],
            fallback: [],
            massiv: [
                {
                    id: "motors-for-desert-cooler",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/cooler.svg",
                    title_en: "Motors For Desert Cooler",
                    sub_en: "MOTORS FOR DESERT COOLER",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4962-1.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Green-3/4HP-Grade C",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 HP",
                                    Material: "CU",
                                    Class: "C",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4933.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-80W (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "80 W",
                                    Material: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4933.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-80W (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4933.png",
                            // ----
                            en: {
                                title:
                                    "Evaporative Cooler Motor-Azarakhsh-Axial-75W-AL (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "AL",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4933.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-70W (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "70 W",
                                    Material: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4962.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-70W (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 HP",
                                    Material: "CU",
                                    Speed: "Two-speed",
                                    Class: "C",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8038.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-70W (Three-speed)",
                                specifications: {
                                    Power: "250 W",
                                    Material: "CU",
                                    Phase: "1",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5708.png",
                            // ----
                            en: {
                                title: "Cooler electric motor 500W lightning model",
                                specifications: {
                                    Power: "500 W",
                                    Phase: "1",
                                },
                            },
                        },
                        {
                            id: 9,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5708.png",
                            // ----
                            en: {
                                title: "Cooler electric motor 390W lightning model",
                                specifications: {
                                    Power: "390 W",
                                    Phase: "1",
                                    Material: "CU",
                                },
                            },
                        },
                        {
                            id: 10,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8038.png",
                            // ----
                            en: {
                                title: "Cooler electric motor 187W storm model",
                                specifications: {
                                    Power: "187 W",
                                    Phase: "1",
                                    Material: "CU",
                                },
                            },
                        },
                        {
                            id: 11,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8043.png",
                            // ----
                            en: {
                                title: "Cooler electric motor 187W storm model",
                                specifications: {
                                    Power: "180 W",
                                    Phase: "1",
                                    Material: "AL",
                                    Class: "E",
                                },
                            },
                        },
                        {
                            id: 12,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8043.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Raad-180W",
                                specifications: {
                                    Power: "180 W",
                                    Phase: "1",
                                    Material: "CU",
                                    Class: "D",
                                },
                            },
                        },
                        {
                            id: 13,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8038.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Toufan-150W",
                                specifications: {
                                    Power: "150 W",
                                    Material: "AL",
                                    Class: "E",
                                    Phase: "1",
                                },
                            },
                        },
                        {
                            id: 14,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8003.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-3/4HP-Grade E",
                                specifications: {
                                    Power: "3/4 HP",
                                    Material: "CU",
                                    Class: "E",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 15,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-80W",
                                specifications: {
                                    Power: "80 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 16,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-75W",
                                specifications: {
                                    Power: "75 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Three-speed",
                                },
                            },
                        },
                        {
                            id: 17,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8003.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-3/4HP-Grade E-AL",
                                specifications: {
                                    Power: "3/4 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                },
                            },
                        },
                        {
                            id: 18,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8034-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8035-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8034.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 19,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8022-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8022-copy-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8022.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Green-1/2HP-Grade C",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 21,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8022-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8022-copy-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8034.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/2HP-Grade D",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 22,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8014.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 23,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8014.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 24,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "3/4 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },
                        },
                        {
                            id: 25,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },
                        },
                        {
                            id: 26,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_6006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },
                        },
                        {
                            id: 27,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8027.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/2HP-Grade E",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 28,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8027.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-EG-1/3HP-Grade E-A",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 29,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8007-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/3HP-Grade E",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 30,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012-02-copy-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8013-02-copy-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012-02-copy.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Green-1/3HP-Grade C",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 31,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8007-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/3HP-Grade D",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 32,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8007-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8006.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/3HP-Grade E-AL",
                                specifications: {
                                    Power: "1/3 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Two-speed",
                                },
                            },
                        },
                        {
                            id: 33,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8013-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/3HP-Grade E-AL",
                                specifications: {
                                    Power: "1/4 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 34,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8013-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/4HP-Grade D",
                                specifications: {
                                    Power: "1/4 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 35,
                            additionalImages: [
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012-300x200.png",
                                "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8013-300x200.png",
                            ],
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8012.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Tondar-1/4HP-Grade E",
                                specifications: {
                                    Power: "1/4 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 36,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-1/5HP",
                                specifications: {
                                    Power: "1/5 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 37,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-1/6HP",
                                specifications: {
                                    Power: "1/6 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 38,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-1/8HP",
                                specifications: {
                                    Power: "1/8 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 39,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5772.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-1/8HP-AL",
                                specifications: {
                                    Power: "1/8 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                        {
                            id: 40,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_5989.png",
                            // ----
                            en: {
                                title: "Portable Cooler Motor-Tochal-1/20HP",
                                specifications: {
                                    Power: "1/20 HP",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Two-speed",
                                },
                            },
                        },
                    ],
                },
                {
                    id: "water-pumps-for-desert-cooler",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/cooler.svg",
                    title_en: "Water Pumps for Desert Cooler",
                    sub_en: "WATER PUMPS FOR DESERT COOLER",
                    prod: [
                        {
                            id: 1,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4942.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Damavand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
                                },
                            },
                        },
                        {
                            id: 2,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8090.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Sahand (Submersible)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8074.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Alvand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
                                },
                            },
                        },
                        {
                            id: 4,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8076.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Zagros (Low-consumption)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
                                },
                            },
                        },
                        {
                            id: 5,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8078.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Zagros (Low-consumption)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Portable Cooler",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8078.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Zagros (Low-consumption)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Evaporative Cooler",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8080.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Alborz (Two-Impeller)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Portable Cooler",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8080.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Alborz (Five-Impeller",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
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
        setTimeout(() => {
            this.fallback = this.massiv[1].prod
            this.$i18n.locale = 'en'
        }, 200);

    },
    methods: {
        filter() {
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "CONDUCTOR MATERIAL") {
                let filtered = this.massiv[1].prod.filter(item => item[this.$t("lang")].specifications.Material == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "APPLICATION") {
                let filtered = this.massiv[1].prod.filter(item => item[this.$t("lang")].specifications.Application == event.target.dataset.value)
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
                    <li class="roboto-medium text-[#1A85FF]">Water Pumps for Desert Cooler</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Water Pumps for Desert Cooler
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

                    <Cards  @click="$router.push(`/motors-and-water-pumps-for-desert-cooler/water-pumps-for-desert-cooler/${item.id}`)" :title="item.en.title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

                </div>


            </div>
        </div>
    </div>
</template>

<style></style>