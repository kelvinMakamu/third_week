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