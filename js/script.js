let map;

function initMap(){
  map = new google.maps.Map(document.getElementById("map"),{
    center:{lat: 14.5794,lng: 121.0359},
    zoom: 8,
  });
}