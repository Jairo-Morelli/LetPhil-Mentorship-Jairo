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


function addTask()
{
    const input = document.getElementById("task");
    // 1. Get the existing tasks from LocalStorage - name variable "tasks"
    // JSON.parse turns the string back into an array
    // If there are no tasks yet, use an empty array []
    let savedTasks = localStorage.getItem("tasks");
    let parsedTasks;
    savedTasks !=null ?  parsedTasks=JSON.parse(savedTasks) : parsedTasks = [];    //Use this now, but you might have to change later
   

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



// Function displayTasks() to display all tasks from LocalStorage
function displayTasks()
{
// 1. Get the <ul> element where we will show the list of tasks - name of variable "taskList"
const taskList = document.getElementById("taskList");
// 2. Clear any previous content inside the list so it doesn't repeat
let resizeCounter=0;
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
    count++;
    // 5. Create a new <li> element for each task
    const newItem = document.createElement("li");
    const deleteBtn= document.createElement("button");

    deleteBtn.textContent="remove current task";
    deleteBtn.setAttribute("onclick",`removeTask(${count-1})`); // I need to link the functionality to remove with the associated list entry   
                                                             // the reason this works because each list item, will have its own associated 
                                                            // removeTask(1), removeTask(2), because I am creating literal html elements
                                                           // with there own specific attributes
   
    // 6. Set the content of the <li> to show the task and a delete button - use template literal
    //Might have to change this to textcontent but whatever
    newItem.textContent=`${count}. ${task}`;
    // 7. Add the <li> to the task list
    taskList.insertAdjacentElement("beforeend",newItem);

    newItem.insertAdjacentElement("beforeend",deleteBtn);
});
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
// 4. Update the display so the removed task disappears from the screen
// 5. Automatically run displayTasks() when the page loads
displayTasks();
window.addEventListener("load",(event)=>{
    displayTasks();
})
// So any saved tasks show up immediately
}
displayTasks();

