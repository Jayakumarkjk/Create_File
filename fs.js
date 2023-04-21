
const express = require('express');
const fs = require ("fs");
const app = express();
const PORT = 8000;



let dt = new Date();

let date = ("0" + dt.getDate()).slice(-2);

let month = ("0" + (dt.getMonth() + 1)).slice(-2);

let year = dt.getFullYear();

let hours = dt.getHours();

let minutes = dt.getMinutes();

let seconds = dt.getSeconds();


const timeStamp = `DATE : ${year}-${month}-${date}  TIME: ${hours}:${minutes}:${seconds}`;

console.log(timeStamp);



// fs.writeFile("./time-stamp.txt", time, (err) =>{
//   console.log("Task completed successfully")
// });


fs.writeFile("./time-stamp/timestamp.txt", timeStamp, (err) =>{
  console.log("Task completed successfully")
});


fs.readdir("./time-stamp", (err, time) =>{
  console.log("All file names:", time);
});

app.listen(PORT, () => console.log ("Server Started", PORT));