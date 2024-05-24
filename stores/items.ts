
interface Item {
    id: string;
    name: string;
    company: string;
    image: string;
    url: string;
}
export interface Data {
    id: string;
    name?: string;
    items: Item[],
}

const items: Data[] = [
    {
        id: "1",
        items: [
            {
                id: "1",
                name: "Mobile Legend",
                company: "Montoon",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-ml.webp",
                url: "/",
            },
            {
                id: "2",
                name: "Arena of Valor",
                company: "Garena",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-aov.webp",
                url: "/",
            },
            {
                id: "3",
                name: "Arena Breakout",
                company: "Level Infinite",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-arena-breakout.jpg",
                url: "/",
            },
            {
                id: "4",
                name: "Metal Slug",
                company: "VNG",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-metal-slug.webp",
                url: "/",
            },
            {
                id: "5",
                name: "Ace Racer",
                company: "NetEase",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-ace-racer.webp",
                url: "/",
            },
            {
                id: "6",
                name: "Be The King: Judge Destiny",
                company: "Chuang Cool Entertainment",
                image: "https://scrapping-topup-site.vercel.app/assets/img/game-be-the-king.webp",
                url: "/",
            },
        ]
    },
    {
        id: "2",
        name: "jasa-joki",
        items: [
            {
                id: "1",
                name: "Joki Mobile Legend",
                company: "Jasa Joki",
                image: "https://scrapping-topup-site.vercel.app/assets/img/jasa-ml.webp",
                url: "/",
            },
        ]
    },
    {
        id: "3",
        name: "pulsa",
        items: [
            {
                id: "1",
                name: "Indosat",
                company: "Indosat",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-indosat.png",
                url: "/",
            },
            {
                id: "2",
                name: "XL",
                company: "XL",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-xl.png",
                url: "/",
            },
            {
                id: "3",
                name: "Three",
                company: "Three",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-three.png",
                url: "/",
            },
            {
                id: "4",
                name: "Smartfren",
                company: "Smartfren",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-smartfren.jpg",
                url: "/",
            },
            {
                id: "5",
                name: "Telkomsel",
                company: "Telkomsel",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-telkomsel.png",
                url: "/",
            },
            {
                id: "6",
                name: "AXIS",
                company: "AXIS",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-axis.png",
                url: "/",
            },
            {
                id: "7",
                name: "By U",
                company: "By U",
                image: "https://scrapping-topup-site.vercel.app/assets/img/pulsa-by-u.png",
                url: "/",
            },
        ]
    }
];

export const useItems = defineStore('items', {
    state: () => ({
        items
    }),
    actions: {
        getItems(query: string | undefined) {
            return items.filter(item => item.name === query);
        }
    }
})