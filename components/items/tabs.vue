<template>
    <div class="row mt-5 mx-auto">
        <div class="flex overflow-auto hide-scrollbar mb-3 gap-2">
            <template v-for="tab in categories">
                <nuxt-link
                    :to="`?category=${tab.id}`" 
                    class="me-1 mt-0 whitespace-nowrap !rounded-full !border !border-white px-4 py-2 pt-1 text-sm shadow-xl outline-none duration-300 hover:bg-secondary-500 focus:bg-secondary-500 !text-text-color-foreground hover:!bg-brand-primary no-underline"
                    :class="{
                        '!bg-brand-primary' : $route.query.category == tab.id
                    }"
                >
                    {{ tab.name }}
                </nuxt-link>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Data {
        [key: string]: any;
    }

    const props = defineProps({
        categories: {
            type: Object as PropType<Data>,
            default: () => ({})
        }
    })

    const categories = ref<any>(props.categories)

</script>