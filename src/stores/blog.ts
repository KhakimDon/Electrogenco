import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {

    const blogs = ref([
        {
            id: 1,
            category: "Exhibitions and Events",
            text_en: "Electrogen’s Presence at The Home Appliance Exhibition",
            text_ru: "Присутствие Electrogen на выставке бытовой техники",
            text_uz: "Maishiy texnika ko'rgazmasida elektrogenning mavjudligi",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/05-1.jpg",
            subtext_en: "",
            subtext_ru: "",
            subtext_uz: "",
        },
        {
            id: 2,
            category: "Technical Articles",
            text_en: "BLDC Electromotors",
            text_ru: "Электродвигатели BLDC",
            text_uz: "BLDC elektromotorlari",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/02-1.jpg",
            subtext_en: "Introduction   With the advancement of technology and the increase of electrical equipment as well ...",
            subtext_ru: "Введение С развитием технологий и увеличением количества электрооборудования, а также...",
            subtext_uz: "Kirish Texnologiyaning rivojlanishi va elektr jihozlarining ko'payishi bilan birga ...",
        },
        {
            id: 3,
            category: "Exhibitions and Events",
            text_en: "Electrogen’s Presence at the International Industry Exhibition",
            text_ru: "Присутствие Electrogen на Международной отраслевой выставке",
            text_uz: "Xalqaro sanoat ko'rgazmasida elektrogenning mavjudligi",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/08.jpg",
            subtext_en: "",
            subtext_ru: "",
            subtext_uz: "",
        },
        {
            id: 4,
            category: "Technical Articles",
            text_en: "How To Read The Electric Motor and Electric Pump Nameplate?",
            text_ru: "Как читать паспортную табличку электродвигателя и электронасоса?",
            text_uz: "Elektr dvigateli va elektr nasosining nomini qanday o'qish mumkin?",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/07-1.jpg",
            subtext_en: "Reading the electric motor plate is known as the fastest way to understand the ...",
            subtext_ru: "Чтение таблички электродвигателя известно как самый быстрый способ понять ...",
            subtext_uz: "Elektr dvigatel plitasini o'qish, tushunishning eng tezkor usuli sifatida tanilgan ...",
        },
        {
            id: 5,
            category: "Technical Articles",
            text_en: "Troubleshooting Techniques For Electric Motors and Pumps …",
            text_ru: "Методы устранения неисправностей электродвигателей и насосов…",
            text_uz: "Elektr dvigatellari va nasoslar uchun nosozliklarni bartaraf etish usullari ...",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/06-1.jpg",
            subtext_en: "Disruption in the operation of electric motors and electric pumps can be caused by ...",
            subtext_ru: "Нарушение работы электродвигателей и электронасосов может быть вызвано...",
            subtext_uz: "Elektr dvigatellari va elektr nasoslarning ishlashidagi uzilishlar sabab bo'lishi mumkin ...",
        },
        {
            id: 6,
            category: "Technical Articles",
            text_en: "Electrogen’s Membership in The long List of The Ministry of Petroleum",
            text_ru: "Членство Electrogen в длинном списке Министерства нефти",
            text_uz: "Elektrogenning Neft vazirligining uzoq ro'yxatiga a'zoligi",
            data:"2024.03.09",
            img: "https://electrogenco.com/en/wp-content/uploads/2024/03/01.jpg",
            subtext_en: "Once again, we were able to achieve success by relying on our ability and ...",
            subtext_ru: "В очередной раз мы смогли добиться успеха, полагаясь на свои способности и...",
            subtext_uz: "Yana bir bor, biz o'z qobiliyatimizga tayanib muvaffaqiyatga erishdik va ...",
        },
    ])

  return { blogs }
})
