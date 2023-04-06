
function activateScript() {
const url = 'https://east.albion-online-data.com/api/v2/stats/Gold?count=24'; // Replace with the URL of your JSON file



fetch(url)
  .then(response => response.json())
  .then(data => {
    const chartData = {
        labels: data.map(entry => {
            const utcDate = new Date(entry.timestamp);
            const offset = 8; // UTC+8 timezone offset
            const localTimestamp = new Date(utcDate.getTime() + (offset * 60 * 60 * 1000));
            return localTimestamp.toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });}),
        datasets: [{
          label: 'Gold Price',
          data: data.map(entry => entry.price), // An array of values for the Y axis
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
      
      const chartConfig1 = {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Price Chart'
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Timestamp'
              },
              reverse: true
            },
            y: {
              title: {
                display: true,
                text: 'Price'
              }
            }
          }
        }
      };
      
      const chartElement = document.getElementById('chart_for_gold');
      const chart = new Chart(chartElement, chartConfig1);
  })
  .catch(error => console.error(error));
}

document.getElementById('activate-script').addEventListener('click', activateScript);

let chart; 
function getSelectedValues() {
  const itemName = document.getElementById('item-name').value;
  const itemTier = document.getElementById('item-tier').value;
  const itemQuality = document.getElementById('item-quality').value;
  return { itemName, itemTier, itemQuality };
}

function fetchData() {
  const { itemName, itemTier, itemQuality } = getSelectedValues();

  const url = `https://east.albion-online-data.com/api/v2/stats/History/${itemTier}_${itemName}?locations=Fort%20Sterling&date=2023-04-01T00%3A00%3A00&time-scale=1`; // Replace with the URL of your API endpoint

  fetch(url)
          .then(response => response.json())
          .then(data => {
            
            chart_bool = true;
            const chartData = {
              labels: data[0].data.map(entry => {
                const utcDate = new Date(entry.timestamp);
                const offset = 8+12; // UTC+8 timezone offset
                const localTimestamp = new Date(utcDate.getTime() + (offset * 60 * 60 * 1000));
                return localTimestamp.toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });}),
            datasets: [
                {
                  label: 'Item Count',
                  data: data[0].data.map(entry => entry.item_count),
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1,
                  yAxisID: 'item-count'
                },
                {
                  label: 'Average Price',
                  data: data[0].data.map(entry => entry.avg_price),
                  fill: false,
                  borderColor: 'rgb(255, 99, 132)',
                  tension: 0.1,
                  yAxisID: 'average-price'
                }
              ]
            };

            const chartConfig2 = {
              type: 'line',
              data: chartData,
              options: {
                scales: {
                  y: [
                    {
                      type: 'linear',
                      display: true,
                      position: 'left',
                      id: 'item-count',
                      label: 'Item Count'
                    },
                    {
                      type: 'linear',
                      display: true,
                      position: 'right',
                      id: 'average-price',
                      label: 'Average Price'
                    }
                  ]
                }
              }
            };

            if (chart) {
              chart.destroy();
              const chartElement = document.getElementById('chart_for_item');
              chart = new Chart(chartElement, chartConfig2);
            } else {
              const chartElement = document.getElementById('chart_for_item');
              chart = new Chart(chartElement, chartConfig2);
            }
            
          })
          .catch(error => console.error(error));
      }


const fetchDataButton = document.getElementById('fetch-data');
fetchDataButton.addEventListener('click', fetchData);