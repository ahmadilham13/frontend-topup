
export interface Popular {
    id: string,
    name: string,
    company: string,
    image: string,
    url: string,
}

const popular: Popular[] = [
    {
        id: "1",
        name: "Mobile Legend",
        company: "Montoon",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-mobile-legend.webp",
        url: "/",
    },
    {
        id: "2",
        name: "Genshin Impact",
        company: "HoYoverse",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-genshin.webp",
        url: "/",
    },
    {
        id: "3",
        name: "Free Fire",
        company: "Garean",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-freefire.jpeg",
        url: "/",
    },
    {
        id: "4",
        name: "PUBG Mobile",
        company: "Tencent Games",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-pubg-mobile.webp",
        url: "/",
    },
    {
        id: "5",
        name: "Undown",
        company: "Garena",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-undown.webp",
        url: "/",
    },
    {
        id: "6",
        name: "Free Fire Max",
        company: "Garena",
        image: "https://scrapping-topup-site.vercel.app/assets/img/populer-freefire-max.webp",
        url: "/",
    },
]


export const usePopular = defineStore('popular', {
    state: () => ({
        popular
    }),
    actions: {
        getPopular() {
            return popular;
        }
    }
})