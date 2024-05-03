import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductCategoryStore = defineStore("productcategory", () => {
  const productCategory = ref([
    {
      id: 1,
      route: "/industrial-electric-motors",
      title_en: "Industrial Electric Motors",
      title_ru: "Промышленные электродвигатели",
      title_uz: "Sanoat elektr motorlari",
      subtitle_en: "INDUSTRIAL ELECTRIC MOTORS",
      subtitle_ru: "ПРОМЫШЛЕННЫЕ ЭЛЕКТРОДВИГАТЕЛИ",
      subtitle_uz: "SANOAT ELEKTR MOTORLARI",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C-%D9%85%D8%B4%D8%A7%D8%A8%D9%87-%D8%A8%D8%A7-%D9%86%D9%85%D9%88%D9%86%D9%87-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C.svg",
      // ----
    },
    {
      id: 6,
      route: "/elevator-motors",
      title_en: "Elevator Motors",
      subtitle_en: "",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/asansor.svg",
      title_ru: "Лифтовые двигатели",
      subtitle_ru: "",
      title_uz: "Lift motorlari",
      subtitle_uz: "",
    },
    {
      id: 7,
      route: "/heating-unit-motors",
      title_en: "Heating Unit Motors",
      subtitle_en: "HEATING PACKAGE",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
      title_ru: "Двигатели нагревательного агрегата",
      subtitle_ru: "ОТОПЛИТЕЛЬНЫЙ ПАКЕТ",
      title_uz: "Isitish bloklari motorlari",
      subtitle_uz: "ISITISH PAKETI",
    },

    {
      id: 3,
      route: "/water-pumps",
      title_en: "Water Pumps",
      subtitle_en: "Water Pump",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%BE%D9%85%D9%BE%D8%A2%D8%A8-2.svg",
      title_ru: "Водяные насосы",
      subtitle_ru: "Водяной насос",
      title_uz: "Suv nasosi",
      subtitle_uz: "Suv nasosi",
    },
    {
      id: 5,
      route: "/ventilation-motors",
      title_en: "Ventilation Motors",
      subtitle_en: "VENTILATION MOTORS",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D8%AA%D9%87%D9%88%DB%8C%D9%87.svg",
      title_ru: "Вентиляционные двигатели",
      subtitle_ru: "ВЕНТИЛЯЦИОННЫЕ МОТОРЫ",
      title_uz: "Ventilyatsiya motorlar",
      subtitle_uz: "Ventilyatsiya motorlar",
    },
    {
      id: 4,
      route: "/burder-motors",
      title_en: "Burner Motors",
      subtitle_en: "Burner Motors",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D8%B4%D8%B9%D9%84.svg",
      title_ru: "Горелочные двигатели",
      subtitle_ru: "Горелочные двигатели",
      title_uz: "Olovli dvigatellar",
      subtitle_uz: "Olovli dvigatellar",
    },

    {
      id: 2,
      route: "/motors-and-water-pumps-for-desert-cooler",
      title_en: "Motors And Water Pumps For Desert Cooler",
      subtitle_en: "MOTORS AND WATER PUMPS FOR DESERT COOLER",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%DA%A9%D9%88%D9%84%D8%B1.svg",
      title_ru: "Двигатели и водяные насосы для охладителя пустыни",
      subtitle_ru: "МОТОРЫ И ВОДЯНЫЕ НАСОСЫ ДЛЯ ХОЛОДИЛЬНИКА ПУСТЫНИ",
      title_uz: "Cho'l sovutgichi uchun motorlar va suv nasoslari",
      subtitle_uz: "MOTORLAR VA SUV NASOSLARI CHO'L SOVUTGANLARI UCHUN",
    },
    {
      id: 8,
      route: "/allproducts",
      title_en: "All Products",
      subtitle_en: "All Products",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/%D9%85%D8%AD%D8%B5%D9%88%D9%84-%D8%A8%DB%8C%D8%B4%D8%AA%D8%B1.svg",
      title_ru: "Все Продукты",
      subtitle_ru: "Все Продукты",
      title_uz: "Barcha mahsulotlar",
      subtitle_uz: "Barcha mahsulotlar",
    },
  ]);

  return { productCategory };
});
