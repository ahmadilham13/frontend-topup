<template>
    <div class="container col-md-11">
        <div class="wrapper mt-3 col-sm-12 col-lg-11 mx-auto">
            <Populer />
        </div>
    </div>
    <div class="container">
        <div class="wrapper mt-2">
            <ItemsTabs v-if="Object.keys(categories).length > 0" :categories="categories" />
            <Items v-if="Object.keys(products).length > 0" :products="products" />   
            <template v-else>
                <div class="p-8 max-w-md mx-auto text-center">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6m10 0a2 2 0 012 2v2a2 2 0 01-2 2H8m8-6H8m0 0a2 2 0 01-2 2v2a2 2 0 002 2h8a2 2 0 002-2v-2a2 2 0 00-2-2m0 0V5m-4 16h-2a1 1 0 01-1-1v-1m4 0v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1m4 0H9"></path>
                    </svg>
                    <h2 class="text-2xl font-semibold text-gray-700 mb-2">Data Empty</h2>
                    <p class="text-gray-600">The category selected was hasn't product right now.</p>
                </div>
            </template>         
        </div>
    </div>
</template>

<script setup lang="ts">
    const categoryProducts = useCategoryProduct();
    const { getCategory, getDetailCategory } = categoryProducts;

    const categories = ref([]);
    const categorySelectName = ref("");
    const products = ref([]);
    const route = useRoute();

    const getCategoryData = async () => {
        const data = await getCategory();
        categories.value = data;
    }

    const setCategory = (query: any, categoryId: any) => {
        if (query === undefined) {
            route.query.category = categoryId
        }
        setItems(route.query.category);
    }

    const setItems = async (categoryId: any) => {
        const items = await getDetailCategory(categoryId);
        products.value = items.data.products.data
    }

    onMounted(() => {
        getCategoryData();
    })
    
    watch(() => categories.value, (value) => {
        if (value.length > 0) {
            setCategory(route.query.category, value[0]['id']);
            categorySelectName.value = value[0]['name'];
        }
    })

    watch(() => route.query.category, (value) => {
        setCategory(value, categories.value[0]['id']);
        categorySelectName.value = categories.value[0]['name'];
    })
</script> 