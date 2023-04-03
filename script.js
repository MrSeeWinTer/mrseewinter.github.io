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
      
      const chartConfig = {
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
      
      const chartElement = document.getElementById('chart');
      const chart = new Chart(chartElement, chartConfig);
  })
  .catch(error => console.error(error));