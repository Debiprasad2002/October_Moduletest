const ipAdd=document.getElementsByClassName("ip")[0];
const startBtn=document.getElementById("get-started");

var location;

//fetch ip address
async function fetchIP(){
    try{
        const response= await fetch(`https://api.ipify.org/?format=json`)
        const data=await response.json();
        // console.log(data);
        ipAdd.innerText=data.ip;
        storeIp(data);
    }
    catch(error){
        console.log(error);
    }

}

fetchIP();


startBtn.addEventListener("click", async()=>{
    await navigator.geolocation.getCurrentPosition(sucess,faild)
    // window.location.href="../main-page/main.html"
    
})


function storeIp(data){
    localStorage.setItem("ip", data.ip);

}

function sucess(position){
    console.log(position);
    localStorage.setItem("lat", position.coords.latitude)
    localStorage.setItem("long", position.coords.longitude)
    window.location.href="./main.html"
   
}

function faild(){
    alert("give your loacation access")
}