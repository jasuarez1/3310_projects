//To Do
//Step 1: Have a way to set up the grid and the columns for each of the cells 
//Step 2: Allow the user to have the ability to interact with each of the cells(make alive or dead)
//Step 3: Create a method in which each of the cells gets tested to see if the cell will be alive or dead in the next iteration 
//Step 4: Save the new values into another 2d array so that we don't have to change cell by cell but rather all at once 
//Step 5: Create a control to have a runtime and a clear time(Start and stop)

//Rules for the game:
//Rule One: Any live cell with two or three neighbors survives.
//Rule two: Any dead cell with three live neighbors becomes a live cell.
//Rule three: All other live cells die in the next generation. Similarly, all other dead cells stay dead.

var rows = 12;                                                  // Number of rows and columns that the table will be composed of 
var columns = 20;

var active = false;                                              //Determines if the program is running
var grid_reg = new Array(rows);                                  // This will be the grid currently prseneted on the screen
var grid_next = new Array(rows);                                 // Will be the grid that is Prseneted next on the screen 


var timer;
var reproductionTime = 100;


function Setup_grid()
 {                                           //this makes a 2d array using the # or rows to generate the number of needed columns  
    for (var i = 0; i < rows; i++) 
    {
        
        grid_reg[i] = new Array(columns);
        grid_next[i] = new Array(columns);
    }
}

function ResetGrid() 
{                                          //resets the grid to zero after the 
    for (var i = 0; i < rows; i++)
     {
        for (var j = 0; j < columns; j++) 
        {
            grid_reg[i][j] = 0;
            grid_next[i][j] = 0;
        }
    }
}

function NextGrid()                                           //Initializes the next grid that should be displayed after the start screen 
{
    for (var i = 0; i < rows; i++)
     {
        for (var j = 0; j < columns; j++) 
        {
            grid_reg[i][j] = grid_next[i][j];
            grid_next[i][j] = 0;
        }
    }
}

function initialize()
 {
    Table_Creation();                                               // This creates a image on the html side 
    Setup_grid();                                                 //This is to create a static grid upon boot
    ResetGrid();                                                 // This is to reset to a static grid upon table creation
    setupControlButtons();                                       // Controls the start of the code, and the clearing of the graph
}


function Table_Creation()
 {
    var gridContainer = document.getElementById('gridContainer'); //This grabs the elements from the css and html doc 
    var table = document.createElement("table");                  //this grabs the elements of the table from the css document 
    
    for (var i = 0; i < rows; i++)
     {
        var tr = document.createElement("tr");                   // This is a command found in html that is in charge of making new rows, javascript allows you to assign a variable to control its functionality 
        for (var j = 0; j < columns; j++) 
        {//
            var cell = document.createElement("td");            // this is found in the css that has two classes alive and dead, so we first assign a variable to control the object 
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");                 // we will start off with the dead class 
            cell.onclick = cellClickHandler;                    // when the click is executed the 
            tr.appendChild(cell);                               // the tr then takes the css charctertisict and assigns it to reach row
        }
        table.appendChild(tr);                                  // this process is done again this the table and each of the rows
    }
    gridContainer.appendChild(table);
    }

    function cellClickHandler()
     {
        var rowcol = this.id.split("_");                        // this seperates the row and column into seperate indexes, 
        var row = rowcol[0];                                    // the first value of the new array will be the value of the row
        var col = rowcol[1];                                    // The next one would be the index value
        
        var classes = this.getAttribute("class");           
        if(classes.indexOf("alive") > -1)
         {
            this.setAttribute("class", "dead");
            grid_reg[row][col] = 0;
        } else 
        {
            this.setAttribute("class", "alive");
            grid_reg[row][col] = 1;
        }
        
    }

    function update() {
        for (var i = 0; i < rows; i++) 
        {
            for (var j = 0; j < columns; j++) 
            {
                var cell = document.getElementById(i + "_" + j);
                if (grid_reg[i][j] == 0) {
                    cell.setAttribute("class", "dead");
                } else {
                    cell.setAttribute("class", "alive");
                }
            }
        }
    }

function setupControlButtons()
 {
    // button to start
    var startButton = document.getElementById('start'); //this represents the html name thus assgining the code to a button 
    startButton.onclick = startButtonHandler;
}



// start/pause/continue the game
function startButtonHandler()
 {
    if (active) 
    {
        console.log("Pause the game");
        active = false;
        this.innerHTML = "Play";
        clearTimeout(timer);
    } else
     {
        console.log("Continue the game");
        active = true;
        this.innerHTML = "Pause";
        play();
    }
}

// run the life game
function play() 
{
    CalNextGen();
    if (active) {
        timer = setTimeout(play, reproductionTime);
    }
}

function CalNextGen() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            applyRules(i, j);
        }
    }
    NextGrid();
    update();
}

function applyRules(row, col) 
{
    var alivecount = cellcounter(row,col);// Number of live cells next to the specific index
    if (grid_reg[row][col] == 1) 
    {
        if (alivecount < 2) 
        {
            grid_next[row][col] = 0;
        } else if (alivecount == 2 || alivecount == 3) 
        {
            grid_next[row][col] = 1;
        } else if (alivecount > 3) 
        {
            grid_next[row][col] = 0;
        }
    } else if (grid_reg[row][col] == 0) 
    {
            if (alivecount == 3) 
            {
                grid_next[row][col] = 1;
            }
        }
    }
    
function cellcounter(row, col) 
{
    var count = 0;
    if (row-1 >= 0)
     {                               //Checks to see if subtracting the value is beyond the limit of the rows                              
        if (grid_reg[row-1][col] == 1) count++;     //directly above
    }
    if (row-1 >= 0 && col>= 0)
     {                 
        if (grid_reg[row-1][col-1] == 1) count++;// diagnol to the left up
    }
    if (row-1 >= 0 && col+1 < columns)
     {       
        if (grid_reg[row-1][col+1] == 1) count++;//diagnol to the right up
    }
    if (col-1 >= 0)
     {                          
        if (grid_reg[row][col-1] == 1) count++;// left
    }
    if (col+1 < columns)
     {                     
        if (grid_reg[row][col+1] == 1) count++;// right
    }
    if (row+1 < rows)
     {                           
        if (grid_reg[row+1][col] == 1) count++;//down
    }
    if (row+1 < rows && col-1 >= 0) 
    {       
        if (grid_reg[row+1][col-1] == 1) count++; //diagnol to the left 
    }
    if (row+1 < rows && col+1 <  columns)
     { 
        if (grid_reg[row+1][col+1] == 1) count++;//diagnol to the right 
    }
    return count;
}
// Start everything
window.onload = initialize;