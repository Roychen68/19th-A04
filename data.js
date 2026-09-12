/* 芬蘭極光旅遊資訊平台 - 練習資料（以 <script src="data/data.js"></script> 引入即可，免 fetch，可直接於 file:// 開啟測試） */

const SITE = {
  "site": {
    "name": "Aurora Finland",
    "nameZh": "芬蘭極光旅遊資訊平台",
    "slogan": "追尋北境天空下的極光旅程",
    "sloganAlt": [
      "在北緯 66 度，遇見會呼吸的天空",
      "把一整夜的光，收進你的旅行筆記",
      "從預報到日記，一站完成你的追光計畫"
    ],
    "footer": "第19屆全國身心障礙者技能競賽　設計者：WebXX",
    "footerLines": [
      "第19屆全國身心障礙者技能競賽　職類：A04 網頁設計",
      "本網站為競賽練習用作品，站內資料與圖片均為模擬素材",
      "© 2026 Aurora Finland　設計者：WebXX"
    ]
  },
  "nav": [
    {
      "id": "home",
      "label": "首頁",
      "href": "index.html"
    },
    {
      "id": "forecast",
      "label": "極光預報",
      "href": "forecast.html"
    },
    {
      "id": "diary",
      "label": "旅人日記",
      "href": "diary.html"
    },
    {
      "id": "admin",
      "label": "系統管理",
      "href": "admin.html"
    }
  ],
  "breadcrumbs": {
    "home": [
      "首頁"
    ],
    "forecast": [
      "首頁",
      "極光預報"
    ],
    "diary": [
      "首頁",
      "旅人日記"
    ],
    "diaryPost": [
      "首頁",
      "旅人日記",
      "投稿"
    ],
    "admin": [
      "首頁",
      "系統管理"
    ],
    "adminList": [
      "首頁",
      "系統管理",
      "日記管理"
    ]
  },
  "admin": {
    "username": "admin",
    "password": "1234",
    "loginTitle": "系統管理登入",
    "loginHint": "請輸入管理者帳號與密碼"
  },
  "messages": {
    "required": "此欄位為必填，請勿留空",
    "emailFormat": "Email 格式不正確，請輸入如 name@example.com",
    "ratingRange": "極光評分僅能填 1 至 5 之間的整數",
    "contentMin": "觀賞心得至少需要 10 個字",
    "dateRequired": "請選擇觀賞日期",
    "submitSuccess": "投稿成功！感謝你分享這次的極光旅程",
    "loginFail": "帳號或密碼錯誤，請重新輸入",
    "loginRequired": "請先登入後再進入系統管理頁面",
    "noSelection": "請先選擇要查詢的觀測地點",
    "noData": "此地點目前無預報資料，請稍後再試",
    "noResult": "查無符合條件的日記資料",
    "emptyList": "目前尚無任何投稿，成為第一位分享的旅人吧"
  },
  "colors": {
    "auroraTeal": "#1AB09E",
    "auroraBlue": "#3F8CD0",
    "auroraPurple": "#604CBE",
    "nightDeep": "#0B1020",
    "nightMid": "#12203C",
    "snowWhite": "#F2F8FC",
    "textMain": "#12325F",
    "textSub": "#4C7A96",
    "warning": "#F5B301",
    "danger": "#E5484D",
    "success": "#2FA36B"
  }
};

const LOCATIONS = [
  {
    "id": "rovaniemi",
    "name": "羅瓦涅米",
    "nameEn": "Rovaniemi",
    "region": "拉普蘭省",
    "lat": 66.5039,
    "lon": 25.7294,
    "latitude": "北緯 66.5°",
    "image": "images/aurora-rovaniemi.jpg",
    "thumb": "images/aurora-rovaniemi-sm.jpg",
    "alt": "羅瓦涅米森林上方的綠色極光",
    "intro": "北極圈起點城市，交通便利、住宿選擇多，是初次追光旅人最常落腳的據點。"
  },
  {
    "id": "ivalo",
    "name": "伊瓦洛",
    "nameEn": "Ivalo",
    "region": "拉普蘭省",
    "lat": 68.6592,
    "lon": 27.5389,
    "latitude": "北緯 68.7°",
    "image": "images/aurora-ivalo.jpg",
    "thumb": "images/aurora-ivalo-sm.jpg",
    "alt": "伊瓦洛雪原上的紫綠色極光",
    "intro": "位於北緯 68 度以北，光害少、觀測窗口長，適合安排三天以上的追光行程。"
  },
  {
    "id": "levi",
    "name": "萊維",
    "nameEn": "Levi",
    "region": "拉普蘭省",
    "lat": 67.8047,
    "lon": 24.8022,
    "latitude": "北緯 67.8°",
    "image": "images/aurora-levi.jpg",
    "thumb": "images/aurora-levi-sm.jpg",
    "alt": "萊維山丘與湖面倒映的極光",
    "intro": "知名滑雪度假區，纜車山頂視野開闊，可同時安排雪地活動與極光觀測。"
  },
  {
    "id": "saariselka",
    "name": "薩利色爾卡",
    "nameEn": "Saariselkä",
    "region": "拉普蘭省",
    "lat": 68.4194,
    "lon": 27.4139,
    "latitude": "北緯 68.4°",
    "image": "images/aurora-saariselka.jpg",
    "thumb": "images/aurora-saariselka-sm.jpg",
    "alt": "薩利色爾卡玻璃屋外的極光",
    "intro": "玻璃屋住宿密集，即使不外出也有機會在室內觀賞極光，適合行動不便的旅人。"
  },
  {
    "id": "kilpisjarvi",
    "name": "基爾皮斯耶爾維",
    "nameEn": "Kilpisjärvi",
    "region": "拉普蘭省",
    "lat": 69.0472,
    "lon": 20.7972,
    "latitude": "北緯 69.0°",
    "image": "images/aurora-kilpisjarvi.jpg",
    "thumb": "images/aurora-kilpisjarvi-sm.jpg",
    "alt": "基爾皮斯耶爾維湖畔的藍紫色極光",
    "intro": "芬蘭最北端的觀測點之一，天氣穩定時可見全天空爆發，但冬季道路較難行。"
  },
  {
    "id": "inari",
    "name": "伊納里",
    "nameEn": "Inari",
    "region": "拉普蘭省",
    "lat": 68.9058,
    "lon": 27.0286,
    "latitude": "北緯 68.9°",
    "image": "images/aurora-inari.jpg",
    "thumb": "images/aurora-inari-sm.jpg",
    "alt": "伊納里湖結冰湖面上的極光",
    "intro": "薩米文化中心所在地，湖面遼闊，結冰後是絕佳的無遮蔽觀測平台。"
  },
  {
    "id": "kuusamo",
    "name": "庫薩莫",
    "nameEn": "Kuusamo",
    "region": "北奧斯特波的尼亞",
    "lat": 65.9667,
    "lon": 29.1833,
    "latitude": "北緯 66.0°",
    "image": "images/aurora-kuusamo.jpg",
    "thumb": "images/aurora-kuusamo-sm.jpg",
    "alt": "庫薩莫針葉林上空的極光",
    "intro": "森林與國家公園環繞，適合搭配健行行程，緯度較低時需要較強的地磁活動。"
  },
  {
    "id": "utsjoki",
    "name": "烏茨約基",
    "nameEn": "Utsjoki",
    "region": "拉普蘭省",
    "lat": 69.9078,
    "lon": 27.0281,
    "latitude": "北緯 69.9°",
    "image": "images/aurora-utsjoki.jpg",
    "thumb": "images/aurora-utsjoki-sm.jpg",
    "alt": "烏茨約基河谷上方的極光",
    "intro": "芬蘭最北的行政區，極夜期間整日昏暗，是全國極光機率最高的地點之一。"
  }
];

const FORECAST = [
  ({
    "id": "rovaniemi",
    "name": "羅瓦涅米",
    "nameEn": "Rovaniemi",
    "kpIndex": 4,
    "cloudCover": 25,
    "auroraProbability": 72,
    "bestTime": "21:30 - 01:00",
    "recommendation": "高",
    "temperature": -14,
    "note": "市區光害較明顯，建議往北方郊區移動約十五分鐘車程再進行觀測。今晚地磁活動穩定上升，雲量預期在入夜後持續減少，是本週條件最佳的一晚；若使用相機拍攝，可將快門設定在八至十五秒之間，並攜帶備用電池，低溫環境下電量消耗速度約為平時的兩倍。"
  }),
  ({
    "id": "ivalo",
    "name": "伊瓦洛",
    "nameEn": "Ivalo",
    "kpIndex": 5,
    "cloudCover": 15,
    "auroraProbability": 85,
    "bestTime": "20:45 - 02:30",
    "recommendation": "高",
    "temperature": -21,
    "note": "天空清澈、光害極低，預期整夜都有機會看到明顯的綠色弧狀極光。"
  }),
  ({
    "id": "levi",
    "name": "萊維",
    "nameEn": "Levi",
    "kpIndex": 3,
    "cloudCover": 55,
    "auroraProbability": 48,
    "bestTime": "22:00 - 00:30",
    "recommendation": "中",
    "temperature": -11,
    "note": "山區雲層變化快，建議先搭乘纜車至山頂確認雲況再決定是否停留。若山下雲量偏高，山頂反而可能位於雲層之上，視野會明顯改善。"
  }),
  ({
    "id": "saariselka",
    "name": "薩利色爾卡",
    "nameEn": "Saariselkä",
    "kpIndex": 4,
    "cloudCover": 35,
    "auroraProbability": 66,
    "bestTime": "21:00 - 01:30",
    "recommendation": "高",
    "temperature": -18,
    "note": "玻璃屋住宿區可在室內觀賞，適合行動不便或不耐低溫的旅人。"
  }),
  ({
    "id": "kilpisjarvi",
    "name": "基爾皮斯耶爾維",
    "nameEn": "Kilpisjärvi",
    "kpIndex": 6,
    "cloudCover": 70,
    "auroraProbability": 41,
    "bestTime": "23:00 - 02:00",
    "recommendation": "中",
    "temperature": -24,
    "note": "地磁活動強烈但雲量偏高，若雲層短暫散開有機會看到全天空爆發。前往路段部分未鋪設完整路面，冬季夜間行車請特別注意結冰情形，並事先確認道路開放狀態；建議結伴同行並保持手機電量充足。"
  }),
  ({
    "id": "inari",
    "name": "伊納里",
    "nameEn": "Inari",
    "kpIndex": 2,
    "cloudCover": 80,
    "auroraProbability": 18,
    "bestTime": "23:30 - 00:30",
    "recommendation": "低",
    "temperature": -16,
    "note": "厚雲籠罩，今晚不建議安排戶外觀測行程。"
  }),
  ({
    "id": "kuusamo",
    "name": "庫薩莫",
    "nameEn": "Kuusamo",
    "kpIndex": 3,
    "cloudCover": 45,
    "auroraProbability": 39,
    "bestTime": "22:15 - 01:00",
    "recommendation": "中",
    "temperature": -9,
    "note": "緯度較低，需要 Kp 值達到四以上才較容易觀測到明顯極光。"
  }),
  ({
    "id": "utsjoki",
    "name": "烏茨約基",
    "nameEn": "Utsjoki",
    "kpIndex": 5,
    "cloudCover": 10,
    "auroraProbability": 91,
    "bestTime": "20:30 - 03:00",
    "recommendation": "高",
    "temperature": -27,
    "note": "本日全國條件最佳地點，氣溫極低，務必做好保暖與防風準備。"
  }),
  ({
    "id": "kemi",
    "name": "凱米",
    "nameEn": "Kemi",
    "kpIndex": null,
    "cloudCover": null,
    "auroraProbability": null,
    "bestTime": "",
    "recommendation": "",
    "temperature": null,
    "note": "測站維護中，暫無資料（此筆用於測試「無資料」提示訊息的顯示）。"
  })
];

const DIARIES = [
  {
    "id": 1,
    "nickname": "北極熊小林",
    "email": "polarlin@example.com",
    "location": "羅瓦涅米",
    "date": "2026-01-08",
    "rating": 5,
    "content": "等了三個晚上終於等到。剛過午夜，原本淡淡的一條綠帶突然從天頂裂開，往東西兩側快速展開，整片天空像被人拉開的布幕一樣翻動。同行的夥伴全都安靜下來，只剩下相機快門聲。零下十四度站了兩個小時完全不覺得冷，回到旅館才發現手指已經凍到按不動螢幕。這趟真的值得，明年還要再來一次。",
    "photo": "images/aurora-rovaniemi.jpg",
    "blessings": 128,
    "createdAt": "2026-01-09 02:41"
  },
  {
    "id": 2,
    "nickname": "追光的阿哲",
    "email": "che.aurora@example.com",
    "location": "伊瓦洛",
    "date": "2026-01-05",
    "rating": 4,
    "content": "雲量比預報高一些，但十一點後突然放晴，看到約四十分鐘的綠色弧狀極光，肉眼可辨顏色。",
    "photo": "images/aurora-ivalo.jpg",
    "blessings": 76,
    "createdAt": "2026-01-06 01:12"
  },
  {
    "id": 3,
    "nickname": "雪地裡的貓",
    "email": "snowcat88@example.com",
    "location": "萊維",
    "date": "2025-12-28",
    "rating": 3,
    "content": "山下雲很厚，搭纜車上山頂之後才看到一點微光，肉眼幾乎是灰白色，要靠相機長曝才拍得出綠色。體驗還不錯，但條件普通。",
    "photo": "images/aurora-levi.jpg",
    "blessings": 34,
    "createdAt": "2025-12-29 00:05"
  },
  {
    "id": 4,
    "nickname": "玻璃屋觀星人",
    "email": "glassroom@example.com",
    "location": "薩利色爾卡",
    "date": "2026-01-11",
    "rating": 5,
    "content": "住玻璃屋真的太適合我了。因為行動不方便，之前一直擔心沒辦法在戶外久站，這次躺在床上就能抬頭看見整片極光，工作人員還會在極光出現時打電話叫醒房客，非常貼心。設施也都有無障礙設計，浴室有扶手，走道夠寬，輪椅進出沒有問題。強烈推薦給和我情況相似的旅人。",
    "photo": "images/aurora-saariselka.jpg",
    "blessings": 214,
    "createdAt": "2026-01-12 03:20"
  },
  {
    "id": 5,
    "nickname": "Mira",
    "email": "mira.travel@example.com",
    "location": "基爾皮斯耶爾維",
    "date": "2026-01-02",
    "rating": 4,
    "content": "開了很久的車才到，路況比想像中差。不過抵達之後的天空完全值回票價，Kp 值六，紫色邊緣清楚可見。",
    "photo": "images/aurora-kilpisjarvi.jpg",
    "blessings": 91,
    "createdAt": "2026-01-03 04:55"
  },
  {
    "id": 6,
    "nickname": "湖畔的風",
    "email": "lakewind@example.com",
    "location": "伊納里",
    "date": "2025-12-20",
    "rating": 2,
    "content": "全程都是厚雲，什麼都沒看到，只在湖邊喝了熱可可就回去了。留個紀錄，下次再挑戰。",
    "photo": "",
    "blessings": 12,
    "createdAt": "2025-12-21 09:30"
  },
  {
    "id": 7,
    "nickname": "森林系少年",
    "email": "forestboy@example.com",
    "location": "庫薩莫",
    "date": "2026-01-14",
    "rating": 3,
    "content": "緯度比較低，極光只出現在北方低空，像一條淡淡的綠線。搭配針葉林剪影其實很有味道。",
    "photo": "images/aurora-kuusamo.jpg",
    "blessings": 47,
    "createdAt": "2026-01-15 01:48"
  },
  {
    "id": 8,
    "nickname": "最北的旅人",
    "email": "northernmost@example.com",
    "location": "烏茨約基",
    "date": "2026-01-13",
    "rating": 5,
    "content": "極夜期間下午兩點就天黑，等於整天都是觀測時間。這裡人非常少，安靜到可以聽見自己的呼吸聲。極光從八點半開始出現，一路持續到凌晨三點，中間至少爆發了三次，最強的一次連地面積雪都被染成淡綠色。零下二十七度，暖暖包貼滿全身還是冷，但完全不後悔。",
    "photo": "images/aurora-utsjoki.jpg",
    "blessings": 305,
    "createdAt": "2026-01-14 04:10"
  },
  {
    "id": 9,
    "nickname": "小雨",
    "email": "rainy.day@example.com",
    "location": "羅瓦涅米",
    "date": "2026-01-09",
    "rating": 4,
    "content": "第一次看到極光，比想像中安靜，也比想像中慢。它不是一閃就過去，而是慢慢流動的。",
    "photo": "images/aurora-rovaniemi-md.jpg",
    "blessings": 88,
    "createdAt": "2026-01-10 00:33"
  },
  {
    "id": 10,
    "nickname": "攝影阿宏",
    "email": "photo.hung@example.com",
    "location": "伊瓦洛",
    "date": "2026-01-06",
    "rating": 5,
    "content": "設備筆記：廣角鏡光圈開到 f/2.8、ISO 1600、快門十秒，對焦切手動並先對遠方燈光合焦。腳架一定要帶，雪地記得墊塊板子免得腳架下陷。備用電池放內袋保溫，可以多撐一倍時間。這些是我三次北極圈拍攝累積的心得，希望對後面要來的朋友有幫助。",
    "photo": "images/aurora-ivalo-md.jpg",
    "blessings": 176,
    "createdAt": "2026-01-07 05:02"
  },
  {
    "id": 11,
    "nickname": "行動不便也能追光",
    "email": "accessible.trip@example.com",
    "location": "薩利色爾卡",
    "date": "2026-01-12",
    "rating": 4,
    "content": "整理一下無障礙資訊：機場到飯店有可上下輪椅的接駁車，需提前三天預約；觀景平台有斜坡道，但積雪時較滑，建議請工作人員陪同。餐廳桌下高度足夠，用餐沒有問題。",
    "photo": "images/aurora-saariselka-md.jpg",
    "blessings": 142,
    "createdAt": "2026-01-13 02:15"
  },
  {
    "id": 12,
    "nickname": "K",
    "email": "k@example.com",
    "location": "萊維",
    "date": "2025-12-30",
    "rating": 1,
    "content": "遇到暴風雪，纜車停駛，行程整個泡湯。純粹留個紀錄提醒大家保留備用日期。",
    "photo": "",
    "blessings": 5,
    "createdAt": "2025-12-31 11:20"
  }
];

/* 若使用模組化寫法可改為：export { SITE, LOCATIONS, FORECAST, DIARIES }; */
