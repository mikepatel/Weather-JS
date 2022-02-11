window.addEventListener("load", function (){
    let longitude;
    let latitude;

    if(this.navigator.geolocation){
        this.navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude
            latitude = position.coords.latitude
        });
    }
    else {
        // error getting location OR user denied location access
    }
});
