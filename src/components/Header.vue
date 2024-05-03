<script  lang="ts">

    export default{
        data(){
            return{
                english: document.cookie == 'locale=en',
                russian: document.cookie == 'locale=ru',
                uzbek: document.cookie == 'locale=uz',
            }
        },
        mounted(){
            
        },
        methods:{
            changeLanguage(item){
                item == "uz" ? document.cookie = 'locale=uz' : false 
                item == "ru" ? document.cookie = 'locale=ru' : false 
                item == "en" ? document.cookie = 'locale=en' : false 
                console.log(document.cookie);
                this.english = document.cookie == 'locale=en'
                this.russian = document.cookie == 'locale=ru'
                this.uzbek = document.cookie == 'locale=uz'
            }
        }
    }
</script>

<template>
    <header class="py-[15px] z-[999] shadow-sm bg-white fixed w-[100%]">
        <div class="flex items-center justify-between max-w-[1250px] mx-auto">
            <img @click="$router.push('/')" class="h-[50px] cursor-pointer" src="https://electrogenco.com/en/wp-content/uploads/2023/01/ELECTROGEN-FA-8.png"
                alt="image">
            <nav class="flex gap-[30px] roboto-regular font-[700] text-[17px]">
                <router-link class="uppercase" :to="'/'"> {{ $t("header.home") }} </router-link>
                <router-link class="uppercase" :to="'/about'">{{ $t("header.about") }}</router-link>
                <router-link class="uppercase" :to="'/products'">{{ $t("header.products") }}</router-link>
                <router-link class="uppercase" :to="'/blog'">{{ $t("header.blog") }}</router-link>
                <router-link class="uppercase" :to="'/branches'">{{ $t("header.branches") }}</router-link>
            </nav>
            <div class="flex items-center gap-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div class="dropdown">
                    <div tabindex="0" role="button " class="m-1 font-[700] text-[17px] cursor-pointer duration-[.3s] hover:text-[#5380BE] uppercase">{{  $i18n.locale }}</div>
                    <ul tabindex="0" class="dropdown-content z-[99] w-[max-content] menu p-2 shadow bg-base-100 rounded-box">
                        <li @click="changeLanguage('uz'), $i18n.locale = 'uz'" v-if="!this.uzbek"><a class="font-[700] text-[14px]">UZ <img class="h-[20px] w-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png" alt="Flag_of_Uzbekistan"></a></li>
                        <li @click="changeLanguage('ru'), $i18n.locale = 'ru'" v-if="!this.russian"><a class="font-[700] text-[14px]">RU <img class="h-[20px] w-[30px]" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="1200px-Flag_of_Russia"></a></li>
                        <li @click="changeLanguage('en'), $i18n.locale = 'en'" v-if="!this.english"><a class="font-[700] text-[14px]">EN <img class="h-[20px] w-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="1200px-Flag_of_Russia"></a></li>
                    </ul>
                </div>
                <router-link :to="'/'" class="flex gap-[20px] duration-[.3s] uppercase roboto-regular text-[#1B3F7B] hover:text-[#5380BE] font-[600] text-[17px]">
                    {{ $t("header.customer") }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
</template>

<style>
header{
    box-shadow:  0 4px 4px rgba(0, 0, 0, 0.108) !important;
}
</style>