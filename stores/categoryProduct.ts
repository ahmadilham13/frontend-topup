export const useCategoryProduct = defineStore("categoryProduct", () => {
    const api = useApi();

    /**
   * Function to fetching data category product from API.
   */
    const getCategory = async () => {
        try {
            const response = await api.get("category/");
            return response;
        } catch (error: any) {
            console.error("Error while get data category.", error);
        }
    }

    /**
   * Function to fetching detail category product from API.
   */
        const getDetailCategory = async (id: any) => {
            try {
                const response = await api.get(`category/${id}`);
                return response;
            } catch (error: any) {
                console.error("Error while get detail category.", error);
            }
        }

    return { getCategory, getDetailCategory };
})