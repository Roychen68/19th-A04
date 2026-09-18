function exist(val) {
    if (val != null) {
        return val;
    } else {
        return `<span class="bg-secondary p-1 rounded">無資料</span>`
    }
}

function level(val) {
    if (val == "高") return `<span class="bg-success p-1 rounded">高</span>`
    if (val == "中") return `<span class="bg-warning p-1 rounded">中</span>`
    if (val == "低") return `<span class="bg-danger p-1 rounded">低</span>`
}

function cut(val) {
    if (val.length > 30) {
        let front = val.substring(0,30)
        let back = val.substring(30)
        return `${front}<span class="readMore d-none">${back}</span><span class="readToggle link-info">閱讀更多</span>`
    } else {
        return val
    }
}

$(document).on("click",".readToggle",function () {
    $(this).prev().closest("span.readMore").toggleClass("d-none")
    $(this).text($(this).text() == "閱讀更多" ? "閱讀更少" : "閱讀更多")
})