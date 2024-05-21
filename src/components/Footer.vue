<script lang="ts">

export default {
    methods: {
        top() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}

</script>

<template>
    <footer class="bg-[#333333] py-[80px] mt-[150px]">
        <div @click="top()" class="max-w-[1200px] mx-auto relative">
            <div
                class="h-[50px] cursor-pointer flex items-center justify-center absolute w-[50px] bg-[#1B3F7B] rounded-[50%] right-0 top-[-100px] sm:right-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>

            </div>
            <div class="flex gap-[20px] border-b-[1px] sm:flex-col sm:px-[15px] border-[#ddd2c263] pb-[80px]">
                <div class="flex flex-1 items-center roboto-regular text-[#DDD2C2]">
                    <img class="mr-[30px] h-[70px]"
                        src="https://electrogenco.com/en/wp-content/uploads/2023/07/Group-3-1-1-1.svg" alt="svg">
                    <div>
                        <a class="hover:text-[#0652dd] text-[14px] duration-[.3s]" href="tel:+998771412050">+998 (77)141 2050</a>
                        <p class="hover:text-[#0652dd] my-[20px] duration-[.3s] text-[14px]">
                            ООО "PARS MOTORS" </p>
                        <p class="hover:text-[#0652dd] duration-[.3s] text-[14px]">
                            {{ $t("footer.address2") }}</p>
                    </div>
                </div>
                <div class="flex flex-1 items-center sm:mb-[25px] roboto-regular text-[#DDD2C2]">
                    <img class="mr-[30px] h-[70px]"
                        src="https://electrogenco.com/en/wp-content/uploads/2023/07/Group-2-1-1-2.svg" alt="svg">
                    <div>
                  
                        <p class="hover:text-[#0652dd] text-[14px] duration-[.3s]">No. 22, Golestan Som, Ahmadabad
                            {{ $t("footer.address1") }}</p>
                    </div>
                </div>
                
            </div>
            <div class="flex justify-around py-[50px] sm:flex-col sm:px-[20px]">
                <div class="sm:mb-[20px]">
                    <img class="mb-[20px] h-[50px] bg-white p-[5px]" src="../../public/logo.png"
                        alt="logo">
                    <p class="text-[#DDD2C2] mb-[20px] roboto-regular">{{ $t("footer.sublogo") }} 
                    </p>
                    <p class="text-[#DDD2C2] mb-[20px] roboto-regular">{{ $t("footer.time") }} </p>
                </div>
                <div>
                    <p class="mb-[20px] roboto-bold text-white">{{ $t("footer.list1_title") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] cursor-pointer duration-[.3s] mb-[20px] roboto-regular">
                        {{ $t("header.products") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] cursor-pointer duration-[.3s] mb-[20px] roboto-regular">
                        {{ $t("header.branches") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] cursor-pointer duration-[.3s] mb-[20px] roboto-regular">
                        {{ $t("header.blog") }}</p>
                </div>
                <div>
                    <p class="mb-[20px] roboto-bold text-white">{{ $t("footer.list2_title") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] duration-[.3s] cursor-pointer mb-[20px] roboto-regular">
                        {{ $t("header.about") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] duration-[.3s] cursor-pointer mb-[20px] roboto-regular">
                        {{ $t("footer.faq") }}</p>
                    <p
                        class="text-[#DDD2C2] uppercase hover:text-[#0652dd] duration-[.3s] cursor-pointer mb-[20px] roboto-regular">
                        {{ $t("footer.contact") }}</p>
                </div>
            </div>
            <div class="flex justify-between sm:px-[20px]">
                <div class="flex gap-[10px]">
                    <a href="">
                        <svg class="h-[30px] w-[30px]" style="filter:invert(1)" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50">
                        <path
                            d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
                    </svg>
                    </a>

                    

                    <a href="https://www.instagram.com/parsmotor.uz/">
                        <svg class="h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="instagram">
                        <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="21" height="21" x="1.5" y="1.5" rx="5.48" ry="5.48"></rect>
                            <circle cx="12" cy="12" r="5.5"></circle>
                            <circle cx="18" cy="5" r=".5"></circle>
                        </g>
                    </svg>
                    </a>

                    <a href="https://t.me/ParsMotorUZ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-white"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"/></svg>
                    </a>

                </div>
                <div class="flex items-center text-white gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    {{ $t("footer.copy") }}
                </div>
            </div>
        </div>
    </footer>
</template>

<style></style>