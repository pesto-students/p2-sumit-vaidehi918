// Apply , call and Bind in javascript
let userDetails={
    name: "Vaidehi Mishra",
    Age: 21,
    Designation: "Frontend Developer",
      
}
let printDetails=function(city,state){
    console.log(this.name+" "+city+" "+state);
}  


printDetails.call(userDetails, "Indore", "Madhya Pradesh");

let userDetails1={
    name: "Jahnvi agrawal",
    Age: 22,
    Designation: "Software Engineer",

}
//function borrowing 
printDetails.call(userDetails1,"Indore","Madhya Pradesh")

//Apply
printDetails.apply(userDetails1,["Indore", "Madhya Pradesh"]);

//Bind
let newfunc = printDetails.bind(userDetails, "Indore", "Madhya Pradesh");
newfunc();