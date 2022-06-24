var today = new Date();
var dd = today.getDate(); //Current day
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear(); //(Year is 2022)
var hh = today.getHours(); //Current hour
var m = today.getMinutes(); //Current minutes

if (dd < 10)
{
    dd = '0' + dd;
} 
if (mm < 10)
{
    mm = '0' + mm;
}
if (hh < 10)
{
    hh = '0' + hh;
}
if (m < 10)
{
    m = '0' + m;
}
let todaytime = yyyy + '-' + mm + '-' + dd + "T" + hh + ":" + m; //or YYYY-MM-DDThh:mm
console.log(todaytime)
document.getElementById("timerdate").setAttribute("min", todaytime); 
let RequiredDate=new Date("18 jul 2022");
const timerdate=document.getElementById("timerdate")
const daysE1=document.getElementById("days");
const hoursE1=document.getElementById("hours");
const minsE1=document.getElementById("mins")
const secsE1=document.getElementById("secs")
function changeDate()
{  
    RequiredDate=timerdate.value;
}
function countdown()
{
    const requireDate=new Date(RequiredDate)
    const currentDate=new Date()
    let days,hours,mins,secs;
    let Totalseconds=(requireDate-currentDate)/1000;
    if(Totalseconds<0)
    {
        days=0
        hours=0
        mins=0
        secs=0
    }
    else{
         days=Math.floor(Totalseconds/3600/24);
         hours=Math.floor(Totalseconds/3600)%24;
         mins=Math.floor(Totalseconds/60)%60;
         secs=Math.floor(Totalseconds)%60;

     }
   
    console.log(days,hours,mins,secs,Totalseconds);
   daysE1.innerHTML=days;
   hoursE1.innerHTML=formatTime(hours);
   minsE1.innerHTML=formatTime(mins);
   secsE1.innerHTML=formatTime(secs);
   //console.log(timerdate)

}

function formatTime(time)
{
    return time<10?`0${time}`:time;
}

//initial call 
countdown()
setInterval(countdown,1000)