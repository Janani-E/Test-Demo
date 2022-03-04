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
for (var i=0; i<data.length; i++){
     console.log(`name: ${data[i].name} region: ${data[i].region} sub region: ${data[i].subregion} population: ${data[i].population}`);
    }
}