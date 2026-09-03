//Example - centerd
// for (let i = 1; i <= 5; i++) { //adding rows
//     let  row="";

//     for(let j=1;j<=5-i;j++) //adding spaces
//     {
//             row +=" ";
//     }

//     for (let k =1;k<=((2*i)-1);k++) //adding columns 
//         {
//          row +="*";
//         }
    
    
//  console.log(row);
// }

//Example right align

for (let i = 1; i <= 5; i++) {
    let row = "";
    
    // Add leading spaces to right-align the stars
    for (let j = 1; j <= 2 * (5 - i); j++) {
        row += " ";
    }
    
    // Add columns (stars)
    for (let k = 1; k <= ((2 * i) - 1); k++) {
        row += "*";
    }
    
    console.log(row);
}

//Example 2-left align

for (let i = 1; i <= 5; i++) { //adding rows
    let  row="";

    for (let k =1;k<=((2*i)-1);k++) //adding columns 
        {
         row += "*";
        }
    
    
 console.log(row);
}

console.log("\n")

//Example 3 -reverse

for (let i = 5; i >= 1; i--) { // adding rows starting from the widest
    let row = ""; 
    for (let k = 1; k <= ((2 * i) - 1); k++) { // adding columns
        row += "*"; 
    } 
    console.log(row); 
}

//Example4 - print 123 4

for (let i = 1; i <= 5; i++) {
    let row = ""; 
    for (let k = 1; k <= ((2 * i) - 1); k++) { 
        row += k; // 
    } 
    console.log(row); 
}

//Example - print A BB CCC

for (let i = 1; i <= 5; i++) { 
    let row = ""; 
    
    let char = String.fromCharCode(64 + i); 
    
    for (let k = 1; k <= i; k++) { 
        row += char; 
    } 
    
    console.log(row); 
}

//Example Print A Ab ABC ..


for (let i = 1; i <= 5; i++) { 
    let row = ""; 
    for (let k = 1; k <= i; k++) { 
        row += String.fromCharCode(64 + k); 
    } 
    console.log(row); 
}

console.log("\n")

//Example print opposite .... ABC AB A


for (let i = 5; i >= 1; i--) { 
    let row = ""; 
    for (let k = 1; k <= i; k++) { 
        row += String.fromCharCode(64 + k); 
    } 
    console.log(row); 
}