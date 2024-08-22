let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let date = document.getElementById("date");

const months=["Jan" ,"Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const todayDate = new Date();
year.innerHTML = todayDate.getFullYear();
month.innerHTML=months[todayDate.getMonth()]
date.innerHTML = (todayDate.getDate() < 10 ? "0":"")+todayDate.getDate();
day.innerHTML=days[todayDate.getDay()];

