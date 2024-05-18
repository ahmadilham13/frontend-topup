<template>
    <!-- Populer Item Start -->
    <div class="container col-md-11">
        <div class="wrapper mt-3 col-sm-12 col-lg-11 mx-auto">
            <!-- <div class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                </div>
            </div> -->
            <h3 class="mb-6 text-lg font-semibold uppercase leading-relaxed tracking-wider ">
                <i class="fa-solid fa-fire fa-beat-fade fa-lg text-[#ff8800]"></i>&nbsp;Populer
            </h3>
            <div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 lg:grid-cols-3">
                <a href="./detail.html" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="Mobile Legend" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-mobile-legend.webp" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">Mobile Legend</h2>
                            <p class="text-[9px] text-text-color md:text-sm">Moonton</p>
                        </div>
                    </div>
                </a>
                <a href="" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="Genshin Impact" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-genshin.webp" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">Genshin Impact</h2>
                            <p class="text-[9px] text-text-color md:text-sm">HoYoverse</p>
                        </div>
                    </div>
                </a>
                <a href="" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="Free Fire" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-freefire.jpeg" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">Free Fire</h2>
                            <p class="text-[9px] text-text-color md:text-sm">Garena</p>
                        </div>
                    </div>
                </a>
                <a href="" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="PUBG Mobile" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-pubg-mobile.webp" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">PUBG Mobile</h2>
                            <p class="text-[9px] text-text-color md:text-sm">Tencent Games</p>
                        </div>
                    </div>
                </a>
                <a href="" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="Undown" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-undown.webp" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">Undown</h2>
                            <p class="text-[9px] text-text-color md:text-sm">Garena</p>
                        </div>
                    </div>
                </a>
                <a href="" style="outline: none;">
                    <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                        <img alt="Free Fire Max" decoding="async"
                        class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                        sizes="100vw" src="~/assets/img/populer-freefire-max.webp" style="color: transparent;">
                        <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                            <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">Free Fire Max</h2>
                            <p class="text-[9px] text-text-color md:text-sm">Garena</p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Content Tab Start -->
            <div class="row mt-5 mx-auto">
                <div class="col-sm-11">
                    <ul class="nav nav-pills justify-start hide-scrollbar -mb-px flex overflow-auto" id="myTab" role="tablist">
                        <!-- Tab Item Start -->
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button 
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600 active"
                                id="game-tab" data-bs-toggle="tab" data-bs-target="#game" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>Game Mobile</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="Joki-tab" data-bs-toggle="tab" data-bs-target="#Joki" type="button" role="tab"
                                aria-controls="joki" aria-selected="true">
                                <small>Jasa Joki MLBB</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="Pulsa-tab" data-bs-toggle="tab" data-bs-target="#Pulsa" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>Pulsa</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="Voucher-tab" data-bs-toggle="tab" data-bs-target="#Voucher" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>Voucher</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="Emoney-tab" data-bs-toggle="tab" data-bs-target="#Emoney" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>E-Money</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="Pasca-tab" data-bs-toggle="tab" data-bs-target="#Pasca" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>Pascabayar</small>
                            </button>
                        </li>
                        <li class="nav-item me-1 mt-0 nav-tab border border-secondary-600 rounded-full" role="presentation">
                            <button
                                class="whitespace-nowrap rounded-full bg-transparent px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 focus-visible:bg-secondary-500 !border-transparent !bg-primary-500 text-text-color-foreground hover:!bg-primary-600"
                                id="app-tab" data-bs-toggle="tab" data-bs-target="#App" type="button" role="tab"
                                aria-controls="game" aria-selected="true">
                                <small>App Premium</small>
                            </button>
                        </li>
                        <!-- Tab Item End -->
                    </ul>
                </div>
            </div>
            <!-- Content Tab End -->
        </div>
    </div>
    <!-- Populer Item End -->
    
</template>