<script lang="ts">

export default {
    data() {
        return {
            searchQuery: '',
            articles: [
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
                        title: "Heating Unit Fan Motor-48W (Helal)",
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
                        title: "Heating Unit Fan Motor-39W (Helal)",
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
            articles2: [
                {
                    id: 1,
                    type: "Exhibitions and Events",
                    video:
                        "https://www.aparat.com/video/video/embed/videohash/zMOc3/vt/frame?t=20",
                    category: "Exhibitions and Events",
                    text_en: "Electrogen’s Presence at The Home Appliance Exhibition",
                    text_ru: "Присутствие Electrogen на выставке бытовой техники",
                    text_uz: "Maishiy texnika ko'rgazmasida elektrogenning mavjudligi",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/05-1.jpg",
                    subtext_en: "",
                    subtext_ru: "",
                    subtext_uz: "",
                },

                {
                    id: 3,
                    video:
                        "https://www.aparat.com/video/video/embed/videohash/dEyF0/vt/frame?t=1",
                    type: "Technical Articles",
                    category: "Exhibitions and Events",
                    text_en: "Electrogen’s Presence at the International Industry Exhibition",
                    text_ru: "Присутствие Electrogen на Международной отраслевой выставке",
                    text_uz: "Xalqaro sanoat ko'rgazmasida elektrogenning mavjudligi",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/02-1.jpg",
                    subtext_en: "",
                    subtext_ru: "",
                    subtext_uz: "",
                },
                {
                    id: 2,
                    type: "Exhibitions and Events",
                    category: "Technical Articles",
                    text_en: "BLDC Electromotors",
                    text_ru: "Электродвигатели BLDC",
                    text_uz: "BLDC elektromotorlari",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/08.jpg",
                    subtext_en:
                        "Introduction    With the advancement of technology and the increase of electrical equipment as well ...",
                    subtext_ru:
                        "Введение С развитием технологий и увеличением количества электрооборудования, а также...",
                    subtext_uz:
                        "Kirish Texnologiyaning rivojlanishi va elektr jihozlarining ko'payishi bilan birga ...",
                    content_en: `
            <b>Introduction</b> <br> <br>
            With the advancement of technology and the increase of electrical equipment as well as population growth in the last few decades, energy consumption has increased significantly, especially in the domestic sector. According to the energy balance sheet published by the Ministry of Energy, the consumption share of the household sector in 1400 is 32.2% of the country’s total consumption, which has increased by 7.5% in just one year compared to 2019.
            <br>
            <br>
            About 65% of the electricity consumed in the domestic and industrial sectors belongs to electric motors, and increasing the efficiency and saving the electricity consumption of these types of equipment can have a significant impact on reducing the country’s electricity consumption. So the potential of reducing consumption and economic savings of electric motors used in European Union industries is estimated at 29% and in the United States at about 23%.
            <br>
            <br>
            Electric motors used in the household sector are mainly single-phase induction types with very low efficiency, less than 50%. A large number of these motors cause significant energy losses in the home sector. Therefore, replacing low-efficiency engines with new high-efficiency engines is one of the ways to reduce energy consumption in this sector. On the other hand, in Iran, due to climate changes the increase in air temperature, and the widespread use of cooling and air conditioning equipment in the summer, the peak electricity consumption has been shifted to this season of the year, which has led to problems in the field of providing the required power. During the hot days of the year and as a result of the forced reduction of consumption and blackouts of several hours by the regional electricity companies, the country has become a region that has led to customer dissatisfaction and damages to the production and industrial sectors.
            <br>
            <br>
            According to the analytical report of the water and energy field technology development headquarters, a major part of the power distribution network capacity in peak bar is dedicated to cooling equipment and devices, which has a share of about 35% of the summer peak bar consumption. According to the stated contents, to solve the network peak problem in summer, the most important solution is cooling peaking, with priority in the domestic sector. If it is possible to reduce only ten percent of the electricity consumption in this sector, there will be no need to increase the network capacity to compensate for the lack of electricity supply.
            <br>
            <br>
            Considering the hot and dry climate of Iran, one of the most numerous and most consumed motors is the electric motor used in the water cooler. According to official statistics, about 17 million water cooler engines are active in the country, increasing efficiency and reducing energy consumption in these engines can lead to a 30-50% reduction in electricity consumption and thus freeing up a large part of the country’s power grid capacity in the summer season.
            <br>
            <br>
            According to the stated statistics and materials, and as a result of the need to increase the efficiency in the country’s electricity consumption system, Electrogen Company, as the largest producer of cooling electric motors in the country, has also taken steps towards realizing this goal and since about 7 years ago, a study And it has started its research on the design and production of high-efficiency BLDC motors as well as high-efficiency induction motors with energy grade A to replace the usual cooler electric motors.
            <br>
            <br>
            <b>2- Introduction of BLDC motors</b> 
            <br>
            <br>
            The theory of reduction machines is mentioned below. The new principles of modern single-phase electric induction motors were formed after Faraday discovered the phenomenon of electromagnetic induction in 1831, and the first DC motor was built in the 1840s. However, due to the limitation and lack of development of power electronic devices and permanent magnet materials, the successful design of the BLDC motor took place more than a century later. Harrison[1] and Ray[2] filed the first patent for a thyristor commutator circuit to replace mechanical commutator equipment in 1955, which was precisely the most primitive BLDC motor.
            <br>
            <br>
            To create an alternating electromagnetic force and feed the stator conductors, it was necessary to generate the necessary signal to drive the corresponding thyristor. When the engine stopped, no current passed through the conductors and there was no starting torque. As a result, researchers introduced different commutators, and finally, after many tests, a brushless motor with electronic commutation using Hall effect sensors[3] was developed in 1962.
            <br>
            <br>
            In general, brushless permanent magnet motors, or in the term BLDC, are a type of magnet and synchronous motors that use permanent magnets in their rotor structure, and their difference from other types of synchronous magnet motors, i.e. PMSM, is in the way these motors are controlled. Today, permanent magnet motors have been widely used in various industries such as the automotive, aerospace, and home equipment industries due to their advantages such as high efficiency, long life, low noise, and favorable torque-speed characteristics.
            <br>
            <br>
            BLDC motor is one of the electric motors that can replace single-phase induction motors in the common water cooler system. These motors are developed based on DC motors, and in the ideal case, the waveform of the stator current is in the form of 6 bridges and a square, similar to the DC machine. with the difference that electronic commutation has replaced the usual mechanical commutation.
            <br>
            <br>
            In a commutator DC motor, polarity reversal is done by the brushes. While in a BLDC motor, the mechanical brushes are removed and the commutation is done by a power electronics switching circuit using the angular position of the rotor.
            <br>
            <br>
            <b>3- BLDC motor structure</b> 
            <br>
            <br>
            In its simplest form, a permanent magnet motor consists of a magnet that acts as a rotor. The stator of these motors is mostly wound in three phases. These coils are balanced and distributed in the stator with a location of 120 inserts relative to each other; so that each phase is energized sequentially. When the stator windings are fed from the power source, they become electromagnets and begin to coil They make a uniform field in the air distance. Although the power source is DC, the switching operation creates an AC voltage with a trapezoidal waveform. In a commutator DC motor, the current polarity is reversed by the brushes. While in a BLDC motor, the mechanical brushes are removed and the commutation is done by an electronic power switching circuit using the angular position of the rotor.
            <br>
            <br>
            In BLDC motors, current passes through two-phase coils at any moment. The current flowing in each coil produces a magnetic field vector. By changing the coils according to Hall effect sensor signals and rotor position, the corresponding coil is activated as N and S poles. The structure of the rotor itself has permanent magnets and the N and S poles of the stator follow and cause the rotor to rotate.
            <br>
            <br>
            In general, the torque in the BLDC motor is produced by the reaction of the magnetic field generated by the stator and the magnetic field of the rotor magnet. By controlling the current that flows in the three coils, a magnetic field can be produced in a specific direction and size by the stator, and as a result, the produced torque can be controlled. In general, the characteristics of the motor depend on the winding of the stator and the arrangement of the magnets in the rotor, and according to the combination of the number of poles and grooves, the induced voltage in each phase of the stator may have different harmonics and, as a result, different waveforms. Permanent magnet motors are divided into two types of motors with sinusoidal induction voltage and trapezoidal induction voltage based on the induced voltage waveform that goes back to the design.
            <br>
            <br>
            4- Advantages and disadvantages of BLDC motors
            <br>
            <br>
            BLDC motors, like any other product, have various advantages and disadvantages, among which the following can be mentioned:
            <br>
            <br>
            High efficiency: among existing motors, BLDC motors have relatively high efficiency. The higher efficiency of this motor is mainly due to the existence of a permanent magnetic field in the rotor, which is a continuous and constant field and, unlike induction motors, does not cause copper loss in the rotor. Also, the removal of sweepers and gearboxes reduces friction and mechanical losses and thus increases efficiency.
            <br>
            <br>
            No need for a gearbox: in BLDC motors, the torque of the machine is constant and maximum efficiency can be obtained in the design speed range, so there is no need for a gearbox.
            <br>
            <br>           
            Low noise: due to not needing any mechanical brush or slip ring in BLDC motors, all mechanical noises are eliminated except the noises related to bearings, couplings and load.
            <br>
            <br>  
            Less maintenance, longer reliability, and life: Mechanical brushes and slip rings are common sources of failure and uncertainty in DC motors. By removing these components in BLDC motors, the life of the motor depends on the life of insulation, bearings, and the life of magnetic materials, which will have a long life under suitable working conditions. Also, the gearbox is subject to wear and tear is a source of uncertainty, and requires maintenance. Removing it increases reliability.
            Higher torque density: there is no field winding in BLDC motors, and therefore the necessary space for it is saved and reduces the overall size of the motor.
            <br>
            <br> 
            The following can be mentioned among their disadvantages:
            <br>
            <br>
            The price of magnetic materials: the price of permanent magnet materials with higher energy density prevents their use in applications where the price and cost of using these materials is greater than the aforementioned benefits. For example, ceramic magnets, which have the lowest price among magnet materials, also have the lowest energy density. Neodymium magnets have the highest energy density and the price is about 3 times the price of ceramic magnets. Samarium-cobalt magnet materials have an acceptable energy density, but due to the higher working temperature, they are about 9 times more expensive than ceramic magnets.
            <br>
            <br>
            Possibility of demagnetization: the maximum power of the BLDC motor is limited by heat. Too much heat reduces the flux density of magnets and may even cause them to be demagnetized.
            <br>
            <br>
            [1] Harrison
            <br>  
            [2] Rye
            <br>
            [3] Hall Effect Sensor
            `,
                },
                {
                    id: 4,
                    type: "Technical Articles",
                    category: "Technical Articles",
                    text_en: "How To Read The Electric Motor and Electric Pump Nameplate?",
                    text_ru:
                        "Как читать паспортную табличку электродвигателя и электронасоса?",
                    text_uz:
                        "Elektr dvigateli va elektr nasosining nomini qanday o'qish mumkin?",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/07-1.jpg",
                    subtext_en:
                        "Reading the electric motor plate is known as the fastest way to understand the ...",
                    subtext_ru:
                        "Чтение таблички электродвигателя известно как самый быстрый способ понять ...",
                    subtext_uz:
                        "Elektr dvigatel plitasini o'qish, tushunishning eng tezkor usuli sifatida tanilgan ...",
                    content_en: `
        Reading the electric motor plate is known as the fastest way to understand the technical information of the electric motor and to understand its structure and functional characteristics. This skill will help to identify possible faults as well as ensure that the engine is suitable for a specific application. For this reason, in this guide, we provide a complete description of the signs on the engine license plate:
        <br>
        Manufacturer and model company
        <br>
        The first item that appears on the license plate is the name of the manufacturer of the electric motor. This name, which is usually located on the top of the license plate, helps you to contact the manufacturer and benefit from support services or the provision of spare parts. The product model, serial number, and production date of the electric motor are other information that can help you in the process of using the product. Some manufacturers of electric motors have defined a specific code for their products, this code contains useful technical information about the product, and information such as the number of phases, voltage, protection class, etc. is inserted
        <br>
        Type of nutrition
        <br>
        An important parameter that can be seen on the electric motor nameplate is whether it is alternating current (AC) or direct current (DC). This issue is important because electric motors can be driven by DC power sources such as batteries or rectifiers or by AC power sources such as the grid, and inverters. If this parameter is not written on the plate, it can be recognized from the voltage value or the presence of the frequency parameter. In AC motors, the number of phases is also a parameter that plays an important role in how to connect to the power supply. It is necessary to write the numbers 1 and 3 in this part to indicate single-phase and three-phase motors.
        <br>
        Nominal values
        <br>
        The rated values of the electric motor are parameters such as frequency, power, voltage, current, speed, and power factor that the motor works at its rated load in these values. These values are recorded on the license plate and the consumer chooses the desired engine for a specific application based on them. The consumer chooses a motor that is suitable for his application, taking into account the power and speed he needs (which leads to the calculation of the torque) at a specific voltage and frequency. The correct selection of these values helps the engine to work continuously at its rated power without increasing the temperature, and to prevent the reduction of efficiency and engine failure.
        <br><br>
        Dependent parameters
        <br>Other parameters are recorded on the nameplate of the electric motors, which have the same importance as the nominal values, but usually less attention is paid to them. These items include parameters such as insulation class, degree of protection, type of operation, energy category, temperature, and height of the working environment of the motor. A change in any of these parameters indicates a change of electrical or mechanical origin in the engine. For example, by changing the efficiency category, it is possible to change the structure of the motor, including the length of the core, material of the core, winding, etc. Therefore, it is very important to include these items on the license plate.`,
                },
                {
                    id: 5,
                    type: "Technical Articles",
                    category: "Technical Articles",
                    text_en: "Troubleshooting Techniques For Electric Motors and Pumps …",
                    text_ru: "Методы устранения неисправностей электродвигателей и насосов…",
                    text_uz:
                        "Elektr dvigatellari va nasoslar uchun nosozliklarni bartaraf etish usullari ...",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/06-1.jpg",
                    subtext_en:
                        "Disruption in the operation of electric motors and electric pumps can be caused by ...",
                    subtext_ru:
                        "Нарушение работы электродвигателей и электронасосов может быть вызвано...",
                    subtext_uz:
                        "Elektr dvigatellari va elektr nasoslarning ishlashidagi uzilishlar sabab bo'lishi mumkin ...",
                    content_en: `
        Disruption in the operation of electric motors and electric pumps can be caused by several reasons. In this article, we have tried to collect the most common reasons that may cause electric motors and water pumps to fail and point out practical solutions for each. This is even though these instructions will not include all the problems that may arise during the operation of electric motors and electric pumps, and it is not able to express the details of installation, operation, or maintenance; there will be inevitable problems during the operation of the products, outside of the mentioned cases, and in case of facing these problems, it is necessary to get help from experts in this field. In the following, we will examine some possible problems in the form of questions, the causes related to each question, and finally, we will point out the available solutions to address these problems. It should be noted that most of these cases should be investigated by experts or the manufacturing company itself.
        <br> <br>
        Troubleshooting in electric motors
        <br> <br>
        <b>1- What is the reason for the time-consuming acceleration of the engine?</b>
        <br> <br>
        The presence of a large load can cause the acceleration of the electric motor to take time. Reducing the load will be a good solution in this case. <br>
        Disturbance in the rotor can also be another reason for the acceleration of the electric motor. In this case, the rotor must be inspected and replaced if damaged. <br>
        Incorrect drive settings may cause the mentioned error. In this case, the settings must be carefully made again.
        <br>
        Low voltage when starting the engine is another cause of this problem. For this reason, the voltage drop and its cause should be checked.
        <br> <br>
        <b>2- Why is the motor rotation direction wrong?</b>
        <br> <br>
        In three-phase motors, the wrong phase sequence can lead to the reverse direction of rotation. The solution to this case is to move the wires of different phases.
        <br>
        In single-phase motors, the main reason is the reverse direction of rotation. The solution to this is to check the header and change it from the guide.
        <br><br>
        <b>3- Why does the engine overheat?</b>
        <br><br>
        This case may be due to overload, which should be identified and if possible, the load on the motor should be reduced. Of course, this is if the incoming load is greater than the nominal load.
        <br>
        Low supply voltage affects the thermal performance of the electric motor. Therefore, checking the supply voltage value is a good solution for this case.
        <br>
        Engine cooling is done through the back fan and the holes of the cooling fan cover. Therefore, taking these holes increases the temperature of the engine. In this case, clean the holes of the cooling fan cover.
        <br>
        If the ambient temperature is high, the engine performance will be affected. To solve the problem in high-temperature environments and engine heating, the load on the engine should be reduced.
        <br>
        In three-phase motors, disconnection of one of the phases leads to a two-phase motor and its temperature increase. In this case, check all the wires and ensure their correct connection. This error can also be caused by grounding one of the coils, in which case the motor must be rewound.
        <br>
        The bale balance of winding current in three-phase motors is one of the reasons for the increase in the temperature of the electric motor. In this case, the sameness of the motor winding and the supply voltage should be checked.
        <br>
        This error can be caused by mechanical parts, especially bearings. In this case, the bearing should be checked and replaced if damaged.
        <br><br>
        <b>4- What is the reason for the sound of the engine?</b>
        <br><br>
        If the sounds from the engine are created momentarily and only when the engine is started, these sounds are considered normal and no special action is needed.
        <br>
        Disturbances and defects in the electrical insulation of the winding and connecting its coils will cause a lot of noise along with smoke. In this case, the power supply should be cut off quickly and the problem should be solved. However, if the winding is burnt, the item must be rewound by authorized repairmen.
        <br>
        The looseness of the coupling connecting the motor to the load can cause noise and vibration in the electromotor. In this case, the position of the coupling and its screws should be checked.
        <br>
        Sound and noise in electric motors can be caused by the looseness of mechanical holding parts, including screws, washers, holding plates, etc. These items should be carefully checked and tightened if they are loose.
        <br>
        Another cause of noise in the engine is the non-uniformity of the air gap between the stator and the rotor. In this case, check the caps and bearings.
        <br><br>
        <b>5- Why are bearings and caps too hot?</b>
        <br><br>
        This can be caused by a bent shaft or by correcting a weak shaft. In this case, it is necessary to replace the shaft.
        <br>
        If the load on the bearing is high, its temperature will also increase. In this case, it is necessary to check the alignment of the electric motor at the installation site, and the side and end force.
        <br>
        The breaking of balls or bearings can also cause the bearing to heat up. In case of encountering this current, it is necessary to change the bearing.
        <br>
        When using the drive in electric motors, a current flows in the shaft and bearing, which causes the bearing to heat up. In these cases, using insulated bearings is a good solution.
        <br>
        Since the motor may be connected to the load by belts and pulleys, excessive tension of the belt or improper size of pulleys can cause increased bearing damage. Re-adjusting the belt tension and using a suitable-sized pulley is a good solution for this problem.
        <br>
        The type and amount of grease have a great effect on reducing the friction of the bearing balls. Therefore, to prevent the increase of temperature and the destruction of the bearing, maintain the quality and the right amount of grease and make sure of the quality of the grease.
        <br> <br>

        <b>6- Why does vibration happen in electric motors and how can it be repaired?</b>

        <br> <br>
        In most cases, the cause of noise and vibration is the same. For example, problems in the winding, coupling, and mechanical parts are common factors in the production of noise and vibration. Therefore, the solution in these cases is similar to the solution that was mentioned in response to the problem of sound generation in the electric motor.
         <br>
        If one or more rods are broken or disconnected in squirrel cage induction motors, we will encounter vibration in the motor. This case can be solved by careful examination by an expert and then replacing the rotor.
         <br>
        The imbalance of the cooling fan and the breakage of its blades will cause the engine to vibrate. Replacing the cooling fan is a simple solution to this problem.
         <br>
        Another reason for engine vibration is improper installation or the installation structure not being strong. In these cases, checking and tightening the installation connections and also strengthening the installation structure are among the existing works.
        <br> <br>
        <b>7- What is the reason for not starting the engine?</b>
        <br> <br>
        The presence of wrong connections, failure of the cable or wire, and burning of the power supply fuse can be the reason for the engine not starting. For this reason, you must check the connections and fuses.
        <br>
        Noise and vibration in electric motors can be caused by damage to mechanical parts. These items should be checked carefully and replaced if the parts are damaged.
        <br>
        The presence of a large load can cause the electric motor to remain under load and vibrate, so reducing the load is a good solution in this case.
        <br>
        In some cases, the engine is started, but it keeps turning off and on during operation. In this case, check for loose connections in the power supply line, fuses, and control.
        <br><br>
        <b>8- What are the common causes of failure of capacitor single-phase electric motors?</b>
        In these engines, if the acceleration time of the engine is too long, the engine will burn. To avoid this, check that the motor power is not too small for the load. Also, record the acceleration time. If the acceleration time is more than 3 seconds, there may be a problem with the starter capacitor.
        <br>
        Frequent and excessive starting of the engine will damage it. If the engine is started more than twenty times per hour, you should consider the necessary considerations.
        <br>
        Factors such as not placing the motor terminal voltage in the standard range or voltage surge at the input can cause damage to the motor. In this case, checking the supply voltage and providing a protector will prevent possible damage.

        <br><br>
        <span class="font-[1000] text-[#003397] text-[19px]">Troubleshooting in electro pumps:</span>
        <br><br>
        <b>1- What is the reason for not starting the pump?</b>
        <br><br>
        The presence of wrong connections, wire failure, burnt power supply fuse, and cable disconnection can be the reason for not starting the pump. For this reason, it is essential to check all connections.
        <br>
        Jamming of the shaft, impeller, or bearing is one of the reasons why domestic water pumps do not start. To check this issue, the pump must be disassembled and the necessary measures for repair or replacement must be taken.
        <br>
        The burning of the stator winding or the capacitor has a significant effect on the failure of the pump to start. In this case, the coil and capacitor should be replaced.
        <br><br>

        <b>2- Why does the pump work but there is no water suction?</b>

        <br>
        <br>
        This can be caused by the lack of water in the pump chamber. In this case, fill the inlet pipe and the pump chamber with water.
        <br>
        The water level is lower than the suction valve or the inlet valve can be the reason for the lack of water suction. In this case, adjust the installation height of the pump.
        <br>
        If there is air in the suction pipe, water suction in the pump will be disturbed. In this case, it is necessary to check the sealing of the inlet and outlet pipes.
        <br>
        Damage to the mechanical seal and the impeller of the water spreader is another reason for the mentioned error. In these cases, replacing the defective part will solve the pump problem.
        <br>
        Another reason for the lack of water suction is the wrong direction of the motor rotation. To solve this problem in three-phase motors, replace the two-phase connections, and in single-phase motors, check the header and change it according to the existing guide.
        <br>
        If the inlet filter is blocked by deposits or the water freezes in the chamber or pipes, the suction may not be done properly. To solve this problem, clean the inlet valve by removing deposits. Also, if the water freezes, start the pump after the ice melts.
        <br><br>
        <b>3- Why does the thermal switch stop the pump?</b>
        <br><br>
         Motor overload due to excessive friction and as a result of high current and heat generated causes the operation of the thermal switch. In this case, open the engine and take the necessary measures to prevent the suction of foreign materials and reduce.
         <br><br>
        <b>4- What is the reason for insufficient output pressure in the pump?</b>
        <br><br>
        Clogging of piping and inlet filter or pump housing with foreign materials can reduce the output pressure of the pump. In this case, cleaning the plumbing, one-way valve or pump housing will help to solve the problem.
        <br>
        The long length of the internal piping route and the presence of many bends in the building are some of the reasons for the insufficient output pressure in the pumps. For this case, a pump with a higher flow should be used, and if this problem is not solved, the piping route, the number of bends, and connections should be reduced as much as possible.
        <br>
        Choosing a pump with inappropriate power, head and flow can lead to insufficient output pressure in the pump. In this case, you should choose the right pump according to different parameters
        <br>
        If the diameter of the pipe is not chosen correctly, the pump will not have the right pressure. To solve this problem, the diameter of the pipe should be carefully selected according to the requirements and the diameter of the inlet and outlet of the pump.
        `,
                },
                {
                    id: 6,
                    type: "Technical Articles",
                    category: "Technical Articles",
                    text_en:
                        "Electrogen’s Membership in The long List of The Ministry of Petroleum",
                    text_ru: "Членство Electrogen в длинном списке Министерства нефти",
                    text_uz: "Elektrogenning Neft vazirligining uzoq ro'yxatiga a'zoligi",
                    data: "2024.03.09",
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/01.jpg",
                    subtext_en:
                        "Once again, we were able to achieve success by relying on our ability and ...",
                    subtext_ru:
                        "В очередной раз мы смогли добиться успеха, полагаясь на свои способности и...",
                    subtext_uz:
                        "Yana bir bor, biz o'z qobiliyatimizga tayanib muvaffaqiyatga erishdik va ...",
                    content_en: `
        <div class="text-center">
        <br><br>
        <b class="text-center">Once again, we were able to achieve success by relying on our ability and expertise and registering the name of Electrogen in the vendor list of the Ministry of Petroleum.</b>
        <br><br></div>
        `,
                },
            ]
        }
    },
    computed: {
        filteredArticles() {
            if (!this.searchQuery) return [];
            const query = this.searchQuery.toLowerCase();
            return this.articles.filter(article =>
                article.en.title.toLowerCase().includes(query)
            );
        },
        filteredArticles2() {
            if (!this.searchQuery) return [];
            const query = this.searchQuery.toLowerCase();
            return this.articles2.filter(article2 =>
                article2.text_en.toLowerCase().includes(query)
            );
        }
    },
    mounted() {

    },
    methods: {
        highlightContent(content) {
            if (!this.searchQuery) return content;
            const queryRegex = new RegExp(`(${this.searchQuery})`, 'gi');
            return content.replace(queryRegex, '<span class="highlighted">$1</span>');
        },
        highlightContent2(content) {
            if (!this.searchQuery) return content;
            const queryRegex = new RegExp(`(${this.searchQuery})`, 'gi');
            return content.replace(queryRegex, '<span class="highlighted">$1</span>');
        }
    }
}

</script>

<template>
    <div>
        <slot></slot>
        <div class="mx-auto max-w-[1200px] mt-[100px]">
            <input v-model="searchQuery" placeholder="Search for the desired phrase"
                class="h-[40px] bg-[transparent] w-[100%] text-center roboto-medium text-white outline-none"
                type="text">
            <div class="gradiento">
            </div>
        </div>

        <div class="mx-auto max-h-[600px] overflow-y-auto pr-[10px] flex gap-[20px] max-w-[1200px] mt-[30px]">
            <div class="flex-1" v-if="searchQuery !== ''">
                <p class="w-[100%] text-center text-white roboto-medium text-[18px]">Products</p>
                <div ref="vosxods" v-for="article in filteredArticles" :key="article.id"
                    class="cursor-pointer h-[100px] mt-[20px] flex w-[100%] items-center gap-[20px] p-[10px] rounded-[10px] bg-[white]">
                    <img class="h-[100%] rounded-[10px]" :src="article.img" alt="image">

                    <p class="roboto-medium text-[17px]" v-html="highlightContent(article.en.title)"></p>
                </div>
            </div>
            <div class="flex-1" v-if="searchQuery !== ''">
                <p class="w-[100%] text-center text-white roboto-medium text-[18px]">Articles</p>
                <div ref="vosxods" v-for="article in filteredArticles2" :key="article.id"
                    class="cursor-pointer h-[100px] mt-[20px] flex w-[100%] items-center gap-[20px] p-[10px] rounded-[10px] bg-[white]">
                    <img class="h-[100%] rounded-[10px]" :src="article.img" alt="image">

                    <p class="roboto-medium text-[17px]" v-html="highlightContent2(article.text_en)"></p>
                </div>
            </div>


          
        </div>
    </div>
</template>

<style>
.gradiento {
    height: 2px;
    width: 100%;
    margin-top: 3px;
    background: linear-gradient(90deg, transparent, #1A84FE, transparent);
}

.highlighted {
    background-color: yellow;
}
</style>