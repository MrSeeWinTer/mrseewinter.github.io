import { itemTypeValues,optionsByItemType,itemClassValues,optionsByItemClasss } from './itemTypeValues.js';

const itemTypeClasss = document.getElementById("item-class");
const itemTypeSelect = document.getElementById("item-type");
const itemNameSelect = document.getElementById("item-name");
// Define the available options for each item type

itemTypeClasss.addEventListener("change", function() {
  const selectedItemClasss = itemTypeClasss.value;
  const option1= optionsByItemClasss[selectedItemClasss];
  itemTypeSelect.innerHTML = "";
  itemNameSelect.innerHTML = "";
  option1.forEach(function(option) {
    const optionElement = document.createElement("option");
    optionElement.value = itemClassValues[option];
    optionElement.text = option;
    //console.log(itemTypeValues[option]);
    itemTypeSelect.add(optionElement);
  });
});
  


// When the item type select changes, update the options available in the item name select
itemTypeSelect.addEventListener("change", function() {
  const selectedItemType = itemTypeSelect.value;
  const option2 = optionsByItemType[selectedItemType];
  itemNameSelect.innerHTML = "";
  option2.forEach(function(option) {
    const optionElement = document.createElement("option");
    optionElement.value = itemTypeValues[option];
    optionElement.text = option;
    //console.log(itemTypeValues[option]);
    itemNameSelect.add(optionElement);
  });
});



function getSelectedValues() {
  const itemName = document.getElementById('item-name').value;
  const itemTier = document.getElementById('item-tier').value;
  const itemEnchant = document.getElementById('item-enchant').value;
  const itemQuality = document.getElementById('item-quality').value;
  return { itemName, itemTier, itemEnchant, itemQuality };
}



function fetchData() {
    const existingTable = document.getElementById('table');
    if (existingTable) {
      const table = document.getElementById('table');
      table.innerHTML = '';

      const geticon = document.getElementById('logo');
      geticon.innerHTML = '';
    } else {
      // The element does not have the class "my-class"
    }


    var { itemName, itemTier, itemEnchant, itemQuality } = getSelectedValues();
    const enchant_name = itemEnchant!=0? itemTypeSelect.value == "RAW"||itemTypeSelect.value =="MATERIAL"? "_LEVEL"+itemEnchant+"@"+itemEnchant :"@"+itemEnchant:"";
    //const enchant_name_for_png = itemEnchant != 0? "_LEVEL"+itemEnchant+"@"+itemEnchant : "";
    if(itemTier==""&&!itemName.startsWith("T")){itemTier="T4_"}

    //console.log(enchant_name+";"+itemQuality);
    
    const logoDiv = document.getElementById('logo');    
    const disDiv = document.getElementById('descriptions');  
    disDiv.innerHTML = '';  
    //CraftResourceList
    //const CraftResourceList = document.createElement('img');

    const url3 = `https://gameinfo.albiononline.com/api/gameinfo/items/${itemTier}${itemName}/data`;
    //console.log(url3);
    fetch(url3)
    .then(response => response.json())
    .then(data => {
      let ResourceList="";
      try{
        ResourceList = data.craftingRequirements.craftResourceList;
      }
      catch{
        try{
          ResourceList =  data.enchantments.enchantments[0].craftingRequirements.craftResourceList;
        }
        catch{

        }
        
      } 
      
      
      
      //console.log(ResourceList);
      for (let i = 0; i < ResourceList.length; i++) {
        
        const resource = ResourceList[i];
        //console.log(`Unique name: ${resource.uniqueName}, Count: ${resource.count}`);

        const logoCount = document.createElement('span');
        if(i==0) logoCount.textContent+= "= ";
        if(i!=ResourceList.length&&i!=0) logoCount.textContent+= "+";
        logoCount.textContent  += resource.count;
        
        const logoImg = document.createElement('img');
        logoImg.src = `https://render.albiononline.com/v1/item/${resource.uniqueName}${enchant_name}.png`;
        
        logoDiv.appendChild(logoCount);
        logoDiv.appendChild(logoImg); 
      }




      const disH1 = document.createElement('H1');
      
      
      disH1.textContent = data.localizedNames["ZH-TW"]+" "+data.localizedDescriptions["ZH-TW"];
      //disH1.textContent = data.activeSlots[1][0].localizedNames["ZH-TW"]+" "+data.activeSlots[1][0].localizedDescriptions["ZH-TW"];
      
      //console.log(data.activeSlots[1][0].localizedNames["ZH-TW"]+" "+data.activeSlots[1][0].localizedDescriptions["ZH-TW"]);
      disDiv.appendChild(disH1); 

    })
    .catch(error =>{
      console.log(error);
    });
    



    const logoImg = document.createElement('img');
    logoImg.src = `https://render.albiononline.com/v1/item/${itemTier}${itemName}${enchant_name}.png?quality=${itemQuality}`;
    logoDiv.appendChild(logoImg);

    

    //Price
    const url1 = `https://east.albion-online-data.com/api/v2/stats/Prices/${itemTier}${itemName}${enchant_name}.json?qualities=${itemQuality}`;

    //History
    const url2 = `https://east.albion-online-data.com/api/v2/stats/History/${itemTier}${itemName}${enchant_name}.json?qualities=${itemQuality}&time-scale=1`;

    


    //console.log(url1);
    Promise.all([
      fetch(url1).then(response => response.json()),
      fetch(url2).then(response => response.json())
    ]).then(data => {
      const table = document.createElement('table');
      table.classList.add('my-table');
      
      let headerRow = document.createElement('tr');
      let headers = ['地區', '賣出價', '賣出價最後更新時間','買入價','買入價最後更新時間','過去一小時成交量','過去一小時平均價格'];

      headers.forEach(header => {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });

      table.appendChild(headerRow);

      let cities = data[0].map(item => item.city).filter((value, index, self) => self.indexOf(value) === index);

      cities.forEach(city => {
        let row = document.createElement('tr');
        row.setAttribute('data-city', city);
        let cityNameCell = document.createElement('td');
        cityNameCell.textContent = city;

        row.appendChild(cityNameCell);

        let cityItems = data[0].filter(item => item.city === city);

        
        let itemdata = data[1].find(item => item.location ===city)? data[1].find(item => item.location ===city) :"NO DATA";
        //let itemhistory = itemdata.data;
        //console.log(itemdata);
        headers.slice(1).forEach(header => {
          let cell = document.createElement('td');
          let price;
          let date;
           
          if(header === '賣出價'&&Math.min(...cityItems.map(item => item.sell_price_min))=="0"&&cityItems.map(item => item.sell_price_min_date)=="0001-01-01T00:00:00"){
            price = "NO DATA";
          }else if(header === '買入價'&&Math.min(...cityItems.map(item => item.buy_price_min))=="0"&&cityItems.map(item => item.buy_price_min_date)=="0001-01-01T00:00:00"){
            price = "NO DATA";
          }else if (header === '賣出價') {
            price = Math.min(...cityItems.map(item => item.sell_price_min));
          } else if (header === '賣出價最後更新時間') {
            date = cityItems.map(item => item.sell_price_min_date);
          } else if (header === '買入價') {
            price = Math.max(...cityItems.map(item => item.buy_price_max));
          } else if (header === '買入價最後更新時間') {
            date = cityItems.map(item => item.buy_price_max_date);
          } else if (header === '過去一小時成交量') {
            price = itemdata=="NO DATA"? "NO DATA": itemdata.data[itemdata.data.length-1].item_count;
            //price = itemdata.data[1].avg_price;
          } else if (header === '過去一小時平均價格') {
            price = itemdata=="NO DATA"? "NO DATA": itemdata.data[itemdata.data.length-1].avg_price;
            //price = itemdata.data[1].avg_price;
          } 

          //date = new Date(date).toLocaleString()
          const utcDate = new Date(date);
          const offset = 8; // UTC+8 timezone offset
          const localTimestamp = new Date(utcDate.getTime() + (offset * 60 * 60 * 1000));
          const time = localTimestamp.toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });


          cell.textContent = header.includes('最後更新時間') ?   (time!="1/1, 08:00")?time: "NO DATA" : price;

          row.appendChild(cell);
        });

        table.appendChild(row);
      });
      
      const tablediv = document.getElementById('table');
      tablediv.appendChild(table);
    })
        .catch(error => {
          const pricesDiv = document.getElementById("prices");
          pricesDiv.textContent = "Error fetching data from API.";
        });



      }


const fetchDataButton = document.getElementById('fetch-data');
fetchDataButton.addEventListener('click', fetchData);