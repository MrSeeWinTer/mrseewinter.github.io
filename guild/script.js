


function fetchData() {
    const guildnameInput = document.getElementById("guildname");
    const url1 = "https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q="+guildnameInput.value;
    const url2 = "https://www.example.com.";
    
    const guilddatacontainer = document.getElementById('guildData');

    if (guilddatacontainer) {
        document.body.removeChild(guilddatacontainer);
    }

    //console.log(url1);
    
    fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const guildData = data.guilds.filter(p => p.Name === guildnameInput.value)[0];

        //console.log(player);
        const guilddatacontainer = document.createElement('div');
        guilddatacontainer.setAttribute('id', 'guildData');

        
        const display_guilddata = `<h2>公會資料</h2>
        <p><strong>公會名稱:</strong> ${guildData.Name}</p>
        <p><strong>同盟名稱:</strong> ${guildData.AllianceName}</p>
        <p><strong>擊殺名譽:</strong> ${guildData.KillFame}</p>
        <p><strong>死亡名譽:</strong> ${guildData.DeathFame}</p>
        `;


       guilddatacontainer.innerHTML = display_guilddata;
       document.body.appendChild(guilddatacontainer);
       
    })
    .catch(error => {
        const guilddatacontainer = document.createElement('div');
        guilddatacontainer.setAttribute('id', 'guildData');
        guilddatacontainer.innerHTML = "沒有此公會";
        document.body.appendChild(guilddatacontainer);
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



