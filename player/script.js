const input = document.getElementById('username');

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});


function fetchData() {
    const usernameInput = document.getElementById("username");
    const url1 = "https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q="+usernameInput.value;
    //const url2 = "https://www.example.com.";
    
    //console.log(url1);


    const playerdatacontainer = document.getElementById('playerList');

    if (playerdatacontainer) {
        document.body.removeChild(playerdatacontainer);
    }
    const playerstyle = document.getElementById('playerstyle');
    if (playerstyle) {
        document.body.removeChild(playerstyle);
    }
    fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        //OLD
        /*
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
        */

        const playerList = document.createElement('ul');
        playerList.id = 'playerList';
        playerList.className = 'playerstyle';

        const Player = document.createElement('li');
        Player.textContent = 'Player:';
        playerList.appendChild(Player);

        data.players.forEach(player => {
            const li = document.createElement('li');
            li.dataset.userId = player.Id;
            //li.textContent =  player.Name;

            const name = document.createElement('span');
            name.textContent = player.Name;
            name.style.cursor = 'pointer';
            name.addEventListener('click', () => {
              // Fetch user data using user ID
              fetch('https://gameinfo-sgp.albiononline.com/api/gameinfo/players/' + player.Id)
                .then(response => response.json())
                .then(data => {
                    console.log('User data:', data);

                    const playerstyle = document.getElementById('playerstyle');
                    if (playerstyle) {
                        document.body.removeChild(playerstyle);
                    }

                    const playerdata = document.createElement('div');
                    playerdata.className = 'playerstyle';
                    playerdata.id = 'playerstyle';
                    //playerdata.innerHTML=data.Name;

                    ////////////////////////AVATAR/////////////////////////////
                    const body = document.querySelector('body');
                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');
                    body.appendChild(imageContainer);
                    /*
                    const imageUrl1 = '../avatars/01.png';
                    const imageUrl2 = '../avatars/ring/01.png';


                    const image1 = document.createElement('img');
                    image1.src = imageUrl1;
                    image1.classList.add('image1');
                    image1.style.backgroundImage = `url(${imageUrl2})`;
                    imageContainer.appendChild(image1);
                    */
                    ////////////////////////NAME/////////////////////////////
                    const player_name = document.createElement('div');
                    player_name.className ="player-info";

                    const display_playerdata = `
                    <h2><p>玩家名稱: ${data.Name}</p>
                    <p>公會名稱: ${data.GuildName}</p>
                    <p>最後更新: ${data.LifetimeStatistics.Timestamp}</p></h2>
                    `;
                    player_name.innerHTML = display_playerdata;
                    imageContainer.appendChild(player_name);
                    playerdata.appendChild(imageContainer);
                    
                    //////////////////PVP////////////////////////
                    
                    const pvp_Container = document.createElement('div');
                    pvp_Container.id = "pvp";
                    
                    const pvp_text = document.createElement('div');
                    pvp_text.id="pvp_text";
                    pvp_text.innerHTML="PVP Kill Fame/Death Fame";

                    const progress = document.createElement('progress');
                    progress.id = 'bar';
                    progress.value = data.KillFame;
                    progress.max = data.KillFame + data.DeathFame;

                    const middle = document.createElement('div');
                    middle.classList.add('middle');
                    k_d = data.FameRatio*100;
                    middle.textContent = `${data.KillFame}/${data.DeathFame} - ${k_d}% `;

                    pvp_Container.appendChild(pvp_text);
                    pvp_Container.appendChild(progress);
                    pvp_Container.appendChild(middle);

                    playerdata.appendChild(pvp_Container);

                    ///////////////////PVE///////////////////////////
                    const pve_Container = document.createElement('div');
                    pve_Container.id = "pve";

                    const pve_text = document.createElement('div');
                    pve_text.id="pve_text";
                    pve_text.innerHTML="PVE Fame";
                    pve_Container.appendChild(pve_text);

                    const total = data.LifetimeStatistics.PvE["Total"];
                    const progressBar = document.createElement('div');
                    progressBar.classList.add('progress-bar');
                    pve_Container.appendChild(progressBar);
                    
                    for (const item of Object.keys(data.LifetimeStatistics.PvE)) {
                      if (item !== "Total") {
                        const value = data.LifetimeStatistics.PvE[item];
                        const percentage = (value / total) * 100;
                    
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('item');
                        itemElement.classList.add(item.toLowerCase().replace(/\s/g, '-'));
                        itemElement.style.width = `${percentage}%`;
                        
                        progressBar.appendChild(itemElement);
                      }
                    }
                    const pve_stat = document.createElement('div');
                    pve_stat.className ="pve_stat";
                    const pve_stat_data = `
                    <a class="royal_word">Royal: ${data.LifetimeStatistics.PvE.Royal}</a>
                    <a class="outlands_word">Outlands: ${data.LifetimeStatistics.PvE.Outlands}</a>
                    <a class="avalon_word">Avalon: ${data.LifetimeStatistics.PvE.Avalon}</a>
                    <a class="hellgate_word">Hellgate: ${data.LifetimeStatistics.PvE.Hellgate}</a>
                    <a class="corrupteddungeon_word">CorruptedDungeon: ${data.LifetimeStatistics.PvE.CorruptedDungeon}</a>
                    <a class="mists_word">Mists: ${data.LifetimeStatistics.PvE.Mists}</a>
                    <a class="total_word">Total: ${data.LifetimeStatistics.PvE.Total}</a>
                    `;
                    pve_stat.innerHTML = pve_stat_data;
                    pve_Container.appendChild(pve_stat);
                    
                    playerdata.appendChild(pve_Container);
                    //////////////GATHER/////////////////
                    
                    const gather_Container = document.createElement('div');
                    gather_Container.id = "gather";

                    const gather_text = document.createElement('div');
                    gather_text.id="gather_text";
                    gather_text.innerHTML="Gathering Fame";
                    gather_Container.appendChild(gather_text);

                    const gather_total = data.LifetimeStatistics.Gathering.All["Total"];
                    const gather_progressBar = document.createElement('div');
                    gather_progressBar.classList.add('gather_progress-bar');
                    gather_Container.appendChild(gather_progressBar);
                    
                    for (const item of Object.keys(data.LifetimeStatistics.Gathering)) {
                      if (item !== "All") {
                        const value = data.LifetimeStatistics.Gathering[item]["Total"];
                        const percentage = (value / gather_total) * 100;
                    
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('item');
                        itemElement.classList.add(item.toLowerCase().replace(/\s/g, '-'));
                        itemElement.style.width = `${percentage}%`;
                        
                        gather_progressBar.appendChild(itemElement);
                      }
                    }
                    const gather_stat = document.createElement('div');
                    gather_stat.className ="pve_stat";
                    const gather_stat_data = `
                    <a class="fiber_word">Fiber: ${data.LifetimeStatistics.Gathering.Fiber["Total"]}</a>
                    <a class="hide_word">Hide: ${data.LifetimeStatistics.Gathering.Hide["Total"]}</a>
                    <a class="ore_word">Ore: ${data.LifetimeStatistics.Gathering.Ore["Total"]}</a>
                    <a class="rock_word">Rock: ${data.LifetimeStatistics.Gathering.Rock["Total"]}</a>
                    <a class="wood_word">Wood: ${data.LifetimeStatistics.Gathering.Wood["Total"]}</a>
                    `;
                    gather_stat.innerHTML = gather_stat_data;
                    gather_Container.appendChild(gather_stat);
                    
                    playerdata.appendChild(gather_Container);


                    document.body.appendChild(playerdata);
                })
                .catch(error => {
                  console.error('Error fetching user data:', error);
                });
            });

            li.appendChild(name);
            playerList.appendChild(li);
        });
        playerList.appendChild( br = document.createElement('br'));
        const Guild = document.createElement('li');
        Guild.textContent = 'Guild:';
        playerList.appendChild(Guild);

        data.guilds.forEach(guild => {
            const li = document.createElement('li');
            li.dataset.guildId = guild.Id;
            //li.textContent =  guild.Name;

            const name = document.createElement('span');
            name.textContent = guild.Name;
            name.style.cursor = 'pointer';
            name.addEventListener('click', () => {
              // Fetch user data using user ID
              fetch('https://gameinfo-sgp.albiononline.com/api/gameinfo/guilds/' + guild.Id)
                .then(response => response.json())
                .then(data => {
                  console.log('Guild data:', data);
                  const guildstyle = document.getElementById('guildstyle');
                  if (guildstyle) {
                      document.body.removeChild(guildstyle);
                  }

                  const guilddata = document.createElement('div');
                  guilddata.className = 'guildstyle';
                  guilddata.id = 'guildstyle';
                  ////////////////////////AVATAR/////////////////////////////
                  const body = document.querySelector('body');
                  
                  const imageContainer = document.createElement('div');
                  imageContainer.classList.add('image-container');
                  body.appendChild(imageContainer);
                  /*
                  const imageUrl1 = '../avatars/01.png';
                  const imageUrl2 = '../avatars/ring/01.png';

                  const image1 = document.createElement('img');
                  image1.src = imageUrl1;
                  image1.classList.add('image1');
                  image1.style.backgroundImage = `url(${imageUrl2})`;
                  imageContainer.appendChild(image1);
                  */
                  ////////////////////////AVATAR/////////////////////////////
                  const guild_name = document.createElement('div');
                  guild_name.className ="guild-info";

                  const display_guilddata = `
                  <h2><p>公會名稱: ${data.Name}</p>
                  <p>創立者: ${data.FounderName}</p>
                  <p>創立日: ${data.Founded}</p>
                  <p>成員數: ${data.MemberCount}</p></h2>


                  `;
                  guild_name.innerHTML = display_guilddata;
                  imageContainer.appendChild(guild_name);
                  guilddata.appendChild(imageContainer);

                  guilddata.appendChild(imageContainer);
                  ///////////////////////////////////////////////

                  





                  document.body.appendChild(guilddata);
                })
                .catch(error => {
                  console.error('Error fetching user data:', error);
                });
            });

            li.appendChild(name);
            playerList.appendChild(li);
        });
        
        //playerdatacontainer.innerHTML = display_playerdata;
        document.body.appendChild(playerList);
       
    })
    .catch(error => {
        const playerdatacontainer = document.createElement('div');
        playerdatacontainer.setAttribute('id', 'playerList');
        playerdatacontainer.innerHTML = "目前此功能需要安裝CORS Unblock https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino";
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



