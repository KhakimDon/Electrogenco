<script lang="ts">
import Cards from '../components/Cards.vue'
import { useBlogStore } from "../stores/products"
import { defineComponent } from 'vue'


export default defineComponent({
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
            eventpage: 1,
            massiv: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_5010.jpg",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "5.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 2,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_5010.jpg",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "4 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 3,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.jpg",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 250-4 Poles-55KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "250",
                            pole: "4",
                            Power: "55 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 4,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 250-2 Poles-55KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "250",
                            pole: "2",
                            Power: "55 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 5,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 225-4 Poles-45KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "225",
                            pole: "4",
                            Power: "45 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 6,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 225-2 Poles-45KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "225",
                            pole: "2",
                            Power: "45 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 7,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 225-2 Poles-45KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "200",
                            pole: "4",
                            Power: "30 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 8,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 200-2 Poles-37KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "200",
                            pole: "2",
                            Power: "37 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 9,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 200-2 Poles-30KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "200",
                            pole: "2",
                            Power: "30 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 10,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 180-4 Poles-22KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "180",
                            pole: "4",
                            Power: "22 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 11,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 180-4 Poles-18.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "180",
                            pole: "4",
                            Power: "18.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 12,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5019.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 180-2 Poles-22KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "226",
                            pole: "4",
                            Power: "45 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 17,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 180-2 Poles-22KW-IMB35",
                        appearance: {
                            FrameMaterial: "Cast Iron",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "7.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 13,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 14,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 15,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_5010.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 16,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "11 kW",
                            type: "IMB35",
                        },
                    },
                },

                {
                    id: 18,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "11 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 19,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-11KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "11 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 20,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "7.4 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 21,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "7.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 22,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-6 Poles-7.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "6",
                            Power: "7.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 23,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "15 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 24,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "15 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 25,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-15KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "15 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 26,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "11 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 27,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "11 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 28,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "11 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 29,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-4 Poles-11KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "11 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 30,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "4",
                            Power: "18.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 31,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "18.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 32,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-18.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "18.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 33,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "15 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 34,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "15 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 35,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-15KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "15 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 36,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "11 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 37,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "11 kW",
                            type: "IMB5",
                        },
                    },
                },

                {
                    id: 38,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 160-2 Poles-11KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "160",
                            pole: "2",
                            Power: "11 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 39,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 40,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 41,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "4 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 42,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "4 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 43,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-4KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "4 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 44,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "3 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 45,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "3 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 46,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-6 Poles-3KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "6",
                            Power: "3 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 47,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-7.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "7.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 48,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-7.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "7.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 49,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 50,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 51,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 52,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 53,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-4 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 54,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "4",
                            Power: "7.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 55,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 56,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 57,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 58,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 59,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-7.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 60,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 61,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 62,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 63,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "7.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 64,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9208.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 65,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9191.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 66,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/02/FAG_9211.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 132-2 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "132",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 67,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "6",
                            Power: "2.2 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 68,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "6",
                            Power: "2.2 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 69,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "6",
                            Power: "2.2 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 70,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "6",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 71,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-6 Poles-2.2KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "6",
                            Power: "2.2 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 72,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 73,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 74,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB34",
                        },
                    },
                },

                {
                    id: 75,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB14",
                        },
                    },
                },

                {
                    id: 76,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },

                {
                    id: 77,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "5.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 78,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 79,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB14",
                        },
                    },
                },

                {
                    id: 80,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 81,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 112-4 Poles-2.2KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB3",
                        },
                    },
                },

                {
                    id: 82,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 83,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB34",
                        },
                    },
                },

                {
                    id: 84,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 85,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 86,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 87,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-4 Poles-4KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "4",
                            Power: "4 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 88,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 89,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 90,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 91,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 92,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-5.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "5.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 93,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "4 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 94,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "4 kW",
                            type: "IMB34",
                        },
                    },
                },

                {
                    id: 95,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "4 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 96,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "4 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 97,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 112-2 Poles-4KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "112",
                            pole: "2",
                            Power: "4 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 98,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 99,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 100,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },

                {
                    id: 101,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 100-4 Poles-2.2KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 102,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 103,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 104,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 105,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 106,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 107,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-3KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 108,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB35",
                        },
                    },
                },

                {
                    id: 109,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 110,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 111,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 112,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 113,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-4 Poles-2.2KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "2.2 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 114,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "4",
                            Power: "3 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 115,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "2",
                            Power: "3 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 116,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "2",
                            Power: "3 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 117,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "2",
                            Power: "3 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 118,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 100-2 Poles-3KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "100",
                            pole: "2",
                            Power: "3 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 119,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 120,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 121,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB14",
                        },
                    },
                },

                {
                    id: 122,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 123,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 124,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 125,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 126,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 127,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 128,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 129,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 130,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 131,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 132,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-4 Poles-1.1KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB3",
                        },
                    },
                },

                {
                    id: 133,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 134,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 135,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 136,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-4 Poles-1.1KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "4",
                            Power: "1.1 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 137,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "2.2 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 138,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "2.2 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 139,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "2.2 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 140,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "2.2 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 141,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-2.2KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "2.2 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 142,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB35",
                        },
                    },
                },

                {
                    id: 143,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 144,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 145,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 146,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 90-2 Poles-1.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 147,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 148,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 149,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 150,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 90-2 Poles-1.5KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "90",
                            pole: "2",
                            Power: "1.5 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 151,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 152,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "550 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 153,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 154,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 155,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 156,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 157,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 158,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 159,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 160,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-6 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 161,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 162,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },

                {
                    id: 163,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 164,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-6 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 165,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "750 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 166,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "6",
                            Power: "750 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 167,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 168,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 169,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-750W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 170,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 171,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 172,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 173,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-750W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "750 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 174,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 175,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 176,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 177,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 178,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-4 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 179,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 180,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 181,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 182,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-4 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 183,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 184,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 185,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 186,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 187,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-750W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 188,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 189,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 190,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 191,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-750W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 192,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 193,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 194,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 195,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 196,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 80-2 Poles-1.1KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 197,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 198,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 199,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 200,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 80-2 Poles-1.1KW-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "80",
                            pole: "2",
                            Power: "1.1 kW",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 201,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 203,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 202,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 203,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 204,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 205,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "500 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 206,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "500 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 207,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "500 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 208,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-500W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "500 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 209,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 210,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 211,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 212,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 213,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 214,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 215,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 216,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 217,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-4 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 218,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "250 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 219,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "250 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 220,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "250 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 221,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-4 Poles-250W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "4",
                            Power: "250 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 222,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 223,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 224,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 225,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 226,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-750W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "750 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 227,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 228,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 229,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 230,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 231,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 232,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 233,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 234,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 235,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-550W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "550 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 236,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 237,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 238,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 239,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 240,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 241,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 242,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 243,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 244,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 245,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 71-2 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 246,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 247,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 248,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 249,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 71-2 Poles-370W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "71",
                            pole: "2",
                            Power: "370 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 250,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 251,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 252,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 253,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 254,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-180W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 255,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 256,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 257,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 258,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-180W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "180 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 259,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 260,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 261,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 262,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 263,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-4 Poles-120W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 264,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 265,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 266,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 267,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-2.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-4 Poles-120W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "4",
                            Power: "120 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 268,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 269,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 270,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 271,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 272,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373-1.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-250W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 273,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 274,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9413-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 275,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9166-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 276,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328-1.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-250W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "250 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 277,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9421.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 278,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9432.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB34",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB34",
                        },
                    },
                },
                {
                    id: 279,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9131.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB14",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB14",
                        },
                    },
                },
                {
                    id: 280,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9125.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB5",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB5",
                        },
                    },
                },
                {
                    id: 281,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9373.png",
                    // ----
                    en: {
                        title: "Three Phase Motor-Frame 63-2 Poles-180W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB3",
                        },
                    },
                },
                {
                    id: 282,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9352.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-180W-IMB35",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB35",
                        },
                    },
                },
                {
                    id: 283,
                    img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_9328.png",
                    // ----
                    en: {
                        title: "Single Phase Motor-Frame 63-2 Poles-180W-IMB3",
                        appearance: {
                            FrameMaterial: "Aluminium",
                        },
                        specifications: {
                            size: "63",
                            pole: "2",
                            Power: "180 W",
                            type: "IMB3",
                        },
                    },
                },
            ],
            fallback: [],
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
        for (let i = 0; i < this.massiv.length; i += 6) {
            this.fallback.push(this.massiv.slice(i, i + 6));
        }
    },
    methods: {
        inc() {
            if (this.eventpage < this.fallback.length) {
                this.eventpage++
            }
        },
        dec() {
            if (this.eventpage > 1) {
                this.eventpage--
            }
        },
        shows(arr) {
            this.fallback = []
            for (let i = 0; i < arr.length; i += 6) {
                this.fallback.push(arr.slice(i, i + 6));
            }
        },
        filter() {
            let filterby = event.target.dataset.filterby
            let value = event.target.dataset.value
            if (filterby == "OUTPUT POWER") {
                let filtered = this.massiv.filter(item => item.en.specifications.Power.toLowerCase().split(' ').join('') == value.toLowerCase().split(' ').join(''))
                this.shows(filtered)

            }
            else if (filterby == "FRAME MATERIAL") {
                let filtered = this.massiv.filter(item => item.en.appearance.FrameMaterial.toLowerCase().split(' ').join('') == value.toLowerCase().split(' ').join(''))
                this.shows(filtered)

            }
            else if (filterby == "FRAME SIZE") {
                let filtered = this.massiv.filter(item => item.en.specifications.size.toLowerCase().split(' ').join('') == value.toLowerCase().split(' ').join(''))
                this.shows(filtered)

            }
            else if (filterby == "NUMBER OF POLE") {
                let filtered = this.massiv.filter(item => item.en.specifications.pole.toLowerCase().split(' ').join('') == value.toLowerCase().split(' ').join(''))
                this.shows(filtered)

            }
            else if (filterby == "MOUNTING TYPE") {
                let filtered = this.massiv.filter(item => item.en.specifications.type.toLowerCase().split(' ').join('') == value.toLowerCase().split(' ').join(''))
                this.shows(filtered)

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
})
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

                    <Cards @click="$router.push(`/industrial-electric-motors/${item.id}`)" :title="item.en.title" :img="item.img" v-for="item of this.fallback[this.eventpage - 1]"
                        :key="item.id" />

                    <div class="w-[100%]">
                        <div class="h-[40px] items-center justify-between w-[max-content] flex flex-wrap">
                            <button @click="dec()" class="btn hover:text-[white] hover:bg-[#1A94FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                </svg>
                            </button>
                            <div class="px-[10px]">
                                <span class="text-[23px] roboto-meduim">{{ this.eventpage }}</span>
                                /
                                <span class="text-[23px] roboto-meduim">{{ this.fallback.length }}</span>
                            </div>
                            <button @click="inc()" class="btn hover:text-[white] hover:bg-[#1A94FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>

                            </button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style></style>