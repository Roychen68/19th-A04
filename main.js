(function () {
    "use strict";

<<<<<<< HEAD
    const STORAGE_KEY = "auroraFinlandJournals";
    const page = document.body.dataset.page || "";

    const fixedForecasts = [
        {
            id: "rovaniemi",
            name: "羅瓦涅米",
            englishName: "Rovaniemi",
            kp: 4.8,
            cloud: 18,
            probability: 88,
            bestTime: "22:30–01:30",
            recommendation: "高",
            note: "天空大致晴朗，Kp 指數與雲量條件理想。建議前往市區北側、遠離路燈的空曠地點，並提前三十分鐘適應黑暗。"
        },
        {
            id: "inari",
            name: "伊納里",
            englishName: "Inari",
            kp: 4.5,
            cloud: 27,
            probability: 82,
            bestTime: "21:45–00:45",
            recommendation: "高",
            note: "伊納里湖周邊視野遼闊，今晚有不錯的觀賞機會。湖岸濕滑且體感溫度低，請穿著防滑鞋並做好保暖。"
        },
        {
            id: "kittila",
            name: "基蒂萊",
            englishName: "Kittilä",
            kp: 3.7,
            cloud: 42,
            probability: 64,
            bestTime: "23:00–02:00",
            recommendation: "中",
            note: "雲層可能間歇散開，建議保留移動彈性並觀察北方天空。可優先選擇地勢稍高、北向視野沒有遮蔽物的位置。"
        },
        {
            id: "kuusamo",
            name: "庫薩莫",
            englishName: "Kuusamo",
            kp: 2.4,
            cloud: 71,
            probability: 31,
            bestTime: "00:00–02:30",
            recommendation: "低",
            note: "目前雲量偏高且極光活動較弱，短暫雲隙仍可能出現。若不便長時間等待，可改看其他地點的示範預報。"
        }
    ];

    const seedJournals = [
        {
            id: "seed-1",
            nickname: "小鹿",
            email: "aurora.walker@gmail.com",
            location: "伊納里",
            date: "2026-02-18",
            rating: 5,
            experience: "湖面安靜得像一面鏡子，綠色光帶從北方慢慢升起，後來整片天空都開始舞動。等待兩個小時真的很值得，記得多帶一雙保暖襪。",
            photo: "inari-lake-night.jpg",
            blessings: 24,
            createdAt: "2026-02-19T08:20:00+08:00"
        },
        {
            id: "seed-2",
            nickname: "北境阿樹",
            email: "tree.travels@example.com",
            location: "羅瓦涅米",
            date: "2026-01-26",
            rating: 4,
            experience: "離開市區燈光後大約半小時就看見淡淡的極光，手機長曝光比肉眼更明顯。凌晨雲層散開時顏色突然變亮，是很難忘的第一次追光。",
            photo: "rovaniemi-first-light.png",
            blessings: 17,
            createdAt: "2026-01-27T10:15:00+08:00"
        }
    ];

    function element(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function setActiveNavigation() {
        const current = page === "admin-panel" ? "admin" : page;
        document.querySelectorAll("[data-nav]").forEach((link) => {
            const isActive = link.dataset.nav === current;
            link.classList.toggle("active", isActive);
            if (isActive) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
    }

    function getJournals() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === null) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(seedJournals));
                return seedJournals.map((item) => ({ ...item }));
            }
            const parsed = JSON.parse(stored);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return seedJournals.map((item) => ({ ...item }));
        }
    }

    function saveJournals(journals) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(journals));
    }

    function maskEmail(email) {
        const parts = String(email).split("@");
        if (parts.length !== 2) return "***";
        return `${parts[0].charAt(0) || "*"}***@${parts[1]}`;
    }

    function formatDate(dateString) {
        if (!dateString) return "—";
        const date = new Date(`${dateString}T00:00:00`);
        if (Number.isNaN(date.getTime())) return dateString;
        return new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
    }

    function stars(rating) {
        const safeRating = Math.min(5, Math.max(1, Number(rating) || 1));
        return `${"★".repeat(safeRating)}${"☆".repeat(5 - safeRating)}`;
    }

    async function loadForecasts() {
        try {
            const response = await fetch("api/get.php?action=aurora", { credentials: "same-origin" });
            if (!response.ok) throw new Error("Forecast request failed");
            const payload = await response.json();
            if (!payload.ok || !Array.isArray(payload.data)) throw new Error("Invalid forecast data");
            return payload.data;
        } catch (error) {
            return fixedForecasts;
        }
    }

    function recommendationClass(level) {
        if (level === "高") return "level-high";
        if (level === "中") return "level-medium";
        return "level-low";
    }

    function renderForecast(forecast) {
        const container = document.getElementById("forecast-result");
        container.replaceChildren();

        const card = element("article", "forecast-card");
        const header = element("header", "forecast-card-header");
        const titleWrap = element("div");
        titleWrap.append(element("h2", "", forecast.name), element("p", "", forecast.englishName));
        const badge = element("span", `recommendation-badge ${recommendationClass(forecast.recommendation)}`, `推薦程度：${forecast.recommendation}`);
        header.append(titleWrap, badge);

        const metrics = element("div", "forecast-metrics");
        [
            ["Kp 指數", `${forecast.kp}`],
            ["雲量", `${forecast.cloud}%`],
            ["極光機率", `${forecast.probability}%`]
        ].forEach(([label, value]) => {
            const metric = element("div", "forecast-metric");
            metric.append(element("span", "", label), element("strong", "", value));
            metrics.append(metric);
        });

        const detail = element("div", "forecast-detail");
        const timeBlock = element("div");
        timeBlock.append(element("h3", "", "最佳觀賞時間"), element("p", "", forecast.bestTime));
        const noteBlock = element("div");
        noteBlock.append(element("h3", "", "觀賞備註"));
        const details = element("details");
        details.append(element("summary", "", "顯示完整觀賞建議"), element("p", "", forecast.note));
        noteBlock.append(details);
        detail.append(timeBlock, noteBlock);

        card.append(header, metrics, detail);
        container.append(card);
    }

    function initForecast() {
        const form = document.getElementById("forecast-form");
        if (!form) return;
        const select = document.getElementById("forecast-location");
        const feedback = document.getElementById("forecast-feedback");
        const result = document.getElementById("forecast-result");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            if (!select.value) {
                select.classList.add("is-invalid");
                feedback.className = "status-message error";
                feedback.textContent = "請先選擇一個芬蘭地點。";
                result.replaceChildren();
                select.focus();
                return;
            }
            select.classList.remove("is-invalid");
            feedback.className = "status-message info";
            feedback.textContent = "正在讀取固定預報資料…";
            const forecasts = await loadForecasts();
            const forecast = forecasts.find((item) => item.id === select.value);
            if (!forecast) {
                feedback.className = "status-message error";
                feedback.textContent = "此地點目前沒有可顯示的資料，請改選其他地點。";
                result.replaceChildren();
                return;
            }
            renderForecast(forecast);
            feedback.className = "status-message success";
            feedback.textContent = `已顯示${forecast.name}的固定預報資料。`;
        });

        select.addEventListener("change", () => select.classList.remove("is-invalid"));
    }

    function validateJournal(values, form) {
        const errors = {};
        if (!values.nickname) errors.nickname = "請輸入旅人暱稱。";
        if (!values.email) errors.email = "請輸入 Email。";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Email 格式不正確，例如 name@example.com。";
        if (!values.location) errors.location = "請選擇觀賞地點。";
        if (!values.date) errors.date = "請選擇觀賞日期。";
        if (![1, 2, 3, 4, 5].includes(values.rating)) errors.rating = "極光評分只能是 1–5 分。";
        if (!values.experience) errors.experience = "請輸入觀賞心得。";
        else if (values.experience.length < 10) errors.experience = "觀賞心得至少需要 10 個字。";
        if (!values.photo) errors.photo = "請輸入照片網址或檔名。";

        ["nickname", "email", "location", "date", "rating", "experience", "photo"].forEach((name) => {
            const field = form.elements[name];
            const error = document.getElementById(`${name}-error`);
            const message = errors[name] || "";
            field.classList.toggle("is-invalid", Boolean(message));
            if (error) error.textContent = message;
        });
        return errors;
    }

    function diaryCard(journal) {
        const card = element("article", "diary-card");
        const header = element("header", "diary-card-header");
        const identity = element("div");
        identity.append(element("h3", "", journal.nickname));
        const meta = element("div", "diary-meta");
        meta.append(element("span", "", journal.location), element("span", "", formatDate(journal.date)), element("span", "", maskEmail(journal.email)));
        identity.append(meta);
        const rating = element("span", "rating-stars", stars(journal.rating));
        rating.setAttribute("aria-label", `${journal.rating} 分`);
        header.append(identity, rating);
        card.append(header);

        if (journal.experience.length > 80) {
            card.append(element("p", "diary-excerpt", journal.experience));
            const details = element("details");
            details.append(element("summary", "", "閱讀完整心得"), element("p", "", journal.experience));
            card.append(details);
        } else {
            card.append(element("p", "", journal.experience));
        }

        const footer = element("footer", "diary-footer");
        footer.append(element("span", "photo-info", `照片：${journal.photo}`));
        const blessing = element("button", "blessing-button", `♡ 極光祝福 ${journal.blessings}`);
        blessing.type = "button";
        blessing.dataset.journalId = journal.id;
        blessing.setAttribute("aria-label", `為${journal.nickname}的日記送上極光祝福，目前 ${journal.blessings} 個`);
        footer.append(blessing);
        card.append(footer);
        return card;
    }

    function renderJournals() {
        const list = document.getElementById("diary-list");
        if (!list) return;
        const journals = getJournals().sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(b.createdAt).localeCompare(String(a.createdAt)));
        list.replaceChildren();
        document.getElementById("journal-count").textContent = `${journals.length} 篇日記`;
        if (!journals.length) {
            list.append(element("p", "empty-state", "目前還沒有旅人日記，歡迎留下第一篇追光故事。"));
            return;
        }
        journals.forEach((journal) => list.append(diaryCard(journal)));
    }

    function initJournal() {
        const form = document.getElementById("diary-form");
        if (!form) return;
        const dateField = form.elements.date;
        dateField.max = new Date().toISOString().slice(0, 10);
        renderJournals();

        form.addEventListener("input", (event) => {
            if (event.target.matches(".is-invalid")) event.target.classList.remove("is-invalid");
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(form);
            const values = {
                nickname: String(data.get("nickname") || "").trim(),
                email: String(data.get("email") || "").trim(),
                location: String(data.get("location") || "").trim(),
                date: String(data.get("date") || "").trim(),
                rating: Number(data.get("rating")),
                experience: String(data.get("experience") || "").trim(),
                photo: String(data.get("photo") || "").trim()
            };
            const errors = validateJournal(values, form);
            if (Object.keys(errors).length) {
                form.querySelector(".is-invalid")?.focus();
                return;
            }
            const journals = getJournals();
            journals.push({
                id: window.crypto?.randomUUID?.() || `journal-${Date.now()}`,
                ...values,
                blessings: 0,
                createdAt: new Date().toISOString()
            });
            saveJournals(journals);
            form.reset();
            renderJournals();
            const success = document.getElementById("journal-success");
            success.textContent = "投稿成功！你的追光故事已加入旅人日記。";
            success.classList.remove("d-none");
            success.focus();
        });

        document.getElementById("diary-list").addEventListener("click", (event) => {
            const button = event.target.closest("[data-journal-id]");
            if (!button) return;
            const journals = getJournals();
            const journal = journals.find((item) => item.id === button.dataset.journalId);
            if (!journal) return;
            journal.blessings = Number(journal.blessings || 0) + 1;
            saveJournals(journals);
            renderJournals();
        });
    }

    function showLoginMessage(message, type) {
        const box = document.getElementById("login-message");
        box.textContent = message;
        box.className = `status-message ${type}`;
    }

    function initLogin() {
        const form = document.getElementById("login-form");
        if (!form) return;
        form.addEventListener("input", (event) => event.target.classList.remove("is-invalid"));
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const account = form.elements.account.value.trim();
            const password = form.elements.password.value;
            form.elements.account.classList.toggle("is-invalid", !account);
            form.elements.password.classList.toggle("is-invalid", !password);
            if (!account || !password) return;
            try {
                const response = await fetch("api/login.php", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                    body: new URLSearchParams({ account, password })
                });
                const payload = await response.json();
                if (payload.login) {
                    showLoginMessage(payload.message, "success");
                    window.location.href = "admin.html";
                    return;
                }
                form.elements.account.classList.add("is-invalid");
                form.elements.password.classList.add("is-invalid");
                showLoginMessage(payload.message || "帳號或密碼錯誤。", "error");
            } catch (error) {
                showLoginMessage("無法連線登入服務，請確認網站已透過 XAMPP 的 Apache 開啟。", "error");
            }
        });
    }

    function buildAdminRow(journal) {
        const row = element("tr");

        const travelerCell = element("td");
        travelerCell.dataset.label = "旅人 / Email";
        const travelerContent = element("div", "admin-cell-content");
        travelerContent.append(element("strong", "", journal.nickname), element("br"));
        const emailButton = element("button", "email-filter-button", journal.email);
        emailButton.type = "button";
        emailButton.dataset.email = journal.email;
        emailButton.title = "顯示此 Email 的所有投稿";
        travelerContent.append(emailButton);
        travelerCell.append(travelerContent);

        const infoCell = element("td");
        infoCell.dataset.label = "觀賞資訊";
        const infoContent = element("div", "admin-cell-content");
        infoContent.append(element("p", "", journal.location), element("p", "", formatDate(journal.date)));
        infoCell.append(infoContent);

        const storyCell = element("td");
        storyCell.dataset.label = "心得 / 照片";
        const storyContent = element("div", "admin-cell-content");
        storyContent.append(element("p", "admin-story", journal.experience), element("p", "admin-photo", `照片：${journal.photo}`));
        storyCell.append(storyContent);

        const interactionCell = element("td");
        interactionCell.dataset.label = "互動";
        const interactionContent = element("div", "admin-cell-content");
        const rating = element("p", "rating-stars", stars(journal.rating));
        rating.setAttribute("aria-label", `${journal.rating} 分`);
        interactionContent.append(rating, element("p", "", `祝福 ${journal.blessings} 個`));
        interactionCell.append(interactionContent);

        row.append(travelerCell, infoCell, storyCell, interactionCell);
        return row;
    }

    function initAdminControls() {
        const search = document.getElementById("admin-search");
        const location = document.getElementById("admin-location");
        const sort = document.getElementById("admin-sort");
        const tableBody = document.getElementById("admin-table-body");
        const empty = document.getElementById("admin-empty");
        const emailFilter = document.getElementById("email-filter");
        const emailValue = document.getElementById("email-filter-value");
        let selectedEmail = "";

        function render() {
            const query = search.value.trim().toLocaleLowerCase("zh-Hant");
            let journals = getJournals().filter((journal) => {
                const matchesQuery = !query || journal.nickname.toLocaleLowerCase("zh-Hant").includes(query) || journal.experience.toLocaleLowerCase("zh-Hant").includes(query);
                const matchesLocation = !location.value || journal.location === location.value;
                const matchesEmail = !selectedEmail || journal.email === selectedEmail;
                return matchesQuery && matchesLocation && matchesEmail;
            });

            const sorters = {
                "date-desc": (a, b) => String(b.date).localeCompare(String(a.date)),
                "date-asc": (a, b) => String(a.date).localeCompare(String(b.date)),
                "rating-desc": (a, b) => Number(b.rating) - Number(a.rating),
                "blessings-desc": (a, b) => Number(b.blessings) - Number(a.blessings)
            };
            journals.sort(sorters[sort.value] || sorters["date-desc"]);
            tableBody.replaceChildren();
            journals.forEach((journal) => tableBody.append(buildAdminRow(journal)));
            document.getElementById("admin-count").textContent = `${journals.length} 筆資料`;
            empty.classList.toggle("d-none", journals.length > 0);
            emailFilter.classList.toggle("d-none", !selectedEmail);
            emailValue.textContent = selectedEmail;
        }

        search.addEventListener("input", render);
        location.addEventListener("change", render);
        sort.addEventListener("change", render);
        tableBody.addEventListener("click", (event) => {
            const button = event.target.closest("[data-email]");
            if (!button) return;
            selectedEmail = button.dataset.email;
            render();
        });
        document.getElementById("clear-email-filter").addEventListener("click", () => {
            selectedEmail = "";
            render();
        });
        render();
    }

    async function initAdmin() {
        const content = document.getElementById("admin-content");
        if (!content) return;
        const loading = document.getElementById("admin-loading");
        try {
            const response = await fetch("api/admin.php?action=status", { credentials: "same-origin" });
            const payload = await response.json();
            if (!payload.authenticated) {
                window.location.replace("login.html?required=1");
                return;
            }
            loading.classList.add("d-none");
            content.classList.remove("d-none");
            initAdminControls();
        } catch (error) {
            loading.className = "status-message error";
            loading.textContent = "無法確認登入狀態，請確認網站已透過 XAMPP 的 Apache 開啟。";
        }

        document.getElementById("logout-button").addEventListener("click", async () => {
            try {
                await fetch("api/login.php", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
                    body: new URLSearchParams({ action: "logout" })
                });
            } finally {
                window.location.replace("login.html");
            }
        });
    }

    setActiveNavigation();
    initForecast();
    initJournal();
    initLogin();
    initAdmin();
}());
=======
    function hash() {
        let breadcrumbs = new Set(["首頁"])
        let current = location.hash.substring(1)
        localStorage.setItem("breadcrumbs", JSON.stringify([...breadcrumbs]))
        breadcrumbs.add(navigation[current])
        console.log(current);
        if (current == "admin") {
            $.get("api/admin.php", (res) => {
                console.log(res);
                if (res) {
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

$(document).submit(function (e) {
    e.preventDefault()
})
>>>>>>> 687d267aedf0500be35da75912d47d6c5f070a04
