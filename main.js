$(function () {
    $.post("api/login.php")
    const navigation = {
        index: "首頁",
        admin: "系統管理",
        journal: "旅人日記",
        forecast: "極光預報"
    };

    function hash() {
        let breadcrumbs = new Set(["首頁"])
        let current = location.hash.substring(1)
        localStorage.setItem("breadcrumbs",JSON.stringify([...breadcrumbs]))
        breadcrumbs.add(navigation[current])
        console.log(current);
        if (current == "admin") {
            $.get("api/admin.php",(res)=>{
                console.log(res);
                if (res) {
                    location.href = "admin.html"
                } else {
                    location.href = "login.html"
                }
            })
        } else {
            location.href = current+".html"
        }
    }

    $(window).on("hashchange", hash)
})