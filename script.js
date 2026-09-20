// Sync ===blocking code

// console.log("Step 1: Start boiling");
// console.log("Step 2: Add pasta to the pot");
// console.log("Step 3: Stir and wait for 10 minutes");
// console.log("Step 4: Drain the pasta and serve");

// ! Synchronous Code
// function blockingTasks() {
//     console.log("Step 1: Start a long-running task");
//     // Simulate a blocking task
//     const startTime = Date.now();
//     while (Date.now() - startTime < 5000) { }

//         console.log("Step 2: Long-running task finished");
        
// }
// console.log("Before calling the blocking task");

// blockingTasks();
// console.log("After the blocking the task");

// ! Asynchronous Code

// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2 (Delay)");
// }, 2000);

// console.log("Task 3");

// Weather Application

// API (Mimic)

// Our frontend app

function fetchData(callback) {
    // operation API(Mimic)
    console.log("Fetching weather data....");
    // API - simulating Async operation(http)
    setTimeout(() => {
        console.log("Weather data fetched successfully!");
        callback();
    }, 2000);   
}

function processData() {
    console.log("Processing the weather data to display temperature& conditions");
}

// Invoke the function
// fetchData(processData);

//! Components of HTTP Request

//HTTP: Hypertext Transfer Protocol
//?.Method(HTTP Verb)
// GET: Retrieve data from the server
// POST: Send data to the server
// PUT: Update existing data on the server
// DELETE: Remove data from the server
//?.URL(Uniform Resource Locator - https://www.example.com/api/weather)
//?.Headers: Metadata about the request (Content-Type, Authorization, etc.)
//? Body

//HTTP client
//Fetch - default
//Axios - third-party library

// Making an HTTP request using Fetch API


// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     return response.json().then((posts) => {
//         console.log("Posts fetched successfully", posts);
//     });
// }).catch((error) => {
//     console.log("Error occurred while fetching data:", error);
// });

// Fetch user details -API / https://jsonplaceholder.typicode.com/users/2

// function fetchUserData(callback) {
//     // Make real http request
//     fetch("https://jsonplaceholder.typicode.com/users/2")
//         .then((response) => {
//             return response.json().then((userData) => {
//                 console.log("User details fetched successfully", userData);
//                 // Call back
//                 callback(userData.id);
//             });
//       })
//         .catch((error) => {
//         console.log(error);
//     });
// }

// User's posts - https://jsonplaceholder.typicode.com/posts?userId=2

// function fetchUserPosts(userId) {
//   // Make real http request
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => {
//       return response.json().then((posts) => {
//           console.log("User's posts fetched successfully", posts);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchUserData(fetchUserPosts);

//! 1. Create a promise
// const myPromise = new Promise((resolve, reject) => {
//     // perform async task
//     let success = false; // Simulate success or failure
//     if(success) {
//         resolve("Operation completed successfully") //Fulfilled
//     } else {
//         reject("Operation failed");
//     }

// });

//! 2. Consume a promise
// myPromise
//     .then((data) => { console.log(data); })
//     .catch((error) => {console.log(error); })
//     .finally(() => { console.log("Operation called"); })
    
//! Promise examples

//! Create promise
// const fetchDataPromise = fetch("https://jsonplaceholder.typicode.com/albums");

// fetchDataPromise.then((response) => {
//     return response.json().then((data) => {
//         console.log(data);
        
//     })
// })
//     .catch((error) => {
//         console.log(error);
//     })

// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
// });

//! Async Await

async function fetchAlbums() {
    try {
        // Success
        const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");
        // console.log(albums);
        
        const albums = await albumsResponse.json();
        console.log(albums);
        
    } catch (error) {
        // failure
        console.log(error);
    }
}

fetchAlbums();