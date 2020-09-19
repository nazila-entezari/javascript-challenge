// from data.js
var tableData = data;


function TableAutoPopulate(data) {
    d3.select("tbody").html("");
    data.forEach((selection) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}

TableAutoPopulate(tableData);


function clicktrigger() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filteredDateTime = tableData;
    if (date) {
        filteredDateTime = filteredDateTime.filter((row) => row.datetime === date);
    }
    TableAutoPopulate(filteredDateTime);
}

d3.selectAll("#filter-btn").on("click", clicktrigger);