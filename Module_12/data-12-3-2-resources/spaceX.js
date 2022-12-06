// Call to SpaceX

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(); 


// Pull only VAFB info

 d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// Call to SpaceX and Pull VAFB full name

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Access the latitude of VAFB

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// Using map() to print only the latitude and longitude coordinates

d3.json(url).then(receivedData => console.log(
    receivedData.map(latLong => latLong.location.latitude + ':' + latLong.location.longitude)));

// Retrieving data from an external data file instead of a web API

d3.json("samples.json").then(function(data){
    console.log("hello");

});
