export const optionsByItemClasss={
  STUFF: ["","原生資源", "加工資源"],
  ITEM: ["","布質風帽","布質長袍","布質便鞋","皮革兜帽","皮革外套","皮革鞋子","金屬頭盔","金屬護甲","金屬靴子","配件"],
  MAIN_WEAPON:["","斧頭","匕首","鎚子","戰爭手套","錘矛","鐵頭棍","長矛","劍","祕術法杖","詛咒法杖","火焰法杖","寒冰法杖","神聖法杖","自然法杖","弓","十字弓"],
  OFF_WEAPON:["","典籍","盾牌","火炬"],
  TOOL:["","十字鎬","鐮刀","剝皮刀","採石鎚","伐木斧","釣竿","破壞鎚"],
  ARTEFACT:["","符石","精魂","聖物","阿瓦隆碎片"],
  EVENT:["","春日祭典"],

};

export const itemClassValues={
  "原生資源": "RAW","加工資源": "MATERIAL","配件":"ACCESSORIES",
  "布質風帽":"HEAD_CLOTH","布質長袍":"ARMOR_CLOTH","布質便鞋":"SHOES_CLOTH",
  "皮革兜帽":"HEAD_LEATHER","皮革外套":"ARMOR_LEATHER","皮革鞋子":"SHOES_LEATHER",
  "金屬頭盔":"HEAD_PLATE","金屬護甲":"ARMOR_PLATE","金屬靴子":"SHOES_PLATE",
  "斧頭":"MAIN_AXE","匕首":"MAIN_DAGGER","鎚子":"MAIN_HAMMER","戰爭手套":"TH_KNUCKLES","錘矛":"MAIN_MACE","鐵頭棍":"TH_QUARTERSTAFF","長矛":"MAIN_SPEAR","劍":"MAIN_SWORD",
  "祕術法杖":"MAIN_ARCANESTAFF","詛咒法杖":"MAIN_CURSEDSTAFF","火焰法杖":"MAIN_FIRESTAFF","寒冰法杖":"MAIN_FROSTSTAFF","神聖法杖":"MAIN_HOLYSTAFF","自然法杖":"MAIN_NATURESTAFF",
  "弓":"TH_BOW","十字弓":"TH_CROSSBOW",
  "典籍":"OFF_BOOK","盾牌":"OFF_SHIELD","火炬":"OFF_TORCH",
  "十字鎬":"TOOL_PICK","鐮刀":"TOOL_SICKLE","剝皮刀":"TOOL_KNIFE","採石鎚":"TOOL_HAMMER","伐木斧":"TOOL_AXE","釣竿":"TOOL_FISHINGROD","破壞鎚":"TOOL_SIEGEHAMMER",
  "符石":"RUNE","精魂":"SOUL","聖物":"RELIC","阿瓦隆碎片":"SHARD_AVALONIAN",



  "春日祭典":"EASTER",

};

export const optionsByItemType = {
  RAW: ["木材", "礦石", "纖維","獸皮", "石材"],
  MATERIAL: ["板材","金屬塊","布料","皮革","砌塊"],
  ACCESSORIES: ["背包","洞察小背包","披風"],

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
  
  RUNE:["temp1","temp2","temp3",
    "古代鎚首","十字弓遺失零件","符文原石","血鑄之刃","摩根娜斧槍首",
    "巨熊守衛遺骸","古代環鏈","古代襯墊","古代綁帶","古代盾牌骨架",
    "失落祕術水晶","失落詛咒水晶","野火寶珠","白霜寶珠","癲狂之環",
    "德魯伊羽毛","德魯伊防腐鳥喙","德魯伊綁帶","迷惑水晶",
    "看守者","硬化柔刃","驚魂箭矢","摩根娜強化槍首","注魔皮革襯裡",
    "注魔面甲","注魔鞋底","符文號角","德魯伊碑文"],
  SOUL:[  
    "惡魔之刃","地獄弩箭","地獄鎚首","地獄鐮刃","煉獄錘矛首",
    "惡魔斷角","煉獄盾牌骨","惡魔金屬護甲","惡魔殘片","惡魔內襯",
  
  ],
  RELIC:[],
  SHARD_AVALONIAN:[],

  EASTER:["驚喜蛋","巧克力","活力春日棉尾蛋","馴化春日棉尾","春日棉尾","Caerleon 棉尾兔蛋","馴化Caerleon 棉尾兔","Caerleon 棉尾兔"],
};



export const itemTypeValues = {
  "木材": "WOOD","礦石": "ORE","纖維": "FIBER","獸皮": "HIDE","石材": "ROCK",
  "板材": "PLANKS","金屬塊": "METALBAR","布料": "CLOTH","皮革": "LEATHER","砌塊": "STONEBLOCK",
  "背包": "BAG","洞察小背包":"BAG_INSIGHT","披風": "CAPE",
  
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
  
  "匕首":"","雙匕首":"2H_DAGGERPAIR","鉤爪":"2H_CLAWPAIR","血刃":"MAIN_RAPIER_MORGANA",
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

  "剝皮刀":"2H_TOOL_KNIFE","阿瓦隆剝皮刀":"TOOL_KNIFE_AVALON","採剝皮工作帽":"HEAD_GATHERER_HIDE",
  "採剝皮工作服":"ARMOR_GATHERER_HIDE","採剝皮工作靴":"SHOES_GATHERER_HIDE","採剝皮後背包":"BACKPACK_GATHERER_HIDE",

  "採石鎚":"2H_TOOL_HAMMER","阿瓦隆採石鎚":"2H_TOOL_HAMMER_AVALON","採石匠工作帽":"HEAD_GATHERER_ROCK",
  "採石匠工作服":"ARMOR_GATHERER_ROCK","採石匠工作靴":"SHOES_GATHERER_ROCK","採石匠後背包":"BACKPACK_GATHERER_ROCK",

  "伐木斧":"2H_TOOL_AXE","阿瓦隆伐木斧":"2H_TOOL_AXE_AVALON","伐木匠工作帽":"HEAD_GATHERER_WOOD",
  "伐木匠工作服":"ARMOR_GATHERER_WOOD","伐木匠工作靴":"SHOES_GATHERER_WOOD","伐木匠後背包":"BACKPACK_GATHERER_WOOD",

  "釣竿":"2H_TOOL_FISHINGROD","阿瓦隆釣竿":"2H_TOOL_FISHINGROD_AVALON","漁夫工作帽":"HEAD_GATHERER_FISH",
  "漁夫工作服":"ARMOR_GATHERER_FISH","漁夫工作靴":"SHOES_GATHERER_FISH","漁夫後背包":"BACKPACK_GATHERER_FISH",

  "破壞鎚":"2H_TOOL_SIEGEHAMMER","阿瓦隆破壞鎚":"2H_TOOL_SIEGEHAMMER_AVALON",

  "temp1":"ARTEFACT_2H_ARCANESTAFF_HELL","temp2":"ARTEFACT_2H_ARCANESTAFF_HELL",
  "temp3":"ARTEFACT_2H_ARCANESTAFF_HELL",

  
  "驚喜蛋":"CONSUMABLE_EVENT_EASTER_2020_EGG","巧克力":"CONSUMABLE_EVENT_EASTER_2020_CHOCOLATE",
  "活力春日棉尾蛋":"FARM_RABBIT_EASTER_BABY","馴化春日棉尾":"FARM_RABBIT_EASTER_GROWN",
  "春日棉尾":"MOUNT_RABBIT_EASTER","Caerleon 棉尾兔蛋":"FARM_RABBIT_EASTER_BABY_DARK",
  "馴化Caerleon 棉尾兔":"FARM_RABBIT_EASTER_GROWN_DARK","Caerleon 棉尾兔":"MOUNT_RABBIT_EASTER_DARK",
  

};