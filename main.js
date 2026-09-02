$(function () {

    function hash() {
        const breadcrumbs = {
            index: "index.html",
            forecast: "forecast.html",
            journal: "journal.html",
            setting: "setting.html",
        }
        let current = location.hash.substring(1);
        $("a.link").removeClass("active")
        $(`a.link#${current}`).addClass("active")
    }
    $(window).on("hashchange",hash)
})
