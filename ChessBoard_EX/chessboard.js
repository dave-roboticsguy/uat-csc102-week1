
// create a size variable, set it equal to 8
let size = 8;
// create am empty string result
let result = "";

// loop to create the rows
let row = 1;
while (row <= size) {
    // loop to create the columns
    let column = 1;
    while (column <= size) {
        // if column plus size is even
        if ((column + row) % 2 === 0) {
            // add an empty space
            result += " ";
            // else
        } else {
            // add an octothorpe #
            result += "#";
        }
        column += 1;
    }
    // add a newline sumbol to end current row
    result += "\n";
    row += 1;
}

// log result to the console
console.log(result);