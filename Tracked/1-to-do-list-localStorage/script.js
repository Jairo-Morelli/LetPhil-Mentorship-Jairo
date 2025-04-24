/*17-04-2025 Personal Notes  

Short run down of the this script, 

intially get the input from the task element using the element ID's task.

once you've done that, convert the string back into an array. Using the JSON Object  

The reason this is confusing to read at first is because the logic for retreiving already existing information 

is placed at top, and the logic for saving a task is at the bottom. 

Remember that.  

Just explaining this aspect of the homework, makes it alot easier to understand.

Also it helps to understand that you're creating a to-do list as well. 
*/


//  Function to add a new task
// Get the input field element using its ID "task"
let hasEnded;
function addTask()
{
    const input = document.getElementById("task");
    // A. Checking Immediately if the value of input.value is valid
    if(input.value==="")
    {
        alert("Cannot add empty task");
        return;
    }
    
    // 1. Get the existing tasks from LocalStorage - name variable "tasks"
    // JSON.parse turns the string back into an array
    // If there are no tasks yet, use an empty array []
    let savedTasks = localStorage.getItem("tasks");
    let parsedTasks;
    savedTasks !=null ?  parsedTasks=JSON.parse(savedTasks) : parsedTasks = [];    //Use this now, but you might have to change later

    // B. Checking to see if new input.value is a duplicate of any other saved task
    if(CheckForDuplicates(input.value,parsedTasks)){
        return;
    }
   

    // 2. Push (add) the value typed by the user into the tasks array
    parsedTasks.push(input.value); // use .value to access element input value

    // 3. Convert the updated tasks array into a string and store it in LocalStorage
    // This is required because LocalStorage can only save strings
    localStorage.setItem("tasks", JSON.stringify(parsedTasks));

    // 4. Call the function to display the updated tasks on the screen - name of called function is displayTasks()
    displayTasks();

    // 5. Clear the input field after adding the task
    input.value=""; 
}

function CheckForDuplicates(input_value, parsedTasks)
{
    for(let i = 0; i < parsedTasks.length; i++)
    {
        if(compareStrings(input_value,parsedTasks[i])==true)
        {
            alert("Existing task cannot be added, because it is already a duplicate of an already saved task on application.");
            return true;
        }
    }
    return false;
}

/*
I'll count a duplicate with any piece of array string that has the same characters, 
from the first index of a character to the last index of characters.I will also including
spaces from the first index of a array string with an character til its last index of an array
string. 

I will remove the beginning and ending spaces of a string, and not count those, 
beginning and ending spaces of a string as reasons to decided if this is a 
string or not.
*/
function compareStrings(string1, string2)
{
    const trimmedStr0 =string1.trim();
    const trimmedStr1 =string2.trim();

     if(trimmedStr0===trimmedStr1){
        return true;
     }else{
        return false;
     }
}
/* 
    You have two options: 

    1. You can either create a global variable, that maintains the state of the do-to list. 

    2. or you can create a "local state" and keep passing it onto the the next display task as a 
    temporary variable. 
*/
 
function setHasEnded()
{
    if(hasEnded==undefined || hasEnded ===null)
    {
        hasEnded=false;
    }else{
        return hasEnded
    }
}


// Function displayTasks() to display all tasks from LocalStorage
function displayTasks()
{
//At the beginning of each displayTask, see if we are "create"/"starting" a new list
//Once has ended has been given a false boolean value, it is now up to you to determine, 
//what constitutes as a true hasEnded value.
setHasEnded();

// 1. Get the <ul> element where we will show the list of tasks - name of variable "taskList"
const taskList = document.getElementById("taskList");

// 2. Clear any previous content inside the list so it doesn't repeat
for(let i =taskList.children.length-1; i > -1; i--)
{
    taskList.children[i].remove();
}

// 3. Get the saved tasks from LocalStorage and turn them back into an array
let savedTasks = localStorage.getItem("tasks");
let parsedTasks;
savedTasks !== null ? parsedTasks = JSON.parse(savedTasks) : parsedTasks=[];
   
// 4. Use forEach to loop through the array and display each task
let count=0;                 
parsedTasks.forEach((task)=>{
    count++;                                                             // iterate at the beginning of the loop, so that I can keep
    // 5. Create a new <li> element for each task                       // my corresponding task indexes/locations aligned to their 
    const newItem = document.createElement("li");                      // according location instead of + 1 ahead of its location or -1 
    const deleteBtn= document.createElement("button");                // in its array(which is localStorage.getItem("tasks")).

    deleteBtn.textContent="remove current task";
    deleteBtn.setAttribute("onclick",`removeTask(${count-1})`);                     
    // 6. Set the content of the <li> to show the task and a delete button - use template literal              // I need to link the functionality to remove with the associated list entry                                                                                                                                                                                                         
    newItem.textContent=`${count}. ${task}`;                                                                  // the reason this works because each list item, will have its own associated
    // 7. Add the <li> to the task list                                                                      // removeTask(1), removeTask(2), because I am creating literal html button elements
    taskList.insertAdjacentElement("beforeend",newItem);                                                    // with there own specific onclick() attributes
    newItem.insertAdjacentElement("beforeend",deleteBtn);
});
// 4a. After refreshing the list, check to see if there are any tasks left,
// and if the hasEnded flag is true as well. 
// If true congratulate the users.
if(parsedTasks.length===0 && hasEnded===true)
    {
        alert("There are no more tasks left, congratulations, you've been very productive");
        return;
    }
}

// Function to remove a task from the list - function name removeTask()
function removeTask(index)
{
// 1. Get the current list of tasks from LocalStorage and turn it into an array
const currentTask= localStorage.getItem("tasks");
let parsedTasks;
currentTask !==null ? parsedTasks = JSON.parse(currentTask) : parsedTasks = [];

// 2. Remove 1 task from the array at the given index - use splice method, turn string into an array though.
parsedTasks.splice(index,1);

// 3. Save the updated tasks back into LocalStorage
localStorage.setItem("tasks",JSON.stringify(parsedTasks));
// 3a. Check to see if you've removed all task, after removing a task
// if you've removed all the tasks from local storage, set hasEnded variable 
// to true.
if(parsedTasks.length===0 && hasEnded===false)
{
    hasEnded=true;
}

// 4. Update the display so the removed task disappears from the screen
displayTasks();

// 5. Automatically run displayTasks() when the page loads
window.addEventListener("load",(event)=>{
    displayTasks();
});
}
//Regradless DisplayTask function gets called, when script.js is ran, 
//because you have to display the saved tasked to the user.
displayTasks();

