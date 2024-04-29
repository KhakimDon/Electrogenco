import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInfiniteMovementStore = defineStore('infiniteMovement', () => {

    const infinite_Movement = ref([
        {
            id: 1,
            title_en: "More Than 1500 ",
            subtitle_en: "Experienced Employees",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D9%86%D8%A7%D8%A8%D8%B9-%D8%A7%D9%86%D8%B3%D8%A7%D9%86%DB%8C.svg",
            title_ru: "Более 1500",
            subtitle_ru: "Опытных сотрудников",
            title_uz: "1500 dan ortiq",
            subtitle_uz: "Tajribali Xodimlar",
        },
        {
            id: 2,
            title_en: "More Than 600",
            subtitle_en: "Products",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA.svg",
            title_ru: "Более 600",
            subtitle_ru: "Продукты",
            title_uz: "600 dan ortiq",
            subtitle_uz: "Mahsulotlar",
        },
        {
            id: 2,
            title_en: "Capacity of 1,000,000 ",
            subtitle_en: "Devices, Annual Production",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B3%D8%A7%D9%84%D8%A7%D9%86%D9%87.svg",
            title_ru: "Вместимость 1 000 000",
            subtitle_ru: "Устройства, годовое производство",
            title_uz: "Hajmi 1 000 000",
            subtitle_uz: "Qurilmalar, yillik ishlab chiqarish",
        },
    ])

  return { infinite_Movement }
})
