<template>
    <div style="color: rgb(230, 230, 230);">
        <AuthBg />
        <div class="pl-4 pr-2 md:px-12 lg:px-16 py-10 flex flex-col min-h-screen max-h-screen overflow-y-scroll overflow-x-hidden css-1jh570t">
            <nuxt-link href="/">
                <img
                    alt="logo"
                    srcset="~/assets/img/logo.png"
                    width="150"
                    height="150"
                    decoding="async"
                    data-nimg="1"
                    class="mt-4 cursor-pointer z-20"
                    loading="lazy"
                    style="position: relative; color: transparent;"
                />
            </nuxt-link>
            <div class="z-10">
                <h1 class="font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[150%] tracking-[0.3px] mt-5">Daftar</h1>
                <p class="text-md mt-3 mb-2" style="color: rgb(203, 203, 203);">Mohon masukan data pendaftaran dengan valid.</p>
                <div class="w-full md:w-1/2 lg:w-[35%] mt-[30px]">
                    <form action="" method="post">
                        <div class="flex flex-col lg:flex-row w-full lg:gap-2">
                            <div class="relative mb-[20px] lg:w-1/2">
                                <input
                                type="text"
                                name="nama"
                                class="block rounded-full pl-5 pr-5 false pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                placeholder=" "
                                />
                                <label
                                class="ms-3 absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 right-5 z-10 origin-[100%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                                >
                                Nama
                                </label>
                            </div>
                            <div class="relative mb-[20px] md:w-1/2">
                                <input
                                type="text"
                                name="username"
                                class="block rounded-full pl-5 pr-5 false pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                placeholder=" "
                                />
                                <label
                                class="absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 left-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                                >
                                Username
                                </label>
                            </div>
                        </div>
                        <div class="relative mb-[20px]">
                            <input
                                type="number" name="whatsapp"
                                class="block rounded-full pl-5 pr-5 false pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                placeholder=""
                            />
                            <label
                                class="absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                            >
                                No WhatsApp
                            </label>
                        </div>
                        <div class="password-toggle">
                            <div class="relative mb-[20px]">
                                <input
                                    type="password" name="password"
                                    class="block rounded-full pl-5 pr-[3.2rem] pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                    placeholder=" "
                                    
                                />
                                
                                <label
                                    class="absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                                >
                                    Password
                                </label>
                                
                                <div>
                                    <!-- shop password icon -->
                                    <!--<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5 absolute cursor-pointer top-[18px] right-6">-->
                                    <!--    <path-->
                                    <!--        stroke-linecap="round"-->
                                    <!--        stroke-linejoin="round"-->
                                    <!--        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"-->
                                    <!--    ></path>-->
                                    <!--    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>-->
                                    <!--</svg>-->
                                </div>
                            </div>
                        </div>
                        <div class="mb-8 text-[14px] justify-between flex">
                            <div class="flex items-center ml-2">
                                <input required type="checkbox" name="tac" id="tac" class="form-check-input">
                                    <label for="tac" class="form-check-label mt-2 ms-2">
                                    <i>
                                    I agree to <nuxt-link href="" class="cursor-pointer">Terms
                                    and conditions</nuxt-link>
                                    </i>
                                    </label>
                            </div>
                        </div>

                        <button
                          type="submit" name="tombol" value="submit"
                            class="bg-btnPurple hover:bg-yellow-400 mt-3 w-100 inline-flex w-full justify-center rounded-full text-sm font-semibold py-3 px-4 hover:scale-105 duration-300 items-center"
                        
                        >
                            <span>Daftar Sekarang</span>
                        </button>
                    </form>

                    <div class="flex items-center my-7">
                        <div class="flex-grow h-px" style="background: rgb(203, 203, 203);"></div>
                        <span class="flex-shrink text-sm px-4 font-light" style="color: rgb(203, 203, 203);">Sudah punya akun?</span>
                        <div class="flex-grow h-px" style="background: rgb(203, 203, 203);"></div>
                    </div>
                    <nuxt-link class="inline-flex w-full py-3 px-4 justify-center text-sm font-semibold border rounded-full hover:scale-105 duration-300" href="/auth/login" style="color: rgb(39, 39, 39); background: rgb(255, 255, 255);">
                        Masuk Sekarang
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>