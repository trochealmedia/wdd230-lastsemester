// ---------------------------------hearder date--------------------------------------
const date=new Date()
const formattedDate=new Intl.DateTimeFormat("en-UK",{datestyle: "full"}).format(date);
document.querySelector("#formatted-date").innerHTML=formattedDate;

// --------------------------------footer year---------------------------------------
var year=date.getFullYear()
document.querySelector("#year").innerHTML=year;

// --------------------------------last modify----------------------------------------
let d= document.lastModified;
document.querySelector("#last-modify").innerHTML=d;

// ---------------------------------form date-----------------------------------------
// let dv= document.lastModified;
// document.querySelector("#full-datev").value=dv;