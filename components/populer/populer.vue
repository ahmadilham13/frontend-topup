<template>
    <h3 class="mb-6 text-lg font-semibold uppercase leading-relaxed tracking-wider ">
        <i class="fa-solid fa-fire fa-beat-fade fa-lg text-[#ff8800]"></i>&nbsp;Populer
    </h3>

    <div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 lg:grid-cols-3">
        <template v-for="item in getPopular()">
            <nuxt-link :href="item.url" style="outline: none;" class="no-underline">
                <div class="xs:p-[5px] md:p-2 bg-featured-game-card rounded-xl shadow-xl flex items-center gap-x-2 p-1.5 duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-600 hover:ring-offset-2 hover:ring-offset-bg-color md:gap-x-3 md:rounded-2xl bg-title-product">
                    <img :alt="item.name" decoding="async"
                    class="mr-2 aspect-square h-14 w-14 rounded-lg !object-cover !object-center ring-1 ring-secondary-600 md:h-20 md:w-20 lg:w-50 md:rounded-xl"
                    sizes="100vw" :src="item.image" style="color: transparent;">
                    <div class="relative flex w-[100px] flex-col sm:w-[150px] md:w-[200px]">
                        <h2 class="truncate text-[10px] md:text-base font-semibold text-text-color">{{ item.name }}</h2>
                        <p class="text-[9px] text-text-color md:text-sm">{{ item.company }}</p>
                    </div>
                </div>
            </nuxt-link>
        </template>
    </div>
</template>

<script setup lang="ts">
    const store = usePopular();

    const { getPopular } = store;
</script>