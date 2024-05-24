<script lang="ts">

export default {
    data() {
        return {
            massiv: [
                {
                    id: 1,
                    img: "https://electrogenco.com/en/wp-content/uploads/2024/03/FAG_4935.jpg",
                    // ----
                    uz: {
                        title:"havo pardasi dvigateli-90 Vt",
                    },
                    ru: {
                        title:  "Двигатель воздушной завесы-90 Вт",
                    },
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
                      uz: {
                        title:"havo pardasi dvigateli-45 Vt",
                    },
                    ru: {
                        title:  "Двигатель воздушной завесы-45 Вт",
                    },
                },
            ],
            n: 1,
            mobile: false,
            finV: false,
            i: {
                id: 1,
                img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLXMxMDEtdGQtMDA4XzQuanBn.jpg",
                // ----
                en: {
                    title: "...",
                    appearance: {
                        FrameMaterial: "...",
                    },
                    specifications: {
                        size: ".",
                        pole: ".",
                        Power: "...",
                        type: "...",
                    },
                },
            },
        }
    },
    mounted() {
        this.$i18n.locale = 'ru'
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'ru'
        console.log(window.location.pathname.split('/')[3]);

        setTimeout(() => {
            for (let i of this.massiv) {
                if (i.id == window.location.pathname.split('/')[3]) {
                    this.i = i
                    console.log(i);
                }
            }
        }, 100);
        this.finV = true
    },
    methods:{
       
    }
}
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
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("All_products") }}
                    </li>
                    <li v-if="this.finV" class="roboto-medium text-[#1A85FF]">{{ this.i[$i18n.locale].title }}</li>
                </ul>
            </div>
        </div>

        <div class="min-h-[50vh] mt-[40px] sm:mt-[20px]">
            <div class="max-w-[1250px] sm:px-[20px] gap-[20px] mx-auto flex">
                <div class="flex-1">
                    <h3 v-if="this.finV" class="text-[28px] sm:text-[22px]  text-[#1B3F7B] roboto-black">
                        {{ this.i[$t('lang')].title }}
                    </h3>

                    <hr class="bg-[#1B3F7B] w-[50px] h-[3px] mt-[20px]">

                    <div v-if="this.mobile" class="flex-1">
                        <figure class="border-[1px] overflow-hidden rounded-[20px] mt-[25px]">
                            <img style="transform: rotateY(180deg)" :src="this.i.img">
                        </figure>
                    </div>



                    <div v-if="this.i.en.appearance" class="border-[1px] rounded-[20px] mt-[25px]">
                        <div class="flex justify-between sm:p-[20px] p-[30px] items-center border-b-[1px]">
                            <span class="roboto-regular sm:text-[17px] text-[19px] text-[#1A85FF]">{{ $t("app")  }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <div v-if="this.i.en.appearance.FrameMaterial" class="flex">
                            <div class="flex-1 sm:border-r-[0px] sm:p-[10px] p-[25px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fr")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.appearance.FrameMaterial }}</div>
                        </div>
                    </div>

                    <div v-if="this.i.en.specifications" class="border-[1px] rounded-[20px] mt-[25px]">
                        <div class="flex justify-between sm:p-[20px] p-[30px] items-center border-b-[1px]">
                            <span class="roboto-regular sm:text-[17px] text-[19px] text-[#1A85FF]">{{ $t("ts")  }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>


                        <div v-if="this.i.en.specifications.Size" class="flex">
                            <div
                                class="flex-1 px-[25px] py-[5px] sm:border-r-[0px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fs")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.Size }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.size" class="flex">
                            <div
                                class="flex-1 px-[25px] sm:border-r-[0px] sm:px-[10px] py-[5px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("fs")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.size }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.pole" class="flex">
                            <div
                                class="flex-1 px-[25px] py-[5px] sm:border-r-[0px] sm:px-[10px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("np")  }}
                            </div>
                            <div class="flex-[2]  sm:flex-1  p-[25px] font-[600]">{{ this.i.en.specifications.pole }}</div>
                        </div>
                        <div v-if="this.i.en.specifications.Power" class="flex">
                            <div
                                class="flex-1 px-[25px] sm:border-r-[0px] sm:px-[10px] py-[5px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("op")  }}
                            </div>
                            <div class="flex-[2] p-[25px] sm:flex-1 font-[600]">{{ this.i.en.specifications.Power }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.type" class="flex">
                            <div
                                class="flex-1 px-[25px] py-[5px] sm:border-r-[0px] sm:px-[10px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a]  w-[6px] rounded-[50%]"></div>
                                {{ $t("mt")  }}

                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.type }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.Speed" class="flex">
                            <div
                                class="flex-1 px-[25px] sm:border-r-[0px] sm:px-[10px] py-[5px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("s")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.Speed }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.Material" class="flex">
                            <div
                                class="flex-1 px-[25px] sm:border-r-[0px] sm:px-[10px] py-[5px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("cm")  }}

                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.Material }}</div>
                        </div>

                        <div v-if="this.i.en.specifications.Application" class="flex">
                            <div
                                class="flex-1 px-[25px] sm:border-r-[0px] sm:px-[10px] py-[5px] border-r-[1px] flex items-center gap-[9px] font-[600]">
                                <div class="h-[6px] bg-[#b1b1b17a] w-[6px] rounded-[50%]"></div>
                                {{ $t("apl")  }}
                            </div>
                            <div class="flex-[2] sm:flex-1 p-[25px] font-[600]">{{ this.i.en.specifications.Application }}</div>
                        </div>



                    </div>


                </div>

                <div v-if="!this.mobile" class="flex-1">
                    <figure class="border-[1px] rounded-[20px] p-[10px]">
                        <img style="transform: rotateY(180deg)" class="" :src="this.i.img">
                    </figure>
                </div>

            </div>
        </div>

    </div>

</template>

<style></style>