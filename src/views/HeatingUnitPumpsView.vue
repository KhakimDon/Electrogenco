<script  lang="ts">
import Cards from '../components/Cards.vue'


export default {
    components: { Cards },
    data() {
        return {
            massiv: [
                    {
                        id: "heating-unit-pumps",
                        img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
                        title_en: "Heating Unit Pumps",
                        sub_en: "HEATING UNIT PUMPS",
                        prod: [
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
                        ],
                    },
                    {
                        id: "heating-unit-fan",
                        img: "https://electrogenco.com/en/wp-content/uploads/2024/03/pacage.svg",
                        title_en: "Heating Unit Fan",
                        sub_en: "HEATING UNIT FAN",
                        prod: [
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
                        ],
                    },
            ],
            finV: false,
            uz: [
                "isitish birligi suv nasos-turi E",
                "isitish birligi suv nasos-turi a",
                "isitish birligi Fan Motor-60 Vt (Kaman)",
                "isitish birligi Fan Motor-45 Vt (Kaman)",
                "isitish birligi Fan Motor-30 Vt (Kaman)",
                "isitish birligi Fan Motor-48 Vt (Helal)",
                "isitish birligi Fan Motor-39 Vt (Helal)",
                "isitish birligi Fan Motor-30 Vt (Helal)",
            ],
            ru: [
     "Водяной насос отопительного агрегата-Тип E",
     "Водяной насос отопительного агрегата-тип A",
     "Двигатель вентилятора отопительного агрегата-60 Вт (Kaman)",
     "Двигатель вентилятора отопительного агрегата-45 Вт (Kaman)",
     "Двигатель вентилятора отопительного агрегата-30 Вт (Kaman)",
     "Двигатель вентилятора отопительного агрегата-48 Вт (Helal)",
     "Двигатель вентилятора отопительного агрегата-39 Вт (Helal)",
     "Двигатель вентилятора отопительного агрегата-30 Вт (Helal)",
],

        }
    },
    mounted() {
       this.fin()
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'ru'
    },
    methods:{
        fin(){
            for (let i = 0; i < this.massiv.length; i++) {
            this.massiv[0].prod[i].ru = {
                title: this.ru[i],  
            };
            this.massiv[0].prod[i].uz = {
                title: this.uz[i],
            };
            this.finV = true
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
                    <li  @click="$router.push('/heating-unit-motors')" class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]"> Heating Unit Motors</li>
                    <li class="roboto-medium text-[#1A85FF]"> {{ $t("1.2") }}</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px] sm:mt-[20px]">
            <h3 class="mx-auto sm:text-[22px] w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                {{ $t("1.2") }}
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="flex items-start gap-[25px] sm:flex-col sm:px-[20px] sm:gap-[0px]">
                <div v-if="this.finV" class="flex-1 flex gap-[25px] flex-wrap">
                    <Cards  @click="$router.push(`/heating-unit-motors/heating-unit-pumps/${item.id}`)" :title="item[$t('lang')].title" :img="item.img" v-for="item of this.massiv[0].prod" :key="item.id" />
                </div>


            </div>
        </div>
    </div>
</template>

<style>
</style>