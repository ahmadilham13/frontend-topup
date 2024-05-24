
export interface Tab {
    id: string;
    name: string;
    query?: string;
}

const tabs: Tab[] = [
    {
        id: "1",
        name: "Game Mobile",
    },
    {
        id: "2",
        name: "Jasa Joki MLBB",
        query: "jasa-joki"
    },
    {
        id: "3",
        name: "Pulsa",
        query: "pulsa"
    },
    {
        id: "4",
        name: "Voucher",
        query: "voucher"
    },
    {
        id: "5",
        name: "E-Money",
        query: "e-money"
    },
    {
        id: "6",
        name: "Pascabayar",
        query: "pascabayar"
    },
    {
        id: "7",
        name: "App Premium",
        query: "app-premium"
    },
]

export const useItemTabs = defineStore('itemTab', {
    state: () => ({
        tabs
    }),
    actions: {
        isActiveTab(query: string | undefined) {
            const route = useRoute();
            return route.query?.filter === query;
        },
        getTab() {
            return tabs;
        }
    }
})