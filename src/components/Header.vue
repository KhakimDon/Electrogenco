<script lang="ts">
import Search from './Search.vue'
import { useLangStore } from "../stores/lang"

export default {
    components: { Search },
    data() {
        return {
            english: document.cookie == 'locale=en',
            russian: document.cookie == 'locale=ru',
            uzbek: document.cookie == 'locale=uz',
            useLangStore: useLangStore(),
            search: false,
            burger: false,
        }
    },
    mounted() {

    },
    methods: {
        searchs() {
            this.$router.push('/products')
            this.search = true
        },
        changeLanguage(item) {
            item == "uz" ? this.useLangStore.lang = 'uz' : false
            item == "ru" ? this.useLangStore.lang = 'ru' : false
            item == "en" ? this.useLangStore.lang = 'en' : false

            this.english = this.useLangStore.lang == 'locale=en'
            this.russian = this.useLangStore.lang == 'locale=ru'
            this.uzbek = this.useLangStore.lang == 'locale=uz'
        }
    }
}
</script>

<template>
    <header class="py-[15px] sm:px-[20px] z-[999] shadow-sm bg-white fixed w-[100%]">
        <div :class="{ burgeractive: this.burger }" class="burger">
            <div class="burgerwrp">
                <div class="flex items-center h-[80px] justify-between px-[20px]">
                    <img class="h-[40px]"
                        src="https://electrogenco.com/en/wp-content/uploads/2023/01/ELECTROGEN-FA-8.png" alt="image">
                    <div @click="this.burger = false" class="bg-[#133B77] rounded-[3px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-6 text-white h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div @click="this.burger = false"
                    class="bg-[#133B77] flex items-center gap-[20px] px-[20px] py-[15px] roboto-bold uppercase text-white">
                    {{ $t("header.customer") }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <nav class="flex flex-col px-[20px] mt-[20px] gap-[30px] roboto-regular font-[700] text-[17px]">
                    <router-link @click="this.burger = false" class="uppercase" :to="'/'"> {{ $t("header.home") }} </router-link>
                    <router-link @click="this.burger = false" class="uppercase" :to="'/about'">{{ $t("header.about") }}</router-link>
                    <router-link @click="this.burger = false" class="uppercase" :to="'/products'">{{ $t("header.products") }}</router-link>
                    <router-link @click="this.burger = false" class="uppercase" :to="'/blog'">{{ $t("header.blog") }}</router-link>
                    <router-link @click="this.burger = false" class="uppercase" :to="'/branches'">{{ $t("header.branches") }}</router-link>
                </nav>
            </div>
        </div>
        <Search @close="this.search = false" class="search" :class="{ searchactive: this.search == true }">
            <div @click="this.search = false" class="searchBack absolute left-[40px] text-[16px] cursor-pointer uppercase roboto-medium top-[40px] text-white">
                <div></div>
                <span class="text-white">back</span>
                <div></div>
            </div>
        </Search>
        <div class="flex items-center justify-between max-w-[1250px] mx-auto">
            <div @click="this.burger = true" class="sm:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-6 h-6 text-[#133B77] ">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <img @click="$router.push('/')" class="h-[50px] sm:h-[35px] cursor-pointer"
                src="https://electrogenco.com/en/wp-content/uploads/2023/01/ELECTROGEN-FA-8.png" alt="image">
            <nav class="sm:hidden flex gap-[30px] roboto-regular font-[700] text-[17px]">
                <router-link class="uppercase" :to="'/'"> {{ $t("header.home") }} </router-link>
                <router-link class="uppercase" :to="'/about'">{{ $t("header.about") }}</router-link>
                <router-link class="uppercase" :to="'/products'">{{ $t("header.products") }}</router-link>
                <router-link class="uppercase" :to="'/blog'">{{ $t("header.blog") }}</router-link>
                <router-link class="uppercase" :to="'/branches'">{{ $t("header.branches") }}</router-link>
            </nav>
            <div class="flex items-center gap-[20px] sm:gap-[5px]">
                <div @click="searchs()" class="cursor-pointer sm:order-[1]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button "
                        class="m-1 font-[700] text-[17px] cursor-pointer duration-[.3s] hover:text-[#5380BE] uppercase">
                        {{ $i18n.locale }}</div>
                    <ul tabindex="0"
                        class="dropdown-content  sm:translate-x-[-50px] z-[99] w-[max-content] menu p-2 shadow bg-base-100 rounded-box">
                        <li @click="changeLanguage('uz'), $i18n.locale = 'uz'"><a class="font-[700] text-[14px]">UZ <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"
                                    alt="Flag_of_Uzbekistan"></a></li>
                        <li @click="changeLanguage('ru'), $i18n.locale = 'ru'"><a class="font-[700] text-[14px]">RU <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
                                    alt="1200px-Flag_of_Russia"></a></li>
                        <li @click="changeLanguage('en'), $i18n.locale = 'en'"><a class="font-[700] text-[14px]">EN <img
                                    class="h-[20px] w-[30px]"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                                    alt="1200px-Flag_of_Russia"></a></li>
                    </ul>
                </div>
                <router-link :to="'/'"
                    class="flex sm:hidden gap-[20px] duration-[.3s] uppercase roboto-regular text-[#1B3F7B] hover:text-[#5380BE] font-[600] text-[17px]">
                    {{ $t("header.customer") }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
</template>

<style>
.burgeractive {
    background: rgba(0, 0, 0, 0.628) !important;
    pointer-events: fill !important;
}

.burgeractive .burgerwrp {
    transform: translateX(-0%) !important;
    box-shadow: 0 0 10px black !important;
}

.burger {
    transition-duration: .3s;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    /* background: rgba(0, 0, 0, 0.628); */
    background: rgba(0, 0, 0, 0);
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;

}

.burgerwrp {
    transform: translateX(-100%);
    transition-duration: .4s;
    width: 70%;
    height: 100%;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}

header {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.108) !important;
}

.searchBack span {
    opacity: 0;
    transition-duration: .3s;
}

.searchBack :nth-child(1) {
    height: 2px;
    width: 40px;
    transition-duration: .3s;
    background: white;
    transform: translateY(12px) rotate(45deg);
}

.searchBack :nth-child(3) {
    height: 2px;
    width: 40px;
    transition-duration: .3s;
    background: white;
    transform: translateY(-13.5px) translateX(-1px) rotate(-45deg);
}

.searchBack:hover span {
    opacity: 1;
}

.searchBack:hover :nth-child(3),
.searchBack:hover :nth-child(1) {
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 0;
}

.search {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0%;
    pointer-events: none;
    width: 100%;
    transition-duration: .5s;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.926);
}

.searchactive {
    opacity: 1 !important;
    pointer-events: fill !important;
}

@media screen and (max-width: 650px) {
    .searchBack{
        top: 20px !important;
        left: 15px !important;
        transform: scale(0.6) !important;
    }
}

</style>