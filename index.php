<!doctype html>
<html lang="zh-Hant">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Aurora Finland 芬蘭極光旅遊資訊平台，提供極光預報、旅人日記與旅遊資訊。">
    <title>Aurora Finland｜芬蘭極光旅遊資訊平台</title>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="icon" href="logo.png" type="image/png">
    <link rel="stylesheet" href="style.css">
</head>
<body data-page="home">
    <a class="skip-link" href="#main-content">跳到主要內容</a>
    <header class="site-header">
        <div class="container site-shell d-flex align-items-center justify-content-between gap-3">
            <a class="brand" href="index.php" aria-label="Aurora Finland 首頁">
                <img src="logo.png" alt="Aurora Finland 山脈與極光標誌" class="brand-logo">
                <span class="brand-copy">
                    <strong>Aurora Finland</strong>
                    <small>追尋北境天空下的極光旅程</small>
                </span>
            </a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#site-navigation" aria-controls="site-navigation" aria-expanded="false" aria-label="開啟主選單">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </header>
    <nav class="site-nav navbar navbar-expand-lg" aria-label="主選單">
        <div class="container site-shell">
            <div class="collapse navbar-collapse" id="site-navigation">
                <ul class="navbar-nav w-100">
                    <li class="nav-item"><a class="nav-link" data-nav="home" href="index.php">首頁</a></li>
                    <li class="nav-item"><a class="nav-link" data-nav="forecast" href="forecast.html">極光預報</a></li>
                    <li class="nav-item"><a class="nav-link" data-nav="journal" href="journal.html">旅人日記</a></li>
                    <li class="nav-item ms-lg-auto"><a class="nav-link" data-nav="admin" href="login.html">系統管理</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main id="main-content">
        <div class="container site-shell py-4 py-lg-5">
            <nav aria-label="麵包屑導覽" class="breadcrumb-wrap">
                <ol class="breadcrumb mb-0"><li class="breadcrumb-item active" aria-current="page">首頁</li></ol>
            </nav>

            <section class="hero-section" aria-labelledby="hero-title">
                <div class="row align-items-center g-4 g-xl-5">
                    <div class="col-lg-7">
                        <p class="eyebrow">A04 網頁設計｜芬蘭極光旅遊資訊平台</p>
                        <h1 id="hero-title">向北出發，<br><span>把極光寫進旅程。</span></h1>
                        <p class="hero-lead">從芬蘭觀測地點的固定預報資料，到旅人親自留下的夜空記錄，在同一個平台規劃你的北境追光之旅。</p>
                        <div class="d-flex flex-wrap gap-3">
                            <a class="btn btn-aurora" href="forecast.html">查看極光預報 <span aria-hidden="true">→</span></a>
                            <a class="btn btn-ghost" href="journal.html">分享追光日記</a>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="hero-visual" aria-label="極光意象圖卡">
                            <div class="hero-stars" aria-hidden="true">✦　·　✧</div>
                            <img src="logo.png" alt="山脈上方舞動的極光">
                            <p><span>北緯 66°</span> 進入北極圈的追光座標</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-block" aria-labelledby="explore-title">
                <div class="section-heading">
                    <div>
                        <p class="eyebrow">Plan your aurora night</p>
                        <h2 id="explore-title">今晚，從哪裡開始？</h2>
                    </div>
                    <p>簡單三步驟，從查詢條件到留下回憶。</p>
                </div>
                <div class="row g-3 g-lg-4">
                    <div class="col-md-4"><article class="feature-card h-100"><span class="feature-number">01</span><p class="feature-icon" aria-hidden="true">◉</p><h3>選擇觀測地點</h3><p>比較羅瓦涅米、伊納里、基蒂萊與庫薩莫的 Kp 指數、雲量與觀賞機率。</p><a href="forecast.html">前往預報查詢 <span aria-hidden="true">→</span></a></article></div>
                    <div class="col-md-4"><article class="feature-card h-100"><span class="feature-number">02</span><p class="feature-icon" aria-hidden="true">✦</p><h3>閱讀旅人故事</h3><p>查看不同地點的觀賞經驗、星級評分與旅人留下的實用提醒。</p><a href="journal.html#journal-list">瀏覽旅人日記 <span aria-hidden="true">→</span></a></article></div>
                    <div class="col-md-4"><article class="feature-card h-100"><span class="feature-number">03</span><p class="feature-icon" aria-hidden="true">♡</p><h3>分享追光時刻</h3><p>完成欄位驗證後發布日記，也能為喜歡的故事送上一份極光祝福。</p><a href="journal.html#journal-form">立即投稿 <span aria-hidden="true">→</span></a></article></div>
                </div>
            </section>

            <section class="story-banner" aria-labelledby="story-title">
                <div><p class="eyebrow">Aurora note</p><h2 id="story-title">極光不是行程表上的景點，<br>而是一場需要耐心的相遇。</h2></div>
                <p>選擇低雲量、較高 Kp 指數的夜晚，遠離城市光害並保留彈性。預報是線索，真正的風景留給願意等待的人。</p>
            </section>
        </div>
    </main>

    <footer class="site-footer"><div class="container site-shell d-md-flex justify-content-between align-items-center gap-3"><p class="mb-2 mb-md-0"><strong>Aurora Finland</strong>　芬蘭極光旅遊資訊平台</p><p class="mb-0">第19屆全國身心障礙者技能競賽　設計者：WebXX</p></div></footer>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script><script src="./node_modules/jquery/dist/jquery.min.js"></script><script src="main.js"></script>
</body>
</html>
