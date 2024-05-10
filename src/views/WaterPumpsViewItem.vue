<script lang="ts">

export default {

    data() {
        return {
            massiv: [
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
            ],
            ru: [
                "Трехфазный водяной насос-3 л.с.-Два рабочих колеса (CBT310)",
                "Трехфазный водяной насос-2 л.с.-Два рабочих колеса (CBT 210)",
                "Трехфазный водяной насос-1,5 л.с.-Два рабочих колеса (CBT160)",
                "Однофазный водяной насос-3 л.с.-Два рабочих колеса (CB310)",
                "Однофазный водяной насос-2 л.с.-Два рабочих колеса (CB210)",
                "Однофазный водяной насос-1,5 л.с. (CB160)",
                "Однофазный водяной насос-1 л.с. (CAM100)",
                "Однофазный водяной насос Фазный водяной насос мощностью 1 л.с. (KPM100)",
                "Однофазный водяной насос мощностью 1 л.с. (KPM100)",
                "Двухвинтовой трехфазный электронасос (CBT210) мощностью 2 л.с.",
                "Однофазный водяной насос мощностью 1 л.с. (CM100)",
            ],
                finV: false,

            uz: [
                "Uch fazali suv nasosi-3 ot kuchi-ikkita pervanel (CBT310)",
                "Uch fazali suv nasosi - 2 ot kuchi-ikkita pervanel (CBT 210)",
                "Uch fazali suv nasosi - 1,5 ot kuchi-ikkita pervanel (CBT160)",
                "Bir fazali suv nasosi - 3 ot kuchi-ikkita pervanel (CB310)",
                "Bir fazali suv nasosi-2 ot kuchi-ikkita pervanel (CB210)",
                "Bir fazali suv nasosi - 1,5 ot kuchi (CB160)",
                "Bir fazali suv nasosi - 1 ot kuchi (CAM100)",
                "Bir fazali suv nasosi 1 ot kuchiga ega fazali suv nasosi (KPM100)",
                "1 ot kuchiga ega bir fazali suv nasosi (KPM100)",
                "2 ot kuchiga ega ikki vintli uch fazali elektr nasos (CBT210)",
                "1 ot kuchiga ega bir fazali suv nasosi (CM100)",
            ],
            mobile: false,
            n: 1,
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
        this.fin()
        var x = window.matchMedia("(max-width: 650px)")
        if (x.matches) {
            this.mobile = true
        }
        window.scrollTo({ top: 0, behavior: 'auto' })
        this.$i18n.locale = 'en'
        setTimeout(() => {
            for (let i of this.massiv) {
                if (i.id ==  +window.location.pathname.split('/')[2] ) {
                    this.i = i
                    console.log(i);
                    
                }
            }
        }, 100);
    },
    methods:{
        fin(){
            for (let i = 0; i < this.massiv.length; i++) {
            this.massiv[i].ru = {
                title: this.ru[i],  
            };
            this.massiv[i].uz = {
                title: this.uz[i],
            };
            console.log(this.massiv[i]);
        }
        this.finV = true
        },
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
                    <li v-if="this.finV" class="roboto-medium text-[#1A85FF]">{{ this.i[$t("lang")].title }}</li>
                </ul>
            </div>
        </div>

        <div class="min-h-[50vh] mt-[40px] sm:mt-[20px]">
            <div class="max-w-[1250px] sm:px-[20px] gap-[20px] mx-auto flex">
                <div class="flex-1">
                    <h3 v-if="this.finV" class="text-[28px] sm:text-[22px]  text-[#1B3F7B] roboto-black">
                        {{ this.i[$t("lang")].title }}
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