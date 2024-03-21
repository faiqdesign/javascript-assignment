

for (var i = 0;i < 100;i++){
    console.log(i)    
}



for(var i = 0;i<10;i++){
    console.log(i)
}




var numstring =''

for (var i = 1; i < 10; i++){
    numstring = numstring +i
    console.log(numstring)
}



var tableNumber = prompt("add table Number")
for (var i =1; i<10;i++){ 
    console.log(tableNumber*i)
}



var cities =['karachi','lahore','islamabad', 'faisalabad']
for (var i =0; i<cities.length;i++){ 
    console.log(cities[i])
}






var Weekdays =['Monday','Tuesday','wednesday', 'thuesday','firday','saturday','sunday']
for (var i =0; i<Weekdays.length;i++){ 
    console.log(Weekdays[i])
}




var cities =["karachi" , "punjab" ,"hydradad" ,"quetta" ,"faisalabad"];
var userinput = prompt("Enter city name");
for (var i =0; i<cities.length;i++){ 
    if(userinput === cities [i]){
        console.log("cities found" = + userinput )
        isfound = true
        break;
    }
}
if(isfound === false){
    console.log("not found")
} 




