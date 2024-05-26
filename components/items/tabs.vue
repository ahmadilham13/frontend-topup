<template>
    <div class="row mt-5 mx-auto">
        <div class="flex overflow-auto gap-2">
            <template v-for="tab in getTab()">
                <nuxt-link
                    :to="tab?.query ? `?filter=${tab.query}` : '/'" 
                    class="me-1 mt-0 whitespace-nowrap !rounded-full !bg-transparent !border !border-white px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 !text-text-color-foreground hover:!bg-brand-primary no-underline"
                    :class="{
                        '!bg-brand-primary' : isActiveTab(tab.query)
                    }"
                >
                    {{ tab.name }}
                </nuxt-link>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    const store = useItemTabs();

    const { getTab, isActiveTab} = store;

</script>