console.log(cityGrowths);

// sort and select cities by population growth
// use sort() to sort population by increase 

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities);

// use slice() to select only the top 5

var topFiveCities = sortedCities.slice(0,5);

console.log(topFiveCities);

// create arrays of city names and growth figures

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames)
console.log(topFiveCityGrowths)

// create a bar chart with the arrays

var trace = {
     x: topFiveCityNames,
     y: topFiveCityGrowths,
     type: "bar"

 };

 var data = [trace];
 var layout = {
     title: "Most Rapidly Growing Cities",
     xaxis: {title: "City"},
     yaxis: {title: "Population Growth, 2016-2017"}

 };

// Skill Drill Top 7 Cities by Population

var sortedPops = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

console.log(sortedPops);

// use slice() to select only Top 7 Cities by Population

var bigSevenCities = sortedPops.slice(0,7);

console.log(bigSevenCities);

// create arrays of city names and population figures

var bigSevenCityNames = bigSevenCities.map(city => city.City);
var bigSevenCityPops = cityGrowths.map(city => parseInt(city.population));

console.log(bigSevenCityNames)
console.log(bigSevenCityPops)

// create a bar chart with the arrays

var trace = {
    x: bigSevenCityNames,
    y: bigSevenCityPops,
    type: "bar"

};

var data = [trace];
var layout = {
    title: "Largest Cities by Population",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}

};

Plotly.newPlot("bar-plot", data, layout);