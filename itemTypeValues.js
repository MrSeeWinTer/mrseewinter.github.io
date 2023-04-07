export const itemClassValues={
  "原材料": "RAW","加工料": "MATERIAL","配件":"ACCESSORIES",
  "布質風帽":"HEAD_CLOTH","布質長袍":"ARMOR_CLOTH","布質便鞋":"SHOES_CLOTH",
  "皮革兜帽":"HEAD_LEATHER","皮革外套":"ARMOR_LEATHER","皮革鞋子":"SHOES_LEATHER",
  "金屬頭盔":"HEAD_PLATE","金屬護甲":"ARMOR_PLATE","金屬靴子":"SHOES_PLATE",
}
export const optionsByItemClasss={
  STUFF: ["","原材料", "加工料"],
  ITEM: ["","布質風帽","布質長袍","布質便鞋","皮革兜帽","皮革外套","皮革鞋子","金屬頭盔","金屬護甲","金屬靴子","配件"],

}


export const itemTypeValues = {
  "木材": "WOOD","礦石": "ORE","纖維": "FIBER","獸皮": "HIDE","石材": "ROCK",
  "板材": "PLANKS","金屬塊": "METALBAR","布料": "CLOTH","皮革": "LEATHER","砌塊": "STONEBLOCK",
  "背包": "BAG","披風": "CAPE",
  
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


  
};

export const optionsByItemType = {
  RAW: ["木材", "礦石", "纖維","獸皮", "石材"],
  MATERIAL: ["板材","金屬塊","布料","皮革","砌塊"],
  ACCESSORIES: ["背包","披風"],

  HEAD_CLOTH: ["學者風帽","牧師風帽","法師風帽","皇家風帽","德魯伊風帽","邪魔風帽","邪教徒風帽","精靈鱗片風帽","純潔風帽"],
  ARMOR_CLOTH:["學者長袍","牧師長袍","法師長袍","皇家長袍","德魯伊長袍","邪魔長袍","邪教徒長袍","精靈鱗片長袍","純潔長袍"],
  SHOES_CLOTH:["學者便鞋","牧師便鞋","法師便鞋","皇家便鞋","德魯伊便鞋","邪魔便鞋","邪教徒便鞋","精靈鱗片便鞋","純潔便鞋"],

  HEAD_LEATHER: ["傭兵兜帽","獵人兜帽","刺客兜帽","皇家兜帽","潛行者兜帽","惡棍兜帽","幽魂兜帽","迷霧行者兜帽","堅韌兜帽"],
  ARMOR_LEATHER:["傭兵外套","獵人外套","刺客外套","皇家外套","潛行者外套","惡棍外套","幽魂外套","迷霧行者外套","堅韌外套"],
  SHOES_LEATHER:["傭兵鞋子","獵人鞋子","刺客鞋子","皇家鞋子","潛行者鞋子","惡棍鞋子","幽魂鞋子","迷霧行者鞋子","堅韌鞋子"],

  HEAD_PLATE: ["士兵頭盔","騎士頭盔","守衛者頭盔","皇家頭盔","守墓者頭盔","惡魔頭盔","審判者頭盔","幽影編織者頭盔","英勇頭盔"],
  ARMOR_PLATE:["士兵護甲","騎士護甲","守衛者護甲","皇家護甲","守墓者護甲","惡魔護甲","審判者護甲","幽影編織者護甲","英勇護甲"],
  SHOES_PLATE:["士兵靴子","騎士靴子","守衛者靴子","皇家靴子","守墓者靴子","惡魔靴子","審判者靴子","幽影編織者靴子","英勇靴子"],

};