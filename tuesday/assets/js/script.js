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
		$(".hide-image").slideToggle();
	  $(".hidden-image").slideToggle();
	});

	let changeBackgroundColor = (color_type) => {
		$('body').removeClass();
		$('body').addClass(color_type);
	}

	$('#green').click(()=>{
		changeBackgroundColor('bg-green');
	});

	$('#yellow').click(()=>{
		changeBackgroundColor('bg-yellow');
	});

	$('#red').click(()=>{
		changeBackgroundColor('bg-red');
	});

	$('#hello').click( ()=>{
		$("ul").prepend("<li>Hello World!</li>");
	});

	$("#goodbye").click(()=>{
		$("ul").prepend("<li>Goodbye !!!</li>");
	});

	$("#stop").click(()=>{
		$("ul#webpage").prepend("<li>Stop Copying Me!!!</li>");
		$('li').css('background-color', 'green');
	});

	$("ul#webpage").children("li").first().click(()=>{
		$(this).remove();
	});