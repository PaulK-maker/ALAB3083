// //Loop through all numbers from 1 to 100.
// for (let i = 1; i <= 100; i++) {
//   //check even and skip
//   if (i % 2 === 0) {
//     continue;
//     //check odd 3 and 5
//   }
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//     //check if not 3 and 5
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
// }

//CSV Parse /log csv

let csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  
  let cell1 ="",cell2 ="",cell3 ="",cell4 ="";
  let currentCell="";
  //populate csv
  for (let i=0; i<csvString.length; i++){
    current_char=csvString[i]
    if (current_char===','){
    //fill cells
if (cell1==="") cell1=currentCell;
else if (cell2==="") cell2=currentCell;
else if (cell3==="") cell3=currentCell;
else{
    cell4=currentCell;
}
currentCell=""
}else if (current_char==='\n'){
if (cell1==="") cell1=currentCell;
else if (cell2==="") cell2 =currentCell;
else if (cell3==="") cell3=currentCell;
else{
    cell4=currentCell;
}//log cells
console.log(cell1,cell2,cell3,cell4);
cell1=cell2=cell3=cell4="";
currentCell="";
}else{
    currentCell+=current_char
}
   //check correct cells 
}
if (currentCell !==""){
    if (cell1==="") cell1=currentCell;
    else if(cell2==="") cell2=currentCell;
    else if (cell3==="") cell3=currentCell;
    else cell4 =currentCell;
    console.log(cell1,cell2,cell3,cell4);
}


