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
                    en: "NUMBER OF PHASE",
                    ru: "КОЛИЧЕСТВО ФАЗ",
                    uz: "FAZALAR SONI",
                    items: {
                        en: ["1",],
                        ru: ["1",],
                        uz: ["1",],
                    }
                },
                {
                    en: "OUTPUT POWER",
                    ru: "ВЫХОДНАЯ МОЩНОСТЬ",
                    uz: "CHIQISH QUVVATI",
                    items: {
                        en: ["1/2 HP",
                        "1/20 HP",
                        "1/3 HP",
                        "1/4 HP",
                        "1/5 HP",
                        "1/6 HP",
                        "1/8 HP",
                        "150 W",
                        "180 W",
                        "187 W",
                        "250 W",
                        "3/4 HP",
                        "390 W",
                        "500 W",
                        "70 W",
                        "75 W",
                        "80 W",],
                        ru: ["1/2 л.с",
                        "1/20 л.с",
                        "1/3 л.с",
                        "1/4 л.с",
                        "1/5 л.с",
                        "1/6 л.с",
                        "1/8 л.с",
                        "150 W",
                        "180 W",
                        "187 W",
                        "250 W",
                        "3/4 л.с",
                        "390 W",
                        "500 W",
                        "70 W",
                        "75 W",
                        "80 W",],
                        uz: ["1/2 ot kuchi",
                        "1/20 ot kuchi",
                        "1/3 ot kuchi",
                        "1/4 ot kuchi",
                        "1/5 ot kuchi",
                        "1/6 ot kuchi",
                        "1/8 ot kuchi",
                        "150 W",
                        "180 W",
                        "187 W",
                        "250 W",
                        "3/4 ot kuchi",
                        "390 W",
                        "500 W",
                        "70 W",
                        "75 W",
                        "80 W",],
                    }
                },
                {
                    en: "EFFICIENCY CLASS",
                    ru: "КЛАСС ЭФФЕКТИВНОСТИ",
                    uz: "SAMARADORLIK KLASSI",
                    items: {
                        en: ["A",
                            "C",
                            "D",
                            "E",],
                        ru: ["A",
                            "C",
                            "D",
                            "E",],
                        uz: ["A",
                            "C",
                            "D",
                            "E",],
                    }
                },
                {
                    en: "CONDUCTOR MATERIAL",
                    uz: "O'TKAZUVCHI MATERIAL",
                    ru: "МАТЕРИАЛ ПРОВОДНИКА",
                    items: {
                        en: [
                            "AL",
                            "CU",
                        ],
                        ru: [
                            "AL",
                            "CU",
                        ],
                        uz: [
                            "AL",
                            "CU",
                        ],
                    }
                },
                {
                    en: "NUMBER OF SPEED",
                    ru: "Количество скоростей",
                    uz: "Tezlik soni",
                    items: {
                        en: [
                            "Three-speed",
                            "Two-speed",
                        ],
                        ru: [
                            "Трехскоростной",
                            "Двухскоростной",
                        ],
                        uz: [
                            "Bir tezlikli",
                            "ikki tezlikli",
                        ],
                    }
                },
                {
                    en: "PHASE NUMBER",
                    ru: "Количество Фаз",
                    uz: "Fazalar soni",
                    items: {
                        en: [
                            "1",
                        ],
                        ru: [
                            "1",
                        ],
                        uz: [
                            "1",
                        ],
                    }
                },

            ],
            finV: false,
            fallback:[],
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Зеленый-3/4 л.с. Класс - C",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 л.с",
                                    Material: "CU",
                                    Class: "C",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-yashil-3/4 ot kuchi sinf - C",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 ot kuchi",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Azarakhsh-Осевой-80 W (трехскоростной)",
                                specifications: {
                                    Phase: "1",
                                    Power: "80 W",
                                    Material: "CU",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich Motor-Azaraxsh-Eksenel-80 W (uch tezlikli)",
                                specifications: {
                                    Phase: "1",
                                    Power: "80 W",
                                    Material: "CU",
                                    Speed: "uch tezlikli",
                                },
                            },
                        },
                        {
                            id: 3,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4933.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-75 W (Three-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "CU",
                                    Speed: "Three-speed",
                                },
                            },
                            ru: {
                                title: "Двигатель испарительного охладителя-Azarakhsh-Осевой-75 W (трехскоростной)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "CU",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich dvigatel-Azaraxsh-Eksenel-75 Vt (uch tezlikli)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "CU",
                                    Speed: "uch tezlikli",
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
                            ru: {
                                title:
                                    "Двигатель испарительного охладителя-Azarakhsh-Axial-75W-AL (трехскоростной)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "AL",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title:
                                    "Bug'lantiruvchi sovutgich dvigatel-Azaraxsh-Eksenel-75 Vt-al (uch tezlikli)",
                                specifications: {
                                    Phase: "1",
                                    Power: "75 W",
                                    Material: "AL",
                                    Speed: "uch tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Azarakhsh-Осевой-70 W (трехскоростной)",
                                specifications: {
                                    Phase: "1",
                                    Power: "70 W",
                                    Material: "CU",
                                    Speed: "трехскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich dvigatel-Azaraxsh-Eksenel-70 W (uch tezlikli)",
                                specifications: {
                                    Phase: "1",
                                    Power: "70 W",
                                    Material: "CU",
                                    Speed: "uch tezlikli",
                                },
                            },
                        },
                        {
                            id: 6,
                            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4962.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-70W (Two-speed)",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 HP",
                                    Material: "CU",
                                    Speed: "Two-speed",
                                    Class: "C",
                                },
                            },
                            ru: {
                                title: "Двигатель испарительного охладителя-Azarakhsh-Осевой-70 W (двухскоростной)",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 л.с",
                                    Material: "CU",
                                    Speed: "двухскоростной",
                                    Class: "C",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich Motor-Azaraxsh-Eksenel-70 W (ikki tezlikli)",
                                specifications: {
                                    Phase: "1",
                                    Power: "3/4 ot kuchi",
                                    Material: "CU",
                                    Speed: "ikki tezlikli",
                                    Class: "C",
                                },
                            },
                        },
                        {
                            id: 7,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8038.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Motor-Azarakhsh-Axial-250W (Three-speed)",
                                specifications: {
                                    Power: "250 W",
                                    Material: "CU",
                                    Phase: "1",
                                },
                            },
                            ru: {
                                title: "Двигатель испарительного охладителя-Azarakhsh-Осевой-250 Вт (трехскоростной)",
                                specifications: {
                                    Power: "250 W",
                                    Material: "CU",
                                    Phase: "1",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich dvigatel-Azaraxsh-Eksenel-250 W (uch tezlikli)",
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
                            ru: {
                                title: "Электродвигатель охладителя мощностью 500 W модели lightning",
                                specifications: {
                                    Power: "500 W",
                                    Phase: "1",
                                },
                            },
                            uz: {
                                title: "Sovutgichli elektr motor 500 W chaqmoq modeli",
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
                            ru: {
                                title: "Электродвигатель охладителя мощностью 390 W модели lightning",
                                specifications: {
                                    Power: "390 W",
                                    Phase: "1",
                                    Material: "CU",
                                },
                            },
                            uz: {
                                title: "Sovutgichli elektr motor 390 W chaqmoq modeli",
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
                            ru: {
                                title: "Электродвигатель охладителя мощностью 187 W модели storm",
                                specifications: {
                                    Power: "187 W",
                                    Phase: "1",
                                    Material: "CU",
                                },
                            },
                            uz: {
                                title: "Sovutgichli elektr motor 187 W bo'ronli model",
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
                                    Power: "187 W",
                                    Phase: "1",
                                    Material: "AL",
                                    Class: "E",
                                },
                            },
                            ru: {
                                title: "Электродвигатель охладителя мощностью 187 W модели storm",
                                specifications: {
                                    Power: "187 W",
                                    Phase: "1",
                                    Material: "AL",
                                    Class: "E",
                                },
                            },
                            uz: {
                                title: "Sovutgichli elektr motor 187 W bo'ronli model",
                                specifications: {
                                    Power: "187 W",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Raad-180 W",
                                specifications: {
                                    Power: "180 W",
                                    Phase: "1",
                                    Material: "CU",
                                    Class: "D",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich Motor-Raad-180 W",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Toufan-150 Вт",
                                specifications: {
                                    Power: "150 W",
                                    Material: "AL",
                                    Class: "E",
                                    Phase: "1",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich Motor-Toufan-150 Vt",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-3/4 л.с.-Класс E",
                                specifications: {
                                    Power: "3/4 л.с",
                                    Material: "CU",
                                    Class: "E",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor -3/4 ot kuchi sinf-E",
                                specifications: {
                                    Power: "3/4 ot kuchi",
                                    Material: "CU",
                                    Class: "E",
                                    Phase: "1",
                                    Speed: "Ikki tezlik",
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
                            ru: {
                                title: "Двигатель портативного охладителя-Tochal-80 W",
                                specifications: {
                                    Power: "80 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Трехскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-80 W",
                                specifications: {
                                    Power: "80 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Uch tezlikli",
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
                            ru: {
                                title: "Портативный двигатель-охладитель-Tochal-75 W",
                                specifications: {
                                    Power: "75 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Трехскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-75 W",
                                specifications: {
                                    Power: "75 W",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Uch tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-3/4 л.с.-Класс ELA",
                                specifications: {
                                    Power: "3/4 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-3/4 ot kuchi sinf-ELA",
                                specifications: {
                                    Power: "3/4 ot kuchi",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/2 ot kuchi sinf-E",
                                specifications: {
                                    Power: "1/2 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Зеленый-1/2 л.с.-Класс C",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-yashil-1/2 ot kuchi sinf-C",
                                specifications: {
                                    Power: "1/2 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/2 л.с.-Класс D",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/2 ot kuchi sinf-D",
                                specifications: {
                                    Power: "1/2 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2 ot kuchi sinf-E",
                                specifications: {
                                    Power: "1/2 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2HP-sinf E",
                                specifications: {
                                    Power: "1/2 HP",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "3/4 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2 ot kuchi sinf-E",
                                specifications: {
                                    Power: "3/4 ot kuchi",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/2 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2 ot kuchi sinf-E",
                                specifications: {
                                    Power: "1/2 ot kuchi",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "A",
                                },
                            },

                            // 
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2HP-sinf E",
                                specifications: {
                                    Power: "1/3 ot kuchi",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/2 л.с.-Класс E",
                                specifications: {
                                    Power: "1/3 л.с",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler Motor-masalan-1/2 ot kuchi sinf-E",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-EG-1/3 л.с.-Класс E-A",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-masalan, - 1/3 ot kuchi sinf E-A",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс E",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/3 ot kuchi sinf E",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Зеленый-1/3 л.с.-Класс C",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: " Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-yashil-1/3 ot kuchi sinf-C",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "C",
                                    Speed: " Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс D",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: " Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/3 ot kuchi sinf-D",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: " Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/3 л.с.-Класс ELA",
                                specifications: {
                                    Power: "1/3 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/3 ot kuchi-sinf ELA",
                                specifications: {
                                    Power: "1/3 ot kuchi",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: " Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/3 л.с., класс ELA",
                                specifications: {
                                    Power: "1/4 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/3 ot kuchi-sinf ELA",
                                specifications: {
                                    Power: "1/4 ot kuchi",
                                    Material: "AL",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/4 л.с.-Класс D",
                                specifications: {
                                    Power: "1/4 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/4 ot kuchi-sinf D",
                                specifications: {
                                    Power: "1/4 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "D",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель испарительного охладителя-Tondar-1/4 л.с.-Класс E",
                                specifications: {
                                    Power: "1/4 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Bug'lanish Cooler motor-Tondar-1/4 ot kuchi-sinf E",
                                specifications: {
                                    Power: "1/4 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Class: "E",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель портативного охладителя-Точильный-1/5 л.с.",
                                specifications: {
                                    Power: "1/5 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-1/5 ot kuchi",
                                specifications: {
                                    Power: "1/5 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель портативного охладителя-Точильный-1/6 л.с.",
                                specifications: {
                                    Power: "1/6 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-1/6 ot kuchi",
                                specifications: {
                                    Power: "1/6 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель портативного охладителя-Точильный-1/8 л.с.",
                                specifications: {
                                    Power: "1/8 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-1/8 ot kuchi",
                                specifications: {
                                    Power: "1/8 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Двигатель для портативного холодильника-Tochal-1/8 л.с.-AL",
                                specifications: {
                                    Power: "1/8 л.с.",
                                    Material: "AL",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich-Tochal-1/8 ot kuchi AL",
                                specifications: {
                                    Power: "1/8 ot kuchi",
                                    Material: "AL",
                                    Phase: "1",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Портативный двигатель-охладитель-Точал-1/20 л.с.",
                                specifications: {
                                    Power: "1/20 л.с.",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Двухскоростной",
                                },
                            },
                            uz: {
                                title: "Portativ sovutgich Motor-Tochal-1/20 ot kuchi",
                                specifications: {
                                    Power: "1/20 ot kuchi",
                                    Material: "CU",
                                    Phase: "1",
                                    Speed: "Ikki tezlikli",
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
                            ru: {
                                title: "Насос испарительного охладителя-Damavand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi Sovutgich Nasosi-Damavand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Bug'lanish Sovutgichi",
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
                            ru: {
                                title: "Насос испарительного охладителя-Sahand (погружной)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi Sovutgich Nasosi-Sahand (Suv Osti)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Bug'lanish Sovutgichi",
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
                            ru: {
                                title: "Насос испарительного охладителя-Alvand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi Sovutgich Nasosi-Alvand",
                                specifications: {
                                    Material: "CU",
                                    Application: "Bug'lanish Sovutgichi",
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
                            ru: {
                                title: "Насос испарительного охладителя-Zagros (с низким потреблением)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich nasosi-Zagros (kam iste'mol)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Bug'lanish Sovutgichi",
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
                            ru: {
                                title: "Насос испарительного охладителя-Zagros (с низким потреблением)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Портативный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich nasosi-Zagros (kam iste'mol)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Portativ Sovutgich",
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
                            ru: {
                                title: "Насос испарительного охладителя-Zagros (с низким потреблением)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi sovutgich nasosi-Zagros (kam iste'mol)",
                                specifications: {
                                    Material: "AL",
                                    Application: "Bug'lanish Sovutgichi",
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
                            ru: {
                                title: "Насос испарительного охладителя-Alborz (двухлопастной)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Переносной охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi Sovutgich Nasosi-Alborz (Ikki Pervanel)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Portativ Sovutgich",
                                },
                            },
                        },
                        {
                            id: 8,
                            img: "https://electrogenco.com/en/wp-content/uploads/2023/09/FAG_8080.png",
                            // ----
                            en: {
                                title: "Evaporative Cooler Pump-Alborz (Five-Impeller)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Evaporative Cooler",
                                },
                            },
                            ru: {
                                title: "Насос испарительного охладителя-Alborz (с пятью рабочими колесами)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Испарительный охладитель",
                                },
                            },
                            uz: {
                                title: "Bug'lantiruvchi Sovutgich Nasosi-Alborz (Besh Pervanel)",
                                specifications: {
                                    Material: "CU",
                                    Application: "Bug'lanish Sovutgichi",
                                },
                            },
                        },
                    ],
                },
            ]
        }
    },
    mounted() {
        this.$i18n.locale = 'ru'
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(() => {
            this.fallback = this.massiv[0].prod
            this.$i18n.locale = 'ru'
            this.finV = true
        }, 200);

    },
    methods: {
        filter() {
            this.burger = false
            console.log(event.target.dataset.filterby);
            console.log(event.target.dataset.value);
            this.fallback = []

            if (event.target.dataset.filterby == "NUMBER OF PHASE" ||
                event.target.dataset.filterby == "КОЛИЧЕСТВО ФАЗ" ||
                event.target.dataset.filterby == "FAZALAR SONI"
            ) {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Phase == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "OUTPUT POWER" ||
                event.target.dataset.filterby == "ВЫХОДНАЯ МОЩНОСТЬ" ||
                event.target.dataset.filterby == "CHIQISH QUVVATI") {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Power == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "EFFICIENCY CLASS"||
                event.target.dataset.filterby == "КЛАСС ЭФФЕКТИВНОСТИ" ||
                event.target.dataset.filterby == "SAMARADORLIK KLASSI") {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Class == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "CONDUCTOR MATERIAL" ||
                event.target.dataset.filterby == "O'TKAZUVCHI MATERIAL" ||
                event.target.dataset.filterby == "МАТЕРИАЛ ПРОВОДНИКА") {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Material == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "NUMBER OF SPEED"  ||
                event.target.dataset.filterby == "Количество скоростей" ||
                event.target.dataset.filterby == "Tezlik soni") {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Speed == event.target.dataset.value)
                this.fallback = filtered
            }
            else if (event.target.dataset.filterby == "PHASE NUMBER"  ||
                event.target.dataset.filterby == "Количество Фаз" ||
                event.target.dataset.filterby == "Fazalar soni") {
                let filtered = this.massiv[0].prod.filter(item => item.en.specifications.Phase == event.target.dataset.value)
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

                    <li class="roboto-medium text-[#8295C4]">{{ $t('2.5') }}</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px] sm:mt-[20px]">
            <h3 class="mx-auto sm:text-[22px] w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                {{ $t('2.5') }}
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="flex items-start gap-[25px]  sm:flex-col sm:px-[20px] sm:gap-[0px]">

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

                <div v-if="this.finV" class="flex-1 flex gap-[25px] flex-wrap">

                    <Cards
                        @click="$router.push(`/motors-and-water-pumps-for-desert-cooler/motors-for-desert-cooler/${item.id}`)"
                        :title="item[$t('lang')].title" :img="item.img" v-for="item of this.fallback" :key="item.id" />

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