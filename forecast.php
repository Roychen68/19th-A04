<?php
    include "db.php";
    $sequence = [
    11 => "ORDER BY `kp_index` ASC",
    12 => "ORDER BY `kp_index` DESC",
    21 => "ORDER BY `cloud_cover` ASC",
    22 => "ORDER BY `cloud_cover` DESC",
    31 => "ORDER BY `aurora_probability` ASC",
    32 => "ORDER BY `aurora_probability` DESC",
    ];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aurora Finland</title>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg d-block">
            <div class="p-2 d-flex align-items-center">
                <img src="./logo.png" alt="Aurora Finland logo" class="logo">
                <div class="titles px-2 d-lg-flex align-items-center g-2">
                    <h1>Aurora Finland</h1>
                    <span class="d-md-block d-none">追尋北境天空下的極光旅程</span>
                </div>
                <button class="navbar-toggler" data-bs-target="#nav" data-bs-toggle="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-nav navbar-collpase row show" id="nav">
                <a href="index.html" class="link col-12 col-lg-3">首頁</a>
                <a href="forecast.php" class="link col-12 col-lg-3 active">極光預報</a>
                <a href="journal.php" class="link col-12 col-lg-3">旅人日記</a>
                <a href="login.html" class="link col-12 col-lg-3">系統管理</a>
            </div>
        </nav>
    </header>
    <main>
        <article id="breadcrumbs" class="mt-3 col-10 mx-auto"><a href="index.html"
                class="link-info text-decoration-none">首頁</a><span class="text-seconary">&nbsp;\&nbsp;極光預報</span>
        </article>
        <section class="col-10 mx-auto mt-3 p-1">
            <form class="card card-body text-center" method="get">
                <div class="d-flex row align-items-center text-center">
                    <div class="col-auto">
                        <label for="layout">呈現模式</label>
                    </div>
                    <div class="col-auto">
                        <select name="layout" id="layout" class="form-control">
                            <option value="card">卡片</option>
                            <option value="table">表格</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label for="sort">排列模式</label>
                    </div>
                    <div class="col-auto">
                        <select name="sort" id="sort" class="form-control">
                            <option value="11">Kp 指數(升冪)</option>
                            <option value="12">Kp 指數(降冪)</option>
                            <option value="21">雲量(升冪)</option>
                            <option value="22">雲量(降冪)</option>
                            <option value="31">極光機率(升冪)</option>
                            <option value="32">極光機率(降冪)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label for="location">選擇地點</label>
                    </div>
                    <div class="col-auto">
                        <select name="location" id="location" class="form-control">
                            <?php
                                $stmt = $pdo->prepare("SELECT `name`,`name_en` FROM `forecast`");
                                $stmt->execute();
                                $locations = $stmt->fetchAll();
                                foreach ($locations as $location):
                            ?>
                            <option value="<?php echo $location['name_en'] ?>"><?php echo $location['name'] ?></option>
                            <?php endforeach; ?>
                            <option value="all">所有地點</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-primary">搜尋</button>
                    </div>
                </div>
            </form>
        </section>
        <section class="col-10 mx-auto mt-3 row row-cols-md-2 row-cols-1">
            <?php
                $sort     = $_GET['sort'] ?? 11;
                $stmt     = "";
                $location = $_GET['location'] ?? "all";
                if ($location == "all") {
                    $stmt = $pdo->prepare("SELECT * FROM `forecast`" . $sequence[$sort]);
                } else {
                    $stmt = $pdo->prepare("SELECT * FROM `forecast` WHERE `name_en` = '$location'" . $sequence[$sort]);
                }

                $stmt->execute();
                $forecasts = $stmt->fetchAll();
                $layout    = $_GET['layout'] ?? "table";
                if (count($forecasts) < 1) {
                    echo "<span class='text-danger'>查無資料</span>";
                }
                if ($layout == "table"):
            ?>
            <article class="p-1 col w-100">
                <table class="table w-100">
                    <tr>
                        <th>地名</th>
                        <th>Kp 指數</th>
                        <th>雲量</th>
                        <th>極光機率</th>
                        <th>最佳觀賞時間</th>
                        <th>氣溫</th>
                        <th>推薦程度</th>
                        <th>補充說明</th>
                        <th>更新時間</th>
                    </tr>
                    <?php
                        foreach ($forecasts as $forecast):
                    ?>
                    <tr>
                        <td>
                            <?php echo $forecast['name'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>
                        </td>
                        <td>
                            <?php echo $forecast['kp_index'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                        </td>
                        <td>
                            <?php echo $forecast['cloud_cover'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                        </td>
                        <td>
                            <?php echo $forecast['aurora_probability'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                        </td>
                        <td>
                            <?php echo $forecast['best_time'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>
                        </td>
                        <td>
                            <?php echo $forecast['temperature'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>℃
                        </td>
                        <td>
                            <?php
                                if ($forecast['recommendation'] == "高") {
                                    echo "<span class='rounded text-light bg-success p-1'>高</span>";
                                } else if ($forecast['recommendation'] == "中") {
                                    echo "<span class='rounded text-light bg-warning p-1'>中</span>";
                                } else if ($forecast['recommendation'] == "低") {
                                    echo "<span class='rounded text-light bg-danger p-1'>低</span>";
                                } else {
                                    echo "<span class='rounded text-light bg-secondary p-1'>無資料</span>";
                                }
                            ?>
                        </td>
                        <td>
                            <?php
                                if (mb_strlen($forecast['note']) > 25) {
                                    echo mb_substr($forecast['note'], 0, 25);
                                    echo "<span class='readmore d-none'>" . mb_substr($forecast['note'], 25) . "</span>";
                                    echo "<span class='link-info read-toggle'>閱讀更多</span>";
                                } else {
                                    echo $forecast['note'];
                                }
                            ?>
                        </td>
                        <td class="text-secondary">
                            <?php echo $forecast['updated_at'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>
                        </td>
                        <?php
                            endforeach;
                        ?>
                    </tr>
                </table>
            </article>
            <?php
                else:
                    foreach ($forecasts as $forecast):
            ?>
            <article class="p-1 col">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title">
                            <?php echo $forecast['name'] ?>
                        </h2>
                        <div class="row">
                            <p class="col-12 col-md-6 text-success card-text">Kp 指數:
                                <?php echo $forecast['kp_index'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                            </p>
                            <p class="col-12 col-md-6 text-success card-text">雲量:
                                <?php echo $forecast['cloud_cover'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 col-md-6 text-success card-text">極光機率:
                                <?php echo $forecast['aurora_probability'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                            </p>
                            <p class="col-12 col-md-6 text-success card-text">溫度:
                                <?php echo $forecast['temperature'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>℃
                            </p>
                        </div>
                        <p class="card-text">最佳觀賞時間:
                            <?php echo $forecast['best_time'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>%
                        </p>
                        <p class="card-text">推薦程度:
                            <?php
                                    if ($forecast['recommendation'] == "高") {
                                        echo "<span class='rounded text-light bg-success p-1'>高</span>";
                                    } else if ($forecast['recommendation'] == "中") {
                                    echo "<span class='rounded text-light bg-warning p-1'>中</span>";
                                } else if ($forecast['recommendation'] == "低") {
                                    echo "<span class='rounded text-light bg-danger p-1'>低</span>";
                                } else {
                                    echo "<span class='rounded text-light bg-secondary p-1'>無資料</span>";
                                }
                            ?>
                        </p>
                        <p class="card-text"><span class="text-primary">備註:</span><br>
                            <?php
                                if (strlen($forecast['note']) > 100) {
                                    $note = str_split($forecast['note'], 100);
                                    echo $note[0];
                                    echo "<span class='readmore d-none'>" . $note[1] . "</span>";
                                    echo "<span class='link-info read-toggle'>閱讀更多</span>";
                                } else {
                                    echo $forecast['note'];
                                }
                            ?>
                        </p>
                        <small class="card-text text-secondary">更新於:
                            <?php echo $forecast['updated_at'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>" ?>
                        </small>
                    </div>
                </div>
            </article>
            <?php
                endforeach;
                endif;
            ?>
        </section>
    </main>
    <footer class="text-center bg-secondary text-light p-3">
        <p>第19屆全國身心障礙者技能競賽　設計者：Web67</p>
    </footer>
</body>

</html>
<script src="jqueryv4.0.0.js"></script>
<script src="bootstrap.js"></script>
<script>
    $(document).on("click", ".read-toggle", function () {
        const readmore = $(this).prev().closest("span.readmore")
        readmore.toggleClass("d-none")
        $(this).text(
            $(this).text() == "閱讀更少" ? "閱讀更多" : "閱讀更少"
        )
        console.log("triggered");
    })
</script>