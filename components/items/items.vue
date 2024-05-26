<template>
    <div class="container">
        <div class="wrapper mt-3">
            <ItemsTabs />
            <template v-for="data in getItems(($route.query.filter as string))" class="tab-pane">
                <div class="mt-3 md:mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 md:gap-3 lg:grid-cols-5 lg:gap-3 xl:grid-cols-6 xl:gap-5">
                    <!-- Data Start -->
                    <template v-for="(item, index) in data.items">
                        <nuxt-link :href="item.url" class="featured-game-card relative hover:shadow-sm hover:cursor-pointer  group overflow-hidden rounded-2xl  hover:ring-yellow-400 duration-300 hover:ring-2   hover:ring-offset-white-500">
                            <div class="blur-sharp">
                                <div class="relative h-56 sm:h-[14.4rem] md:h-[14.4rem] lg:h-[18rem] xl:w-auto">
                                    <img :src="item.image" :key="index" :alt="item.name" class="object-cover object-center !hover:rounded-3xl" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" />
                                </div>
                            </div>
                            <div class="cover !absolute bottom-0 m-3 h-full">
                                <div class="flex flex-col h-full justify-between no-underline">
                                    <div class="relative p-3 mx-auto my-auto h-16 w-10 lg:h-14 lg:w-14">
        
                                    </div>
                                    <div>
                                        <p class="font-semibold text-white text-[12px] lg:text-[16px] mb-1 line-clamp-2">
                                            {{ item.name }}
                                        </p>
                                        <p class="font-semibold text-[10px] lg:text-[14px] text-yellow-400 line-clamp-2">
                                            {{ item.company }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                    </template>
                    <!-- Data End -->
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    const store = useItems();

    const { getItems } = store;

</script>