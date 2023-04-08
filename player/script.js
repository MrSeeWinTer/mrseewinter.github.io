


function fetchData() {
    const usernameInput = document.getElementById("username");
    const url1 = "https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=SeeWinTer";
    console.log(usernameInput.value);
    
    fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}


const fetchDataButton = document.getElementById('fetch-data');
fetchDataButton.addEventListener('click', fetchData);



