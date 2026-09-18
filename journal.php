<?php
include "db.php";
    $sequence = [
        11 => "ORDER BY `date` ASC",
        12 => "ORDER BY `date` DESC",
        31 => "ORDER BY `rate` ASC",
        32 => "ORDER BY `rate` DESC",
        21 => "ORDER BY `bless` ASC",
        22 => "ORDER BY `bless` DESC",
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
                <button class="navbar-toggler d-none d-md-block" data-bs-target="#nav" data-bs-toggle="collapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-nav navbar-collpase row show" id="nav">
                <a href="index.html" class="link col-12 col-lg-3">首頁</a>
                <a href="forecast.php" class="link col-12 col-lg-3">極光預報</a>
                <a href="journal.php" class="link col-12 col-lg-3 active">旅人日記</a>
                <a href="login.html" class="link col-12 col-lg-3">系統管理</a>
            </div>
        </nav>
    </header>
    <main>
        <article id="breadcrumbs" class="mt-3 col-10 mx-auto"><a href="index.html"
                class="link-info text-decoration-none">首頁</a><span class="text-seconary">&nbsp;\&nbsp;旅人日記</span>
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
                            <option value="11">日期(升冪)</option>
                            <option value="12">日期(降冪)</option>
                            <option value="21">祝福(升冪)</option>
                            <option value="22">祝福(降冪)</option>
                            <option value="31">祝褔數量(升冪)</option>
                            <option value="32">祝褔數量(降冪)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-primary">搜尋</button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-outline-primary diary">我要投稿</button>
                    </div>
                </div>
            </form>
        </section>
        <section class="col-10 mx-auto mt-3 row row-cols-md-2 row-cols-1">
            <?php
            $sort = $_GET['sort'] ?? 11;
            $stmt = "";
                $stmt = $pdo->prepare("SELECT * FROM `diary`".$sequence[$sort]);
                    $stmt->execute();
                    $diaries = $stmt->fetchAll();
                    $layout = $_GET['layout'] ?? "table";
                    if (count($diaries) < 1) {
                        echo "<span class='text-danger'>查無資料</span>";       
                    }
                    if ($layout == "table"):
                ?>
            <article class="p-1 col w-100">
                <table class="table w-100">
                    <tr>
                        <th>旅人暱稱</th>
                        <th>Email</th>
                        <th>觀賞地點</th>
                        <th>觀賞日期</th>
                        <th>極光評分</th>
                        <th>照片檔名</th>
                        <th>照片</th>
                        <th>觀賞心得</th>
                    </tr>
                    <?php
                        foreach ($diaries as $diary):
                    ?>
                    <tr>
                        <td>
                            <?php echo $diary['name'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>
                        </td>
                        <td>
                            <?php echo $diary['mail'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                        </td>
                        <td>
                            <?php echo $diary['location'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                        </td>
                        <td>
                            <?php echo $diary['date'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                        </td>
                        <td>
                            <?php echo $diary['rate'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>
                        </td>
                        <td>
                            <?php echo $diary['file_name'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>
                        </td>
                        <td>
                            <?php
                        if (strlen($diary['note']) > 100) {
                            $note = str_split($diary['note'],100);
                            echo $note[0];
                            echo "<span class='readmore d-none'>".$note[1]."</span>";
                            echo "<span class='link-info read-toggle'>閱讀更多</span>";
                        } else {
                            echo $diary['note'];
                        }
                        ?>
                        </td>
                        <td class="text-secondary">
                            <?php echo $diary['updated_at'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>
                        </td>
                        <?php
                            endforeach;
                        ?>
                    </tr>
                </table>
            </article>
            <?php
                else:
                foreach ($diaries as $diary):
            ?>
            <article class="p-1 col" id="diary">
                <div class="card">
                    <div class="card-body text-center">
                        <h2 class="card-title">
                            <?=$diary['name']?>
                        </h2>
                        <div class="row">
                            <p class="col-12 col-md-6 text-success card-text">Kp 指數:
                                <?php echo $diary['kp_index'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                            </p>
                            <p class="col-12 col-md-6 text-success card-text">雲量:
                                <?php echo $diary['cloud_cover'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                            </p>
                        </div>
                        <div class="row">
                            <p class="col-12 col-md-6 text-success card-text">極光機率:
                                <?php echo $diary['aurora_probability'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                            </p>
                            <p class="col-12 col-md-6 text-success card-text">溫度:
                                <?php echo $diary['temperature'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>℃
                            </p>
                        </div>
                        <p class="card-text">最佳觀賞時間:
                            <?php echo $diary['best_time'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>%
                        </p>
                        <p class="card-text">推薦程度:
                            <?php
                        if ($diary['recommendation'] == "高") {
                            echo "<span class='rounded text-light bg-success p-1'>高</span>";
                        } else if ($diary['recommendation'] == "中") {
                            echo "<span class='rounded text-light bg-warning p-1'>中</span>";
                        } else if ($diary['recommendation'] == "低") {
                            echo "<span class='rounded text-light bg-danger p-1'>低</span>";
                        } else {
                            echo "<span class='rounded text-light bg-secondary p-1'>無資料</span>";
                        }
                        ?>
                        </p>
                        <p class="card-text"><span class="text-primary">備註:</span><br>
                            <?php
                        if (strlen($diary['note']) > 100) {
                            $note = str_split($diary['note'],100);
                            echo $note[0];
                            echo "<span class='readmore d-none'>".$note[1]."</span>";
                            echo "<span class='link-info read-toggle'>閱讀更多</span>";
                        } else {
                            echo $diary['note'];
                        }
                        ?>
                        </p>
                        <small class="card-text text-secondary">更新於:
                            <?php echo $diary['updated_at'] ?? "<span class='rounded text-light bg-secondary p-1'>無資料</span>"?>
                        </small>
                    </div>
                </div>
            </article>
            <?php
                endforeach;
            endif;
            ?>
        </section>
        <div class="modal fade" id="diary">
            <div class="modal-dialog">
                <form class="modal-content" id="diaryForm">
                    <div class="modal-header">
                        <h3>把一整夜的光，收進你的旅行筆記</h3>
                    </div>
                    <div class="modal-body p-3">
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="mb-3 p-1">
                                <label for="name">旅人暱稱</label>
                                <input type="text" name="name"  class="form-control" required>
                            </div>
                            <div class="mb-3 p-1">
                                <label for="mail">Email</label>
                                <input type="email" name="mail" class="form-control" required>
                            </div>
                        </div>
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="mb-3 p-1">
                                <label for="location">觀賞地點</label>
                                <select name="location" id="location" class="form-control" required>
                            <?php
                                $stmt = $pdo->prepare("SELECT `name`,`name_en` FROM `forecast`");
                    $stmt->execute();
                    $locations = $stmt->fetchAll();
                    foreach ($locations as $location) :
                            ?>
                            <option value="<?=$location['name']?>"><?=$location['name']?></option>
                            <?php endforeach; ?>
                        </select>
                            </div>
                            <div class="mb-3 p-1">
                                <label for="date">觀賞日期</label>
                                <input type="date" name="date" class="form-control" max="" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="feedback">觀賞心得</label>
                            <textarea name="feedback" id="feedback" class="form-control" minlength="10" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="rate">極光評分</label>
                            <input type="range" name="rate" id="rate" min="0" max="5" required>
                        </div>
                    </div>
                    <div class="moda-footer">
                        <button class="btn btn-outline-primary">送出</button>
                    </div>
                </form>
            </div>
        </div>
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
    $(document).on("click", ".diary" ,function () {
        $('div.modal#diary').modal('show')
        console.log("triggered");
        
    })
    function render() {
        const diary = JSON.parse(localStorage.getItem("diary"))
        console.log(diary);
        console.log($("input:not([type='file']),textarea"));
        document.querySelectorAll("input:not([type='file']),textarea").forEach((element,id) => {
            $(element).val(diary[id])
        });
    }
    render()
    $(document).on("input","#diaryForm",function () {
        const formData = new FormData($("form#diaryForm")[0]);
        console.log(JSON.stringify([...formData]));
        
        localStorage.setItem("diary",JSON.stringify([...formData]));
    })
</script>