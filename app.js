mapboxgl.accessToken = 'pk.eyJ1IjoieXVraGFuIiwiYSI6ImNra2pjdDY0NDAzMXAydnBlb2R3bWp5aHoifQ.Eyn7yRjo0xoMwyTXwkrNNQ';
  
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})




function successLocation(position){
	console.log(position)
	setUpMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation ()  {
	setUpMap(20.0000,78.0000)
}


function setUpMap(center){
	var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom:9,
  });
	map.addControl(new mapboxgl.NavigationControl());

	map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);

}

   

