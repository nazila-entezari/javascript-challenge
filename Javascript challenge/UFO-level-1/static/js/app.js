
// from data.js
var tableData = data;


function TableAutoPopulate(data) {
    // getting a refrerence to table body and 
    // Clearing the previous table data
    d3.select("tbody").html("");
    //itterations to add multiple rows
    data.forEach((selection) => {
        //adding single row to tbody 
        var tableRow = d3.select("tbody").append("tr");
        // selecting value from key-value pairs 
        //adding each value as text to a column 
        //with iteraion on a single row columns
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}
//running the function to autopopulate tableData
TableAutoPopulate(tableData);


//creating a function to define the buton click action 
function clicktrigger() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //extractine the value 
    var date = d3.select("#datetime").property("value");
    //filtering the data 
    var filteredDateTime = tableData;
    //according to the chosen date
    if (date) {
        filteredDateTime = filteredDateTime.filter((row) => row.datetime === date);
    }
    //repopulate the table based on the filteredDate
    TableAutoPopulate(filteredDateTime);
}

//calling and event listener on the filter btn
d3.selectAll("#filter-btn").on("click", clicktrigger);