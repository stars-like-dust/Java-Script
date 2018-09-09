
// from data.js
var tableData = data;

// YOUR CODE HERE!

//Put the tbody into a variable

var tbody = d3.select('tbody');


//loop that appends to the data to the console
//data.forEach(function(theDate) {
    // console.log(theDate);
    //var row = tbody.append("tr");
   // });

// loop that appends to the console and the html
function buildTable(data){
    // This clears out existing data
    tbody.html("");
    data.forEach(function(theDate) {
        console.log(theDate);
        var row = tbody.append("tr");
        Object.entries(theDate).forEach(function([key, value]) {
        console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
        var cell = tbody.append("td");
        cell.text(value);
        });
       });
}


function handleSearch() {

     // Disable default function of bttn
     d3.event.preventDefault();
   
     //Select user input 
    var userInput = d3.select('#datetime').property('value');

    let filteredData = tableData;

    if (userInput){
        filteredData = filteredData.filter(row => row.datetime === userInput);
    
    }

    buildTable(filteredData);

}

d3.selectAll('#filter-btn').on('click', handleSearch)
buildTable(tableData);


    //Put filter bttn in a variabe
   // var filterBttn = d3.select('#filter-btn');

    //Listen for the  'click' and initialize function

    //filterBttn.on('click', function() {

    // Disable default function of bttn
    //d3.filterBttn.preventDefault();

    //Select user input 
    //var userInput = d3.slect('#datetime');

    //Grab the user's input
    //var userInput2 = userInput.property('value');

    //filter the data
    //var dates = data.filter(data => data.datetime === userInput2);

    //display filtered data in console
    //console.log(dates)
//}
//)



