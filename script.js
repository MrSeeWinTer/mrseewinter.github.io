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
    if(itemTier==""&&!itemName.startsWith("T")&&!itemName.startsWith("QUESTITEM")&&!itemName.startsWith("UNIQUE")){itemTier="T4_"}

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
      
      try{
        disH1.textContent = data.localizedNames["ZH-TW"]+" "+data.localizedDescriptions["ZH-TW"];
      }catch{
        disH1.textContent = data.localizedNames["ZH-TW"];
      }
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

  

    //console.log(url2);

    Promise.all([
      fetch(url1).then(response => response.json()),
      fetch(url2).then(response => response.json())
    ]).then(data => {
      var price_checkbox = document.getElementById("price_checkbox");
      var history_checkbox = document.getElementById("history_checkbox");
      var history_48Hours = document.getElementById("history_48Hours");
      

      var item_price = document.getElementById("item_price");
      var item_history = document.getElementById("item_history");

      if(price_checkbox.checked){
      
      item_price.textContent = "物品價格";

      const table = document.createElement('table');
      table.classList.add('my-table');
      
      let headerRow = document.createElement('tr');
      let headers = ['地區', '賣出單/直接買入價', '賣出價最後更新時間','買入單/直接賣出價','買入價最後更新時間','過去有記錄一小時成交量','過去有記錄一小時平均價格'];

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
           
          if(header === '賣出單/直接買入價'&&Math.min(...cityItems.map(item => item.sell_price_min))=="0"&&cityItems.map(item => item.sell_price_min_date)=="0001-01-01T00:00:00"){
            price = "NO DATA";
          }else if(header === '買入單/直接賣出價'&&Math.min(...cityItems.map(item => item.buy_price_min))=="0"&&cityItems.map(item => item.buy_price_min_date)=="0001-01-01T00:00:00"){
            price = "NO DATA";
          }else if (header === '賣出單/直接買入價') {
            price = Math.min(...cityItems.map(item => item.sell_price_min));
          } else if (header === '賣出價最後更新時間') {
            date = cityItems.map(item => item.sell_price_min_date);
          } else if (header === '買入單/直接賣出價') {
            price = Math.max(...cityItems.map(item => item.buy_price_max));
          } else if (header === '買入價最後更新時間') {
            date = cityItems.map(item => item.buy_price_max_date);
          } else if (header === '過去有記錄一小時成交量') {
            price = itemdata=="NO DATA"? "NO DATA": itemdata.data[itemdata.data.length-1].item_count;
            //price = itemdata.data[1].avg_price;
          } else if (header === '過去有記錄一小時平均價格') {
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
      }else{
        item_price.textContent = "";
      }

      // Select the table cell with the text "5003"
      let cell = document.querySelector('tr[data-city="5003"]');

      // Check if the cell was found
      if (cell) {
        // Set the text content of the cell to "Brecilien"
        cell.querySelector('td:first-child').textContent = "Brecilien";
      }
      //---------------------------------------------------------------------------------------------------------------------


      var chart_check= document.getElementById('pricechart');
      if (chart_check!=null){
        chart_check.remove();
      }
      if(history_checkbox.checked){
      item_history.textContent = "物品歷史";


      const historycanvas = document.createElement("canvas");
      historycanvas.setAttribute('id', 'pricechart');
      document.body.appendChild(historycanvas);

      const chartElement = document.getElementById('pricechart');
      


      const last24Hours = Array.from({ length: history_48Hours.checked? 48: 24 }, (_, i) => {
        const offset = -8; // UTC+8 timezone offset
        const localTimestamp = new Date(Date.now() - (i * 60 * 60 * 1000) + (offset * 60 * 60 * 1000));
        localTimestamp.setMinutes(0);
        localTimestamp.setSeconds(0);
        return localTimestamp.toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });
      });

      const last24HoursLABELS = Array.from({ length: history_48Hours.checked? 48: 24 }, (_, i) => {
        const offset = 0; // UTC+8 timezone offset
        const localTimestamp = new Date(Date.now() - (i * 60 * 60 * 1000) + (offset * 60 * 60 * 1000));
        localTimestamp.setMinutes(0);
        localTimestamp.setSeconds(0);
        return localTimestamp.toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });
      });

      const chartData = {
        labels: last24HoursLABELS,
        datasets: [ 
          {
            label: 'Brecilien - Avg Price',
            name:'5003 - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(145, 75, 175)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Fort Sterling - Avg Price',
            name: 'Fort Sterling - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(225, 225, 225)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Bridgewatch - Avg Price',
            name: 'Bridgewatch - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(255, 226, 160)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Thetford - Avg Price',
            name: 'Thetford - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(200, 130, 200)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Lymhurst - Avg Price',
            name: 'Lymhurst - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(130, 237, 130)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Martlock - Avg Price',
            name: 'Martlock - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(135, 205, 245)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Caerleon - Avg Price',
            name: 'Caerleon - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(140, 55, 55)',
            yAxisID: 'avg_price',
            tension: 0.1
          },
          {
            label: 'Black Market - Avg Price',
            name: 'Black Market - Avg Price',
            data: [],
            fill: false,
            borderColor: 'rgb(30, 30, 30)',
            yAxisID: 'avg_price',
            tension: 0.1
          },{
            label: 'Brecilien - Item Count',
            name: '5003 - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(145, 75, 175)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },{
            label: 'Fort Sterling - Item Count',
            name: 'Fort Sterling - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(225, 225, 225)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Bridgewatch - Item Count',
            name: 'Bridgewatch - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 226, 160)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Thetford - Item Count',
            name: 'Thetford - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(200, 130, 200)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Lymhurst - Item Count',
            name: 'Lymhurst - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(130, 237, 130)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Martlock - Item Count',
            name: 'Martlock - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(135, 205, 245)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Caerleon - Item Count',
            name: 'Caerleon - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(140, 55, 55)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
          {
            label: 'Black Market - Item Count',
            name: 'Black Market - Item Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(30, 30, 30)',
            yAxisID: 'item_count',
            tension: 0.1,
            type: 'bar'
          },
        ]
      };

      last24Hours.forEach((timestamp, index) => {
        data[1].forEach((entry) => {
          const location = entry.location;
          const avgPriceDataset = chartData.datasets.find((dataset) => dataset.name === location + ' - Avg Price');
          const itemCountDataset = chartData.datasets.find((dataset) => dataset.name === location + ' - Item Count');
        
          if (avgPriceDataset && itemCountDataset && entry.data) {
            const dataForTimestamp = entry.data.find((data) => {
              const offset = -8; // UTC+8 timezone offset
              const dataTimestamp = new Date(data.timestamp ).toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });
              return dataTimestamp === timestamp;
            });
        
            if (dataForTimestamp) {
              avgPriceDataset.data[index] = dataForTimestamp.avg_price;
              itemCountDataset.data[index] = dataForTimestamp.item_count;
            }
          }
        });
      });

      const chartConfig1 = {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'History Price Chart'
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Timestamp'
              },
              reverse: true
            }
          }
        }
      };
      
      const chart = new Chart(chartElement, chartConfig1);

      }else{
        item_history.textContent = "";
      }















      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      //End
      const pricesDiv = document.getElementById("prices");
      pricesDiv.innerHTML = "";
    })
        .catch(error => {
          const pricesDiv = document.getElementById("prices");
          //pricesDiv.textContent = "Error fetching data from API.";
          pricesDiv.textContent =pricesDiv;
        });



      }


const fetchDataButton = document.getElementById('fetch-data');
fetchDataButton.addEventListener('click', fetchData);