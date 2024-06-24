<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    mounted() {
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'ru'
        this.fin()

        this.n = +window.location.pathname.split('/')[2] - 1

      
    },
    data() {
        return {
            finV: false,
            massiv: [
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
            ru: [
                "Насос испарительного охладителя-Damavand",
                "Насос испарительного охладителя-Sahand (погружной)",
                "Насос испарительного охладителя-Alvand",
                "Насос испарительного охладителя-Zagros (с низким потреблением)",
                "Насос испарительного охладителя-Zagros (с низким потреблением)",
                "Насос испарительного охладителя-Zagros (с низким потреблением)",
                "Насос испарительного охладителя-Alborz (с двумя крыльчатками)",
                "Насос испарительного охладителя-Alborz (с пятью крыльчатками)",
                "Двигатель испарительного охладителя-Зеленый-3/4 л.с.-Класс С",
                "Двигатель испарительного охладителя-Azarakhsh-Axial-80W (трехскоростной)",
                "Двигатель испарительного охладителя-Azarakhsh-Axial-80W (трехскоростной)",
                "Двигатель испарительного охладителя-Azarakhsh-Axial-70W (трехскоростной)",
                "Двигатель испарительного охладителя-Azarakhsh-Axial-70W (трехскоростной)",
                "Двигатель испарительного охладителя-Azarakhsh-Axial-70W (трехскоростной)",
                "Более холодный электродвигатель мощностью 500 Вт модели lightning",
                "Более холодный электродвигатель мощностью 390 Вт модели lightning",
                "Электродвигатель охладителя мощностью 187 Вт модели storm",
                "Электродвигатель охладителя мощностью 187 Вт модели storm",
                "Двигатель испарительного охладителя мощностью Raad-180 Вт",
                "Двигатель испарительного охладителя мощностью Toufan-150 Вт",
                "Двигатель испарительного охладителя мощностью EG-3/4 л.с. E",
                "Двигатель портативного охладителя-Tochal-80 Вт",
                "Двигатель портативного охладителя-Tochal-75 Вт",
                "Двигатель испарительного охладителя-EG-3/4 л.с.-Класс E-AL",
                "Двигатель испарительного охладителя-Tondar-1/2 л.с.-класс E",
                "Двигатель испарительного охладителя-Green-1/2 л.с.-Класс C",
                "Двигатель испарительного охладителя-Tondar-1/2 л.с.-класс D",
                "Двигатель испарительного охладителя-EG-1/2 л.с.-класс E",
                "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                "Двигатель испарительного охладителя-EG-1/2 л.с.-класс E",
                "Двигатель испарительного охладителя-EG-1/2 л.с.-класс E",
                "Двигатель испарительного охладителя -EG-1/2 л.с.-класс E",
                "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                "Двигатель испарительного охладителя-EG-1/3 л.с.-класс E-A",
                "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс E",
                "Двигатель испарительного охладителя-Зеленый-1/3 л.с.-класс C",
                "Двигатель испарительного охладителя-Tondar-1/3 л.с.-класс D",
                "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс E-AL",
                "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс E-AL",
                "Двигатель испарительного охладителя-Tondar-1/4 л.с.-класс D",
                "Двигатель испарительного охладителя-Tondar-1/4 л.с.-Класс E",
                "Портативный двигатель-охладитель-Точал-1/5 л.с.",
                "Двигатель портативного охладителя-Tochal-1/6 л.с.",
                "Двигатель портативного охладителя-Tochal-1/8 л.с.",
                "Двигатель портативного охладителя-Tochal-1/8 л.с.",
                "Двигатель портативного охладителя-Tochal-1/20 л.с.",
                "Двигатель горелки-серия HN-750 Вт (трехфазный)",
                "Двигатель горелки-серия HN-550 Вт",
                "Двигатель горелки-серия HN-450 Вт",
                "Двигатель горелки-серия HN-370 Вт",
                "Двигатель горелки-серия HA-175 Вт",
                "Двигатель горелки-серия HA-150 Вт",
                "Двигатель горелки-серия HA-125 Вт",
                "Двигатель горелки-серия HA- 100 Вт",
                "Двигатель горелки-серия HA- 50 Вт",
                "Двигатель горелки-серия HA-240 Вт",
                "Двигатель с разделением каналов (кондиционер)-600 Вт",
                "Вытяжной вентилятор-AL (четырехскоростной)",
                "Вытяжной вентилятор (четырехскоростной)",
                "Вытяжной двигатель-Одновальный-AL (четырехскоростной)",
                "Вытяжной вентилятор (трехскоростной)",
                "Вытяжной двигатель -одновальный (четырехскоростной)",
                "Вытяжной двигатель-одновальный (трехскоростной)",
                "Двигатель вытяжки-одновальный (трехскоростной)",
                "Двигатель вытяжки-Тип K (четырехскоростной)",
                "Двигатель вентилятора-45 Вт",
                "Двигатель вентилятора-25 Вт",
                "Двигатель вентилятора-30 Вт",
                "Двигатель вентилятора-25 Вт",
                "Двигатель вентилятора-16 Вт",
                "Двигатель вентилятора-10 Вт-AL",
                "Двигатель вентилятора-10 Вт",
                "Двигатель вентилятора-5 Вт-AL",
                "Двигатель вентилятора-5 Вт-AL",
                "Двигатель вентилятора отопительного агрегата-48 Вт helal",
                "Двигатель вентилятора отопительного агрегата-39 Вт helal",
                "Двигатель фанкойла-1/30 л.с.-Двойной вал",
                "Двигатель фанкойла-1/30 л.с.-Двойной вал",
                "Двигатель фанкойла -1/25 л.с.-Двойной вал",
                "Двигатель фанкойла-1/25 л.с.-одинарный вал",
                "Двигатель фанкойла-1/20 л.с.-Двойной вал",
                "Двигатель фанкойла-1/20 л.с.-Одинарный вал",
                "Двигатель фанкойла-1/16 л.с.-Двойной вал",
                "Двигатель фанкойла-1/16 л.с.-одинарный вал",
                "Двигатели промышленных вытяжных вентиляторов",
                "Двигатель воздушной завесы-90 Вт",
                "Двигатель воздушной завесы-45 Вт",
                "Двигатель с разделением каналов (кондиционер)-600 Вт",
                "Двигатель с разделением каналов (кондиционер)-360 Вт",
                "Двигатель с разделением каналов (кондиционер)-250 Вт",
                "Двигатель с разделением каналов",
                "Двигатель (кондиционер)-187 Вт",
                "Трехфазный водяной насос-3 л.с.-Два рабочих колеса (CBT310)",
                "Трехфазный водяной насос-2 л.с.-Два рабочих колеса (CBT210)",
                "Трехфазный водяной насос-1,5 л.с.-Два рабочих колеса (CBT160)",
                "Однофазный водяной насос мощностью 3 л.с. с двумя рабочими колесами (CB310)",
                "Однофазный водяной насос мощностью 2 л.с. с двумя рабочими колесами (CB210)",
                "Однофазный водяной насос мощностью 1,5 л.с. (CB160)",
                "Однофазный водяной насос мощностью 1 л.с. (CAM100)",
                "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                "Двухвинтовой трехфазный электронасос (CBT210) мощностью 2 л.с.",
                "Однофазный водяной насос мощностью 1 л.с. (CM100)",
                "Двигатель вентилятора отопительного агрегата мощностью 60 Вт (Kaman)",
                "Двигатель вентилятора отопительного агрегата мощностью 45 Вт (Kaman)",
                "Двигатель вентилятора отопительного агрегата мощностью 30 Вт (Kaman)",
                "Двигатель вентилятора отопительного агрегата мощностью 48 Вт helal",
                "Двигатель вентилятора отопительного агрегата мощностью 39 Вт helal",
                "Двигатель вентилятора отопительного агрегата мощностью 30 Вт helal",
                "Отопление Водяной насос агрегата-тип E",
                "Водяной насос отопительного агрегата-тип A",
                "Статор и ротор лифта-Тип S-5,5 кВт (двухскоростной)",
                "Статор и ротор лифта-Тип S-7,3 кВт (односкоростной)",
                "Статор и ротор лифта типа S-5,5 кВт (односкоростной)",
                "Статор и ротор лифта типа E-6,1кВт (двухскоростной)",
                "Статор и ротор лифта типа E-7,3 кВт (односкоростной)",
                "Статор и ротор лифта типа E-7,3 кВт (односкоростной)",
                "Статор и ротор лифта типа E-7,3кВт (односкоростной)",
                "Статор и ротор лифта типа M-6,1 кВт (двухскоростной)",
                "Статор и ротор лифта типа M-9,2 кВт (односкоростной)",
                "Статор и ротор лифта типа M-9,2кВт (односкоростной)",
                "Статор и ротор лифта типа M-6,1 кВт (односкоростной)",
                "Статор и ротор лифта типа M-13,2кВт (односкоростной)",
                "Статор и ротор лифта типа E-7,3 кВт (двухскоростной)",
                "Статор и ротор лифта типа E-6,1 кВт (двухскоростной)",
                "Трехфазный двигатель-рама 132-6 полюсов-5,5 кВт-IMB34",
                "Трехфазный двигатель-рама 132-6 полюсов-4 кВт-IMB34",
                "Трехфазный двигатель-рама 250-4 полюса-55 кВт-IMB35",
                "Трехфазный двигатель-рама 250-2 полюса-55 КВТ-IMB35",
                "Трехфазный двигатель-Рама 225-4 полюса-45 кВт-IMB35",
                "Трехфазный двигатель-рама 225-2 полюса-45 кВт-IMB35",
                "Трехфазный двигатель-рама 225-2 полюса-45 кВт-IMB35",
                "Трехфазный двигатель-рама 200-2 полюса-37 кВт-IMB35",
                "Трехфазный двигатель-рама 200-2 полюса-30 кВт-IMB35",
                "Трехфазный двигатель-рама 180-4 полюса-22 кВт-IMB35",
                "Трехфазный двигатель-рама 180-4 полюса-18,5 кВт-IMB35",
                "Трехфазный двигатель-рама 180-2 полюса-22 кВт-IMB35",
                "Трехфазный двигатель-Рама 180-2 опоры-22 кВт-IMB35",
                "Трехфазный двигатель-рама 132-4 полюса-5,5кВт-IMB34",
                "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB34",
                "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB34",
                "Трехфазный двигатель-рама 160-6 Полюса-11 КВТ-IMB35",
                "Трехфазный двигатель-рама 160-6 полюсов-11 КВТ-IMB5",
                "Трехфазный двигатель-рама 160-6 полюсов-11 кВт-IMB3",
                "Трехфазный двигатель-рама 160-6 полюсов-7,5 кВт-IMB35",
                "Три Фазный двигатель-Рама 160-6 полюсов-7,5 кВт-IMB5",
                "Трехфазный двигатель-рама 160-6 полюсов-7,5 кВт-IMB3",
                "Трехфазный двигатель-рама 160-4 полюса-15 кВт-IMB35",
                "Трехфазный двигатель-рама 160-4 полюса-15 кВт-IMB5",
                "Трехфазный двигатель-рама 160-4 полюса-15 КВТ-IMB3",
                "Трехфазный двигатель-рама 160-4 полюса-11 КВТ-IMB35",
                "Трехфазный двигатель-рама 160-4 полюса-11 КВТ-IMB5",
                "Трехфазный двигатель-рама 160-4 полюса-11 кВт-IMB5",
                "Трехфазный двигатель-Рама 160-4 опоры-11 кВт-IMB3",
                //   line 4     
                "Трехфазный двигатель-рама 160-2 полюса-18,5КВТ-IMB35",
                "Трехфазный двигатель-рама 160-2 полюса-18,5 КВТ-IMB5",
                "Трехфазный двигатель-рама 160-2 полюса-18,5 кВт-IMB3",
                "Трехфазный двигатель-рама 160-2 Полюса-15 КВТ-IMB35",
                "Трехфазный двигатель-рама 160-2 полюса-15 кВт-IMB5",
                "Трехфазный двигатель-рама 160-2 полюса-15 кВт-IMB3",
                "Трехфазный двигатель-рама 160-2 полюса-11 кВт-IMB35",
                "Трехфазный двигатель-рама Мотор-рама 160-2 полюса-11 кВт-IMB5",
                "Трехфазный двигатель-рама 160-2 полюса-11 КВТ-IMB3",
                "Трехфазный двигатель-рама 132-6 полюсов-5,5 КВТ-IMB35",
                "Трехфазный двигатель-рама 132-6 полюсов-5,5 кВт-IMB5",
                "Трехфазный двигатель-рама 132-6 полюсов-4 КВТ-IMB35",
                "Трехфазный двигатель-рама 132-6 полюсов-4 КВТ-IMB5",
                "Трехфазный двигатель-рама 132-6 полюсов-4 КВТ-IMB3",
                "Трехфазный двигатель-рама 132-6 полюсов-3 кВт-IMB35",
                "Трехфазный двигатель-Рама 132-6 полюсов-3 кВт-IMB5",
                "Трехфазный двигатель-рама 132-6 полюсов-3 КВТ-IMB3",
                "Трехфазный двигатель-рама 132-4 полюса-7,5 КВТ-IMB5",
                "Трехфазный двигатель-рама 132-4 полюса-7,5 кВт-IMB3",
                "Трехфазный двигатель-рама 132-4 полюса-5,5КВТ-IMB35",
                "Трехфазный двигатель-рама 132-4 полюса-5,5 КВТ-IMB35",
                "Трехфазный двигатель-рама 132-4 полюса-5,5 КВТ-IMB5",
                "Трехфазный двигатель-рама 132-4 полюса-5,5 кВт-IMB5",
                "Трехфазный двигатель-Рама 132-4 полюса-5,5 кВт-IMB3",
                "Трехфазный двигатель-рама 132-2 полюса-7,5КВТ-IMB35",
                "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB35",
                "Трехфазный двигатель-рама 132-2 полюса-7,5 кВт-IMB5",
                "Трехфазный двигатель-рама 132-2 Полюсов-7,5КВТ-IMB5",
                "Трехфазный двигатель-рама 132-2 полюса-7,5КВТ-IMB5",
                "Трехфазный двигатель-рама 132-2 полюса-7,5 КВТ-IMB3",
                "Трехфазный двигатель-рама 132-2 полюса-5,5кВт-IMB35",
                "Трехфазный двигатель-Рама 132-2 полюса-5,5 кВт-IMB5",
                "Трехфазный двигатель-рама 132-2 полюса-5,5КВТ-IMB3",
                "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB3",
                "Трехфазный двигатель-рама 132-2 полюса-5,5 кВт-IMB35",
                "Трехфазный двигатель-рама 132-2 Полюса-5,5КВТ-IMB35",
                "Трехфазный двигатель-рама 132-2 полюса-5,5КВТ-IMB3",
                "Трехфазный двигатель-рама 112-6 полюсов-2,2КВТ-IMB35",
                "Трехфазный двигатель-рама 112-6 полюсов-2,2кВт-IMB34",
                "Трехфазный двигатель-Рама 112-6 полюсов-2,2 кВт-IMB14",
                "Трехфазный двигатель-рама 112-6 полюсов-2,2КВТ-IMB5",
                "Трехфазный двигатель-рама 112-6 полюсов-2,2 КВТ-IMB3",
                "Трехфазный двигатель-рама 112-4 полюса-5,5 кВт-IMB35",
                "Трехфазный двигатель-рама 112-4 Полюса-5,5КВТ-IMB35",
                "Трехфазный двигатель-рама 112-4 полюса-5,5КВТ-IMB34",
                "Трехфазный двигатель-рама 112-4 полюса-5,5 КВТ-IMB14",
                "Трехфазный двигатель-рама 112-4 полюса-5,5кВт-IMB5",
                "Трехфазный двигатель-Рама 112-4 полюса-5,5 кВт-IMB3",
                "Однофазный двигатель-рама 112-4 полюса-2,2КВТ-IMB35",
                "Однофазный двигатель-рама 112-4 полюса-2,2 КВТ-IMB14",
                "Однофазный двигатель-рама 112-4 полюса-2,2 КВТ-IMB5",
                "Однофазный двигатель-рама 112-4 Полюса-2,2КВТ-IMB3",
                "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB35",
                "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB34",
                "Трехфазный двигатель-рама 112-4 полюса-4 кВт-IMB34",
                "Три Фазный двигатель-Рама 112-4 полюса-4 кВт-IMB14",
                "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB5",
                "Трехфазный двигатель-рама 112-4 полюса-4 КВТ-IMB3",
                "Трехфазный двигатель-рама 112-2 полюса-5,5 кВт-IMB35",
                "Трехфазный двигатель-рама 112-2 полюса-5,5КВТ-IMB34",
                "Трехфазный двигатель-рама 112-2 полюса-5,5КВТ-IMB14",
                "Трехфазный двигатель-рама 112-2 полюса-5,5 КВТ-IMB5",
                "Трехфазный двигатель-рама 112-2 полюса-5,5кВт-IMB3",
                "Трехфазный двигатель-Рама 112-2 полюса-4 кВт-IMB35",
                "Трехфазный двигатель-рама 112-2 полюса-4 КВТ-IMB34",
                "Трехфазный двигатель-рама 112-2 полюса-4 КВТ-IMB14",
                "Трехфазный двигатель-рама 112-2 полюса-4 кВт-IMB5",
                "Трехфазный двигатель-рама 112-2 полюса-4 кВт-IMB3",
                "Однофазный двигатель-рама 100-4 полюса-2,2КВТ-IMB35",
                "Однофазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB14",
                "Однофазный двигатель-рама 100-4 полюса-2,2 кВт-IMB5",
                "Однофазный двигатель-рама Мотор-рама 100-4 полюса-2,2кВт-IMB3",
                "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB35",
                "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB35",
                "Трехфазный двигатель-рама 100-4 полюса-3 кВт-IMB34",
                "Трехфазный двигатель-рама 100-4 полюса-3 кВт-IMB14",
                "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB5",
                "Трехфазный двигатель-рама 100-4 полюса-3 КВТ-IMB3",
                "Трехфазный двигатель-рама 100-4 полюса-2,2 кВт-IMB35",
                "Трехфазный двигатель-Рама на 100-4 опоры-2,2кВт-IMB34",
                "Трехфазный двигатель-рама 100-4 полюса-2,2КВТ-IMB14",
                "Трехфазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB5",
                "Трехфазный двигатель-рама 100-4 полюса-2,2 КВТ-IMB5",
                "Трехфазный двигатель-рама 100-4 Полюса-2,2кВт-IMB3",
                "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB35",
                "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB34",
                "Трехфазный двигатель-рама 100-2 полюса-3 кВт-IMB14",
                "Трехфазный двигатель-рама 100-2 полюса-3 кВт-IMB5",
                "Трехфазный двигатель-рама 100-2 полюса-3 КВТ-IMB3",
                "Трехфазный двигатель-рама 90-4 полюса-1,5 КВТ-IMB35",
                "Трехфазный двигатель-рама 90-4 полюса-1,5 кВт-IMB34",
                "Трехфазный двигатель-Рама на 90-4 опоры-1,5кВт-IMB14",
                "Трехфазный двигатель-рама 90-4 полюса-1,5 КВТ-IMB5",
                "Трехфазный двигатель-рама 90-4 полюса-1,5 КВТ-IMB3",
                "Однофазный двигатель-рама 90-4 полюса-1,5 кВт-IMB35",
                "Однофазный двигатель-рама 90-4 Полюсов-1,5КВТ-IMB14",
                "Однофазный двигатель-рама 90-4 полюса-1,5КВТ-IMB5",
                "Однофазный двигатель-рама 90-4 полюса-1,5КВТ-IMB3",
                "Трехфазный двигатель-рама 90-4 полюса-1,1кВт-IMB35",
                "Трехфазный двигатель-Рама 90-4 полюса-1,1 кВт-IMB34",
                "Трехфазный двигатель-рама 90-4 полюса-1,1КВТ-IMB14",
                "Трехфазный двигатель-рама 90-4 полюса-1,1 КВТ-IMB5",
                "Трехфазный двигатель-рама 90-4 полюса-1,1 кВт-IMB3",
                "Однофазный двигатель-рама 90-4 Полюсов-1,1КВТ-IMB35",
                "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB14",
                "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB5",
                "Однофазный двигатель-рама 90-4 полюса-1,1КВТ-IMB3",
                "Трехфазный двигатель-Рама 90-2 полюса-2,2 кВт-IMB35",
                "Трехфазный двигатель-рама 90-2 полюса-2,2КВТ-IMB34",
                "Трехфазный двигатель-рама 90-2 полюса-2,2 КВТ-IMB14",
                "Трехфазный двигатель-рама 90-2 полюса-2,2 КВТ-IMB5",
                "Трехфазный двигатель-рама 90-2 Полюсов-2,2КВТ-IMB3",
                "Трехфазный двигатель-рама 90-2 полюса-1,5КВТ-IMB35",
                "Трехфазный двигатель-рама 90-2 полюса-1,5КВТ-IMB34",
                "Трехфазный двигатель-рама 90-2 полюса-1,5кВт-IMB14",
                "Трехфазный двигатель-Рама 90-2 полюса-1,5 кВт-IMB5",
                "Трехфазный двигатель-рама 90-2 полюса-1,5 КВТ-IMB3",
                "Однофазный двигатель-рама 90-2 полюса-1,5 КВТ-IMB35",
                "Однофазный двигатель-рама 90-2 полюса-1,5 кВт-IMB14",
                "Однофазный двигатель-рама 90-2 Полюсов-1,5КВТ-IMB5",
                "Однофазный двигатель-рама 90-2 полюса-1,5КВТ-IMB3",
                "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB35",
                "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB34",
                "Трехфазный двигатель-Рама 80-6 полюсов-550 Вт-IMB14",
                "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB5",
                "Трехфазный двигатель-рама 80-6 полюсов-550 Вт-IMB3",
                "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB35",
                "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB34",
                "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB14",
                "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB5",
                "Трехфазный двигатель-рама 80-6 полюсов-370 Вт-IMB3",
                "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB35",
                "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB14",
                "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB5",
                "Однофазный двигатель-рама 80-6 полюсов-370 Вт-IMB3",
                "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB35",
                "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB34",
                "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB14",
                "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB5",
                "Трехфазный двигатель-рама 80-4 полюса-750 Вт-IMB3",
                //   line 5 
                "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB35",
                "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB14",
                "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB5",
                "Однофазный двигатель-рама 80-4 полюса-750 Вт-IMB3",
                "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB35",
                "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB34",
                "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB14",
                "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB5",
                "Трехфазный двигатель-рама 80-4 полюса-550 Вт-IMB3",
                "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB35",
                "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB14",
                "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB5",
                "Однофазный двигатель-рама 80-4 полюса-550 Вт-IMB3",
                "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB35",
                "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB34",
                "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB14",
                "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB5",
                "Трехфазный двигатель-рама 80-2 полюса-750 Вт-IMB3",
                "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB35",
                "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB14",
                "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB5",
                "Однофазный двигатель-рама 80-2 полюса-750 Вт-IMB3",
                "Трехфазный двигатель-рама 80-2 полюса-1,1 кВт-IMB35",
                "Трехфазный двигатель-Рама на 80-2 опоры-1,1кВт-IMB34",
                "Трехфазный двигатель-рама 80-2 полюса-1,1КВТ-IMB14",
                "Трехфазный двигатель-рама 80-2 полюса-1,1 КВТ-IMB5",
                "Трехфазный двигатель-рама 80-2 полюса-1,1 кВт-IMB3",
                "Однофазный двигатель-рама 80-2 Полюсов-1,1КВТ-IMB35",
                "Однофазный двигатель-рама 80-2 полюса-1,1КВТ-IMB14",
                "Однофазный двигатель-рама 80-2 полюса-1,1КВТ-IMB5",
                "Однофазный двигатель-рама 80-2 полюса-1,1КВТ-IMB3",
                "Трехфазный двигатель-Рама 71-4 полюса-550 Вт-IMB35",
                "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB34",
                "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB14",
                "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB5",
                "Трехфазный двигатель-рама 71-4 полюса-550 Вт-IMB3",
                "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB35",
                "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB14",
                "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB5",
                "Однофазный двигатель-рама 71-4 полюса-500 Вт-IMB3",
                "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB35",
                "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB34",
                "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB14",
                "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB5",
                "Трехфазный двигатель-рама 71-4 полюса-370 Вт-IMB3",
                "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB35",
                "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB14",
                "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB5",
                "Однофазный двигатель-рама 71-4 полюса-370 Вт-IMB3",
                "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB35",
                "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB35",
                "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB5",
                "Трехфазный двигатель-рама 71-4 полюса-250 Вт-IMB3",
                "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB35",
                "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB34",
                "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB14",
                "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB5",
                "Трехфазный двигатель-рама 71-2 полюса-750 Вт-IMB3",
                "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
                "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB34",
                "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB14",
                "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB5",
                "Трехфазный двигатель-рама 71-2 полюса-550 Вт-IMB3",
                "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
                "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB14",
                "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB35",
                "Однофазный двигатель-рама 71-2 полюса-550 Вт-IMB3",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB34",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
                "Трехфазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB35",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB14",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB5",
                "Однофазный двигатель-рама 71-2 полюса-370 Вт-IMB3",
                "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB35",
                "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB34",
                "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB14",
                "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB5",
                "Трехфазный двигатель-рама 63-4 полюса-180 Вт-IMB3",
                "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB35",
                "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB14",
                "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB5",
                "Однофазный двигатель-рама 63-4 полюса-180 Вт-IMB3",
                "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB35",
                "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB34",
                "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB14",
                "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB5",
                "Трехфазный двигатель-рама 63-4 полюса-120 Вт-IMB3",
                "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB35",
                "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB14",
                "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB5",
                "Однофазный двигатель-рама 63-4 полюса-120 Вт-IMB3",
                "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB35",
                "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB34",
                "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB34",
                "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB5",
                "Трехфазный двигатель-рама 63-2 полюса-250 Вт-IMB3",
                "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB35",
                "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB14",
                "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB5",
                "Однофазный двигатель-рама 63-2 полюса-250 Вт-IMB3",
                "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB35",
                "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB34",
                "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB14",
                "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB5",
                "Трехфазный двигатель-рама 63-2 полюса-180 Вт-IMB3",
                "Однофазный двигатель-рама 63-2 полюса-180 Вт-IMB35",
                "Однофазный двигатель-Рама 63-2 полюса-180 Вт-IMB3",
            ],
            uz: [
                "Bug'lanish sovutgichi nasosi-Damavand",
                "Bug'lanish sovutgichi nasosi-Sahand (suv osti)",
                "Bug'lanish sovutgichi nasosi-Alvand",
                "Bug'lanish sovutgichi nasosi-Zagros (kam iste'mol)",
                "Bug'lanish sovutgichi nasosi-Zagros (kam iste'mol)",
                "Bug'lanish sovutgichi nasosi-Zagros (kam iste'mol)",
                "Bug'lanish sovutgichi pompasi-Alborz (ikkita pervanel bilan)",
                "Bug'lanish sovutgichi pompasi-Alborz (beshta pervanel bilan)",
                "Bug'lantiruvchi sovutgich dvigateli-yashil-3/4 ot kuchi-C klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Azarakhsh-Axial-80W (uch tezlikli)",
                "Bug'lantiruvchi sovutgich dvigateli-Azarakhsh-Axial-80W (uch tezlikli)",
                "Bug'lantiruvchi sovutgich dvigateli-Azarakhsh-Axial-70W (uch tezlikli)",
                "Bug'lantiruvchi sovutgich dvigateli-Azarakhsh-Axial-70W (uch tezlikli)",
                "Bug'lantiruvchi sovutgich dvigateli-Azarakhsh-Axial-70W (uch tezlikli)",
                "Lightning modelining 500 Vt sovuqroq elektr dvigateli",
                "Lightning modelining 390 Vt sovuqroq elektr dvigateli",
                "Storm modelining 187 Vt sovutgichli elektr dvigateli",
                "Storm modelining 187 Vt sovutgichli elektr dvigateli",
                "Raad-180 Vt bug'lantiruvchi sovutgich dvigateli",
                "Toufan-150 Vt bug'lantiruvchi sovutgich dvigateli",
                "Eg-3/4 ot kuchiga ega evaporatator sovutgich dvigateli",
                "Portativ sovutgich dvigateli-Tochal-80W",
                "Portativ sovutgich dvigateli-Tochal-75 Vt",
                "Bug'lantiruvchi sovutgich dvigateli-EG-3/4 ot kuchi-E-Al klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/2 ot kuchi-e klassi",
                "Bug'lantiruvchi sovutgich dvigateli-yashil-1/2 ot kuchi-C klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar-1/2 ot kuchi-D sinf",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-e klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-E klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-e klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-e klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-e klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/2 ot kuchi-E klassi",
                "Bug'lantiruvchi sovutgich dvigateli-EG-1/3 ot kuchi-e-a klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/3 ot kuchi-E klassi",
                "Bug'lantiruvchi sovutgich dvigateli-yashil-1/3 ot kuchi-C klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/3 ot kuchi-D sinf",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/3 ot kuchi-E-Al klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/3 ot kuchi-E-Al klassi",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar-1/4 ot kuchi-D sinf",
                "Bug'lantiruvchi sovutgich dvigateli-Tondar - 1/4 ot kuchi-E klassi",
                "Portativ sovutgich dvigateli-Tochal-1/5 ot kuchi",
                "Portativ sovutgich dvigateli-Tochal-1/6 ot kuchi",
                "Portativ sovutgich dvigateli-Tochal-1/8 ot kuchi",
                "Portativ sovutgich dvigateli-Tochal-1/8 ot kuchi",
                "Portativ sovutgich dvigateli-Tochal-1/20 ot kuchi",
                "Burner dvigateli-hn-750W seriyali (uch fazali)",
                "Burner dvigateli-hn-550W seriyali",
                "Burner dvigateli-hn-450W seriyali",
                "Burner dvigateli-hn-370w seriyali",
                "Burner dvigateli-ha-175 Vt seriyali",
                "Burner dvigateli-ha-150w seriyali",
                "Burner dvigateli-ha-125 Vt seriyali",
                "Burner dvigateli - HA-100W seriyali",
                "Burner dvigateli - ha-50W seriyali",
                "Burner dvigateli-ha-240w seriyali",
                "Ajratilgan dvigatel (konditsioner) -600 Vt",
                "Egzoz foniy-AL (to'rt tezlikli)",
                "Egzoz foniy (to'rt tezlikli)",
                "Egzoz dvigateli-bitta valli-AL (to'rt tezlikli)",
                "Egzoz foniy (uch tezlikli)",
                "Egzoz dvigateli-bitta (to'rt tezlikli)",
                "Egzoz dvigateli-bitta (uch tezlikli)",
                "Egzoz dvigateli-bitta (uch tezlikli)",
                "Kaput dvigateli-K turi (to'rt tezlikli)",
                "Fan dvigateli-45 Vt",
                "Fan dvigateli-25 Vt",
                "Fan dvigateli-30 Vt",
                "Fan dvigateli-25 Vt",
                "Fan dvigateli-16 Vt",
                "Fan dvigateli-10 Vt-AL",
                "Fan dvigateli-10 Vt",
                "Fan dvigateli - 5W-AL",
                "Fan dvigateli - 5W-AL",
                "Isitish moslamasining fan dvigateli-48 Vt helal",
                "Isitish moslamasining fan dvigateli-39 Vt helal",
                "Fan lasan dvigateli - 1/30 ot kuchi-er-xotin mil",
                "Fan lasan dvigateli - 1/30 ot kuchi-er-xotin mil",
                "Fan lasan dvigateli -1 / 25 ot kuchi-er-xotin mil",
                "Fan lasan dvigateli-1/25 ot kuchi-bitta mil",
                "Fan lasan dvigateli - 1/20 ot kuchi-er-xotin mil",
                "Fan lasan dvigateli-1/20 ot kuchi-bitta mil",
                "Fan lasan dvigateli - 1/16 ot kuchi-er-xotin mil",
                "Fan lasan dvigateli-1/16 ot kuchi-bitta mil",
                "Sanoat egzoz fanining dvigatellari",
                "Havo pardasi dvigateli - 90 Vt",
                "Havo pardasi dvigateli - 45 Vt",
                "Ajratilgan dvigatel (konditsioner) -600 Vt",
                "Ajratilgan dvigatel (konditsioner) -360 Vt",
                "Ajratilgan dvigatel (konditsioner) -250 Vt",
                "Ajratilgan dvigatel",
                "Dvigatel (konditsioner) -187 Vt",
                "Uch fazali suv nasosi - 3 ot kuchi-ikkita pervanel (CBT310)",
                "Uch fazali suv nasosi-2 ot kuchi-ikkita pervanel (CBT210)",
                "Uch fazali suv nasosi - 1,5 ot kuchi-ikkita pervanel (CBT160)",
                "Ikki g'ildirakli (CB310) bir fazali 3 ot kuchiga ega suv nasosi",
                "Ikki g'ildirakli bitta fazali 2 ot kuchiga ega suv nasosi (CB210)",
                "1,5 ot kuchiga ega bir fazali suv nasosi (CB160)",
                "1 ot kuchiga ega bir fazali suv nasosi (CAM100)",
                "1 ot kuchiga ega bir fazali suv nasosi (KPM100)",
                "1 ot kuchiga ega bir fazali suv nasosi (KPM100)",
                "2 ot kuchiga ega ikki vintli uch fazali elektr nasos (CBT210)",
                "1 ot kuchiga ega bir fazali suv nasosi (CM100)",
                "60 Vt (Kaman) isitish moslamasining fan dvigateli",
                "45 Vt (Kaman) isitish moslamasining fan dvigateli",
                "30 Vt (Kaman) isitish moslamasining fan dvigateli",
                "48 Vt helal isitish moslamasining fan dvigateli",
                "39 Vt helal isitish moslamasining fan dvigateli",
                "30 Vt helal isitish moslamasining fan dvigateli",
                "Isitish suv nasosi birligi-e turi",
                "Isitish moslamasining suv nasosi-a turi",
                "Lift statori va rotori-S turi-5,5 kVt (ikki tezlikli)",
                "Lift statori va rotori-S turi-7,3 kVt (bitta tezlikda)",
                "S tipidagi lift statori va rotori-5,5 kVt (bitta tezlikda)",
                "E tipidagi lift statori va rotori-6,1 kVt (ikki tezlikli)",
                "E tipidagi lift statori va rotori-7,3 kVt (bitta tezlikda)",
                "E tipidagi lift statori va rotori-7,3 kVt (bitta tezlikda)",
                "E tipidagi lift statori va rotori-7,3 kVt (bitta tezlikda)",
                "M tipidagi lift statori va rotori-6,1 kVt (ikki tezlikli)",
                "M tipidagi lift statori va rotori-9,2 kVt (bitta tezlikda)",
                "M tipidagi lift statori va rotori-9,2 kVt (bitta tezlikda)",
                "M tipidagi lift statori va rotori-6,1 kVt (bitta tezlikda)",
                "M tipidagi lift statori va rotori-13,2 kVt (bitta tezlikda)",
                "E tipidagi lift statori va rotori-7,3 kVt (ikki tezlikli)",
                "E tipidagi lift statori va rotori-6,1 kVt (ikki tezlikli)",
                "Uch fazali dvigatel-132-6 qutbli ramka-5,5 kVt-IMB34",
                "Uch fazali dvigatel-132-6 qutbli ramka-4 kVt-IMB34",
                "Uch fazali dvigatel-ramka 250-4 qutb-55 kVt-IMB35",
                "Uch fazali dvigatel-250-2 qutbli ramka-55 kVt-IMB35",
                "Uch fazali dvigatel-ramka 225-4 qutb-45 kVt-IMB35",
                "Uch fazali dvigatel-225-2 qutbli ramka-45 kVt-IMB35",
                "Uch fazali dvigatel-225-2 qutbli ramka-45 kVt-IMB35",
                "Uch fazali dvigatel-200-2 qutbli ramka-37 kVt-IMB35",
                "Uch fazali dvigatel-200-2 qutbli ramka-30 kVt-IMB35",
                "Uch fazali dvigatel-180-4 qutbli ramka-22 kVt-IMB35",
                "Uch fazali dvigatel-180-4 qutbli ramka-18,5 kVt-IMB35",
                "Uch fazali dvigatel-ramka 180-2 qutb-22 kVt-IMB35",
                "Uch fazali dvigatel-ramka 180-2 tayanch-22 kVt-IMB35",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB34",
                "Uch fazali dvigatel-132-2 qutbli ramka - 7,5 kVt-IMB34",
                "Uch fazali dvigatel-132-2 qutbli ramka - 5,5 kVt-IMB34",
                "Uch fazali dvigatel-160-6 qutbli ramka-11 kVt-IMB35",
                "Uch fazali dvigatel-160-6 qutbli ramka-11 kVt-IMB5",
                "Uch fazali dvigatel-160-6 qutbli ramka-11 kVt-IMB3",
                "Uch fazali dvigatel-160-6 qutbli ramka-7,5 kVt-IMB35",
                "Uch fazali dvigatel-160-6 qutbli ramka-7,5 kVt-IMB5",
                "Uch fazali dvigatel-160-6 qutbli ramka-7,5 kVt-IMB3",
                "Uch fazali dvigatel-160-4 qutbli ramka-15 kVt-IMB35",
                "Uch fazali dvigatel-160-4 qutbli ramka-15 kVt-IMB5",
                "Uch fazali dvigatel-160-4 qutbli ramka-15 kVt-IMB3",
                "Uch fazali dvigatel-160-4 qutbli ramka-11 kVt-IMB35",
                "Uch fazali dvigatel-160-4 qutbli ramka-11 kVt-IMB5",
                "Uch fazali dvigatel-160-4 qutbli ramka-11 kVt-IMB5",
                "Uch fazali dvigatel-160-4 tayanchli ramka-11 kVt-IMB3",
                "Uch fazali dvigatel-160-2 qutbli ramka-18,5 kVt-IMB35",
                "Uch fazali dvigatel-160-2 qutbli ramka-18,5 kVt-IMB5",
                "Uch fazali dvigatel-160-2 qutbli ramka-18,5 kVt-IMB3",
                "Uch fazali dvigatel-160-2 qutbli ramka-15 kVt-IMB35",
                "Uch fazali dvigatel-160-2 qutbli ramka-15 kVt-IMB5",
                "Uch fazali dvigatel-160-2 qutbli ramka-15 kVt-IMB3",
                "Uch fazali dvigatel-160-2 qutbli ramka-11 kVt-IMB35",
                "Uch fazali dvigatel-ramka Motor-ramka 160-2 qutb-11 kVt-IMB5",
                "Uch fazali dvigatel-160-2 qutbli ramka-11 kVt-IMB3",
                "Uch fazali dvigatel-132-6 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-6 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-132-6 qutbli ramka-4 kVt-IMB35",
                "Uch fazali dvigatel-132-6 qutbli ramka-4 kVt-IMB5",
                "Uch fazali dvigatel-132-6 qutbli ramka-4 kVt-IMB3",
                "Uch fazali dvigatel-132-6 qutbli ramka-3 kVt-IMB35",
                "Uch fazali dvigatel-132-6 qutbli ramka-3 kVt-IMB5",
                "Uch fazali dvigatel-132-6 qutbli ramka-3 kVt-IMB3",
                "Uch fazali dvigatel-132-4 qutbli ramka-7,5 kVt-IMB5",
                "Uch fazali dvigatel-132-4 qutbli ramka-7,5 kVt-IMB3",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-132-4 qutbli ramka-5,5 kVt-IMB3",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB35",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB35",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB5",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB5",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB5",
                "Uch fazali dvigatel-132-2 qutbli ramka-7,5 kVt-IMB3",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB3",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB3",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-132-2 qutbli ramka-5,5 kVt-IMB3",
                "Uch fazali dvigatel-112-6 qutbli ramka-2,2 kVt-IMB35",
                "Uch fazali dvigatel-112-6 qutbli ramka-2,2 kVt-IMB34",
                "Uch fazali dvigatel-112-6 qutbli ramka-2,2 kVt-IMB14",
                "Uch fazali dvigatel-112-6 qutbli ramka-2,2 kVt-IMB5",
                "Uch fazali dvigatel-112-6 qutbli ramka-2,2 kVt-IMB3",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB34",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB14",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-112-4 qutbli ramka-5,5 kVt-IMB3",
                "Bir fazali dvigatel-112-4 qutbli ramka-2,2 kVt-IMB35",
                "Bir fazali dvigatel-112-4 qutbli ramka-2,2 kVt-IMB14",
                "Bir fazali dvigatel-112-4 qutbli ramka-2,2 kVt-IMB5",
                "Bir fazali dvigatel-112-4 qutbli ramka-2,2 kVt-IMB3",
                "Uch fazali dvigatel-ramka 112-4 qutb-4 kVt-IMB35",
                "Uch fazali dvigatel-ramka 112-4 qutb-4 kVt-IMB34",
                "Uch fazali dvigatel-ramka 112-4 qutb-4 kVt-IMB34",
                "Uch fazali dvigatel-112-4 qutbli ramka-4 kVt-IMB14",
                "Uch fazali dvigatel-ramka 112-4 qutb-4 kVt-IMB5",
                "Uch fazali dvigatel-ramka 112-4 qutb-4 kVt-IMB3",
                "Uch fazali dvigatel-112-2 qutbli ramka-5,5 kVt-IMB35",
                "Uch fazali dvigatel-112-2 qutbli ramka-5,5 kVt-IMB34",
                "Uch fazali dvigatel-112-2 qutbli ramka-5,5 kVt-IMB14",
                "Uch fazali dvigatel-112-2 qutbli ramka-5,5 kVt-IMB5",
                "Uch fazali dvigatel-112-2 qutbli ramka-5,5 kVt-IMB3",
                "Uch fazali dvigatel-112-2 qutbli ramka-4 kVt-IMB35",
                "Uch fazali dvigatel-112-2 qutbli ramka-4 kVt-IMB34",
                "Uch fazali dvigatel-112-2 qutbli ramka-4 kVt-IMB14",
                "Uch fazali dvigatel-112-2 qutbli ramka-4 kVt-IMB5",
                "Uch fazali dvigatel-112-2 qutbli ramka-4 kVt-IMB3",
                "Bir fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB35",
                "Bir fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB14",
                "Bir fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB5",
                "Bir fazali dvigatel-ramka Motor-ramka 100-4 qutb-2,2 kVt-IMB3",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB35",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB35",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB34",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB14",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB5",
                "Uch fazali dvigatel-100-4 qutbli ramka-3 kVt-IMB3",
                "Uch fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB35",
                "Uch fazali dvigatel-100-4 tayanchli ramka-2,2 kVt-IMB34",
                "Uch fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB14",
                "Uch fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB5",
                "Uch fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB5",
                "Uch fazali dvigatel-100-4 qutbli ramka-2,2 kVt-IMB3",
                "Uch fazali dvigatel-100-2 qutbli ramka-3 kVt-IMB35",
                "Uch fazali dvigatel-100-2 qutbli ramka-3 kVt-IMB34",
                "Uch fazali dvigatel-100-2 qutbli ramka-3 kVt-IMB14",
                "Uch fazali dvigatel-100-2 qutbli ramka-3 kVt-IMB5",
                "Uch fazali dvigatel-100-2 qutbli ramka-3 kVt-IMB3",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB35",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB34",
                "Uch fazali dvigatel-90-4 tayanchli ramka-1,5 kVt-IMB14",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB5",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB3",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB35",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB14",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB5",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,5 kVt-IMB3",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB35",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB34",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB14",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB5",
                "Uch fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB3",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB35",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB14",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB5",
                "Bir fazali dvigatel-90-4 qutbli ramka-1,1 kVt-IMB3",
                "Uch fazali dvigatel-90-2 qutbli ramka-2,2 kVt-IMB35",
                "Uch fazali dvigatel-90-2 qutbli ramka-2,2 kVt-IMB34",
                "Uch fazali dvigatel-90-2 qutbli ramka-2,2 kVt-IMB14",
                "Uch fazali dvigatel-90-2 qutbli ramka-2,2 kVt-IMB5",
                "Uch fazali dvigatel-90-2 qutbli ramka-2,2 kVt-IMB3",
                "Uch fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB35",
                "Uch fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB34",
                "Uch fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB14",
                "Uch fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB5",
                "Uch fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB3",
                "Bir fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB35",
                "Bir fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB14",
                "Bir fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB5",
                "Bir fazali dvigatel-90-2 qutbli ramka-1,5 kVt-IMB3",
                "Uch fazali dvigatel-80-6 qutbli ramka-550 Vt-IMB35",
                "Uch fazali dvigatel-80-6 qutbli ramka-550 Vt-IMB34",
                "Uch fazali dvigatel-80-6 qutbli ramka-550 Vt-IMB14",
                "Uch fazali dvigatel-80-6 qutbli ramka-550 Vt-IMB5",
                "Uch fazali dvigatel-80-6 qutbli ramka-550 Vt-IMB3",
                "Uch fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB35",
                "Uch fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB34",
                "Uch fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB14",
                "Uch fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB5",
                "Uch fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB3",
                "Bir fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB35",
                "Bir fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB14",
                "Bir fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB5",
                "Bir fazali dvigatel-80-6 qutbli ramka-370 Vt-IMB3",
                "Uch fazali dvigatel-80-4 qutbli ramka - 750 Vt-IMB35",
                "Uch fazali dvigatel-80-4 qutbli ramka - 750 Vt-IMB34",
                "Uch fazali dvigatel-80-4 qutbli ramka - 750 Vt-IMB14",
                "Uch fazali dvigatel-80-4 qutbli ramka-750 Vt-IMB5",
                "Uch fazali dvigatel-80-4 qutbli ramka-750 Vt-IMB3",
                "Bir fazali dvigatel-80-4 qutbli ramka - 750 Vt-IMB35",
                "Bir fazali dvigatel-80-4 qutbli ramka - 750 Vt-IMB14",
                "Bir fazali dvigatel-80-4 qutbli ramka-750 Vt-IMB5",
                "Bir fazali dvigatel-80-4 qutbli ramka-750 Vt-IMB3",
                "Uch fazali dvigatel-80-4 qutbli ramka - 550 Vt-IMB35",
                "Uch fazali dvigatel-80-4 qutbli ramka - 550 Vt-IMB34",
                "Uch fazali dvigatel-80-4 qutbli ramka - 550 Vt-IMB14",
                "Uch fazali dvigatel-80-4 qutbli ramka-550 Vt-IMB5",
                "Uch fazali dvigatel-80-4 qutbli ramka-550 Vt-IMB3",
                "Bir fazali dvigatel-80-4 qutbli ramka - 550 Vt-IMB35",
                "Bir fazali dvigatel-80-4 qutbli ramka-550 Vt-IMB14",
                "Bir fazali dvigatel-80-4 qutbli ramka-550 Vt-IMB5",
                "Bir fazali dvigatel-80-4 qutbli ramka - 550 Vt-IMB3",
                "Uch fazali dvigatel-80-2 qutbli ramka - 750 Vt-IMB35",
                "Uch fazali dvigatel-80-2 qutbli ramka - 750 Vt-IMB34",
                "Uch fazali dvigatel-80-2 qutbli ramka - 750 Vt-IMB14",
                "Uch fazali dvigatel-80-2 qutbli ramka-750 Vt-IMB5",
                "Uch fazali dvigatel-80-2 qutbli ramka-750 Vt-IMB3",
                "Bir fazali dvigatel-80-2 qutbli ramka - 750 Vt-IMB35",
                "Bir fazali dvigatel-80-2 qutbli ramka - 750 Vt-IMB14",
                "Bir fazali dvigatel-80-2 qutbli ramka-750 Vt-IMB5",
                "Bir fazali dvigatel-80-2 qutbli ramka-750 Vt-IMB3",
                "Uch fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB35",
                "Uch fazali dvigatel-80-2 tayanchli ramka-1,1 kVt-IMB34",
                "Uch fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB14",
                "Uch fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB5",
                "Uch fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB3",
                "Bir fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB35",
                "Bir fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB14",
                "Bir fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB5",
                "Bir fazali dvigatel-80-2 qutbli ramka-1,1 kVt-IMB3",
                "Uch fazali dvigatel-71-4 qutbli ramka-550 Vt-IMB35",
                "Uch fazali dvigatel-71-4 qutbli ramka - 550 Vt-IMB34",
                "Uch fazali dvigatel-71-4 qutbli ramka - 550 Vt-IMB14",
                "Uch fazali dvigatel-71-4 qutbli ramka-550 Vt-IMB5",
                "Uch fazali dvigatel-71-4 qutbli ramka-550 Vt-IMB3",
                "Bir fazali dvigatel-71-4 qutbli ramka - 500 Vt-IMB35",
                "Bir fazali dvigatel-71-4 qutbli ramka - 500 Vt-IMB14",
                "Bir fazali dvigatel-71-4 qutbli ramka-500 Vt-IMB5",
                "Bir fazali dvigatel-71-4 qutbli ramka-500 Vt-IMB3",
                "Uch fazali dvigatel-71-4 qutbli ramka-370 Vt-IMB35",
                "Uch fazali dvigatel-71-4 qutbli ramka - 370 Vt-IMB34",
                "Uch fazali dvigatel-71-4 qutbli ramka - 370 Vt-IMB14",
                "Uch fazali dvigatel-71-4 qutbli ramka-370 Vt-IMB5",
                "Uch fazali dvigatel-71-4 qutbli ramka-370 Vt-IMB3",
                "Bir fazali dvigatel-71-4 qutbli ramka - 370 Vt-IMB35",
                "Bir fazali dvigatel-71-4 qutbli ramka - 370 Vt-IMB14",
                "Bir fazali dvigatel-71-4 qutbli ramka-370 Vt-IMB5",
                "Bir fazali dvigatel-71-4 qutbli ramka-370 Vt-IMB3",
                "Uch fazali dvigatel-71-4 qutbli ramka-250 Vt-IMB35",
                "Uch fazali dvigatel-71-4 qutbli ramka-250 Vt-IMB35",
                "Uch fazali dvigatel-71-4 qutbli ramka-250 Vt-IMB5",
                "Uch fazali dvigatel-71-4 qutbli ramka-250 Vt-IMB3",
                "Uch fazali dvigatel-71-2 qutbli ramka-750 Vt-IMB35",
                "Uch fazali dvigatel-71-2 qutbli ramka - 750 Vt-IMB34",
                "Uch fazali dvigatel-71-2 qutbli ramka - 750 Vt-IMB14",
                "Uch fazali dvigatel-71-2 qutbli ramka-750 Vt-IMB5",
                "Uch fazali dvigatel-71-2 qutbli ramka-750 Vt-IMB3",
                "Uch fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB35",
                "Uch fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB34",
                "Uch fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB14",
                "Uch fazali dvigatel-71-2 qutbli ramka-550 Vt-IMB5",
                "Uch fazali dvigatel-71-2 qutbli ramka-550 Vt-IMB3",
                "Bir fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB35",
                "Bir fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB14",
                "Bir fazali dvigatel-71-2 qutbli ramka - 550 Vt-IMB35",
                "Bir fazali dvigatel-71-2 qutbli ramka-550 Vt-IMB3",
                "Uch fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB35",
                "Uch fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB34",
                "Uch fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB14",
                "Uch fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB14",
                "Uch fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB5",
                "Uch fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB3",
                "Bir fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB35",
                "Bir fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB14",
                "Bir fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB5",
                "Uch fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB3",
                "Bir fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB35",
                "Bir fazali dvigatel-71-2 qutbli ramka - 370 Vt-IMB14",
                "Bir fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB5",
                "Bir fazali dvigatel-71-2 qutbli ramka-370 Vt-IMB3",
                "Uch fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB35",
                "Uch fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB34",
                "Uch fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB14",
                "Uch fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB5",
                "Uch fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB3",
                "Bir fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB35",
                "Bir fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB14",
                "Bir fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB5",
                "Bir fazali dvigatel-63-4 qutbli ramka-180 Vt-IMB3",
                "Uch fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB35",
                "Uch fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB34",
                "Uch fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB14",
                "Uch fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB5",
                "Uch fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB3",
                "Bir fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB35",
                "Bir fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB14",
                "Bir fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB5",
                "Bir fazali dvigatel-63-4 qutbli ramka-120 Vt-IMB3",
                "Uch fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB35",
                "Uch fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB34",
                "Uch fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB34",
                "Uch fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB5",
                "Uch fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB3",
                "Bir fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB35",
                "Bir fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB14",
                "Bir fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB5",
                "Bir fazali dvigatel-63-2 qutbli ramka-250 Vt-IMB3",
                "Uch fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB35",
                "Uch fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB34",
                "Uch fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB14",
                "Uch fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB5",
                "Uch fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB3",
                "Bir fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB35",
                "Bir fazali dvigatel-63-2 qutbli ramka-180 Vt-IMB3",
            ],

            n: 1,
            mobile: false
        }
    },
    methods:{
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
        }
    }
})

</script>

<template>
    <div id="begin" class="pt-[75px]">
        <div id="breadcrumbs" class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li @click="$router.push('/allproducts')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("All_products") }}
                    </li>
                    <li v-if="this.finV" class="roboto-medium text-[#1A85FF]">{{ this.massiv[n][$t('lang')].title }}</li>
                </ul>
            </div>
        </div>

        <div class="min-h-[50vh] mt-[40px] sm:mt-[20px]">
            <div class="max-w-[1250px] sm:px-[20px] gap-[20px] mx-auto flex">
                <div class="flex-1">
                    <h3 v-if="this.finV" class="text-[28px] text-[#1B3F7B] sm:text-[22px] roboto-black">
                        {{ this.massiv[n][$t("lang")].title }}
                    </h3>

                    <hr class="bg-[#1B3F7B] w-[50px] h-[3px] mt-[20px]">

                    <figure v-if="this.mobile" class="border-[1px] mt-[25px] rounded-[20px]">
                        <img style="transform: rotateY(180deg)" class="" :src="this.massiv[n].img">
                    </figure>

                    <div v-if="this.massiv[n].en.appearance" class="border-[1px] rounded-[20px] mt-[25px]">
                        <div class="flex justify-between p-[30px] sm:p-[20px]  items-center border-b-[1px]">
                            <span class="roboto-regular text-[19px] sm:text-[17px] text-[#1A85FF]"> {{ $t("app")  }} </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div v-if="this.massiv[n].en.appearance.FrameMaterial" class="flex">
                            <div
                                class="flex-1 sm:border-r-[0px] p-[25px] sm:p-[10px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fr")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.appearance.FrameMaterial }}</div>
                        </div>
                    </div>

                    <div v-if="this.massiv[n].en.specifications" class="border-[1px] rounded-[20px] mt-[25px]">
                        <div class="flex justify-between p-[30px] sm:p-[20px] items-center border-b-[1px]">
                            <span class="roboto-regular text-[19px] sm:text-[17px] text-[#1A85FF]">{{ $t("ts")  }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>


                        <div v-if="this.massiv[n].en.specifications.Size" class="flex">
                            <div
                                class="flex-1 px-[25px] py-[5px] sm:border-r-[0px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fs")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.Size }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.size" class="flex">
                            <div
                                class="flex-1  px-[25px] py-[5px] border-r-[1px] sm:border-r-[0px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fs")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.size }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.pole" class="flex">
                            <div
                                class="flex-1  px-[25px] py-[5px] border-r-[1px] sm:border-r-[0px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("np")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.pole }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.Power" class="flex">
                            <div
                                class="flex-1 sm:border-r-[0px] px-[25px] py-[5px] border-r-[1px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("op")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.Power }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.type" class="flex">
                            <div
                                class="flex-1 sm:border-r-[0px] px-[25px] py-[5px] border-r-[1px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("mt")  }}

                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.type }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.Speed" class="flex">
                            <div
                                class="flex-1 sm:border-r-[0px] px-[25px] py-[5px] border-r-[1px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("s")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.Speed }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.Material" class="flex">
                            <div
                                class="flex-1 sm:border-r-[0px] px-[25px] py-[5px] border-r-[1px] sm:px-[10px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("cm")  }}

                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.Material }}</div>
                        </div>
                        <div v-if="this.massiv[n].en.specifications.Application" class="flex">
                            <div
                                class="flex-1 px-[25px] py-[5px] border-r-[1px] sm:px-[10px] sm:border-r-[0px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("app")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">
                                {{ this.massiv[n].en.specifications.Application }}</div>
                        </div>



                    </div>
                </div>

                <div v-if="!this.mobile" class="flex-1">
                    <figure class="border-[1px] rounded-[20px] p-[10px]">
                        <img style="transform: rotateY(180deg)" class="" :src="this.massiv[n].img">
                    </figure>
                </div>

            </div>
        </div>

    </div>
</template>

<style></style>