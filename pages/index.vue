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
        </div>
    </div>
</template>

<script setup lang="ts">
    const categoryProducts = useCategoryProduct();
    const { getCategory, getDetailCategory } = categoryProducts;

    const categories = ref([]);
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
        setCategory(route.query.category, value[0]['id']);
    })

    watch(() => route.query.category, (value) => {
        setCategory(value, categories.value[0]['id']);
    })
</script> 