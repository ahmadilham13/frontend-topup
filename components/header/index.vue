<template>
    <header class="mb-5">
        <nav style="background: hsl(23.999999999999986 8.200000000000001% 12%/.75);" class="fixed top-0 z-40 w-full border-b border-t bg-gray-600/75 border-transparent backdrop-blur">
            <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-[3.2rem]">
                <div class="relative flex h-16 items-center justify-center">
                    <button type="button" class="rounded-md bg-murky-800 p-2 text-white lg:hidden">
                        <span class="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                    <div class="flex flex-1 items-center sm:items-center sm:justify-start ml-12 gap-4">
                        <div class="flex flex-shrink-0 items-center">
                            <nuxt-link class="relative w-auto" href="/">
                                <img alt="logo" srcset="~/assets/img/logo.png" src="" width="50" height="50" decoding="async" data-nimg="1" class="block h-12 w-auto" loading="lazy" style="color: transparent;" />
                            </nuxt-link>
                        </div>
                        <HeaderMenu />
                    </div>
                    <button id="showSearchButton" type="button" onclick="toggleInput()">
                        <div class="flex gap-2 pr-3 lg:pr-2">
                             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="flex gap-2 pr-0 lg:pr-2"></div>
                    </button>

                    <!-- Unauthenticated Start -->
                    <button 
                        class="inline-flex d-block d-lg-block justify-center rounded-md py-2 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        @click="openLoginorRegister = !openLoginorRegister"
                    >
                        <div class="flex gap-2 p-2 lg:pr-2 btn-light w-full justify-center rounded-lg py-2 text-sm font-medium md:inline-flex transition duration-300 css-mxl5am">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width="20" height="20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                            </svg>
                            Masuk
                        </div>
                    </button>
                    <template v-if="openLoginorRegister">
                        <div 
                            class="absolute right-10 top-12 w-72 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non css-18exuzb transform scale-95"
                            style="background-color:#211E1C;"
                        >
                            <div class="px-1 py-1">
                                <div>
                                    <div class="text-center mt-4">
                                        <img alt="mbgs-logo-" srcset="~/assets/img/logo.png" width="150" height="120" decoding="async" data-nimg="1" class="mx-auto" loading="lazy" style="color: transparent;"/>
                                        <p class="text-md font-normal mt-2">Selamat datang di <strong>Tess</strong></p>
                                    </div>
                                    <div class="flex w-full p-3">
                                        <nuxt-link href="/auth/login" @click="openLoginorRegister = !openLoginorRegister" class="btn-primary w-full justify-center rounded-l-full py-2 text-sm font-medium md:inline-flex transition duration-300 css-1wpp9sf">Masuk</nuxt-link>
                                        <nuxt-link href="/auth/register" @click="openLoginorRegister = !openLoginorRegister" class="btn-secondary w-full justify-center rounded-r-full py-2 text-sm font-medium md:inline-flex transition duration-300 css-mxl5am">Daftar</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- Unauthenticated End -->

                    <!-- Authenticated Start -->
                    <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative">
                            <button id="headlessui-menu-button-:R1qd6:" type="button" class="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="closed" aria-controls="headlessui-menu-items-:r0:">
                                <div class="relative h-8 w-8">
                                    <img
                                        alt=""
                                        sizes="100vw"
                                        srcset="https://static.vecteezy.com/system/resources/previews/000/423/286/original/avatar-icon-vector-illustration.jpg"
                                        src=""
                                        decoding="async"
                                        data-nimg="fill"
                                        class="rounded-full ring-1 ring-white"
                                        loading="lazy"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </button>
                        </div>
                        <div class="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non css-18exuzb transform opacity-0 scale-95 hidden" aria-labelledby="headlessui-menu-button-:R1qd6:" id="headlessui-menu-items-:r0:">
                            <div class="px-1 py-1">
                                <a class="group flex w-full items-center rounded-md px-2 py-2 text-sm transition duration" href=""><i class="fas fa-home"></i>&nbsp;Dashboard</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- Authenticated End -->
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">


    const openLoginorRegister = ref(false);
    
</script>