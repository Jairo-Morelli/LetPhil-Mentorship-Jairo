// Task 1: Grab references to specific DOM elements by id
// 1.1 Declare const fetchBtn referencing the element with id "fetchBtn"
// 1.2 Declare const fetchMultipleBtn referencing the element with id "fetchMultipleBtn"
// 1.3 Declare const searchInput referencing the element with id "searchInput"
// 1.4 Declare const themeToggle referencing the element with id "themeToggle"
// 1.5 Declare const userContainer referencing the element with id "userContainer"
// 1.6 Declare const loader referencing the element with id "loader"
const fetchBtn = document.getElementById("fetchBtn");
const fetchMultipleBtn = document.getElementById("fetchMultipleBtn");
const searchInput = document.getElementById("searchInput");
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const themeToggle = document.getElementById("themeToggle");
const genderInfoContainer = document.getElementById("GenderCount");
const averageAgeContainer = document.getElementById("AverageAge");

// Task 2: Initialize in-memory data storage
// 2.1 Declare let users as an empty array to hold fetched user objects

let users = [];

// Task 3: Attach event listeners
// 3.1 Add a click listener on fetchBtn that calls fetchUsers(1)
// 3.2 Add a click listener on fetchMultipleBtn that calls fetchUsers(5)
// 3.3 Add an input listener on searchInput that calls filterUsers()
// 3.4 Add a change listener on themeToggle that calls toggleTheme()


function trackAsyncExecution(asyncFn) {
  let hasRun = false;
  let isDone = false;

  const wrapped = async (...args) => {
    hasRun = true;
    try {
      const result = await asyncFn(...args);
      isDone = true;
      return result;
    } catch (err) {
      isDone = true;
      throw err;
    }
  };

  wrapped.wasCalled = () => hasRun;
  wrapped.isFinished = () => isDone;

  return wrapped;
}

fetchBtn.addEventListener("click", () => fetchUsers(1));
fetchMultipleBtn.addEventListener("click", async () => {

  const trackedAsynFetchFun = trackAsyncExecution(fetchUsers);
  const trackedAsynGenFun = trackAsyncExecution(CountGenders);
  const trackedAsynAverageFun = trackAsyncExecution(calculateAverageAge);

  await trackedAsynFetchFun(5).then(() => {


  })

  if (trackedAsynFetchFun.isFinished() == true) {
    trackedAsynGenFun().then(() => {

      if (trackedAsynGenFun.isFinished() == true) {
        trackedAsynAverageFun().then(() => {

        })
      }
    })
  }




});
searchInput.addEventListener("input", filterUsers);
themeToggle.addEventListener("change", toggleTheme);

// Task 4: Implement fetchUsers(count) function
// 4.1 Reset users to an empty array
// 4.2 Clear userContainer content
// 4.3 Show loader element
// 4.4 Fetch random users from API using count parameter
//   4.4.1 On success: hide loader, update users array, call renderUsers(users)
//   4.4.2 On error: hide loader, display error in userContainer, log error
async function fetchUsers(count) {
  users = [];
  userContainer.innerHTML = "";
  loader.style.display = "block";


  try {
    const req = await axios.get(`https://randomuser.me/api/?results=${count}`);
    loader.style.display = "none";
    users = req.data.results;
    console.log(users);
    renderUsers(users);
  } catch (error) {
    loader.style.display = "none";
    userContainer.innerHTML = "<p> Error fetching data </p>";
    console.error(error);
  }

  // axios
  //   .get(`https://randomuser.me/api/?results=${count}`)
  //   .then((response) => {
  //     loader.style.display = "none";
  //     users = response.data.results;
  //     renderUsers(users);
  //     console.log(response.request);
  //   })
  //   .catch((error) => {
  //     loader.style.display = "none";
  //     userContainer.innerHTML = "<p> Error fetching data</p>";
  //     console.error(error);
  //   });

}

// Task 5: Implement renderUsers(list) function
// 5.1 Clear userContainer content
// 5.2 For each user in list:
//   5.2.1 Create a card element
//   5.2.2 Assign it the class "user-card"
//   5.2.3 Populate with picture, name, age, email, location, phone
//   5.2.4 Append card to userContainer

function renderUsers(list) {
  userContainer.innerHTML = "";
  list.forEach((user) => {
    let card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
        <img src="${user.picture.medium}" alt="user-picture"/>
        <h3>Name: ${user.name.first} ${user.name.last}</h3>
        <p>Age: ${user.dob.age}</p>
        <p>Email: ${user.email}</p>
        <p>Located: ${user.location.city} ${user.location.country} </p>
        <p>Phone-number: ${user.phone}</p>
        `;
    userContainer.appendChild(card);
  });
}

async function CountGenders() {
  let males = 0;
  let females = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].gender === "male") {
      males++;
    } else if (users[i].gender === "female") {
      females++;
    }
  }
  //alert("there are " + males + " males, and " + females + " females. In your database.");m

  const infoText = document.createElement("p");
  infoText.textContent = "Males: " + males + ", Females: " + females;

  genderInfoContainer.append(infoText);
}

async function calculateAverageAge() {
  let sum = 0;


  for (let i = 0; i < users.length; i++) {
    sum += users[i].dob.age;
  }

  const averageAge = sum / users.length;

  const infoText = document.createElement("p");
  infoText.textContent = "Average age:" + averageAge;

  averageAgeContainer.append(infoText);
}



function inputCMD(cmd) {
  let inputCommand = cmd;
  /*
  Simple for loop, that is going to iterate 
 through the string and look for a "command"
  */
  let flag = '';
  for (let i = 0; i < inputCommand.length; i++) {
    flag = flag.concat(inputCommand[i]);
    switch (flag) {
      default: // no command or wrong command
        {
          break;
        }
      case "Nat:": //nationality search command
        {
          console.log("Command called");
          return flag;
        }
      case "nat:": // nationality search command
        {
          console.log("Command called");
          return flag;
        }
    }
  }
}


// Task 6: Implement filterUsers() function
// 6.1 Read and lowercase the value from searchInput
// 6.2 Filter users array based on term matching full name
// 6.3 Call renderUsers with filtered array
function filterUsers() {
  //If I where to use throw, it would be returning a custom error 
  // In the while loop, I am simply trying a piece of code
  // and then checking to see if that piece of code is valid
  let term = '';
  while (true) {
    try {
      term = searchInput.value.toLowerCase();
    } catch (err) {

    }
    break;
  }
  /*After rendering users, if I want to organize the users by there nationality's
  * by typing in nat:(country of origin)
  */

  switch (inputCMD(term)) {
    default:
      {
        let filtered = users.filter((u) => {
          let fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
          return fullName.includes(term);
        })
        renderUsers(filtered);
        break;
      }
    case "Nat:":
      {
        let natTerm = term.replace("Nat:", '');

        let filtered = users.filter((u) => {
          let nationality = `${u.nat}`.toLowerCase();
          return nationality.includes(natTerm);
        })
        renderUsers(filtered);
        break;
      }
    case "nat:":
      {
        let natTerm = term.replace("nat:", '');

        /*
          What you need to learn now, is simply 
          understand how .filter works, and how to have it 
          select the value you're looking for, because it will
          select the nearest value. 

          once it has it selected(string), then 
          what you want to do is check to see if a 
        */
        let filtered = users.filter((u) => {
          let nationality = `${u.nat}`.toLowerCase();
          return nationality.includes(natTerm);
        })
        renderUsers(filtered);
        break;
      }
  }

}

// Task 7: Implement toggleTheme() function
// 7.1 Toggle the "dark" class on document.body based on themeToggle.checked

function toggleTheme() {
  document.body.classList.toggle("dark", themeToggle.checked);
  console.log("This is toggleTheme being called");
}
