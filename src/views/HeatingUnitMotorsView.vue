<script lang="ts">



export default {
    components: {
    },
    data() {
        return {
            completed: false,
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
        this.$i18n.locale = 'ru'
        window.scrollTo({ top: 0, behavior: 'auto' })


    },
}
</script>

<template>
    <div id="begin" class="pt-[75px]">

        <!-- breadcrumbs  -->
        <div id="breadcrumbs" class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-regular hover:text-[#1A85FF] duration-[.3s] text-[#1B3F7B]">
                        {{ $t("header.home") }}</li>
                    <li class="roboto-medium text-[#1A85FF]">Heating Unit Motors</li>
                </ul>
            </div>
        </div>

        <section class="mt-[50px]">
            <h3 class="mx-auto sm:text-[20px] sm:w-[300px] sm:text-center w-[max-content] text-[#032055] mb-[40px] roboto-medium text-[26px]">
                Heating Unit Motors
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mx-auto mt-[10px]">
            </h3>
            <div class="max-w-[1200px] sm:flex-col sm:px-[20px] flex flex-wrap gap-[30px] min-h-[100px] mx-auto">
                <div @click="$router.push(`/heating-unit-motors/${item.id}`)"
                    v-for="item of this.massiv" :key="item.id"
                    class="product_hover_block sm:min-h-[150px] cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] h-[200px] basis-[30%] flex-1 rounded-[20px]">
                    <div class=" flex items-center justify-start h-[100%] w-[100%]">
                        <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
                            <img class="h-[70px]" :src="item.img">
                        </figure>
                        <div class="flex-1">
                            <h4 class="roboto-bold text-[#032055] text-[19px] leading-[35px]"> {{
                                item.title_en }} </h4>
                            <p class="uppercase mt-[15px] roboto-regular tracking-[2px]	 text-[13px]">{{
                                item.sub_en }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="opacity-0  product_hover_block cursor-pointer overflow-hidden border-[1px] p-[20px] border-[#F2F2F2] h-[200px] basis-[30%] flex-1 rounded-[20px]">
                    <div class=" flex items-center justify-start h-[100%] w-[100%]">
                        <figure class="bg-[#E5E8ED] duration-[.7s] w-[70px] rounded-[50%] mr-[20px]">
                        </figure>
                        <div class="flex-1">
                            <h4 class="roboto-bold text-[#032055] text-[19px] leading-[35px]">
                            </h4>
                            <p class="uppercase mt-[15px] roboto-regular tracking-[2px]	 text-[13px]"> </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
.product_hover_block div figure {
    position: relative;
}

.product_hover_block div figure::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    transition-duration: .5s;
    background: #032055;
    z-index: -1;
    transition-timing-function: linear;
}

.product_hover_block:hover figure::after {
    opacity: 1 !important;
    transform: scale(20) !important;
}

.product_hover_block:hover figure {
    background: #1a3d7d;
}

.product_hover_block:hover figure img {
    filter: brightness(0) invert(1);
}

.product_hover_block:hover h4 {
    color: white;
}

.product_hover_block:hover p {
    color: white;
}

.product_hover_block:hover img {
    transform: rotate(360deg);
    transition-duration: .5s;
}
</style>
