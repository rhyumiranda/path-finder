let map,directionsService,directionsRenderer;
let originAC,destinationAC;

function initMap(){
  map = new google.maps.Map(document.getElementById("map"),{
    center:{lat: 14.5794,lng: 121.0359},
    zoom: 8,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  
  originAC = new google.maps.places.Autocomplete(
    document.getElementById('origin')
  );

  destinationAC = new google.maps.places.Autocomplete(
    document.getElementById('destination')
  );
}