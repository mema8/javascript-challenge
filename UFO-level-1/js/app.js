// from data.js
var tableData = data;

// YOUR CODE HERE!

//table body
var tabody = d3.select('tabody');

function buildTable(data) {
    tabody.html('');

    //table row && table body     
    // using the filter()function  
    data.forEach((rowData) => {
        var row = tabody.append('tr');
        Object.values(rowData).forEach((value) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });
};

 
// reference the button1 
var button1 = d3.select('#filter-btn');

// reference the userr_input field 
var userrInput = d3.select('.form-control');

// click
function handleClick() {
    
// prevent the page 
    d3.event.preventDefault();

    var Cdate = d3.select('#datetime').property('value'); 
    let filteredData = tableData; 

    if (Cdate) {
        filteredData = filteredData.filter(row => row.datetime === Cdate);
        };
    buildTable(filteredData);
}

d3.selectAll('#filter-btn').on('click', handleClick);
buildTable(tableData);