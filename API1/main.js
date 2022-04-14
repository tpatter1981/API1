const x = document.getElementById("touch");

function iAmHere(){
    try{

  
    navigator.geolocation.getCurrentPosition(showPosition);

} catch {
    x.innerHTML = err;
    }
}

function showPosition(positon){


x.innerHTML = "Latitude:" + positon.coords.latitude + 
"<br>Longitude:" + positon.coords.longitude;
    }

