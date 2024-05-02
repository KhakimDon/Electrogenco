<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent( {
    name: 'Card',
    props:{
        title: String,
        img: String,
    }
})
</script>


<template>
    <div
        class="border-[1px] group hover:border-[#1A85FF] cursor-pointer duration-[.3s] h-[360px] rounded-[15px] grow basis-[290px] max-w-[300px] overflow-hidden p-[20px]">
        <figure class="h-[180px] overflow-hidden">
            <img class="h-[100%] w-[100%] object-cover"
                :src="this.img" alt="image">
        </figure>
        <p class="group-hover:text-[#1A85FF] leading-[35px] text-center duration-[.3s] text-[19px] roboto-regular">
            {{this.title}}
        </p>
        <div class="flex flex-col items-center  mt-[10px]">
            <span class="text-[16px] roboto-regular">Product Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                stroke="currentColor" class="w-8 h-8 text-[#03204fad]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

        </div>
    </div>
</template>

<style></style>