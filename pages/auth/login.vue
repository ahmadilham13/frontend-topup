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
                <h1 class="font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[150%] tracking-[0.3px] mt-5">Masuk</h1>
                <p class="text-md mt-3 mb-2" style="color: rgb(203, 203, 203);">Masuk menggunakan akun terdaftar kamu.</p>
                <div class="w-full md:w-1/2 lg:w-[35%] mt-[30px]">
                    <form action="" method="POST">
                        <div class="relative mb-[20px]">
                            <input
                                type="text" name="username" 
                                class="block rounded-full creativeux-shadow pl-5 pr-5 false pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                placeholder=" "
                            />
                            <label
                                class="absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                            >
                                Username
                            </label>
                        </div>
                        <div class="password-toggle">
                            <div class="relative mb-[20px]">
                                <input
                                    type="password" name="password" id="password"
                                    class="block rounded-full creativeux-shadow pl-5 pr-[3.2rem] pb-2.5 pt-6 w-full text-sm border-0 peer h-14 focus:duration-300 focus:outline-none css-1y2p5dv"
                                    placeholder=" "
                                    
                                />
                                <label
                                    class="absolute text-md duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 css-qe1ax5"
                                >
                                    Password
                                </label>
                            </div>
                        </div>
                        <div class="g-recaptcha" id="g-recaptcha" name="grecaptcha" data-sitekey=""></div>
                        <button
                           type="submit" value="submit"
                            class="btn btn-primary mt-3 py-3 w-100 inline-flex w-full justify-center rounded-full text-sm font-semibold px-4 hover:scale-105 duration-300 items-center"
                            style="color: rgb(255, 255, 255); background: rgb(112, 127, 235);"
                        >
                            <span>Masuk</span>
                        </button>
                    </form>

                    <div class="flex items-center my-7">
                        <div class="flex-grow h-px" style="background: rgb(203, 203, 203);"></div>
                        <span class="flex-shrink text-sm px-4 font-light" style="color: rgb(203, 203, 203);">Belum punya akun?</span>
                        <div class="flex-grow h-px" style="background: rgb(203, 203, 203);"></div>
                    </div>
                    <nuxt-link class="inline-flex w-full py-3 px-4 justify-center text-sm font-semibold border rounded-full hover:scale-105 duration-300" href="/auth/register" style="color: rgb(39, 39, 39); background: rgb(255, 255, 255);">
                        Daftar Sekarang
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