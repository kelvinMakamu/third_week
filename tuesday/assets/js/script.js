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
	let content="<center><span>Creating interactive web pages</span><br/><br/>"+
	"Copyright &copy; "+currentYear+". All Rights Reserved.</center>";
	document.getElementById(projectFooter).innerHTML+=content;
}

/****************

	JQUERY SAMPLES

***********************/
$('h1').click( () => {
  alert("This is a heading tag")
});

$('p').click(()=> {
	$(".hide-image").toggle();
  $(".hidden-image").toggle();
});