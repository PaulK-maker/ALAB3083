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

// let csvString =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//   let cell1 ="",cell2 ="",cell3 ="",cell4 ="";
//   let currentCell="";
//   //populate csv
//   for (let i=0; i<csvString.length; i++){
//     current_char=csvString[i]
//     if (current_char===','){
//     //fill cells
// if (cell1==="") cell1=currentCell;
// else if (cell2==="") cell2=currentCell;
// else if (cell3==="") cell3=currentCell;
// else{
//     cell4=currentCell;
// }
// currentCell=""
// }else if (current_char==='\n'){
// if (cell1==="") cell1=currentCell;
// else if (cell2==="") cell2 =currentCell;
// else if (cell3==="") cell3=currentCell;
// else{
//     cell4=currentCell;
// }//log cells
// console.log(cell1,cell2,cell3,cell4);
// cell1=cell2=cell3=cell4="";
// currentCell="";
// }else{
//     currentCell+=current_char
// }
//    //check correct cells
// }
// if (currentCell !==""){
//     if (cell1==="") cell1=currentCell;
//     else if(cell2==="") cell2=currentCell;
//     else if (cell3==="") cell3=currentCell;
//     else cell4 =currentCell;
//     console.log(cell1,cell2,cell3,cell4);
// }

let csvString =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
let currentCell = "";
// populate csv
for (let i = 0; i < csvString.length; i++) {
  current_char = csvString[i];
  if (current_char === ",") {
    //fill cells
    if (cell1 === "") cell1 = currentCell;
    else if (cell2 === "") cell2 = currentCell;
    else if (cell3 === "") cell3 = currentCell;
    else {
      cell4 = currentCell;
    }
    currentCell = "";
  } else if (current_char === "\n") {
    if (cell1 === "") cell1 = currentCell;
    else if (cell2 === "") cell2 = currentCell;
    else if (cell3 === "") cell3 = currentCell;
    else {
      cell4 = currentCell;
    } //log cells
    console.log(cell1, cell2, cell3, cell4);
    cell1 = cell2 = cell3 = cell4 = "";
    currentCell = "";
  } else {
    currentCell += current_char;
  }
  //check correct cells
}
if (currentCell !== "") {
  if (cell1 === "") cell1 = currentCell;
  else if (cell2 === "") cell2 = currentCell;
  else if (cell3 === "") cell3 = currentCell;
  else cell4 = currentCell;
  console.log(cell1, cell2, cell3, cell4);
}
