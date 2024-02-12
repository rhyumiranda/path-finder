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

function calcTravel(){
  var userOrigin = document.getElementById('origin').value;
  var userDestination = document.getElementById('destination').value;

  let request = {
    origin: userOrigin,
    destination: userDestination,
    // travelMode: "DRIVING",
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };

  directionsService.route(request,function(result,status){
    if(status == "OK"){
      directionsRenderer.setDirections(result);
    }

    let originDisplay = document.getElementById('origin-display');
    let destinationDisplay = document.getElementById('destination-display');
    let timeTtlDisplay = document.getElementById('time-total');
    let distanceTtlDisplay = document.getElementById('distance-total');
    
    originDisplay.textContent = document.getElementById('origin').value;
    destinationDisplay.textContent = document.getElementById('destination').value;
    timeTtlDisplay.textContent = result.routes[0].legs[0].duration.text;
    distanceTtlDisplay.textContent = result.routes[0].legs[0].distance.text;
  });
}