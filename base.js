
//declare array to capture value in sevenday target
let entries=[];

//addnewentry function to reset and load list item in sevenday target column 
let ul =document.getElementById("weekly-miles");

function addnewEntry(newentry){
   
     ul.removeChild(ul.firstElementChild);
     const list_item=document.createElement("li");
     const list_value=document.createTextNode(newentry);
     list_item.appendChild(list_value);
     ul.appendChild(list_item);
     
}
function Total(accumulator,currentvalue){
    return accumulator+currentvalue;
}
// calcultaing total miles travelled
  function TotalMiles(){
      let totalmilestravelled =entries.reduce(Total);
      document.getElementById("total").innerHTML=totalmilestravelled;
  }
function Average(){
    let average =entries.reduce(Total)/entries.length;
    document.getElementById("average-dist").innerHTML=average.toFixed(2);
}
function Highest(){
    let highestofweek =Math.max(...entries);
    document.getElementById("high").innerHTML=highestofweek;
}
function calcgoal(){
  let totalmilestravelled =entries.reduce(Total);
  const completedpercentage=totalmilestravelled/(25/100);
  const progresscircle=document.querySelector("#progresscircle");
  progresscircle.style.background=`conic-gradient(#70db70 ${completedpercentage}%, #2d3740 ${completedpercentage}% 100%)`
}






// target the form and add event listener for submit the form 
function handleSubmit(e){
   e.preventDefault();
   const entry=Number(document.getElementById("miles").value);
  if (!entry){
    return
  }
  const form =document.querySelector("form");
    form.reset();
  entries.push(entry);
  addnewEntry(entry);
  TotalMiles();
  Average();
  Highest();
  calcgoal();
}
const form =document.querySelector("form");
form.addEventListener('submit', handleSubmit);