<template>
    <!-- Detail Title Start -->
    <section class="mb-5" style="background-color: #211E1C;">
        <div class="relative mx-auto max-w-7xl pb-1">
            <div class="shadow-detail-card px-3 pb-3 sm:py-8 md:px-6">
                <div class="container relative flex flex-row items-center space-x-4 pb-3 md:items-center">
                    <div class="product-thumbnail-container -mt-8 sm:-mt-20 sm:rounded-3xl sm:bg-[#952624] sm:p-2">
                        <img src="https://scrapping-topup-site.vercel.app/assets/img/detail-ml.webp" alt="Detail" width="300" height="300" class="h-28 w-32 rounded-2xl object-cover md:h-[170px] md:w-[170px]" />
                    </div>
                    <div class="flex-1 space-y-0.5 pt-6 sm:mt-3 sm:space-y-2 md:mt-6">
                        <h1 class="flex items-center font-extrabold text-white sm:text-3xl">Mobile Legend</h1>
                        <div class="flex flex-wrap items-center gap-2 gap-x-4 pt-3">
                            <!-- Game Start -->
                            <div class="inline-flex items-center space-x-2 text-xs md:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" class="h-3 w-3 text-yellow-400">
                                    <path
                                        d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z">
                                    </path>
                                </svg>
                                <span class="font-semibold">Proses Cepat</span>
                            </div>
                            <div class="inline-flex items-center space-x-2 text-xs md:text-sm">
                                <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true" class="h-3 w-3 text-sky-300">
                                    <path fill-rule="evenodd"
                                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-semibold">Layanan Chat 24/7</span>
                            </div>
                            <div class="inline-flex items-center space-x-2 text-xs md:text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" class="h-3 w-3 text-green-400">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.5 6.326a6.52 6.52 0 01-1.5.174 6.487 6.487 0 01-5.011-2.36l.49-.98a.423.423 0 01.614-.164l.294.196a.992.992 0 001.491-1.139l-.197-.593a.252.252 0 01.126-.304l1.973-.987a.938.938 0 00.361-1.359.375.375 0 01.239-.576l.125-.025A2.421 2.421 0 0012.327 6.6l.05-.149a1 1 0 00-.242-1.023l-1.489-1.489a.5.5 0 01-.146-.353v-.067a6.5 6.5 0 015.392 9.23 1.398 1.398 0 00-.68-.244l-.566-.566a1.5 1.5 0 00-1.06-.439h-.172a1.5 1.5 0 00-1.06.44l-.593.592a.501.501 0 01-.13.093l-1.578.79a1 1 0 00-.553.894v.191a1 1 0 001 1h.5a.5.5 0 01.5.5v.326z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-semibold">Instant</span>
                            </div>
                            <!-- Game End -->
                            <!-- Voucher Start -->
                            <!-- <div class="inline-flex items-center space-x-2 text-xs md:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" class="h-3 w-3 text-yellow-400">
                                    <path
                                        d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z">
                                    </path>
                                </svg>
                                <span class="font-semibold">Proses 1/24 Jam</span>
                            </div>
                            <div class="inline-flex items-center space-x-2 text-xs md:text-sm"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" class="h-3 w-3 text-sky-300">
                                    <path fill-rule="evenodd"
                                        d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-semibold">Layanan Chat 24/7</span>
                            </div> -->
                            <!-- Voucher End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Detail Title End -->

    <section class="container px-3 grid grid-cols-3 gap-8 pb-8 py-4">
        <div class="col-span-3 md:col-span-1">
            <div class="sticky top-24 flex flex-col space-y-8">
                <div style="background: #424242;" class="card">
                    <div class="flex h-full flex-col justify-end gap-4 ms-4 mt-1">
                        <div></div>
                    </div>
                    <div class="prose prose-sm px-4 py-2 pb-8 text-xs text-white/100 sm:px-6">
                        <div>
                            <p>Cara Order:</p>
                            <ol>
                                <li>Masukkan Data Akun</li>
                                <li>Pilih Nominal</li>
                                <li>Pilih Metode Pembayaran</li>
                                <li>Masukkan Nomor WhatsApp</li>
                                <li>Klik Order Now & lakukan Pembayaran</li>
                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-span-3 flex flex-col space-y-8 md:col-span-2">
            <div class="card rounded-xl" style="background: #424242 !important;">
                <div class="card border-0 mb-0 shadow-form" style="background: #424242 !important;">
                    <div class="flex border-b border-murky-600">
                        <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-b from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold">1</div>
                        <h4 class="card-tite mt-2 ms-2 flex items-center font-extrabold leading-6 md:text-xl" style="color: rgb(234 234 234);">Masukkan Data</h4>
                        <div class="flex cursor-pointer items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" data-bs-toggle="modal" data-bs-target="#petunjukModal"
                                aria-hidden="true" class="h-5 w-5 text-white ms-2 mt-2" style="cursor:pointer;">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-[1rem]">
                    <div id="userData">
                        <!-- userId & server ID Start -->
                        <div class="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <div class="w-full">
                                <div class="relative rounded-sm text-black shadow-sm">
                                    <input
                                        class="form-floating bg-gray-300 focus:!bg-white block w-full rounded-md border-gray-300 text-gray-700 text-sm shadow-sm sm:text-sm focus:outline-none focus:border-[#2D2EAD] focus:ring-2 focus:ring-[#2D2EAD] py-[0.5rem] px-[0.75rem]"
                                        name="user_id" placeholder="User ID" type="text" value="" id="user_id" />
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="relative rounded-md text-black shadow-sm">
                                    <input
                                        class="block w-full bg-gray-300 focus:!bg-white rounded-md border-gray-300 text-gray-700 text-sm shadow-sm sm:text-sm focus:outline-none focus:border-[#2D2EAD] focus:ring-2 focus:ring-[#2D2EAD] py-[0.5rem] px-[0.75rem]"
                                        name="Server" placeholder="Server ID" type="text" value="" id="zone" />
                                </div>
                            </div>
                        </div>

                        <p class="mt-2 text-xs">Silahkan Masukkan User ID &amp; Server Anda.</p>
                        <!-- userId & server ID End -->
                    </div>
                        
                </div>
            </div>

            <div class="card rounded-xl" style="background: #424242 !important;">
                <div class="card border-0 mb-0 shadow-form" style="background: #424242 !important;">
                    <div class="flex border-b border-murky-600">
                        <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-b from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold">2</div>
                        <h4 class="card-title mt-2 ms-2 flex items-center font-extrabold leading-6 md:text-xl" style="color: rgb(234 234 234);">Pilih Nominal</h4>
                    </div>
                </div>
                <div class="p-[1rem]">
                    <!-- Loop -->
                    <div id="tempatNominal" class="mb-4">
                        <p class="font-semibold ms-1">Topup Instants</p>
                        <div class="row row-cols-3 mt-1">
                            <!-- Loop -->
                            <div class="col-lg-4 px-2 mt-2">
                                <div class="list-group shadow h-100">
                                    <input type="radio" name="nominal" id="1" value="1" data-type="diamond" />
                                    <label for="1" class="list-group-item h-100 bg-gradient">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row" id="bayar">
                                                    <div class="col hayutopup-prod selected-order">3 Diamonds (3 + 0 Bonus)</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col nominal-price text-white">
                                                        <!-- <span class="sale-price text-white"><i>Rp 5000</i>
                                                        </span>
                                                        <br>
                                                        <span class="regular-price ">Rp 3000
                                                        </span> -->
                                                        <span class="sale-price text-white">Rp 20000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-1 m-auto">
                                                <img src="https://scrapping-topup-site.vercel.app/assets/img/ml-icon.webp" class="patihiconurl">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4 px-2 mt-2">
                                <div class="list-group shadow h-100">
                                    <input type="radio" name="nominal" id="2" value="1" data-type="diamond" />
                                    <label for="2" class="list-group-item h-100 bg-gradient">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row" id="bayar">
                                                    <div class="col hayutopup-prod selected-order">3 Diamonds (3 + 0 Bonus)</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col nominal-price text-white">
                                                        <!-- <span class="sale-price text-white"><i>Rp 5000</i>
                                                        </span>
                                                        <br>
                                                        <span class="regular-price ">Rp 3000
                                                        </span> -->
                                                        <span class="sale-price text-white">Rp 20000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-1 m-auto">
                                                <img src="https://scrapping-topup-site.vercel.app/assets/img/ml-icon.webp" class="patihiconurl">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4 px-2 mt-2">
                                <div class="list-group shadow h-100">
                                    <input type="radio" name="nominal" id="3" value="1" data-type="diamond" />
                                    <label for="3" class="list-group-item h-100 bg-gradient">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row" id="bayar">
                                                    <div class="col hayutopup-prod selected-order">3 Diamonds (3 + 0 Bonus)</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col nominal-price text-white">
                                                        <!-- <span class="sale-price text-white"><i>Rp 5000</i>
                                                        </span>
                                                        <br>
                                                        <span class="regular-price ">Rp 3000
                                                        </span> -->
                                                        <span class="sale-price text-white">Rp 20000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-1 m-auto">
                                                <img src="https://scrapping-topup-site.vercel.app/assets/img/ml-icon.webp" class="patihiconurl">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4 px-2 mt-2">
                                <div class="list-group shadow h-100">
                                    <input type="radio" name="nominal" id="4" value="1" data-type="diamond" />
                                    <label for="4" class="list-group-item h-100 bg-gradient">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row" id="bayar">
                                                    <div class="col hayutopup-prod selected-order">3 Diamonds (3 + 0 Bonus)</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col nominal-price text-white">
                                                        <!-- <span class="sale-price text-white"><i>Rp 5000</i>
                                                        </span>
                                                        <br>
                                                        <span class="regular-price ">Rp 3000
                                                        </span> -->
                                                        <span class="sale-price text-white">Rp 20000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-1 m-auto">
                                                <img src="https://scrapping-topup-site.vercel.app/assets/img/ml-icon.webp" class="patihiconurl">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-4 px-2 mt-2">
                                <div class="list-group shadow h-100">
                                    <input type="radio" name="nominal" id="5" value="1" data-type="diamond" />
                                    <label for="5" class="list-group-item h-100 bg-gradient">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row" id="bayar">
                                                    <div class="col hayutopup-prod selected-order">3 Diamonds (3 + 0 Bonus)</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col nominal-price text-white">
                                                        <!-- <span class="sale-price text-white"><i>Rp 5000</i>
                                                        </span>
                                                        <br>
                                                        <span class="regular-price ">Rp 3000
                                                        </span> -->
                                                        <span class="sale-price text-white">Rp 20000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-1 m-auto">
                                                <img src="https://scrapping-topup-site.vercel.app/assets/img/ml-icon.webp" class="patihiconurl">
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-xl" style="background: #424242 !important;">
                <div class="card border-0 mb-0 shadow-form" style="background: #424242 !important;">
                    <div class="flex border-b border-murky-600">
                        <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-b from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold">3</div>
                        <h4 class="card-title mt-2 ms-2 lex items-center  font-extrabold leading-6 md:text-xl" style="color: rgb(234 234 234);">Pilih Pembayaran</h4>
                    </div>
                </div>
                <div class="px-1">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="area-list-payment-method">
                                    <!-- QRIS Start -->
                                    <div class="child-box payment-drawwer shadow">
                                        <div class="header short-payment-support-info-head" onclick="">
                                            <div class="left">
                                                <b><i class="fas fa-wallet" aria-hidden="true"></i> QRIS</b>
                                            </div>

                                            <!-- Nominal -->
                                            <div class="right glowing-text CIMBVA">Rp. 2,172,314</div>
                                        </div>

                                        <div class="button-action-payment " style="display: none; background-color: rgb(50, 50, 62);">
                                            <div class="row row-cols-2 row-cols-md-3 p-3">
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/qris.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    QRIS (All Payment)
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="short-payment-support-info flex h-8 w-full items-center justify-end overflow-hidden border-t hover:cursor-pointer transition-all duration-300 transform gap-2" onclick="">
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/qris.webp" alt="" class="m-1 bangjeff-pgimg">

                                            <a class="open-button-action-payment">
                                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- QRIS End -->
                                    <!-- E-Wallet Start -->
                                    <div class="child-box payment-drawwer">
                                        <div class="header short-payment-support-info-head" onclick="">
                                            <div class="left">
                                                <b><i class="fas fa-wallet" aria-hidden="true"></i> E-Wallet</b>
                                            </div>
                                            <div class="right glowing-text CIMBVA">Rp. 2,172,314</div>
                                        </div>

                                        <div class="button-action-payment" style="display: none; background-color: rgb(50, 50, 62);">
                                            <div class="row row-cols-2 row-cols-md-3 p-3">
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/ovo.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    OVO
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Setiap 1 menit
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/gopay.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    GOPAY
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Setiap 1 menit
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="short-payment-support-info flex h-8 w-full items-center justify-end overflow-hidden border-t hover:cursor-pointer transition-all duration-300 transform gap-2" onclick="">
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/ovo.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/gopay.webp" alt="" class="m-1 bangjeff-pgimg" />

                                            <a class="open-button-action-payment">
                                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- E-Wallet End -->
                                    <!-- Virtual Account Start -->
                                    <div class="child-box payment-drawwer">
                                        <div class="header short-payment-support-info-head" onclick="">
                                            <div class="left">
                                                <b><i class="fas fa-credit-card" aria-hidden="true"></i> Virtual Account</b>
                                            </div>
                                            <div class="right glowing-text CIMBVA">Rp. 2,172,314</div>
                                        </div>

                                        <div class="button-action-payment" style="display: none; background-color: rgb(50, 50, 62);">
                                            <div class="row row-cols-2 row-cols-md-3 p-3">
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/cimbva.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    CIMB Niaga VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/briva.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    BRI VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/mandiriva.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    MANDIRI VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/bca.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    BCA VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/bniva.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    BNI VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/permatava.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    PERMATA VA
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="short-payment-support-info flex h-8 w-full items-center justify-end overflow-hidden border-t hover:cursor-pointer transition-all duration-300 transform gap-2" onclick="">
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/cimbva.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/briva.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/mandiriva.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/bca.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/bniva.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/permatava.webp" alt="" class="m-1 bangjeff-pgimg" />

                                            <a class="open-button-action-payment">
                                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Virtual Account End -->
                                    <!-- Convenience Store Start -->
                                    <div class="child-box payment-drawwer">
                                        <div class="header short-payment-support-info-head" onclick="">
                                            <div class="left">
                                                <b><i class="fas fa-store" aria-hidden="true"></i> Convenience Store</b>
                                            </div>
                                            <div class="right glowing-text CIMBVA">Rp. 2,172,314</div>
                                        </div>

                                        <div class="button-action-payment" style="display: none; background-color: rgb(50, 50, 62);">
                                            <div class="row row-cols-2 row-cols-md-3 p-3">
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/indomaret.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    INDOMARET
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 p-1">
                                                    <div class="list-group1 h-100">
                                                        <input type="radio" name="pembayaran" id="1" value="1" />
                                                        <label for="1" class="list-group-item h-100">
                                                            <div class="info-top">
                                                                <div>
                                                                    <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/alfamart.webp" alt="" height="10px" />
                                                                </div>
                                                                <div class="right QRIS2">Rp. 2,172,314</div>
                                                            </div>
                                                            <div class="info-bottom text-sm-left text-dark selected-order">
                                                                <span class="text-dark meltihhh" id="pembay">
                                                                    ALFAMART
                                                                    <div class="bangjeff-dicek">
                                                                        Dicek Otomatis
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="short-payment-support-info flex h-8 w-full items-center justify-end overflow-hidden border-t hover:cursor-pointer transition-all duration-300 transform gap-2" onclick="">
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/indomaret.webp" alt="" class="m-1 bangjeff-pgimg" />
                                            <img src="https://scrapping-topup-site.vercel.app/assets/img/payment/alfamart.webp" alt="" class="m-1 bangjeff-pgimg" />

                                            <a class="open-button-action-payment">
                                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Convenience Store End -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-xl" style="background: #424242 !important;">
                <div class="card border-0 mb-0 shadow-form" style="background: #424242 !important;">
                    <div class="flex border-b border-murky-600">
                        <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-b from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold">4</div>
                        <h4 class="card-title mt-2 ms-2 lex items-center  font-extrabold leading-6 md:text-xl" style="color: rgb(234 234 234);">Kode Promo</h4>
                    </div>
                </div>

                <div class="px-2">
                    <div class="card-body">
                        <div class="flex items-center space-x-2">
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                    </svg>
                                </div>
                                <input type="text" class="block w-full pl-10 pr-16 py-2.5 text-gray-700 input-lg rounded-md bg-gray-300 focus:!bg-white" placeholder="Kode Voucher">
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-4 py-2 text-white text-sm font-medium btn-voucher btn-primary">
                                    Pakai Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-xl" style="background: #424242 !important;">
                <div class="card border-0 mb-0 shadow-form" style="background: #424242 !important;">
                    <div class="flex border-b border-murky-600">
                        <div class="flex items-center justify-center rounded-tl-xl bg-gradient-to-b from-primary-500 to-primary-200 px-4 py-2 text-xl font-semibold">5</div>
                        <h4 class="card-title mt-2 ms-2 lex items-center  font-extrabold leading-6 md:text-xl" style="color: rgb(234 234 234);">Nomor WhatsApp</h4>
                    </div>
                </div>

                <div class="px-2">
                    <div class="card-body">
                        <div class="relative form-group mb-2">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" />
                                </svg>
                            </div>
                            <input type="text" class="block w-full pl-10 pr-16 input-lg text-gray-700 rounded-md bg-gray-300 focus:!bg-white py-2 my-2" placeholder="628xxxxx" name="phone" id="phone" required />
                        </div>
                        <div class="mt-0 mr-3">
                            <div class="g-recaptcha" id="g-recaptcha" name="grecaptcha" data-sitekey="6LdN0GgpAAAAAGJlC6blYgeI-xsN8HtEJ6mGxqIp"></div>
                        </div>
                        <div class="row mt-0">
                            <div class="col-lg-12 clearfix">
                                <input type="hidden" id="apikey" name="apikey" value="">
                                <input type="hidden" name="product_name" id="product_name" value="Mobile Legends">
                                <input type="hidden" name="product_id" id="product_id" value="1">
                                <input type="hidden" name="ktg_tipe" id="ktg_tipe" value="{{$kategori->tipe}}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button Submit Start -->
            <button
            style="box-shadow: 0 .5rem 1rem rgba(255,255,255,.152)!important; background-color: hsl(31.62162162162163 29.599999999999998% 51%); color: rgb(255, 255, 255)"
            class="melll mt-4 items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-75 btn-order relative flex w-full gap-2 overflow-hidden"
            id="order" type="button" onclick="">
                <div class="flex justify-center items-center">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <div id="orderText" class="ms-2 text-center">Order Now</div>
                </div>
                <div id="spinner" class="spinner">
                    <i class="fa fa-spinner fa-spin"></i>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <!-- Button Submit End -->
        </div>
    </section>
</template>