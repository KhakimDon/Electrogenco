<script lang="ts">

export default {
    data() {
        return {
        }
    },
    mounted() {
        this.$i18n.locale = 'ru'
        window.scrollTo({ top: 0, behavior: 'auto' })
    }
}
</script>

<template>
    <div id="begin" class="pt-[75px] max-w-[1250px] mx-auto">
        <div class="max-w-[1250px] mx-auto">
            <div id="breadcrumbs"  class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#1A85FF]">
                        {{ $t("branches.title") }}
                    </li>
                </ul>
            </div>

            <h3
                class="text-[#032055] sm:text-[22px] mx-auto w-[max-content] text-center mt-[40px] mb-[40px] roboto-medium text-[26px]">
                {{ $t("branches.title") }}
                <hr class="h-[1px] border-[#1A85FF] mx-auto w-[40px] block mt-[10px]">
            </h3>

            <div class="flex gap-[20px] sm:flex-col sm:px-[20px]">
                <div class="border-[1px] h-[max-content] pb-[50px] sm:pb-[20px] rounded-[20px] flex-[3]">
                    <div class="flex justify-between p-[30px] sm:p-[15px] items-center border-b-[1px]">
                        <span class="roboto-regular text-[19px] sm:text-[17px] text-[#1A85FF]">{{ $t("branches.info") }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div class="flex flex-col justify-start">
                     
                        <div
                            class="flex-1 h-[50px] sm:px-[15px] sm:mt-[15px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600] sm:text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] sm:h-[30px] sm:w-[30px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            Tashkent
                        </div>
                        <div
                            class="flex-1 h-[50px] sm:px-[15px] sm:mt-[15px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600] sm:text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] sm:h-[30px] sm:w-[30px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>


                           {{ $t("footer.address2")}}
                        </div>
                        <div
                            class="flex-1 h-[50px] sm:px-[15px] sm:mt-[15px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600] sm:text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] sm:h-[30px] sm:w-[30px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            
                            +998 (77)141 2050
                        </div>


                    </div>
                </div>
                <div class="flex-[5]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d264.68906457505807!2d69.24236561879188!3d41.36072301722444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0063c72827%3A0xd80f9c8b98955416!2sParsmotor!5e0!3m2!1sru!2s!4v1718958876848!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                
            </div>

        </div>


    </div>
</template>


<style>
.tex b {
    font-size: 18px;
    font-weight: 600;
    font-family: Arial;
}
</style>