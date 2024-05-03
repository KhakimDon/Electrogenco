<script lang="ts">
import { useBlogStore } from "../stores/blog"

export default {
    data() {
        return {
            useBlogStore: useBlogStore(),
            obj: {}
        }
    },
    mounted(){
        this.$i18n.locale = 'en'
        let filter = this.useBlogStore.blogs.filter(item => item.id == window.location.pathname.split('/')[2])[0]
        this.obj = filter
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
                    <li @click="$router.push('/blog')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#8295C4]">
                       Blog
                    </li>
                    <li @click="$router.push('/ventilation-motors')"
                        class="cursor-pointer roboto-medium hover:text-[#1A85FF] duration-[.3s] text-[#1A85FF]">
                        {{ this.obj.text_en }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="max-w-[900px] mx-auto">
            <h3 class="text-[#032055] mt-[40px] mb-[40px] roboto-medium text-[26px]">
                {{ this.obj.text_en }}
                <hr class="h-[1px] border-[#1A85FF] w-[40px] block mt-[10px]">
            </h3>
            <figure class="h-[400px] overflow-hidden rounded-[20px] w-[600px] mx-auto bg-[red]">
                <img class="h-[100%] w-[100%] object-cover"
                    :src="this.obj.img" alt="image">
            </figure>
            <div class="mt-[40px] flex gap-[10px] items-center roboto-medium text-[#8295C6]">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                {{this.obj.data}}
            </div>

            <iframe v-if="this.obj.video" class="h-[520px] mt-[20px] w-[100%]" :src="this.obj.video" frameborder="0"></iframe>

            <div v-if="this.obj.content_en" class="tex mt-[20px]">
                <p class="roboto-regular leading-[35px] text-[16px]" v-html="this.obj.content_en"></p>
            </div>

        </div>
    </div>
</template>


<style>
.tex b{
    font-size: 18px;
    font-weight: 600;
    font-family: Arial;
}
</style>