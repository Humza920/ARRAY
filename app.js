// QUESTION 1 <==literal notation
// const studentNames = []

// QUESTION 2 <==object notation
// const studentNames = {
//     names:['HUMZA' , "BILAL" , "ASHAR"]
// }
// console.log(studentNames);

// QUESTION 3
// const stringsArray = ["HUMZA" , "BILAL" , "ASHAR"]
// console.log(stringsArray);

// QUESTION 4
// const numberArray = [1,2,3,4,5,6,7]
// console.log(numberArray);

// QUESTION 5
// const boleanArray = [true,false,true,false]
// console.log(boleanArray);

// QUESTION 6
// const mixedArray = [true,false,true,false,1,2,3,4,5,6,7,"HUMZA" , "BILAL" , "ASHAR"]
// console.log(mixedArray);

// QUESTION 7
// const pakNetworks = [`ZONG` , `U-FONE` , `TELENORE`]
// console.log(pakNetworks);

// QUESTION 8
// document.write("<h1>QUALIFICATIONs</h1>")
// const education =['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD']
// const ul = document.querySelector("ul")
// console.log(education);
// for(let i=0 ; i<education.length ; i++)
// {ul.innerHTML+=(`<li>${education[i]}</li>`)}

// WAY 2
// document.write("<h1>QUALIFICATION:</h1>" + "<br>")
// const education = []
// education.push  (`1)'SSC'`)
// education.push  (`2)'HSC'`)
// education.push  (`3)'BSC'`)
// education.push  (`4)'BS'`)
// education.push  (`5)'B. COM'`)
// education.push  (`6)'MS'`)
// education.push  (`7)'M. PHIL'`)
// education.push  (`8)'PHD'`)
// console.log(education);
// document.write(education.join("</br>"))

// QUESTION 9
// document.write(`<h1>TOP MOVIES OF 2015</h1>`)
// const ol = document.querySelector("ol")
// const movies = [`AGE OF ULTRON` , `JURASSIC PARK` , `SPECTRE` , `INSIDE OUT`] 
// for(i=0 ; i<movies.length ; i++){
//    ol.innerHTML+=(`<li>${movies[i]}</li>`)
// }

// WAY 2
// document.write("<h1>TOP MOVIES OF 2015</h1>")
// const movies = []
// movies.push("1) AVENGERS:Age Of Ultron")
// movies.push("2) SPECTRE")
// movies.push("3) JURASSIC WORLD ")
// movies.push("4) INSIDE OUT ")
// console.log(movies);
// document.write(movies.join("</br>"))

// QUESTION 10
// const cars = ["VOLVO" , "AUDI" , "CIVIC" , "FORD" , "LAMBORGHINI"];
// document.write("<h1>FAVOURITE CARS</h1>" + "</br>");
// document.write(cars);
// document.write("<h3>FIRST INDEX OF THE ARRAY: 0</h3>" + "</br>");
// document.write("<h3>CAR AT FIRST INDEX :</h3>" +cars[0] + "</br>");
// document.write("<h3>LAST INDEX OF THE ARRAY: 4</h3>" + "</br>");
// document.write("<h3>CAR AT LAST INDEX :</h3>" +cars[4] + "</br>");

// QUESTION 11
// const students = ["HUMZA","ASHAR","BILAL"];
// const score = ["320","230","480"];
// const totalMarks = (500);
// const percentageHumza = (score[0]/totalMarks*100);
// const percentageAshar = (score[1]/totalMarks*100);
// const percentageBilal = (score[2]/totalMarks*100);
// console.log(students);
// console.log(score);
// console.log(totalMarks);
// console.log(percentageHumza);
// console.log(percentageAshar);
// console.log(percentageBilal);
// document.write(`Score of ${students[0]} is ${score[0]}.Percentage:${percentageHumza}% </br>`)
// document.write(`Score of ${students[1]} is ${score[2]}.Percentage:${percentageAshar}% </br>`)
// document.write(`Score of ${students[1]} is ${score[2]}.Percentage:${percentageBilal}% </br>`)
 
// QUESTION 12
const ul = document.querySelector("ul")
let arr = [];
arr = ["apple ","banana ","orange ","grapes "]
for (let i = 0; i < arr.length; i++) {
 ul.innerHTML +=`<li>${arr[i]}</li>`}

//  a
//  const uL = document.querySelector(".ul")
//  const input =document.querySelector("input")
//  function add () {
//     arr.unshift(input.value)
//     for (let i = 0; i < arr.length; i++) {
//         uL.innerHTML +=`<li>${arr[i]}</li>`}
//         input.value = ""
// }

// b
//   const uL = document.querySelector(".ul")
//   const input =document.querySelector("input")
//   function add () {
//      arr.push(input.value)
//      for (let i = 0; i < arr.length; i++) {
//          uL.innerHTML +=`<li>${arr[i]}</li>`}
//          input.value = ""
//  }

//a and c both are same 

// d
// const uul = document.querySelector(".ul")
// arr.pop()
// for (let i = 0; i < arr.length; i++) {
//     uul.innerHTML +=`<li>${arr[i]}</li>`}

// e
// const uul = document.querySelector(".ul")
// arr.shift()
// for (let i = 0; i < arr.length; i++) {
//     uul.innerHTML +=`<li>${arr[i]}</li>`}

// f not done
//   const uL = document.querySelector(".ul")
//   const input =document.querySelector("input")
//   const inp =document.querySelector(".inp")
//   function add () {
//      for (let i = 0; i < arr.length; i++) {
//          uL.innerHTML +=`<li>${arr[i]}</li>`}

//          inp.value = ""
// }

// g
//   const uL = document.querySelector(".ul")
//   const input =document.querySelector("#how much")
//   const inp =document.querySelector(".inp")
//   function add () {
//     arr.splice(inp.value , input.value)
//      for (let i = 0; i < arr.length; i++) {
//          uL.innerHTML +=`<li>${arr[i]}</li>`}
//          inp.value = ""
//          input.value = ""
//  }

// QUESTION NO 13 :

// 13. Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method. 

// SOLUTION :


// function getScore() {
//     let student = [sco1.value, sco2.value, sco3.value, sco4.value, sco5.value, sco6.value, sco7.value, sco8.value, sco9.value, sco10.value];
//     console.log(student);
// student.sort(function(a,b){return a-b});
// console.log(student);
// }


// QUESTION NO 14 :

// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// SOLUTION :


// let fruits = ['strawberry', 'apple', 'orange', 'banana'];

// para.innerHTML = `<h2>Fruits List :</h2>   ${fruits}<br> <h2>Ordered  Fruits List are :</h2> ${(fruits.sort())}`


// QUESTION NO 14 :

// 15. Write a program to initialize an array with city names. Copy 
// 3 array elements from cities array to selectedCities array.

// SOLUTION :

// let cities = ['Karachi','Lahore','Quetta','Islamabad','Peshawar']



// QUESTION NO 16 :

// 16. Write a program to create a single string from the below 
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// SOLUTION :



// let arr = ['This' , ' is' ,  'my ', 'cat'];
// para.innerHTML = `<h2>ARRAY :</h2> ${arr} <br> <h2>String:</h2> ${arr.join(' ')}`


// QUESTION NO 17 :
// 17. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out)

// SOLUTION :

// let newArr = ['keyboard','mouse','printer','monitor'];
// console.log(newArr);
// newArr.shift('power')
// console.log(newArr);

// para.innerHTML =`<h2>Devices:</h2> <b>Out:</b><br>${newArr[0]} <br> <b>Out:</b><br>${newArr[1]} <br> <b>Out:</b><br>${newArr[2]} <br> <b>Out:</b><br>${newArr[3]}`


// QUESTION NO 18 :
// 18. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-First 
// Out)

// SOLUTION :

// let newArr = ['keyboard','mouse','printer','monitor'];

// para.innerHTML =`<h2>Devices:</h2> <b>Out:</b><br>${newArr[3]}<br>  <br> <b>Out:</b><br>${newArr[2]}<br>  <br> <b>Out:</b><br>${newArr[1]}<br>  <br> <b>Out:</b><br>${newArr[0]}<br> `


// QUESTION NO 20 :

// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// SOLUTION :

// let multidimensional = [[],[],[]];



// QUESTION NO 20 :

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// SOLUTION :

let multidimensionalArr = [['0','1','2','3'],['1','0','1','2'],['2','1','0','1']];
console.log(multidimensionalArr);
console.log(multidimensionalArr[0],[1],[2]);











