$(function () {
    function hash() {
        console.log(location.hash);
    }

    $(window).on("hashchange",hash())
})