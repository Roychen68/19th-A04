$(function () {
    function header() {
        for (let i = 0; i < 60; i++) {
            $("div.AuroraMation").append(`<div style="--delay: ${Math.random()};"></div>`)
        }
    }
    header()

    const navigation = {
        index: "首頁",
        admin: "系統管理",
        journal: "旅人日記",
        forecast: "極光預報",
        login: "系統管理登入"
    }

    let page = location.pathname.split("/").pop().replace(".html", "") || "index"
    let active = page == "login" ? "admin" : page

    $(".link").removeClass("active")
    $(`.link[href="#${active}"]`).addClass("active")

    let breadcrumb = `<li class="breadcrumb-item"><a href="#index">首頁</a></li>`
    if (page != "index") {
        breadcrumb += `<li class="breadcrumb-item active">${navigation[page]}</li>`
    }
    $("main").prepend(`
        <div class="col-10 mx-auto mt-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">${breadcrumb}</ol>
        </div>
    `)

    function hash() {
        let current = location.hash.substring(1)

        if (!navigation[current] || current == "login") return

        if (current == "admin") {
            $.getJSON("api/admin.php", (res) => {
                if (res.login) {
                    location.href = "admin.html"
                } else {
                    location.href = "login.html"
                }
            })
        } else {
            location.href = current + ".html"
        }
    }

    $(window).on("hashchange", hash)
})
