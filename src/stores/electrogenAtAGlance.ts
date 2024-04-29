import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useElectrogenGlanceStore = defineStore('electrogenGlance', () => {

    const electrogenGlance = ref([
        {
            id: 1,
            title_en: "Research and Development",
            title_ru: "Исследования и разработки",
            title_uz: "Tadqiqot va ishlanma",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%AA%D8%AD%D9%82%DB%8C%D9%82-%D9%88-%D8%AA%D9%88%D8%B3%D8%B9%D9%87.svg",
        },
        {
            id: 2,
            title_en: "Quick Press",
            title_ru: "Быстрое нажатие",
            title_uz: "Tez bosish",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%BE%D8%B1%D8%B3-%DA%A9%D8%A7%D8%B1%DB%8C.svg",
        },
        {
            id: 3,
            title_en: "Casting",
            title_ru: "Кастинг",
            title_uz: "Kasting",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%AF%D8%A7%DB%8C%DA%A9%D8%B3%D8%AA.svg",
        },
        {
            id: 4,
            title_en: "Machining",
            title_ru: "Обработка",
            title_uz: "Ishlov berish",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%DA%A9%D8%A7%D8%B1%DB%8C.svg",
        },
        {
            id: 5,
            title_en: "Winding",
            title_ru: "Обмотка",
            title_uz: "O'rash",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%B3%DB%8C%D9%85-%D9%BE%DB%8C%DA%86.svg",
        },
        {
            id: 6,
            title_en: "Quality Control",
            title_ru: "Контроль качества",
            title_uz: "Sifat nazorati",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87-%D9%81%DB%8C%D8%B2%DB%8C%DA%A9-1.svg",
        },
        {
            id: 7,
            title_en: "Molding",
            title_ru: "Молдинг",
            title_uz: "Molding",
            subtitle_eng: "-",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%82%D8%A7%D9%84%D8%A8-%D8%B3%D8%A7%D8%B2%DB%8C.svg",
        },
    ])

  return { electrogenGlance }
})
