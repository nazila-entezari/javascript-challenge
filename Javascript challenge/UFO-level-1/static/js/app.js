// from data.js
var tableData = data;


// defining the function to get the json object size
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
// Get the size of an object
var size = Object.size(tableData);
console.log(size)


function myCreateFunction() {
  var table = document.getElementById("ufo-table");
  var row = table.insertRow(1);
  var date=row.insertCell(0);
  var city=row.insertCell(1);
  var state=row.insertCell(2);
  var country=row.insertCell(3);
  var shape=row.insertCell(4);
  var duration=row.insertCell(5);
  var comments=row.insertCell(6);
  
  date.innerHTML = cell1;
  city.innerHTML = cell2;
  state.innerHTML = cell3;
  country.innerHTML = cell4;
  shape.innerHTML = cell5;
  duration.innerHTML = cell6;
  comments.innerHTML = cell7;
}

for (var i=0; i<size;i++){
	
var cell1= tableData[i].datetime;
var cell2 = tableData[i].city;
var cell3 = tableData[i].state;
var cell4 = tableData[i].country;
var cell5 = tableData[i].shape;
var cell6 = tableData[i].duration;
var cell7 = tableData[i].comments;

myCreateFunction()
};



// * Use a date form in your HTML document

 // and write JavaScript code that will listen 
 // for events and search through the `date/time` column 
 // to find rows that match user input.

filter-btn.addEventListener('click', Date=>Date.filter(datetime===input))






// ### Level 2: Multiple Search Categories (Optional)

// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`