//console.log("Janani");
//step 01: Create an XHR object
var request = new XMLHttpRequest();
// step 02: request a connection which data you need to receive
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// STEP 03: Sending a connection request
request.send();
// step 04: once data successfully received 
// from server 200 status
request.onload=function(){
var data = JSON.parse(request.response);
console.log(data);
//console.log(data[0].capital);
//console.log(data[1].currencies);
//to print the list of 250 country names
// for (var i=0; i<data.length; i++){
//     console.log(data[i].name);    
// }
// //print country name along with their capitals
// for (var i=0; i<data.length; i++){
// console.log(`name: ${data[i].name} capital: ${data[i].capital}`);

// }
//print the first 10 countries flag in the console.
// for (var i=0; i<10; i++){
//     console.log(data[i].flag);
// }
//print all the countries name and log and latu values
//exp output name: afga lat: 32 log: 33
//for (var i=0; i<data.length; i++){
//    console.log(`AuthorName: ${data.authors[0]} Book: ${data.name} ISBN: ${data.isbn} No.of Pg: ${data.numberOfPages} Publisher: ${data.publisher}}`);

var res = data.filter((element) => element.region == "Asia");
//var countryName = res.map(element => element.name);
//console.log(res);
//console.log(countryName);
// for (var i=0; i< res.length; i++)
// {
//     console.log(res[i].name)
// }
var pop = res.map(element => element.population);
//console.log(pop);
var popSum = pop.reduce((acc,cv) => acc + cv);
console.log(popSum);
}