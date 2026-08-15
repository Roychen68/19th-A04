const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            navigation: {
                index: "首頁",
                admin: "系統管理",
                journal: "旅人日記",
                forecast: "極光預報"
            }
        }
    },
    methods: {
        hash() {
            let breadcrumbs = new Set(["首頁"])
            let current = location.hash.substring(1)
            breadcrumbs.add(navigation[current])
        }
    },
    mounted() {
        $(window).on("hashchange", this.hash)
    }
}).mount("#app")

// $(function () {
//     const navigation = {
//         index: "首頁",
//         admin: "系統管理",
//         journal: "旅人日記",
//         forecast: "極光預報"
//     };

//     function hash() {
//         let breadcrumbs = new Set(["首頁"])
//         let current = location.hash.substring(1)
//         breadcrumbs.add(navigation[current])
//     }

//     $(window).on("hashchange", hash)
// })