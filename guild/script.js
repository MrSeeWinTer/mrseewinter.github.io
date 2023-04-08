


function fetchData() {
    const usernameInput = document.getElementById("username");
    const url1 = "https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=SeeWinTer.";
    const url2 = "https://www.example.com.";
    
    console.log(usernameInput.value);
    
    fetch(url2,{headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://www.example.com",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }},)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

    /*
    $.ajax({
        url: 'https://gameinfo-sgp.albiononline.com/api/gameinfo/',
        type: 'get',
        dataType: 'jsonp',  // 请求方式为jsonp
        jsonpCallback: "onBack",    // 自定义回调函数名
        data: {},
        success: function(data) {
            // Do something with the data
            console.log(data);
          }
    });*/
    

}


const fetchDataButton = document.getElementById('fetch-data');
fetchDataButton.addEventListener('click', fetchData);



