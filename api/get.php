<?php
$action = $_POST['action'] ?? null;

switch ($action) {
    case 'aurora':
        header("Content-Type: application/json");
        $data = [
            [
                "id" => "rovaniemi",
                "location" => "羅瓦涅米 Rovaniemi",
                "kp" => 5,
                "cloud" => 20,
                "probability" => 85,
                "best_time" => "22:00 - 01:00",
                "recommendation" => "高",
                "note" => "天空大致晴朗，建議遠離市區光害並提早抵達觀賞地點。"
            ],
            [
                "id" => "inari",
                "location" => "伊納里 Inari",
                "kp" => 4,
                "cloud" => 35,
                "probability" => 72,
                "best_time" => "21:30 - 00:30",
                "recommendation" => "高",
                "note" => "湖區視野開闊，雲層短暫通過時仍有良好的極光觀賞機會。"
            ],
            [
                "id" => "utsjoki",
                "location" => "烏茨約基 Utsjoki",
                "kp" => 3,
                "cloud" => 55,
                "probability" => 48,
                "best_time" => "23:00 - 02:00",
                "recommendation" => "中",
                "note" => "雲量偏高，建議留意天空變化，選擇北方視野沒有遮蔽物的位置。"
            ],
            [
                "id" => "kemi",
                "location" => "凱米 Kemi",
                "kp" => 2,
                "cloud" => 80,
                "probability" => 20,
                "best_time" => "00:00 - 02:30",
                "recommendation" => "低",
                "note" => "雲層較厚且活動偏弱，可先安排其他室內行程並等待天候改善。"
            ]
        ];

        echo json_encode([
            "data" => $data
        ], JSON_UNESCAPED_UNICODE);
        break;

    default:
        echo json_encode([
            "data" => []
        ]);
        break;
}
?>
