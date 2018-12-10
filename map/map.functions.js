// Show a map based on browser geolocation

var x = document.getElementsByClassName("map")[0];

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getLocationViaWatch() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapholder = document.getElementsByClassName("map")[0];
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }

    var map = new google.maps.Map(document.getElementsByClassName("map")[0], myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "<p>User denied the request for Geolocation.</p>";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "<p>Location information is unavailable.</p>";
            break;
        case error.TIMEOUT:
            x.innerHTML = "<p>The request to get user location timed out.</p>";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "<p>An unknown error occurred.</p>";
            break;
    }
}
