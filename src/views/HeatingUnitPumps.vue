<script lang="ts">
import Cards from '../components/Cards.vue'
import { useBlogStore } from "../stores/products"


export default {
    components: { Cards },
    data() {
        return {
           useBlogStore: useBlogStore()
        }
    },
    mounted() {
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
                    <Cards :title="item.en.title" :img="item.img" v-for="item of this.useBlogStore.heating_unit_motors[0].prod" :key="item.id" />
                </div>


            </div>
        </div>
    </div>
</template>

<style>
</style>