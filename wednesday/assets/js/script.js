/*******

CONSTANTS

*************/
const projectFooter='project-footer';
const termsContainer='javascript-terms';

const concepts=[
	{'name':'Javascript','desc':'Client-side programing language for adding interactivity on a webpage'},
	{'name':'Operators','desc':'operators perform some operation on single or multiple operands (data value) and produces a result'},
	{'name':'Variables','desc':'Variables are simply names of storage location. There are two types of variables in JavaScript : local variable and global variable.'},
	{'name':'Variable Naming conventions','desc':'a naming convention is a set of rules for choosing the character sequence to be used for identifiers which denote variables, types and functions'},
	{'name':'Functions','desc':'JavaScript procedure—a set of statements that performs a task or calculates a value'},
	{'name':'strings','desc':'zero or more characters written inside quotes'},
	{'name':'methods','desc':'functions which is a property of an object..'},
	{'name':'arguments','desc':'an Array-like object accessible inside functions that contains the values of the arguments passed to that function'},
	{'name':'parameters','desc':'a named variable passed into a function'},
	{'name':'return','desc':'The return statement ends function execution and specifies a value to be returned to the function caller'},
	{'name':'chaining methods','desc':'practice of calling different methods in a single line instead of calling different methods with the same object reference separately'},
	{'name':'booleans','desc':'a Boolean is a logical data type that can have only the values true or false'},
	{'name':'undefined','desc':'a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.'},
	{'name':'NaN','desc':'a value representing Not-A-Number'},
	{'name':'Escape','desc':' function that computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.'},
	{'name':'Alert','desc':'method displays an alert dialog with the optional specified content and an OK button.'},
	{'name':'comments','desc':'represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view'},
	{'name':'jquery','desc':'a JavaScript Library that focuses on simplifying DOM manipulation, AJAX calls, and Event handling.'},
	{'name':'attributes','desc':'attributes extends tags, changing their behavior or providing metadata.'},
];

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
let capitalizeEachWord = (sentence) => {
  return sentence.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};

let capitalizeFirstWord = (word) => {
  if(typeof word !== 'string'){
  	return word;
  }else{
  	return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

let displayFooterContent = () =>{
	let content="<center><span>Create Interactive Forms</span><br/><br/>"+
	"Copyright &copy; "+currentYear+". All Rights Reserved.</center>";
	document.getElementById(projectFooter).innerHTML+=content;
}


let displayFlashCardFooterContent = () => {
	let content="<center><span>Flashcard Site</span><br/><br/>"+
	"Copyright &copy; "+currentYear+". All Rights Reserved.</center>";
	document.getElementById(projectFooter).innerHTML+=content;
}


let displayJavaScriptTerms = () => {
	let content="<div class='col-md-12 col-lg-12 col-sm-12'>"+
									"<h3 class='exercise-content-third-heading'>"+
									"TERMS/Concepts Flash Cards</h3>"+
								  "<hr>"+
							"</div>";
	concepts.forEach((concept)=>{
			let conceptID=(concept.name.toLowerCase().split(' ').map((word)=> word).join('-'));
			let definitionID='define-'+(concept.name.toLowerCase().split(' ').map((word)=> word).join('-'));
		  content+="<div class='col-md-4 col-lg-4 col-sm-12'>"+
								"<div class='js-concepts' id='"+conceptID+"'><p>"+
								    capitalizeEachWord(concept.name)
								+"</p></div><div class='definition-container' id='"+definitionID+"'>"+capitalizeFirstWord(concept.desc)+"</div>"
							+"</div>";
	});
	document.getElementById(termsContainer).innerHTML+=content;
}
/*****************************
	
	APPEND ON CLICK EVENT ONCE 

	EVERYTHING HAS LOADED

*******************************/
$(document).ready(()=>{
	concepts.forEach((concept)=>{
			let conceptID=(concept.name.toLowerCase().split(' ').map((word)=> word).join('-'));
			let definitionID='define-'+(concept.name.toLowerCase().split(' ').map((word)=> word).join('-'));
			toggleTermsDefinition(conceptID,definitionID);
	});
});

let toggleTermsDefinition = (conceptID,definitionID) =>{
	$("#"+conceptID).click(() =>{
	 	$("#"+conceptID).slideToggle();
	 	$("#"+definitionID).slideToggle();
	});
	$("#"+definitionID).click(() =>{
	 	$("#"+conceptID).slideToggle();
	 	$("#"+definitionID).slideToggle();
	});
}

$(document).ready(()=> {
    $("#blanks form").submit((event) => {
       event.preventDefault();
    	let blanks = ['person1','person2','animal','exclamation','verb','noun'];
    	blanks.forEach((blank)=>{
        $("."+blank).text($("input#"+blank).val());
    	});
      $("#story").show();
    });
});