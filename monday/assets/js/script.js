/*******

CONSTANTS

*************/
const projectFooter='project-footer';

/***********
	
	VARIABLES

**************/
let today= new Date();
let currentDate=today.getDate();
let currentMonth=today.getMonth()+1;
let currentYear=today.getFullYear();

/************

	UTILITIES

***************/
let displayFooterContent = () =>{
	let content="<center><span>Arrays Looping & Manipulation</span><br/><br/>"+
	"Copyright &copy; "+currentYear+". All Rights Reserved.</center>";
	document.getElementById(projectFooter).innerHTML+=content;
}

/*******************************************

Make an array of numbers, then use .map() to return 

an array containing each of the original numbers + 1
	
******************************************************/
let numbers = [1,2,3,4,5];
let incrementedNumbers= numbers.map((number)=>{
	return number+1;
});

console.log(incrementedNumbers);

/*******************************************

Create an array of words. Use .map() to return

an array of the same words in all uppercase.
	
******************************************************/
let words=['dogs','favorite','yellow','mangoes','reliability','confession'];

let uppercaseWords = words.map((word)=>{
	return word.toUpperCase();
});

console.log(uppercaseWords);

/*******************************************

Make an array of your friends' names. 

Loop through it and alert() a greeting to each.	

******************************************************/
let friends=['James','Judy','Floyd','Winchester','Withers'];

friends.forEach((friend)=>{
	console.log("Good Evening "+friend);
});

/*****************************

Write a loop to multiply an 

arbitrary amount of numbers. 

********************************/
let multipliers = [1,2,3,4,5];
let answer=1;

multipliers.forEach((multiplier)=>{
	answer*=multiplier;
});

console.log(answer);

/*****************************

	Groceries 

********************************/
let displayGroceryList = (groceryItems) =>{
	let items = groceryItems.split(',').sort();
  items.forEach((item)=>{
  	console.log(item);
  });
  //Different Technique
   // let sortGroceries = groceries.sort();
	  // sortGroceries.forEach((grocery)=>{
	  // 	console.log(grocery);
	  // });
}

groceryList=prompt("Please provide your grocery list items sepparated with comas");
displayGroceryList(groceryList);