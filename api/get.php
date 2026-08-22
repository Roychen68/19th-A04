<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$action = $_GET['action'] ?? $_POST['action'] ?? '';

if ($action !== 'aurora') {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => '不支援的資料請求。'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$forecasts = [
    [
        'id' => 'rovaniemi',
        'name' => '羅瓦涅米',
        'englishName' => 'Rovaniemi',
        'kp' => '4.8',
        'cloud' => 18,
        'probability' => 88,
        'bestTime' => '22:30–01:30',
        'recommendation' => '高',
        'note' => '天空大致晴朗，Kp 指數與雲量條件理想。建議前往市區北側、遠離路燈的空曠地點，並提前三十分鐘適應黑暗。'
    ],
    [
        'id' => 'inari',
        'name' => '伊納里',
        'englishName' => 'Inari',
        'kp' => '4.5',
        'cloud' => 27,
        'probability' => 82,
        'bestTime' => '21:45–00:45',
        'recommendation' => '高',
        'note' => '伊納里湖周邊視野遼闊，今晚有不錯的觀賞機會。湖岸濕滑且體感溫度低，請穿著防滑鞋並做好保暖。'
    ],
    [
        'id' => 'kittila',
        'name' => '基蒂萊',
        'englishName' => 'Kittilä',
        'kp' => '3.7',
        'cloud' => 42,
        'probability' => 64,
        'bestTime' => '23:00–02:00',
        'recommendation' => '中',
        'note' => '雲層可能間歇散開，建議保留移動彈性並觀察北方天空。可優先選擇地勢稍高、北向視野沒有遮蔽物的位置。'
    ],
    [
        'id' => 'kuusamo',
        'name' => '庫薩莫',
        'englishName' => 'Kuusamo',
        'kp' => '2.4',
        'cloud' => 71,
        'probability' => 31,
        'bestTime' => '00:00–02:30',
        'recommendation' => '低',
        'note' => '目前雲量偏高且極光活動較弱，短暫雲隙仍可能出現。若不便長時間等待，可改看其他地點的示範預報。'
    ]
];

echo json_encode([
    'ok' => true,
    'data' => $forecasts,
    'source' => 'competition-fixed-sample'
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
