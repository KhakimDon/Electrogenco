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
            ]
        }
    },
    mounted() {
        this.$i18n.locale = 'en'
    },
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
                    <li  @click="$router.push('/heating-unit-motors')" class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]"> Heating Unit Motors</li>
                    <li class="roboto-medium text-[#1A85FF]">Heating Unit Pumps</li>
                </ul>
            </div>
        </div>

        <div class="max-w-[1250px] mx-auto mt-[50px]">
            <h3 class="mx-auto w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Heating Unit Pumps
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="flex items-start gap-[25px]">
                <div class="flex-1 flex gap-[25px] flex-wrap">
                    <Cards :title="item.en.title" :img="item.img" v-for="item of this.massiv[0].prod" :key="item.id" />
                </div>


            </div>
        </div>
    </div>
</template>

<style>
</style>