


function fetchData() {
    const usernameInput = document.getElementById("username");
    const url1 = "https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q="+usernameInput.value;
    const url2 = "https://www.example.com.";
    
    //console.log(url1);
    const playerdatacontainer = document.getElementById('playerData');

    if (playerdatacontainer) {
        document.body.removeChild(playerdatacontainer);
    }

    fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const playerData = data.players.filter(p => p.Name === usernameInput.value)[0];

        //console.log(player);
        const playerdatacontainer = document.createElement('div');
        playerdatacontainer.setAttribute('id', 'playerData');

        //let playerdatacontainer = document.getElementById('playerData');

        const display_playerdata = `<h2>玩家資料</h2>
        <p><strong>玩家名稱:</strong> ${playerData.Name}</p>
        <p><strong>公會名稱:</strong> ${playerData.GuildName}</p>
        <p><strong>擊殺名譽:</strong> ${playerData.KillFame}</p>
        <p><strong>死亡名譽:</strong> ${playerData.DeathFame}</p>
        <p><strong>名譽比例:</strong> ${playerData.FameRatio}</p>
        <p><strong>總擊殺數:</strong> ${playerData.totalKills}</p>
      `;


        playerdatacontainer.innerHTML = display_playerdata;
        document.body.appendChild(playerdatacontainer);
       
    })
    .catch(error => {
        const playerdatacontainer = document.createElement('div');
        playerdatacontainer.setAttribute('id', 'playerData');
        playerdatacontainer.innerHTML = "沒有此玩家";
        document.body.appendChild(playerdatacontainer);
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



