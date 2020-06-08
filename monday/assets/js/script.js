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
