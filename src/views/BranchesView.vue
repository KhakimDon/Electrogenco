<script lang="ts">

export default {
    data() {
        return {
        }
    },
    mounted() {
        this.$i18n.locale = 'en'

    }
}
</script>

<template>
    <div class="pt-[75px] max-w-[1250px] mx-auto">
        <div class="max-w-[1250px] mx-auto">
            <div class="text-sm breadcrumbs mt-[15px]">
                <ul>
                    <li @click="$router.push('/')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                        {{ $t("header.home") }}
                    </li>
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#1A85FF]">
                        Branches
                    </li>
                </ul>
            </div>

            <h3
                class="text-[#032055] mx-auto w-[max-content] text-center mt-[40px] mb-[40px] roboto-medium text-[26px]">
                BRANCHES
                <hr class="h-[1px] border-[#1A85FF] mx-auto w-[40px] block mt-[10px]">
            </h3>

            <div class="flex gap-[20px]">
                <div class="border-[1px] h-[max-content] pb-[50px] rounded-[20px] flex-[3]">
                    <div class="flex justify-between p-[30px] items-center border-b-[1px]">
                        <span class="roboto-regular text-[19px] text-[#1A85FF]">Appearance Characteristics</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-[#BDAFAF]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <div class="flex flex-col justify-start">
                        <div
                            class="flex-1 h-[50px] px-[35px] mt-[30px] flex items-center gap-[9px] text-black roboto-medium font-[600]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            Iman Eftekhari
                        </div>
                        <div
                            class="flex-1 h-[50px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            Esfahan
                        </div>
                        <div
                            class="flex-1 h-[50px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>


                            Abd al-Zaraq St., 15th Street
                        </div>
                        <div
                            class="flex-1 h-[50px] px-[35px] mt-[15px] flex items-center gap-[9px] text-black roboto-medium font-[600]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="w-[40px] h-[40px] text-[#829dbfa3]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            
                        03132247520
                        </div>


                    </div>
                </div>
                <div class="flex-[5]">
                    <iframe class="w-[100%] rounded-[20px] h-[600px]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28513.067983703324!2d69.24675772976232!3d41.307404261188026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1714774054330!5m2!1sru!2s"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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