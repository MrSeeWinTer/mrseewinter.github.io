export const optionsByItemClasss={
  STUFF: ["","原生資源", "加工資源","材料"],
  ITEM: ["","布質風帽","布質長袍","布質便鞋","皮革兜帽","皮革外套","皮革鞋子","金屬頭盔","金屬護甲","金屬靴子","配件"],
  MAIN_WEAPON:["","斧頭","匕首","鎚子","戰爭手套","錘矛","鐵頭棍","長矛","劍","祕術法杖","詛咒法杖","火焰法杖","寒冰法杖","神聖法杖","自然法杖","弓","十字弓"],
  OFF_WEAPON:["","典籍","盾牌","火炬"],
  TOOL:["","十字鎬","鐮刀","剝皮刀","採石鎚","伐木斧","釣竿","破壞鎚"],
  ARTEFACT:["","符石","精魂","聖物","阿瓦隆碎片"],
  CONSUMABLE:["","熟食","藥水","釣餌","魚","地圖-煉獄之門","地圖-地下城地圖(單人)","地圖-地下城地圖(團隊)","地圖-地下城地圖(大型團隊)","其他"],
  FARM:["","農耕種子","農耕產品","幼崽動物","成長動物","坐騎"],
  WORKER:["","通用","種植者","漁夫","獵場看守者","造箭師","附魔師","傭兵","探礦者","砌石匠","修補匠","鐵匠","伐木匠"],
  EVENT:["","春日祭典"],

};

export const itemClassValues={
  "原生資源": "RAW","加工資源": "MATERIAL","材料":"FRAG","配件":"ACCESSORIES",
  "布質風帽":"HEAD_CLOTH","布質長袍":"ARMOR_CLOTH","布質便鞋":"SHOES_CLOTH",
  "皮革兜帽":"HEAD_LEATHER","皮革外套":"ARMOR_LEATHER","皮革鞋子":"SHOES_LEATHER",
  "金屬頭盔":"HEAD_PLATE","金屬護甲":"ARMOR_PLATE","金屬靴子":"SHOES_PLATE",
  "斧頭":"MAIN_AXE","匕首":"MAIN_DAGGER","鎚子":"MAIN_HAMMER","戰爭手套":"TH_KNUCKLES","錘矛":"MAIN_MACE","鐵頭棍":"TH_QUARTERSTAFF","長矛":"MAIN_SPEAR","劍":"MAIN_SWORD",
  "祕術法杖":"MAIN_ARCANESTAFF","詛咒法杖":"MAIN_CURSEDSTAFF","火焰法杖":"MAIN_FIRESTAFF","寒冰法杖":"MAIN_FROSTSTAFF","神聖法杖":"MAIN_HOLYSTAFF","自然法杖":"MAIN_NATURESTAFF",
  "弓":"TH_BOW","十字弓":"TH_CROSSBOW",
  "典籍":"OFF_BOOK","盾牌":"OFF_SHIELD","火炬":"OFF_TORCH",
  "十字鎬":"TOOL_PICK","鐮刀":"TOOL_SICKLE","剝皮刀":"TOOL_KNIFE","採石鎚":"TOOL_HAMMER","伐木斧":"TOOL_AXE","釣竿":"TOOL_FISHINGROD","破壞鎚":"TOOL_SIEGEHAMMER",
  "熟食":"MEAL","藥水":"POTION","釣餌":"BAIT",
  "地圖-煉獄之門":"MAP_HELLGATE","地圖-地下城地圖(單人)":"MAP_DUNGEON_SOLO","地圖-地下城地圖(團隊)":"MAP_DUNGEON_GROUP","地圖-地下城地圖(大型團隊)":"MAP_DUNGEON_ELITE",
  "魚":"FISH","其他":"",
  "符石":"RUNE","精魂":"SOUL","聖物":"RELIC","阿瓦隆碎片":"SHARD_AVALONIAN",
  "幼崽動物":"BABY","成長動物":"GROWN","農耕種子":"SEED","農耕產品":"GROWTH","坐騎":"MOUNT",
  "通用":"GENERAL","種植者":"CROPPER","漁夫":"FISHERMAN","獵場看守者":"GAMEKEEPER","造箭師":"FLETCHER","附魔師":"IMBUER",
  "傭兵":"MERCENARY","探礦者":"PROSPECTOR","砌石匠":"STONECUTTER","修補匠":"TINKER","鐵匠":"BLACKSMITH","伐木匠":"LUMBERJACK",
  "春日祭典":"EASTER",

};

export const optionsByItemType = {
  RAW: ["木材", "礦石", "纖維","獸皮", "石材"],
  MATERIAL: ["板材","金屬塊","布料","皮革","砌塊"],
  FRAG: ["黯淡精華","祕術精華","符石","精魂","聖物","阿瓦隆碎片"],
  ACCESSORIES: ["背包","洞察小背包","披風","Bridgewatch披風","Fort Sterling披風","Lymhurst披風","Martlock披風","Thetford披風","Caerleon披風",
  "異端披風","不死族披風","摩根娜披風","看守者披風","惡魔披風"],

  HEAD_CLOTH: ["學者風帽","牧師風帽","法師風帽","皇家風帽","德魯伊風帽","邪魔風帽","邪教徒風帽","精靈鱗片風帽","純潔風帽"],
  ARMOR_CLOTH:["學者長袍","牧師長袍","法師長袍","皇家長袍","德魯伊長袍","邪魔長袍","邪教徒長袍","精靈鱗片長袍","純潔長袍"],
  SHOES_CLOTH:["學者便鞋","牧師便鞋","法師便鞋","皇家便鞋","德魯伊便鞋","邪魔便鞋","邪教徒便鞋","精靈鱗片便鞋","純潔便鞋"],

  HEAD_LEATHER: ["傭兵兜帽","獵人兜帽","刺客兜帽","皇家兜帽","潛行者兜帽","惡棍兜帽","幽魂兜帽","迷霧行者兜帽","堅韌兜帽"],
  ARMOR_LEATHER:["傭兵外套","獵人外套","刺客外套","皇家外套","潛行者外套","惡棍外套","幽魂外套","迷霧行者外套","堅韌外套"],
  SHOES_LEATHER:["傭兵鞋子","獵人鞋子","刺客鞋子","皇家鞋子","潛行者鞋子","惡棍鞋子","幽魂鞋子","迷霧行者鞋子","堅韌鞋子"],

  HEAD_PLATE: ["士兵頭盔","騎士頭盔","守衛者頭盔","皇家頭盔","守墓者頭盔","惡魔頭盔","審判者頭盔","幽影編織者頭盔","英勇頭盔"],
  ARMOR_PLATE:["士兵護甲","騎士護甲","守衛者護甲","皇家護甲","守墓者護甲","惡魔護甲","審判者護甲","幽影編織者護甲","英勇護甲"],
  SHOES_PLATE:["士兵靴子","騎士靴子","守衛者靴子","皇家靴子","守墓者靴子","惡魔靴子","審判者靴子","幽影編織者靴子","英勇靴子"],
  
  MAIN_AXE:["戰斧","大斧","斧槍","喚腐者","煉獄鐮刀","熊爪","破界者"],  
  MAIN_DAGGER:["匕首","雙匕首","鉤爪","血刃","惡魔之牙","賜死者","憤怒拳刃"],
  MAIN_HAMMER:["鎚子","長鎚","巨鎚","墓鎚","鍛造鎚","守林者","正義之手"],
  TH_KNUCKLES:["格鬥家手套","戰鬥腕甲","尖刺護手","巨熊拳套","地獄火之手","鴉擊皮帶手套","阿瓦隆之拳"],
  MAIN_MACE:["錘矛","重型錘矛","晨星","基岩錘矛","夢魘錘矛","卡姆蘭錘矛","守誓者"],
  TH_QUARTERSTAFF:["鐵頭棍","鐵甲棍","雙刃棍","黑僧棍","靈魂之鐮","平衡棍","聖杯追尋者"],
  MAIN_SPEAR:["長矛","長槍","長刀","蒼鷺長矛","獵魂者","三叉戟","破曉者"],
  MAIN_SWORD:["闊劍","闊刃大劍","雙劍","王者之劍","斷水劍","雙刀","擁王者"],

  MAIN_ARCANESTAFF:["祕術法杖","祕術長杖","迷團法杖","巫術法杖","奥祕法杖","惡毒軌跡","夜禱之戒"],
  MAIN_CURSEDSTAFF:["詛咒法杖","詛咒長杖","惡魔法杖","命咒法杖","詛咒頭骨","天譴","喚影者"],
  MAIN_FIRESTAFF:["火焰法杖","火焰長杖","煉獄法杖","野火法杖","炎火石法杖","灼燒法杖","暮歌之戒"],
  MAIN_FROSTSTAFF:["寒冰法杖","寒冰長杖","冰河法杖","白霜法杖","冰柱法杖","永凍稜鏡","冰嘯法杖"],
  MAIN_HOLYSTAFF:["神聖法杖","神聖長杖","神性法杖","生命之觸法杖","墮落法杖","贖罪法杖","墮神法杖"],
  MAIN_NATURESTAFF:["自然法杖","自然長杖","狂野法杖","德魯伊法杖","瘟疫法杖","災禍法杖","鐵根法杖"],

  TH_BOW:["弓箭","戰弓","長弓","低語之弓","哀嘯之弓","巴頓之弓","穿霧者"],
  TH_CROSSBOW:["十字弓","十字弓重型","十字弓輕型","哀泣複誦者","電光施放者","圍城之弓","塑能者"],

  OFF_BOOK:["咒法之書","祕密之眼","怨靈","祭祀環","天界香爐"],
  OFF_SHIELD:["盾牌","石棺之盾","懦弱盾牌","破面者","星域神盾"],
  OFF_TORCH:["火炬","喚霧者","睨視手杖","地窖燭光","神聖權杖"],

  TOOL_PICK:["十字鎬","阿瓦隆十字鎬","採礦匠工作帽","採礦匠工作服","採礦匠工作靴","採礦匠後背包"],
  TOOL_SICKLE:["鐮刀","阿瓦隆鐮刀","採收者工作帽","採收者工作服","採收者工作靴","採收者後背包"],
  TOOL_KNIFE:["剝皮刀","阿瓦隆剝皮刀","採剝皮工作帽","採剝皮工作服","採剝皮工作靴","採剝皮後背包"],
  TOOL_HAMMER:["採石鎚","阿瓦隆採石鎚","採石匠工作帽","採石匠工作服","採石匠工作靴","採石匠後背包"],
  TOOL_AXE:["伐木斧","阿瓦隆伐木斧","伐木匠工作帽","伐木匠工作服","伐木匠工作靴","伐木匠後背包"],
  TOOL_FISHINGROD:["釣竿","阿瓦隆釣竿","漁夫工作帽","漁夫工作服","漁夫工作靴","漁夫後背包"],
  TOOL_SIEGEHAMMER:["破壞鎚","阿瓦隆破壞鎚"],
   
  MEAL:["--湯--","T1_胡蘿蔔湯","T3_麥仁湯","T5_高麗菜湯","T1_綠沼蛤蜊湯","T3_暗水蛤蜊湯","T5_黑沼蛤蜊湯",
  "--沙拉--","T1_海藻沙拉","T2_青豆沙拉","T4_蕪菁沙拉","T6_馬鈴薯沙拉","T2_淺岸魷魚沙拉","T4_中水章魚沙拉","T6_深水海怪沙拉",
  "--派--","T3_雞肉派","T5_鵝肉派","T7_豬肉派","T3_高地冷目魚派","T5_山脈盲眼魚派","T7_霜峰鋭眼魚派",
  "--蛋--","T3_雞肉歐姆蛋","T5_鵝肉歐姆蛋","T7_豬肉歐姆蛋","T3_淺川螃蟹歐姆蛋","T5_荒溪螃蟹歐姆蛋","T7_麈洞螃蟹歐姆蛋",
  "T3_阿瓦隆雞肉歐姆蛋","T5_阿瓦隆鵝肉歐姆蛋","T7_阿瓦隆豬肉歐姆蛋","--燉--","T4_燉山羊肉","T6_燉綿羊肉","T8_燉牛肉",
  "T4_燉綠川鰻魚","T6_燉赤泉鰻魚","T8_燉死水鰻魚","T4_阿瓦隆燉山羊肉","T6_阿瓦隆燉綿羊肉","T8_阿瓦隆燉牛肉",
  "--三文治--","T4_山羊肉三文治","T6_綿羊肉三文治","T8_牛肉三文治","T4_石溪鈍口螈三文治","T6_激流鈍口螈三文治","T8_落雷鈍口螈三文治",
  "T4_阿瓦隆山羊肉三文治","T6_阿瓦隆綿羊肉三文治","T8_阿瓦隆牛肉三文治","--烤--","T1_烤魚","T3_烤雞","T5_烤鵝","T7_烤豬肉",
  "T3_烤白霧鯛魚","T5_烤清霧鯛魚","T7_烤純霧鯛魚"],

  POTION:["--治療藥水--","T2_初級治療藥水","T4_治療藥水","T6_頂級治療藥水","--能量藥水--","T2_初級能量藥水","T4_能量藥水","T6_頂級能量藥水",
  "--抗性藥水--","T3_初級抗性藥水","T5_抗性藥水","T7_頂級抗性藥水","--巨大化藥水--","T3_初級巨大化藥水","T5_巨大化藥水","T7_頂級巨大化藥水",
  "--黏性藥水--","T3_初級黏性藥水","T5_黏性藥水","T7_頂級黏性藥水","--毒藥--","T4_初級毒藥","T6_毒藥","T8_頂級毒藥","--隱形藥水--","T8_隱形藥水"],

  BAIT:[
    "T1_蚯蚓","T1_簡易釣餌","T3_高級釣餌","T5_獨門釣餌"
  ],
  
  BABY:[
    "T3_小雞","T4_小山羊","T5_小鵝","T6_小綿羊","T7_小豬","T8_小乳牛","小馬","小公牛","T4_小鹿","T5_Caerleon小灰狼","T5_小野豬","T5_小冬熊","T5_小迅爪",
    "T5_小沼澤蠑螈","T5_小恐鳥","T5_小大角公羊","T6_小恐狼","T6_小鹿","T6_小駝鹿","T7_小恐豬","T7_小沼澤龍","T8_小幽狼","T8_菁英小灰狼",
    "T8_菁英小野豬","T8_小恐熊","T8_菁英小冬熊","T8_小猛獁象","T8_菁英小沼澤蠑螈","T8_菁英小恐鳥","T8_菁英小大角公羊","T8_活力春日棉尾蛋","T8_Caerleon 棉尾兔蛋"
  ],

  GROWN:[
    "T3_雞","T4_山羊","T5_鵝","T6_綿羊","T7_豬","T8_乳牛","馬","公牛","T4_鹿","T5_Caerleon灰狼","T5_野豬","T5_冬熊","T5_迅爪",
    "T5_沼澤蠑螈","T5_恐鳥","T5_大角公羊","T6_恐狼","T6_鹿","T6_駝鹿","T7_恐豬","T7_沼澤龍","T8_幽狼","T8_菁英灰狼",
    "T8_菁英野豬","T8_恐熊","T8_菁英冬熊","T8_猛獁象","T8_菁英沼澤蠑螈","T8_菁英恐鳥","T8_菁英大角公羊","T8_馴化春日棉尾","T8_馴化Caerleon 棉尾兔"
  ],

  MOUNT:[
    "騎乘馬","鐵甲馬","運輸公牛","T4_巨鹿坐騎","T5_灰狼坐騎","T5_野豬坐騎","T5_冬熊坐騎","T5_迅爪坐騎","T5_沼澤蠑螈坐騎","T5_恐鳥坐騎","T5_大角公羊坐騎",
    "T6_恐狼坐騎","T6_駝鹿坐騎","T7_恐豬坐騎","T7_沼澤龍坐騎","T8_菁英灰狼坐騎","T8_菁英野豬坐騎","T8_恐熊坐騎","T8_菁英冬熊坐騎","T8_猛獁象坐騎",
    "T8_菁英沼澤蠑螈坐騎","T8_菁英恐鳥坐騎","T8_菁英大角公羊坐騎","T8_春日棉尾","T8_Caerleon 棉尾兔"
  ],

  SEED:[
    "--農場--","T1_胡蘿蔔種子","T2_豆類種子","T3_小麥種子","T4_蕪菁種子","T5_高麗菜種子","T6_馬鈴薯種子","T7_玉米種子","T8_南瓜種子",
    "--藥草--","T2_祕術菌茹種子","3_明葉接骨草種子","T4_鈍齒牛蒡種子","T5_龍川續斷種子","T6_迷幻毛地黄種子","T7_火吻毛蕊花種子","T8_食屍鬼鋸草種子",
  ],

  GROWTH:[
    "--農場--","T1_胡蘿蔔","T2_豆類","T3_小麥","T4_蕪菁","T5_高麗菜","T6_馬鈴薯","T7_玉米","T8_南瓜",
    "--藥草--","T2_祕術菌茹","3_明葉接骨草","T4_鈍齒牛蒡","T5_龍川續斷","T6_迷幻毛地黄","T7_火吻毛蕊花","T8_食屍鬼鋸草",
    "--牧場--","T3_雞蛋","T4_山羊奶","T5_鵝蛋","T6_綿羊奶","T8_牛奶",
  ],

  RUNE:[
    "古代鎚首","十字弓遺失零件","符文原石","血鑄之刃","摩根娜斧槍首",
    "巨熊守衛遺骸","古代環鏈","古代襯墊","古代綁帶","古代盾牌骨架",
    "失落祕術水晶","失落詛咒水晶","野火寶珠","白霜寶珠","癲狂之環",
    "德魯伊羽毛","德魯伊防腐鳥喙","德魯伊綁帶","迷惑水晶",
    "看守者矛首","硬化柔刃","驚魂箭矢","摩根娜強化槍首","注魔皮革襯裡",
    "注魔面甲","注魔鞋底","符文號角","德魯伊碑文"],

  SOUL:[  
    "惡魔之刃","地獄弩箭","地獄鎚首","地獄鐮刃","煉獄錘矛首",
    "惡魔斷角","煉獄盾牌骨","惡魔金屬護甲","惡魔殘片","惡魔內襯",
    "奧祕寶珠","燃燒寶珠","煉獄卷軸","冰柱寶珠",
    "詛咒顎骨","惡魔顎骨","煉獄布質襯裡","煉獄布質面甲","煉獄布質綁帶",
    "惡魔箭鏃","煉獄叉槍首","破碎惡魔之牙","瘟疫象徵",
    "地獄雙鐮刃","地獄手柄","潛魔皮革","潛魔襯墊","潛魔綁帶"],

  RELIC:[
    "詛咒碎刃","看守者斧首","刻紋原木","迷惑弩箭",'注魔錘矛首',
    "變形暗鴉金屬護甲","血鑄尖刺","刻顱襯墊","防腐皮草","絡印綁帶",
    "詛咒永凍水晶","驚魂之環","血鑄觸媒","癲狂觸媒","不潔之環",
    "烙印石環","迷惑襯墊","迷惑護身符","迷惑綁帶",
    "雕飾白骨","防腐原石","驚魂碎刃","詛咒戟刃","防腐原木",
    "驚魂蠟燭","驚魂面甲","驚魂皮革","驚魂綁帶"],

  SHARD_AVALONIAN:[
    "尊榮金屬護甲","尊榮面甲","尊榮腿甲","阿瓦隆戰鬥回憶錄","先王遺物",
    "萬金之手","破碎誓言","阿瓦隆破損護手","阿瓦隆詠唱旋輪","阿瓦隆碎裂傳世寶",
    "聖潔腰帶","聖潔面具","聖潔綁帶","碎裂混沌寶珠","柔光之戒",
    "冰晶碎片","沉眠之戒","救世珍寶","破損天界信物",
    "先知飾帶","先知襯墊","先知扣環","染血古物","破損祖護手",
    "陳舊手杖","無瑕手工弓身","無根永生幼苗","阿瓦隆破碎紀念物"
  ],

  GENERAL:["通用戰利品日誌(空白)","通用戰利品日誌(已滿)"],
  CROPPER:["種植者契約","種植者日誌(空白)","種植者日誌(已滿)","種植者戰利品日誌(空白)","種植者戰利品日誌(已滿)"],
  FISHERMAN:["漁夫契約","漁夫日誌(空白)","漁夫日誌(已滿)","漁夫戰利品日誌(空白)","漁夫戰利品日誌(已滿)"],
  GAMEKEEPER:["獵場看守者契約","獵場看守者日誌(空白)","獵場看守者日誌(已滿)","獵場看守者戰利品日誌(空白)","獵場看守者戰利品日誌(已滿)"],
  FLETCHER:["造箭師契約","造箭師日誌(空白)","造箭師日誌(已滿)"],
  IMBUER:["附魔師契約","附魔師日誌(空白)","附魔師日誌(已滿)"],
  MERCENARY:["傭兵契約","傭兵日誌(空白)","傭兵日誌(已滿)","傭兵戰利品日誌(空白)","傭兵戰利品日誌(已滿)"],
  PROSPECTOR:["探礦者契約","探礦者日誌(空白)","探礦者日誌(已滿)","戰探礦者利品日誌(空白)","探礦者戰利品日誌(已滿)"],
  STONECUTTER:["砌石匠契約","砌石匠日誌(空白)","砌石匠日誌(已滿)","砌石匠戰利品日誌(空白)","砌石匠戰利品日誌(已滿)"],
  TINKER:["修補匠契約","修補匠日誌(空白)","修補匠日誌(已滿)"],
  BLACKSMITH:["鐵匠契約","鐵匠日誌(空白)","鐵匠日誌(已滿)"],
  LUMBERJACK:["伐木匠契約","伐木匠日誌(空白)","伐木匠日誌(已滿)","伐木匠戰利品日誌(空白)","伐木匠戰利品日誌(已滿)"],
  
  MAP_HELLGATE:["T5_煉獄之門儀式(2v2 - 非致命)","T5_煉獄之門儀式(5v5 - 非致命)","T5_煉獄之門儀式(10v10 - 非致命)",
       "T6_煉獄之門儀式(2v2 - 致命)","T7_煉獄之門儀式(5v5 - 致命)","T8_煉獄之門儀式(10v10 - 致命)",
  ],

  MAP_DUNGEON_SOLO:["T4.0_地下城地圖(單人)","T4.1_地下城地圖(單人)","T4.2_地下城地圖(單人)","T4.3_地下城地圖(單人)",
       "T5.0_地下城地圖(單人)","T5.1_地下城地圖(單人)","T5.2_地下城地圖(單人)","T5.3_地下城地圖(單人)",
       "T6.0_地下城地圖(單人)","T6.1_地下城地圖(單人)","T6.2_地下城地圖(單人)","T6.3_地下城地圖(單人)",
       "T7.0_地下城地圖(單人)","T7.1_地下城地圖(單人)","T7.2_地下城地圖(單人)","T7.3_地下城地圖(單人)",
       "T8.0_地下城地圖(單人)","T8.1_地下城地圖(單人)","T8.2_地下城地圖(單人)","T8.3_地下城地圖(單人)",
  ],

  MAP_DUNGEON_GROUP:["T4.0_地下城地圖(團隊)","T4.1_地下城地圖(團隊)","T4.2_地下城地圖(團隊)","T4.3_地下城地圖(團隊)",
  "T5.0_地下城地圖(團隊)","T5.1_地下城地圖(團隊)","T5.2_地下城地圖(團隊)","T5.3_地下城地圖(團隊)",
  "T6.0_地下城地圖(團隊)","T6.1_地下城地圖(團隊)","T6.2_地下城地圖(團隊)","T6.3_地下城地圖(團隊)",
  "T7.0_地下城地圖(團隊)","T7.1_地下城地圖(團隊)","T7.2_地下城地圖(團隊)","T7.3_地下城地圖(團隊)",
  "T8.0_地下城地圖(團隊)","T8.1_地下城地圖(團隊)","T8.2_地下城地圖(團隊)","T8.3_地下城地圖(團隊)",
],

  MAP_DUNGEON_ELITE:[
  "T6.0_地下城地圖(大型團隊)","T6.1_地下城地圖(大型團隊)","T6.2_地下城地圖(大型團隊)","T6.3_地下城地圖(大型團隊)",
  "T7.0_地下城地圖(大型團隊)","T7.1_地下城地圖(大型團隊)","T7.2_地下城地圖(大型團隊)","T7.3_地下城地圖(大型團隊)",
  "T8.0_地下城地圖(大型團隊)","T8.1_地下城地圖(大型團隊)","T8.2_地下城地圖(大型團隊)","T8.3_地下城地圖(大型團隊)",],

  FISH:[
  "--淡水魚--","T1_普通紅眼魚","T2_條紋鯉魚","T3_阿爾比恩鱸魚","T4_藍鱗狗魚","T5_點紋鱒魚","T6_明鱗梭鱸","T7_垂吻鯰魚","T8_河鱘",
  "--鹹水魚--","T1_普通鯡魚","T2_條紋鯖魚","T3_平岸鰈魚","T4_藍鱗鱈魚","T5_點紋狼魚","T6_健鰭鮭魚","T7_藍鰭鮪魚","T8_鋼鱗劍魚",
  "--稀有森林魚--","T3_綠川鰻魚","T5_赤泉鰻魚","T7_死水鰻魚",
  "--稀有草原魚--","T3_淺川螃蟹","T5_荒溪螃蟹","T7_麈洞螃蟹",
  "--稀有山脈魚--","T3_高地冷目魚","T5_山脈盲眼魚派","T7_霜峰鋭眼魚",
  "--稀有高地魚--","T3_石溪鈍口螈","T5_激流鈍口螈","T7_落雷鈍口螈",
  "--稀有沼澤魚--","T3_綠沼蛤蜊","T5_暗水蛤蜊","T7_黑沼蛤蜊",
  "--稀有鹹水魚--","T3_淺岸魷魚","T5_中水章魚","T7_深水海怪",
  "--稀有阿瓦隆魚--","T3_白霧鯛魚","T5_清霧鯛魚","T7_純霧鯛魚",
  "--其他--","T1_海藻","T1_切碎的魚","T1_基礎魚醬","T1_高級魚醬","T1_獨門魚醬"],

  EASTER:["驚喜蛋","巧克力","T8_活力春日棉尾蛋","T8_馴化春日棉尾","T8_春日棉尾","T8_Caerleon 棉尾兔蛋","T8_馴化Caerleon 棉尾兔","T8_Caerleon 棉尾兔"],
};



export const itemTypeValues = {
  "木材": "WOOD","礦石": "ORE","纖維": "FIBER","獸皮": "HIDE","石材": "ROCK",
  "板材": "PLANKS","金屬塊": "METALBAR","布料": "CLOTH","皮革": "LEATHER","砌塊": "STONEBLOCK",
  "黯淡精華":"ESSENCE","祕術精華":"ESSENCE_POTION","符石":"RUNE","精魂":"SOUL","聖物":"RELIC","阿瓦隆碎片":"SHARD_AVALONIAN",
  "背包": "BAG","洞察小背包":"BAG_INSIGHT","披風": "CAPE",
  "Bridgewatch披風":"CAPEITEM_FW_BRIDGEWATCH","Fort Sterling披風":"CAPEITEM_FW_FORTSTERLING","Lymhurst披風":"CAPEITEM_FW_LYMHURST",
  "Martlock披風":"CAPEITEM_FW_MARTLOCK","Thetford披風":"CAPEITEM_FW_THETFORD","Caerleon披風":"CAPEITEM_FW_CAERLEON",
  "異端披風":"CAPEITEM_HERETIC","不死族披風":"CAPEITEM_UNDEAD","摩根娜披風":"CAPEITEM_MORGANA","看守者披風":"CAPEITEM_KEEPER","惡魔披風":"CAPEITEM_DEMON",

  "學者風帽": "HEAD_CLOTH_SET1", "牧師風帽":"HEAD_CLOTH_SET2", "法師風帽":"HEAD_CLOTH_SET3",
  "皇家風帽": "HEAD_CLOTH_ROYAL","德魯伊風帽":"HEAD_CLOTH_KEEPER", "邪魔風帽": "HEAD_CLOTH_HELL", 
  "邪教徒風帽":"HEAD_CLOTH_MORGANA", "精靈鱗片風帽":"HEAD_CLOTH_FEY","純潔風帽":"HEAD_CLOTH_AVALON",
  "學者長袍": "ARMOR_CLOTH_SET1", "牧師長袍":"ARMOR_CLOTH_SET2", "法師長袍":"ARMOR_CLOTH_SET3",
  "皇家長袍": "ARMOR_CLOTH_ROYAL","德魯伊長袍":"ARMOR_CLOTH_KEEPER", "邪魔長袍": "ARMOR_CLOTH_HELL", 
  "邪教徒長袍":"ARMOR_CLOTH_MORGANA", "精靈鱗片長袍":"ARMOR_CLOTH_FEY","純潔長袍":"ARMOR_CLOTH_AVALON",
  "學者便鞋": "SHOES_CLOTH_SET1", "牧師便鞋":"SHOES_CLOTH_SET2", "法師便鞋":"SHOES_CLOTH_SET3",
  "皇家便鞋": "SHOES_CLOTH_ROYAL","德魯伊便鞋":"SHOES_CLOTH_KEEPER", "邪魔便鞋": "SHOES_CLOTH_HELL", 
  "邪教徒便鞋":"SHOES_CLOTH_MORGANA", "精靈鱗片便鞋":"SHOES_CLOTH_FEY","純潔便鞋":"SHOES_CLOTH_AVALON",

  "傭兵兜帽": "HEAD_LEATHER_SET1", "獵人兜帽":"HEAD_LEATHER_SET2", "刺客兜帽":"HEAD_LEATHER_SET3",
  "皇家兜帽": "HEAD_LEATHER_ROYAL","潛行者兜帽":"HEAD_LEATHER_KEEPER", "惡棍兜帽": "HEAD_LEATHER_HELL", 
  "幽魂兜帽":"HEAD_LEATHER_MORGANA", "迷霧行者兜帽":"HEAD_LEATHER_FEY","堅韌兜帽":"HEAD_LEATHER_AVALON",
  "傭兵外套": "ARMOR_LEATHER_SET1", "獵人外套":"ARMOR_LEATHER_SET2", "刺客外套":"ARMOR_LEATHER_SET3",
  "皇家外套": "ARMOR_LEATHER_ROYAL","潛行者外套":"ARMOR_LEATHER_KEEPER", "惡棍外套": "ARMOR_LEATHER_HELL", 
  "幽魂外套":"ARMOR_LEATHER_MORGANA", "迷霧行者外套":"ARMOR_LEATHER_FEY","堅韌外套":"ARMOR_LEATHER_AVALON",
  "傭兵鞋子": "SHOES_LEATHER_SET1", "獵人鞋子":"SHOES_LEATHER_SET2", "刺客鞋子":"SHOES_LEATHER_SET3",
  "皇家鞋子": "SHOES_LEATHER_ROYAL","潛行者鞋子":"SHOES_LEATHER_KEEPER", "惡棍鞋子": "SHOES_LEATHER_HELL", 
  "幽魂鞋子":"SHOES_LEATHER_MORGANA", "迷霧行者鞋子":"SHOES_LEATHER_FEY","堅韌鞋子":"SHOES_LEATHER_AVALON",

  "士兵頭盔": "HEAD_PLATE_SET1", "騎士頭盔":"HEAD_PLATE_SET2", "守衛者頭盔":"HEAD_PLATE_SET3",
  "皇家頭盔": "HEAD_PLATE_ROYAL","守墓者頭盔":"HEAD_PLATE_KEEPER", "惡魔頭盔": "HEAD_PLATE_HELL", 
  "審判者頭盔":"HEAD_PLATE_MORGANA", "幽影編織者頭盔":"HEAD_PLATE_FEY","英勇頭盔":"HEAD_PLATE_AVALON",
  "士兵護甲": "ARMOR_PLATE_SET1", "騎士護甲":"ARMOR_PLATE_SET2", "守衛者護甲":"ARMOR_PLATE_SET3",
  "皇家護甲": "ARMOR_PLATE_ROYAL","守墓者護甲":"ARMOR_PLATE_KEEPER", "惡魔護甲": "ARMOR_PLATE_HELL", 
  "審判者護甲":"ARMOR_PLATE_MORGANA", "幽影編織者護甲":"ARMOR_PLATE_FEY","英勇護甲":"ARMOR_PLATE_AVALON",
  "士兵靴子": "SHOES_PLATE_SET1", "騎士靴子":"SHOES_PLATE_SET2", "守衛者靴子":"SHOES_PLATE_SET3",
  "皇家靴子": "SHOES_PLATE_ROYAL","守墓者靴子":"SHOES_PLATE_KEEPER", "惡魔靴子": "SHOES_PLATE_HELL", 
  "審判者靴子":"SHOES_PLATE_MORGANA", "幽影編織者靴子":"SHOES_PLATE_FEY","英勇靴子":"SHOES_PLATE_AVALON",

  "戰斧":"MAIN_AXE","大斧":"2H_AXE","斧槍":"2H_HALBERD","喚腐者":"2H_HALBERD_MORGANA",
  "煉獄鐮刀":"2H_SCYTHE_HELL","熊爪":"2H_DUALAXE_KEEPER","破界者":"2H_AXE_AVALON",
  
  "匕首":"MAIN_DAGGER","雙匕首":"2H_DAGGERPAIR","鉤爪":"2H_CLAWPAIR","血刃":"MAIN_RAPIER_MORGANA",
  "惡魔之牙":"MAIN_DAGGER_HELL","賜死者":"2H_DUALSICKLE_UNDEAD","憤怒拳刃":"2H_DAGGER_KATAR_AVALON",

  "鎚子":"MAIN_HAMMER","長鎚":"2H_POLEHAMMER","巨鎚":"2H_HAMMER","墓鎚":"2H_HAMMER_UNDEAD",
  "鍛造鎚":"2H_DUALHAMMER_HELL","守林者":"2H_RAM_KEEPER","正義之手":"2H_HAMMER_AVALON",

  "格鬥家手套":"2H_KNUCKLES_SET1","戰鬥腕甲":"2H_KNUCKLES_SET2","尖刺護手":"2H_KNUCKLES_SET3","巨熊拳套":"2H_KNUCKLES_KEEPER",
  "地獄火之手":"2H_KNUCKLES_HELL","鴉擊皮帶手套":"2H_KNUCKLES_MORGANA","阿瓦隆之拳":"2H_KNUCKLES_AVALON",

  "錘矛":"MAIN_MACE","重型錘矛":"2H_MACE","晨星":"2H_FLAIL","基岩錘矛":"MAIN_ROCKMACE_KEEPER",
  "夢魘錘矛":"MAIN_MACE_HELL","卡姆蘭錘矛":"2H_MACE_MORGANA","守誓者":"2H_DUALMACE_AVALON",

  "鐵頭棍":"2H_QUARTERSTAFF","鐵甲棍":"2H_IRONCLADEDSTAFF","雙刃棍":"2H_DOUBLEBLADEDSTAFF","黑僧棍":"2H_COMBATSTAFF_MORGANA",
  "靈魂之鐮":"2H_TWINSCYTHE_HELL","平衡棍":"2H_ROCKSTAFF_KEEPER","聖杯追尋者":"2H_QUARTERSTAFF_AVALON",

  "長矛":"MAIN_SPEAR","長槍":"2H_SPEAR","長刀":"2H_GLAIVE","蒼鷺長矛":"MAIN_SPEAR_KEEPER",
  "獵魂者":"2H_HARPOON_HELL","三叉戟":"2H_TRIDENT_UNDEAD","破曉者":"MAIN_SPEAR_LANCE_AVALON",

  "闊劍":"MAIN_SWORD","闊刃大劍":"2H_CLAYMORE","雙劍":"2H_DUALSWORD","王者之劍":"MAIN_SCIMITAR_MORGANA",
  "斷水劍":"2H_CLEAVER_HELL","雙刀":"2H_DUALSCIMITAR_UNDEAD","擁王者":"2H_CLAYMORE_AVALON",

  "祕術法杖":"MAIN_ARCANESTAFF","祕術長杖":"2H_ARCANESTAFF","迷團法杖":"2H_ENIGMATICSTAFF","巫術法杖":"MAIN_ARCANESTAFF_UNDEAD",
  "奥祕法杖":"2H_ARCANESTAFF_HELL","惡毒軌跡":"2H_ENIGMATICORB_MORGANA","夜禱之戒":"2H_ARCANE_RINGPAIR_AVALON",

  "詛咒法杖":"MAIN_CURSEDSTAFF","詛咒長杖":"2H_CURSEDSTAFF","惡魔法杖":"2H_DEMONICSTAFF","命咒法杖":"MAIN_CURSEDSTAFF_UNDEAD",
  "詛咒頭骨":"2H_SKULLORB_HELL","天譴":"2H_CURSEDSTAFF_MORGANA","喚影者":"MAIN_CURSEDSTAFF_AVALON",

  "火焰法杖":"MAIN_FIRESTAFF","火焰長杖":"2H_FIRESTAFF","煉獄法杖":"2H_INFERNOSTAFF","野火法杖":"MAIN_FIRESTAFF_KEEPER",
  "炎火石法杖":"2H_FIRESTAFF_HELL","灼燒法杖":"2H_INFERNOSTAFF_MORGANA","暮歌之戒":"2H_FIRE_RINGPAIR_AVALON",

  "寒冰法杖":"MAIN_FROSTSTAFF","寒冰長杖":"2H_FROSTSTAFF","冰河法杖":"2H_GLACIALSTAFF","白霜法杖":"MAIN_FROSTSTAFF_KEEPER",
  "冰柱法杖":"2H_ICEGAUNTLETS_HELL","永凍稜鏡":"2H_ICECRYSTAL_UNDEAD","冰嘯法杖":"MAIN_FROSTSTAFF_AVALON",

  "神聖法杖":"MAIN_HOLYSTAFF","神聖長杖":"2H_HOLYSTAFF","神性法杖":"2H_DIVINESTAFF","生命之觸法杖":"MAIN_HOLYSTAFF_MORGANA",
  "墮落法杖":"2H_HOLYSTAFF_HELL","贖罪法杖":"2H_HOLYSTAFF_UNDEAD","墮神法杖":"MAIN_HOLYSTAFF_AVALON",

  "自然法杖":"MAIN_NATURESTAFF","自然長杖":"2H_NATURESTAFF","狂野法杖":"2H_WILDSTAFF","德魯伊法杖":"MAIN_NATURESTAFF_KEEPER",
  "瘟疫法杖":"2H_NATURESTAFF_HELL","災禍法杖":"2H_NATURESTAFF_KEEPER","鐵根法杖":"MAIN_NATURESTAFF_AVALON",

  "弓箭":"2H_BOW","戰弓":"2H_WARBOW","長弓":"2H_LONGBOW","低語之弓":"2H_LONGBOW_UNDEAD",
  "哀嘯之弓":"2H_BOW_HELL","巴頓之弓":"2H_BOW_KEEPER","穿霧者":"2H_BOW_AVALON",

  "十字弓":"2H_CROSSBOW","十字弓重型":"2H_CROSSBOWLARGE","十字弓輕型":"MAIN_1HCROSSBOW","哀泣複誦者":"2H_REPEATINGCROSSBOW_UNDEAD",
  "電光施放者":"2H_DUALCROSSBOW_HELL","圍城之弓":"2H_CROSSBOWLARGE_MORGANA","塑能者":"2H_CROSSBOW_CANNON_AVALON",

  "咒法之書":"OFF_BOOK","祕密之眼":"OFF_ORB_MORGANA","怨靈":"OFF_DEMONSKULL_HELL","祭祀環":"OFF_TOTEM_KEEPER","天界香爐":"OFF_CENSER_AVALON",

  "盾牌":"OFF_SHIELD","石棺之盾":"OFF_TOWERSHIELD_UNDEAD","懦弱盾牌":"OFF_SHIELD_HELL","破面者":"OFF_SPIKEDSHIELD_MORGANA","星域神盾":"OFF_SHIELD_AVALON",

  "火炬":"OFF_TORCH","喚霧者":"OFF_HORN_KEEPER","睨視手杖":"OFF_TALISMAN_AVALON","地窖燭光":"OFF_LAMP_UNDEAD","神聖權杖":"OFF_JESTERCANE_HELL",

  "十字鎬":"2H_TOOL_PICK","阿瓦隆十字鎬":"2H_TOOL_PICK_AVALON","採礦匠工作帽":"HEAD_GATHERER_ORE",
  "採礦匠工作服":"ARMOR_GATHERER_ORE","採礦匠工作靴":"SHOES_GATHERER_ORE","採礦匠後背包":"BACKPACK_GATHERER_ORE",

  "鐮刀":"2H_TOOL_SICKLE","阿瓦隆鐮刀":"2H_TOOL_SICKLE_AVALON","採收者工作帽":"HEAD_GATHERER_FIBER",
  "採收者工作服":"ARMOR_GATHERER_FIBER","採收者工作靴":"SHOES_GATHERER_FIBER","採收者後背包":"BACKPACK_GATHERER_FIBER",

  "剝皮刀":"2H_TOOL_KNIFE","阿瓦隆剝皮刀":"2H_TOOL_KNIFE_AVALON","採剝皮工作帽":"HEAD_GATHERER_HIDE",
  "採剝皮工作服":"ARMOR_GATHERER_HIDE","採剝皮工作靴":"SHOES_GATHERER_HIDE","採剝皮後背包":"BACKPACK_GATHERER_HIDE",

  "採石鎚":"2H_TOOL_HAMMER","阿瓦隆採石鎚":"2H_TOOL_HAMMER_AVALON","採石匠工作帽":"HEAD_GATHERER_ROCK",
  "採石匠工作服":"ARMOR_GATHERER_ROCK","採石匠工作靴":"SHOES_GATHERER_ROCK","採石匠後背包":"BACKPACK_GATHERER_ROCK",

  "伐木斧":"2H_TOOL_AXE","阿瓦隆伐木斧":"2H_TOOL_AXE_AVALON","伐木匠工作帽":"HEAD_GATHERER_WOOD",
  "伐木匠工作服":"ARMOR_GATHERER_WOOD","伐木匠工作靴":"SHOES_GATHERER_WOOD","伐木匠後背包":"BACKPACK_GATHERER_WOOD",

  "釣竿":"2H_TOOL_FISHINGROD","阿瓦隆釣竿":"2H_TOOL_FISHINGROD_AVALON","漁夫工作帽":"HEAD_GATHERER_FISH",
  "漁夫工作服":"ARMOR_GATHERER_FISH","漁夫工作靴":"SHOES_GATHERER_FISH","漁夫後背包":"BACKPACK_GATHERER_FISH",

  "破壞鎚":"2H_TOOL_SIEGEHAMMER","阿瓦隆破壞鎚":"2H_TOOL_SIEGEHAMMER_AVALON",

  "T1_烤魚":"T1_MEAL_GRILLEDFISH","T1_海藻沙拉":"T1_MEAL_SEAWEEDSALAD",
  "T1_胡蘿蔔湯":"T1_MEAL_SOUP","T3_麥仁湯":"T3_MEAL_SOUP","T5_高麗菜湯":"T5_MEAL_SOUP","T1_綠沼蛤蜊湯":"T1_MEAL_SOUP_FISH","T3_暗水蛤蜊湯":"T3_MEAL_SOUP_FISH","T5_黑沼蛤蜊湯":"T5_MEAL_SOUP_FISH",

  "T2_青豆沙拉":"T2_MEAL_SALAD","T4_蕪菁沙拉":"T4_MEAL_SALAD","T6_馬鈴薯沙拉":"T6_MEAL_SALAD","T2_淺岸魷魚沙拉":"T2_MEAL_SALAD_FISH","T4_中水章魚沙拉":"T4_MEAL_SALAD_FISH","T6_深水海怪沙拉":"T6_MEAL_SALAD_FISH",

  "T3_雞肉派":"T3_MEAL_PIE","T5_鵝肉派":"T5_MEAL_PIE","T7_豬肉派":"T7_MEAL_PIE","T3_高地冷目魚派":"T3_MEAL_PIE_FISH","T5_山脈盲眼魚派":"T5_MEAL_PIE_FISH","T7_霜峰鋭眼魚派":"T7_MEAL_PIE_FISH",

  "T3_雞肉歐姆蛋":"T3_MEAL_OMELETTE","T5_鵝肉歐姆蛋":"T5_MEAL_OMELETTE","T7_豬肉歐姆蛋":"T7_MEAL_OMELETTE","T3_淺川螃蟹歐姆蛋":"T3_MEAL_OMELETTE_FISH","T5_荒溪螃蟹歐姆蛋":"T5_MEAL_OMELETTE_FISH","T7_麈洞螃蟹歐姆蛋":"T7_MEAL_OMELETTE_FISH",
  "T3_阿瓦隆雞肉歐姆蛋":"T3_MEAL_OMELETTE_AVALON","T5_阿瓦隆鵝肉歐姆蛋":"T5_MEAL_OMELETTE_AVALON","T7_阿瓦隆豬肉歐姆蛋":"T7_MEAL_OMELETTE_AVALON",
  
  "T4_燉山羊肉":"T4_MEAL_STEW","T6_燉綿羊肉":"T6_MEAL_STEW","T8_燉牛肉":"T8_MEAL_STEW","T4_燉綠川鰻魚":"T4_MEAL_STEW_FISH","T6_燉赤泉鰻魚":"T6_MEAL_STEW_FISH","T8_燉死水鰻魚":"T8_MEAL_STEW_FISH",
  "T4_阿瓦隆燉山羊肉":"T4_MEAL_STEW_AVALON","T6_阿瓦隆燉綿羊肉":"T6_MEAL_STEW_AVALON","T8_阿瓦隆燉牛肉":"T8_MEAL_STEW_AVALON",

  "T4_山羊肉三文治":"T4_MEAL_SANDWICH","T6_綿羊肉三文治":"T6_MEAL_SANDWICH","T8_牛肉三文治":"T8_MEAL_SANDWICH","T4_石溪鈍口螈三文治":"T4_MEAL_SANDWICH_FISH","T6_激流鈍口螈三文治":"T6_MEAL_SANDWICH_FISH","T8_落雷鈍口螈三文治":"T8_MEAL_SANDWICH_FISH",
  "T4_阿瓦隆山羊肉三文治":"T4_MEAL_SANDWICH_AVALON","T6_阿瓦隆綿羊肉三文治":"T6_MEAL_SANDWICH_AVALON","T8_阿瓦隆牛肉三文治":"T8_MEAL_SANDWICH_AVALON",

  "T3_烤雞":"T3_MEAL_ROAST","T5_烤鵝":"T5_MEAL_ROAST","T7_烤豬肉":"T7_MEAL_ROAST","T3_烤白霧鯛魚":"T3_MEAL_ROAST_FISH","T5_烤清霧鯛魚":"T5_MEAL_ROAST_FISH","T7_烤純霧鯛魚":"T7_MEAL_ROAST_FISH",

  "T2_初級治療藥水":"T2_POTION_HEAL","T4_治療藥水":"T4_POTION_HEAL","T6_頂級治療藥水":"T6_POTION_HEAL",
  "T2_初級能量藥水":"T2_POTION_ENERGY","T4_能量藥水":"T4_POTION_ENERGY","T6_頂級能量藥水":"T6_POTION_ENERGY",
  "T3_初級抗性藥水":"T3_POTION_STONESKIN","T5_抗性藥水":"T5_POTION_STONESKIN","T7_頂級抗性藥水":"T7_POTION_STONESKIN",
  "T3_初級巨大化藥水":"T3_POTION_REVIVE","T5_巨大化藥水":"T5_POTION_REVIVE","T7_頂級巨大化藥水":"T7_POTION_REVIVE",
  "T3_初級黏性藥水":"T3_POTION_SLOWFIELD","T5_黏性藥水":"T5_POTION_SLOWFIELD","T7_頂級黏性藥水":"T7_POTION_SLOWFIELD",
  "T4_初級毒藥":"T4_POTION_COOLDOWN","T6_毒藥":"T6_POTION_COOLDOWN","T8_頂級毒藥":"T8_POTION_COOLDOWN","T8_隱形藥水":"T8_POTION_CLEANSE",
  
  "T1_蚯蚓":"T1_WORM","T1_簡易釣餌":"T1_FISHINGBAIT","T3_高級釣餌":"T3_FISHINGBAIT","T5_獨門釣餌":"T5_FISHINGBAIT",

  "古代鎚首":"ARTEFACT_2H_HAMMER_UNDEAD","十字弓遺失零件":"ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD","符文原石":"ARTEFACT_MAIN_ROCKMACE_KEEPER","血鑄之刃":"ARTEFACT_MAIN_SCIMITAR_MORGANA","摩根娜斧槍首":"ARTEFACT_2H_HALBERD_MORGANA",
  "巨熊守衛遺骸":"ARTEFACT_2H_KNUCKLES_KEEPER","古代環鏈":"ARTEFACT_ARMOR_PLATE_UNDEAD","古代襯墊":"ARTEFACT_HEAD_PLATE_UNDEAD","古代綁帶":"ARTEFACT_SHOES_PLATE_UNDEAD","古代盾牌骨架":"ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
  "失落祕術水晶":"ARTEFACT_MAIN_ARCANESTAFF_UNDEAD","失落詛咒水晶":"ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD","野火寶珠":"ARTEFACT_MAIN_FIRESTAFF_KEEPER","白霜寶珠":"ARTEFACT_MAIN_FROSTSTAFF_KEEPER","癲狂之環":"ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
  "德魯伊羽毛":"ARTEFACT_ARMOR_CLOTH_KEEPER","德魯伊防腐鳥喙":"ARTEFACT_HEAD_CLOTH_KEEPER","德魯伊綁帶":"ARTEFACT_SHOES_CLOTH_KEEPER","迷惑水晶":"ARTEFACT_OFF_ORB_MORGANA",
  "看守者矛首":"ARTEFACT_MAIN_SPEAR_KEEPER","硬化柔刃":"ARTEFACT_MAIN_RAPIER_MORGANA","驚魂箭矢":"ARTEFACT_2H_LONGBOW_UNDEAD","摩根娜強化槍首":"ARTEFACT_2H_COMBATSTAFF_MORGANA","注魔皮革襯裡":"T4_ARTEFACT_ARMOR_LEATHER_MORGANA",
  "注魔面甲":"ARTEFACT_HEAD_LEATHER_MORGANA","注魔鞋底":"ARTEFACT_SHOES_LEATHER_MORGANA","符文號角":"ARTEFACT_OFF_HORN_KEEPER","德魯伊碑文":"ARTEFACT_MAIN_NATURESTAFF_KEEPER",

  "惡魔之刃":"ARTEFACT_2H_CLEAVER_HELL","地獄弩箭":"ARTEFACT_2H_DUALCROSSBOW_HELL","地獄鎚首":"ARTEFACT_2H_DUALHAMMER_HELL","地獄鐮刃":"ARTEFACT_2H_SCYTHE_HELL","煉獄錘矛首":"ARTEFACT_MAIN_MACE_HELL",
  "惡魔斷角":"ARTEFACT_2H_KNUCKLES_HELL","煉獄盾牌骨":"ARTEFACT_OFF_SHIELD_HELL","惡魔金屬護甲":"ARTEFACT_ARMOR_PLATE_HELL","惡魔殘片":"ARTEFACT_HEAD_PLATE_HELL","惡魔內襯":"ARTEFACT_SHOES_PLATE_HELL",
  "奧祕寶珠":"ARTEFACT_2H_ARCANESTAFF_HELL","燃燒寶珠":"ARTEFACT_2H_FIRESTAFF_HELL","煉獄卷軸":"ARTEFACT_2H_HOLYSTAFF_HELL","冰柱寶珠":"ARTEFACT_2H_ICEGAUNTLETS_HELL","詛咒顎骨":"ARTEFACT_2H_SKULLORB_HELL",
  "惡魔顎骨":"ARTEFACT_OFF_DEMONSKULL_HELL","煉獄布質襯裡":"ARTEFACT_ARMOR_CLOTH_HELL","煉獄布質面甲":"ARTEFACT_HEAD_CLOTH_HELL","煉獄布質綁帶":"ARTEFACT_SHOES_CLOTH_HELL",
  "惡魔箭鏃":"ARTEFACT_2H_BOW_HELL","煉獄叉槍首":"ARTEFACT_2H_HARPOON_HELL","破碎惡魔之牙":"ARTEFACT_MAIN_DAGGER_HELL","瘟疫象徵":"ARTEFACT_2H_NATURESTAFF_HELL","地獄雙鐮刃":"ARTEFACT_2H_TWINSCYTHE_HELL",
  "地獄手柄":"ARTEFACT_OFF_JESTERCANE_HELL","潛魔皮革":"ARTEFACT_ARMOR_LEATHER_HELL","潛魔襯墊":"ARTEFACT_HEAD_LEATHER_HELL","潛魔綁帶":"ARTEFACT_SHOES_LEATHER_HELL",

  "詛咒碎刃":"ARTEFACT_2H_DUALSCIMITAR_UNDEAD","看守者斧首":"ARTEFACT_2H_DUALAXE_KEEPER","刻紋原木":"ARTEFACT_2H_RAM_KEEPER","迷惑弩箭":"ARTEFACT_2H_CROSSBOWLARGE_MORGANA","注魔錘矛首":"ARTEFACT_2H_MACE_MORGANA",
  "變形暗鴉金屬護甲":"ARTEFACT_2H_KNUCKLES_MORGANA","血鑄尖刺":"ARTEFACT_OFF_SPIKEDSHIELD_MORGANA","刻顱襯墊":"ARTEFACT_HEAD_PLATE_KEEPER","防腐皮草":"ARTEFACT_ARMOR_PLATE_KEEPER","絡印綁帶":"ARTEFACT_SHOES_PLATE_KEEPER",
  "詛咒永凍水晶":"ARTEFACT_2H_ICECRYSTAL_UNDEAD","驚魂之環":"ARTEFACT_2H_HOLYSTAFF_UNDEAD","血鑄觸媒":"ARTEFACT_2H_CURSEDSTAFF_MORGANA","癲狂觸媒":"ARTEFACT_2H_ENIGMATICORB_MORGANA","不潔之環":"ARTEFACT_2H_INFERNOSTAFF_MORGANA",
  "烙印石環":"ARTEFACT_OFF_TOTEM_KEEPER","迷惑襯墊":"ARTEFACT_ARMOR_CLOTH_MORGANA","迷惑護身符":"ARTEFACT_HEAD_CLOTH_MORGANA","迷惑綁帶":"ARTEFACT_SHOES_CLOTH_MORGANA",
  "雕飾白骨":"ARTEFACT_2H_BOW_KEEPER","防腐原石":"ARTEFACT_2H_ROCKSTAFF_KEEPER","驚魂碎刃":"ARTEFACT_2H_DUALSICKLE_UNDEAD","詛咒戟刃":"ARTEFACT_2H_TRIDENT_UNDEAD","防腐原木":"ARTEFACT_2H_NATURESTAFF_KEEPER",
  "驚魂蠟燭":"ARTEFACT_OFF_LAMP_UNDEAD","驚魂面甲":"ARTEFACT_HEAD_LEATHER_UNDEAD","驚魂皮革":"ARTEFACT_ARMOR_LEATHER_UNDEAD","驚魂綁帶":"ARTEFACT_SHOES_LEATHER_UNDEAD",

  "尊榮金屬護甲":"ARTEFACT_ARMOR_PLATE_AVALON","尊榮面甲":"ARTEFACT_HEAD_PLATE_AVALON","尊榮腿甲":"ARTEFACT_SHOES_PLATE_AVALON","阿瓦隆戰鬥回憶錄":"ARTEFACT_2H_AXE_AVALON","先王遺物":"ARTEFACT_2H_CLAYMORE_AVALON",
  "萬金之手":"ARTEFACT_2H_HAMMER_AVALON","破碎誓言":"ARTEFACT_2H_DUALMACE_AVALON","阿瓦隆破損護手":"ARTEFACT_2H_KNUCKLES_AVALON","阿瓦隆詠唱旋輪":"ARTEFACT_2H_CROSSBOW_CANNON_AVALON","阿瓦隆碎裂傳世寶":"ARTEFACT_OFF_SHIELD_AVALON",
  "聖潔腰帶":"ARTEFACT_ARMOR_LEATHER_AVALON","聖潔面具":"ARTEFACT_HEAD_LEATHER_AVALON","聖潔綁帶":"ARTEFACT_SHOES_LEATHER_AVALON","碎裂混沌寶珠":"ARTEFACT_MAIN_CURSEDSTAFF_AVALON","柔光之戒":"ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
  "冰晶碎片":"ARTEFACT_MAIN_FROSTSTAFF_AVALON","沉眠之戒":"ARTEFACT_2H_ARCANE_RINGPAIR_AVALON","救世珍寶":"ARTEFACT_MAIN_HOLYSTAFF_AVALON","破損天界信物":"ARTEFACT_OFF_CENSER_AVALON",
  "先知飾帶":"ARTEFACT_HEAD_CLOTH_AVALON","先知襯墊":"ARTEFACT_ARMOR_CLOTH_AVALON","先知扣環":"ARTEFACT_SHOES_CLOTH_AVALON","染血古物":"ARTEFACT_2H_DAGGER_KATAR_AVALON","破損祖護手":"ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
  "陳舊手杖":"ARTEFACT_2H_QUARTERSTAFF_AVALON","無瑕手工弓身":"ARTEFACT_2H_BOW_AVALON","無根永生幼苗":"ARTEFACT_MAIN_NATURESTAFF_AVALON","阿瓦隆破碎紀念物":"ARTEFACT_OFF_TALISMAN_AVALON",

  "通用戰利品日誌(空白)":"JOURNAL_TROPHY_GENERAL_EMPTY","通用戰利品日誌(已滿)":"JOURNAL_TROPHY_GENERAL_FULL",

  "種植者契約":"LABOURER_CONTRACT_FIBER","種植者日誌(空白)":"JOURNAL_FIBER_EMPTY","種植者日誌(已滿)":"JOURNAL_FIBER_FULL",
  "種植者戰利品日誌(空白)":"JOURNAL_TROPHY_FIBER_EMPTY","種植者戰利品日誌(已滿)":"JOURNAL_TROPHY_FIBER_FULL",

  "漁夫契約":"LABOURER_CONTRACT_FISHERMAN","漁夫日誌(空白)":"JOURNAL_FISHING_EMPTY","漁夫日誌(已滿)":"JOURNAL_FISHING_FULL",
  "漁夫戰利品日誌(空白)":"JOURNAL_TROPHY_FISHING_EMPTY","漁夫戰利品日誌(已滿)":"JOURNAL_TROPHY_FISHING_FULL",

  "獵場看守者契約":"LABOURER_CONTRACT_HIDE","獵場看守者日誌(空白)":"JOURNAL_HIDE_EMPTY","獵場看守者日誌(已滿)":"JOURNAL_HIDE_FULL",
  "獵場看守者戰利品日誌(空白)":"JOURNAL_TROPHY_HIDE_EMPTY","獵場看守者戰利品日誌(已滿)":"JOURNAL_TROPHY_HIDE_FULL",
  
  "造箭師契約":"LABOURER_CONTRACT_HUNTER","造箭師日誌(空白)":"JOURNAL_HUNTER_EMPTY","造箭師日誌(已滿)":"JOURNAL_HUNTER_FULL",
  
  "附魔師契約":"LABOURER_CONTRACT_MAGE","附魔師日誌(空白)":"JOURNAL_MAGE_EMPTY","附魔師日誌(已滿)":"JOURNAL_MAGE_FULL",
  
  "傭兵契約":"LABOURER_CONTRACT_MERCENARY","傭兵日誌(空白)":"JOURNAL_MERCENARY_EMPTY","傭兵日誌(已滿)":"JOURNAL_MERCENARY_FULLx",
  "傭兵戰利品日誌(空白)":"JOURNAL_TROPHY_MERCENARY_EMPTY","傭兵戰利品日誌(已滿)":"JOURNAL_TROPHY_MERCENARY_FULL",

  "探礦者契約":"LABOURER_CONTRACT_ORE","探礦者日誌(空白)":"JOURNAL_ORE_EMPTY","探礦者日誌(已滿)":"JOURNAL_ORE_FULL",
  "戰探礦者利品日誌(空白)":"JOURNAL_TROPHY_ORE_EMPTY","探礦者戰利品日誌(已滿)":"JOURNAL_TROPHY_ORE_FULL",

  "砌石匠契約":"LABOURER_CONTRACT_STONE","砌石匠日誌(空白)":"JOURNAL_STONE_EMPTY","砌石匠日誌(已滿)":"JOURNAL_STONE_FULL",
  "砌石匠戰利品日誌(空白)":"JOURNAL_TROPHY_STONE_EMPTY","砌石匠戰利品日誌(已滿)":"JOURNAL_TROPHY_STONE_FULL",

  "修補匠契約":"LABOURER_CONTRACT_TOOLMAKER","修補匠日誌(空白)":"JOURNAL_TOOLMAKER_EMPTY","修補匠日誌(已滿)":"JOURNAL_TOOLMAKER_FULL",
  
  "鐵匠契約":"LABOURER_CONTRACT_WARRIOR","鐵匠日誌(空白)":"JOURNAL_WARRIOR_EMPTY","鐵匠日誌(已滿)":"JOURNAL_WARRIOR_FULL",
  
  "伐木匠契約":"LABOURER_CONTRACT_WOOD","伐木匠日誌(空白)":"JOURNAL_WOOD_EMPTY","伐木匠日誌(已滿)":"JOURNAL_WOOD_FULL",
  "伐木匠戰利品日誌(空白)":"JOURNAL_TROPHY_WOOD_EMPTY","伐木匠戰利品日誌(已滿)":"JOURNAL_TROPHY_WOOD_FULL",

  "T3_小雞":"T3_FARM_CHICKEN_BABY","T4_小山羊":"T4_FARM_GOAT_BABY","T5_小鵝":"T5_FARM_GOOSE_BABY","T6_小綿羊":"T6_FARM_SHEEP_BABY","T7_小豬":"T7_FARM_PIG_BABY",
  "T8_小乳牛":"T8_FARM_COW_BABY","小馬":"FARM_HORSE_BABY","小公牛":"FARM_OX_BABY","T4_小鹿":"T4_FARM_GIANTSTAG_BABY","T5_Caerleon小灰狼":"T5_FARM_GREYWOLF_FW_CAERLEON_BABY",
  "T5_小野豬":"T5_FARM_DIREBOAR_FW_LYMHURST_BABY","T5_小冬熊":"T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY","T5_小迅爪":"T5_FARM_COUGAR_BABY","T5_小沼澤蠑螈":"T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY","T5_小恐鳥":"T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY",
  "T5_小大角公羊":"T5_FARM_RAM_FW_MARTLOCK_BABY","T6_小恐狼":"T6_FARM_DIREWOLF_BABY","T6_小鹿":"T6_FARM_GIANTSTAG_BABY","T6_小駝鹿":"T6_FARM_GIANTSTAG_MOOSE_BABY","T7_小恐豬":"T7_FARM_DIREBOAR_BABY",
  "T7_小沼澤龍":"T7_FARM_SWAMPDRAGON_BABY","T8_小幽狼":"T8_FARM_DIREWOLF_BABY","T8_菁英小灰狼":"T8_FARM_GREYWOLF_FW_CAERLEON_BABY","T8_菁英小野豬":"T8_FARM_DIREBOAR_FW_LYMHURST_BABY","T8_小恐熊":"T8_FARM_DIREBEAR_BABY",
  "T8_菁英小冬熊":"T8_FARM_DIREBEAR_FW_FORTSTERLING_BABY","T8_小猛獁象":"T8_FARM_MAMMOTH_BABY","T8_菁英小沼澤蠑螈":"T8_FARM_SWAMPDRAGON_FW_THETFORD_BABY","T8_菁英小恐鳥":"T8_FARM_MOABIRD_FW_BRIDGEWATCH_BABY","T8_菁英小大角公羊":"T8_FARM_RAM_FW_MARTLOCK_BABY",

  "T3_雞":"T3_FARM_CHICKEN_GROWN","T4_山羊":"T4_FARM_GOAT_GROWN","T5_鵝":"T5_FARM_GOOSE_GROWN","T6_綿羊":"T6_FARM_SHEEP_GROWN","T7_豬":"T7_FARM_PIG_GROWN",
  "T8_乳牛":"T8_FARM_COW_GROWN","馬":"FARM_HORSE_GROWN","公牛":"FARM_OX_GROWN","T4_鹿":"T4_FARM_GIANTSTAG_GROWN","T5_Caerleon灰狼":"T5_FARM_GREYWOLF_FW_CAERLEON_GROWN",
  "T5_野豬":"T5_FARM_DIREBOAR_FW_LYMHURST_GROWN","T5_冬熊":"T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN","T5_迅爪":"T5_FARM_COUGAR_GROWN","T5_沼澤蠑螈":"T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN","T5_恐鳥":"T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN",
  "T5_大角公羊":"T5_FARM_RAM_FW_MARTLOCK_GROWN","T6_恐狼":"T6_FARM_DIREWOLF_GROWN","T6_鹿":"T6_FARM_GIANTSTAG_GROWN","T6_駝鹿":"T6_FARM_GIANTSTAG_MOOSE_GROWN","T7_恐豬":"T7_FARM_DIREBOAR_GROWN",
  "T7_沼澤龍":"T7_FARM_SWAMPDRAGON_GROWN","T8_幽狼":"T8_FARM_DIREWOLF_GROWN","T8_菁英灰狼":"T8_FARM_GREYWOLF_FW_CAERLEON_GROWN","T8_菁英野豬":"T8_FARM_DIREBOAR_FW_LYMHURST_GROWN","T8_恐熊":"T8_FARM_DIREBEAR_GROWN",
  "T8_菁英冬熊":"T8_FARM_DIREBEAR_FW_FORTSTERLING_GROWN","T8_猛獁象":"T8_FARM_MAMMOTH_GROWN","T8_菁英沼澤蠑螈":"T8_FARM_SWAMPDRAGON_FW_THETFORD_GROWN","T8_菁英恐鳥":"T8_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN","T8_菁英大角公羊":"T8_FARM_RAM_FW_MARTLOCK_GROWN",

  "騎乘馬":"MOUNT_HORSE","鐵甲馬":"MOUNT_ARMORED_HORSE","運輸公牛":"MOUNT_OX","T4_巨鹿坐騎":"T4_MOUNT_GIANTSTAG","T5_灰狼坐騎":"T5_MOUNT_GREYWOLF_FW_CAERLEON","T5_野豬坐騎":"T5_MOUNT_DIREBOAR_FW_LYMHURST",
  "T5_冬熊坐騎":"T5_MOUNT_DIREBEAR_FW_FORTSTERLING","T5_迅爪坐騎":"T5_MOUNT_COUGAR_KEEPER","T5_沼澤蠑螈坐騎":"T5_MOUNT_SWAMPDRAGON_FW_THETFORD","T5_恐鳥坐騎":"T5_MOUNT_MOABIRD_FW_BRIDGEWATCH","T5_大角公羊坐騎":"T5_MOUNT_RAM_FW_MARTLOCK",
  "T6_恐狼坐騎":"T6_MOUNT_DIREWOLF","T6_駝鹿坐騎":"T6_MOUNT_GIANTSTAG_MOOSE","T7_恐豬坐騎":"T7_MOUNT_DIREBOAR","T7_沼澤龍坐騎":"T7_MOUNT_SWAMPDRAGON","T8_菁英灰狼坐騎":"T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE",
  "T8_菁英野豬坐騎":"T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE","T8_恐熊坐騎":"T8_MOUNT_DIREBEAR","T8_菁英冬熊坐騎":"T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE","T8_猛獁象坐騎":"T8_MOUNT_MAMMOTH_TRANSPORT",
  "T8_菁英沼澤蠑螈坐騎":"T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE","T8_菁英恐鳥坐騎":"T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE","T8_菁英大角公羊坐騎":"T8_MOUNT_RAM_FW_MARTLOCK_ELITE",

  "T1_胡蘿蔔種子":"T1_FARM_CARROT_SEED","T2_豆類種子":"T2_FARM_BEAN_SEED","T3_小麥種子":"T3_FARM_WHEAT_SEED","T4_蕪菁種子":"T4_FARM_TURNIP_SEED",
  "T5_高麗菜種子":"T5_FARM_CABBAGE_SEED","T6_馬鈴薯種子":"T6_FARM_POTATO_SEED","T7_玉米種子":"T7_FARM_CORN_SEED","T8_南瓜種子":"T8_FARM_PUMPKIN_SEED",
  "T2_祕術菌茹種子":"T2_FARM_AGARIC_SEED","T3_明葉接骨草種子":"T3_FARM_COMFREY_SEED","T4_鈍齒牛蒡種子":"T4_FARM_BURDOCK_SEED",
  "T5_龍川續斷種子":"T5_FARM_TEASEL_SEED","T6_迷幻毛地黄種子":"T6_FARM_FOXGLOVE_SEED","T7_火吻毛蕊花種子":"T7_FARM_MULLEIN_SEED","T8_食屍鬼鋸草種子":"T8_FARM_YARROW_SEED",

  "T1_胡蘿蔔":"T1_CARROT","T2_豆類":"T2_BEAN","T3_小麥":"T3_WHEAT","T4_蕪菁":"T4_TURNIP",
  "T5_高麗菜":"T5_CABBAGE","T6_馬鈴薯":"T6_POTATO","T7_玉米":"T7_CORN","T8_南瓜":"T8_PUMPKIN",
  "T2_祕術菌茹":"T2_AGARIC","T3_明葉接骨草":"T3_COMFREY","T4_鈍齒牛蒡":"T4_BURDOCK",
  "T5_龍川續斷":"T5_TEASEL","T6_迷幻毛地黄":"T6_FOXGLOVE","T7_火吻毛蕊花":"T7_MULLEIN","T8_食屍鬼鋸草":"T8_YARROW",
  "T3_雞蛋":"T3_EGG","T4_山羊奶":"T4_MILK","T5_鵝蛋":"T5_EGG","T6_綿羊奶":"T6_MILK","T8_牛奶":"T8_MILK",

  "T5_煉獄之門儀式(2v2 - 非致命)":"T5_HELLGATE_2V2_NON_LETHAL_1_MAP","T5_煉獄之門儀式(5v5 - 非致命)":"T5_HELLGATE_5V5_NON_LETHAL_1_MAP","T5_煉獄之門儀式(10v10 - 非致命)":"T5_HELLGATE_10V10_NON_LETHAL_1_MAP",
  "T6_煉獄之門儀式(2v2 - 致命)":"T6_HELLGATE_2V2_LETHAL_1_MAP","T7_煉獄之門儀式(5v5 - 致命)":"T7_HELLGATE_5V5_LETHAL_1_MAP","T8_煉獄之門儀式(10v10 - 致命)":"T8_HELLGATE_10V10_LETHAL_1_MAP",

  "T4.0_地下城地圖(單人)":"T4_RANDOM_DUNGEON_SOLO_TOKEN_1","T4.1_地下城地圖(單人)":"T4_RANDOM_DUNGEON_SOLO_TOKEN_2@1","T4.2_地下城地圖(單人)":"T4_RANDOM_DUNGEON_SOLO_TOKEN_3@2","T4.3_地下城地圖(單人)":"T4_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
  "T5.0_地下城地圖(單人)":"T5_RANDOM_DUNGEON_SOLO_TOKEN_1","T5.1_地下城地圖(單人)":"T5_RANDOM_DUNGEON_SOLO_TOKEN_2@1","T5.2_地下城地圖(單人)":"T5_RANDOM_DUNGEON_SOLO_TOKEN_3@2","T5.3_地下城地圖(單人)":"T5_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
  "T6.0_地下城地圖(單人)":"T6_RANDOM_DUNGEON_SOLO_TOKEN_1","T6.1_地下城地圖(單人)":"T6_RANDOM_DUNGEON_SOLO_TOKEN_2@1","T6.2_地下城地圖(單人)":"T6_RANDOM_DUNGEON_SOLO_TOKEN_3@2","T6.3_地下城地圖(單人)":"T6_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
  "T7.0_地下城地圖(單人)":"T7_RANDOM_DUNGEON_SOLO_TOKEN_1","T7.1_地下城地圖(單人)":"T7_RANDOM_DUNGEON_SOLO_TOKEN_2@1","T7.2_地下城地圖(單人)":"T7_RANDOM_DUNGEON_SOLO_TOKEN_3@2","T7.3_地下城地圖(單人)":"T7_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
  "T8.0_地下城地圖(單人)":"T8_RANDOM_DUNGEON_SOLO_TOKEN_1","T8.1_地下城地圖(單人)":"T8_RANDOM_DUNGEON_SOLO_TOKEN_2@1","T8.2_地下城地圖(單人)":"T8_RANDOM_DUNGEON_SOLO_TOKEN_3@2","T8.3_地下城地圖(單人)":"T8_RANDOM_DUNGEON_SOLO_TOKEN_4@3",

  "T4.0_地下城地圖(團隊)":"T4_RANDOM_DUNGEON_TOKEN_1","T4.1_地下城地圖(團隊)":"T4_RANDOM_DUNGEON_TOKEN_2@1","T4.2_地下城地圖(團隊)":"T4_RANDOM_DUNGEON_TOKEN_3@2","T4.3_地下城地圖(團隊)":"T4_RANDOM_DUNGEON_TOKEN_4@3",
  "T5.0_地下城地圖(團隊)":"T5_RANDOM_DUNGEON_TOKEN_1","T5.1_地下城地圖(團隊)":"T5_RANDOM_DUNGEON_TOKEN_2@1","T5.2_地下城地圖(團隊)":"T5_RANDOM_DUNGEON_TOKEN_3@2","T5.3_地下城地圖(團隊)":"T5_RANDOM_DUNGEON_TOKEN_4@3",
  "T6.0_地下城地圖(團隊)":"T6_RANDOM_DUNGEON_TOKEN_1","T6.1_地下城地圖(團隊)":"T6_RANDOM_DUNGEON_TOKEN_2@1","T6.2_地下城地圖(團隊)":"T6_RANDOM_DUNGEON_TOKEN_3@2","T6.3_地下城地圖(團隊)":"T6_RANDOM_DUNGEON_TOKEN_4@3",
  "T7.0_地下城地圖(團隊)":"T7_RANDOM_DUNGEON_TOKEN_1","T7.1_地下城地圖(團隊)":"T7_RANDOM_DUNGEON_TOKEN_2@1","T7.2_地下城地圖(團隊)":"T7_RANDOM_DUNGEON_TOKEN_3@2","T7.3_地下城地圖(團隊)":"T7_RANDOM_DUNGEON_TOKEN_4@3",
  "T8.0_地下城地圖(團隊)":"T8_RANDOM_DUNGEON_TOKEN_1","T8.1_地下城地圖(團隊)":"T8_RANDOM_DUNGEON_TOKEN_2@1","T8.2_地下城地圖(團隊)":"T8_RANDOM_DUNGEON_TOKEN_3@2","T8.3_地下城地圖(團隊)":"T8_RANDOM_DUNGEON_TOKEN_4@3",
  
  "T6.0_地下城地圖(大型團隊)":"T6_RANDOM_DUNGEON_ELITE_TOKEN_1","T6.1_地下城地圖(大型團隊)":"T6_RANDOM_DUNGEON_ELITE_TOKEN_2@1","T6.2_地下城地圖(大型團隊)":"T6_RANDOM_DUNGEON_ELITE_TOKEN_3@2","T6.3_地下城地圖(大型團隊)":"T6_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
  "T7.0_地下城地圖(大型團隊)":"T7_RANDOM_DUNGEON_ELITE_TOKEN_1","T7.1_地下城地圖(大型團隊)":"T7_RANDOM_DUNGEON_ELITE_TOKEN_2@1","T7.2_地下城地圖(大型團隊)":"T7_RANDOM_DUNGEON_ELITE_TOKEN_3@2","T7.3_地下城地圖(大型團隊)":"T7_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
  "T8.0_地下城地圖(大型團隊)":"T8_RANDOM_DUNGEON_ELITE_TOKEN_1","T8.1_地下城地圖(大型團隊)":"T8_RANDOM_DUNGEON_ELITE_TOKEN_2@1","T8.2_地下城地圖(大型團隊)":"T8_RANDOM_DUNGEON_ELITE_TOKEN_3@2","T8.3_地下城地圖(大型團隊)":"T8_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
  
  "T1_普通紅眼魚":"T1_FISH_FRESHWATER_ALL_COMMON","T2_條紋鯉魚":"T2_FISH_FRESHWATER_ALL_COMMON","T3_阿爾比恩鱸魚":"T3_FISH_FRESHWATER_ALL_COMMON","T4_藍鱗狗魚":"T4_FISH_FRESHWATER_ALL_COMMON",
  "T5_點紋鱒魚":"T5_FISH_FRESHWATER_ALL_COMMON","T6_明鱗梭鱸":"T6_FISH_FRESHWATER_ALL_COMMON","T7_垂吻鯰魚":"T7_FISH_FRESHWATER_ALL_COMMON","T8_河鱘":"T8_FISH_FRESHWATER_ALL_COMMON",
  "T1_普通鯡魚":"T1_FISH_SALTWATER_ALL_COMMON","T2_條紋鯖魚":"T2_FISH_SALTWATER_ALL_COMMON","T3_平岸鰈魚":"T3_FISH_SALTWATER_ALL_COMMON","T4_藍鱗鱈魚":"T4_FISH_SALTWATER_ALL_COMMON",
  "T5_點紋狼魚":"T5_FISH_SALTWATER_ALL_COMMON","T6_健鰭鮭魚":"T6_FISH_SALTWATER_ALL_COMMON","T7_藍鰭鮪魚":"T7_FISH_SALTWATER_ALL_COMMON","T8_鋼鱗劍魚":"T8_FISH_SALTWATER_ALL_COMMON",
  "T3_綠川鰻魚":"T3_FISH_FRESHWATER_FOREST_RARE","T5_赤泉鰻魚":"T5_FISH_FRESHWATER_FOREST_RARE","T7_死水鰻魚":"T7_FISH_FRESHWATER_FOREST_RARE",
  "T3_淺川螃蟹":"T3_FISH_FRESHWATER_MOUNTAIN_RARE","T5_荒溪螃蟹":"T5_FISH_FRESHWATER_MOUNTAIN_RARE","T7_麈洞螃蟹":"T7_FISH_FRESHWATER_MOUNTAIN_RARE",
  "T3_高地冷目魚":"T3_FISH_FRESHWATER_HIGHLANDS_RARE","T5_山脈盲眼魚派":"T5_FISH_FRESHWATER_HIGHLANDS_RARE","T7_霜峰鋭眼魚":"T7_FISH_FRESHWATER_HIGHLANDS_RARE",
  "T3_石溪鈍口螈":"T3_FISH_FRESHWATER_STEPPE_RARE","T5_激流鈍口螈":"T5_FISH_FRESHWATER_STEPPE_RARE","T7_落雷鈍口螈":"T7_FISH_FRESHWATER_STEPPE_RARE",
  "T3_綠沼蛤蜊":"T3_FISH_FRESHWATER_SWAMP_RARE","T5_暗水蛤蜊":"T5_FISH_FRESHWATER_SWAMP_RARE","T7_黑沼蛤蜊":"T7_FISH_FRESHWATER_SWAMP_RARE",
  "T3_淺岸魷魚":"T3_FISH_SALTWATER_ALL_RARE","T5_中水章魚":"T5_FISH_SALTWATER_ALL_RARE","T7_深水海怪":"T7_FISH_SALTWATER_ALL_RARE",
  "T3_白霧鯛魚":"T3_FISH_FRESHWATER_AVALON_RARE","T5_清霧鯛魚":"T5_FISH_FRESHWATER_AVALON_RARE","T7_純霧鯛魚":"T7_FISH_FRESHWATER_AVALON_RARE",
  "T1_海藻":"T1_SEAWEED","T1_切碎的魚":"T1_FISHCHOPS","T1_基礎魚醬":"T1_FISHSAUCE_LEVEL1","T1_高級魚醬":"T1_FISHSAUCE_LEVEL2","T1_獨門魚醬":"T1_FISHSAUCE_LEVEL3",

  "驚喜蛋":"CONSUMABLE_EVENT_EASTER_2020_EGG","巧克力":"CONSUMABLE_EVENT_EASTER_2020_CHOCOLATE",
  "T8_活力春日棉尾蛋":"T8_FARM_RABBIT_EASTER_BABY","T8_馴化春日棉尾":"T8_FARM_RABBIT_EASTER_GROWN",
  "T8_春日棉尾":"T8_MOUNT_RABBIT_EASTER","T8_Caerleon 棉尾兔蛋":"T8_FARM_RABBIT_EASTER_BABY_DARK",
  "T8_馴化Caerleon 棉尾兔":"T8_FARM_RABBIT_EASTER_GROWN_DARK","T8_Caerleon 棉尾兔":"T8_MOUNT_RABBIT_EASTER_DARK",
  

};