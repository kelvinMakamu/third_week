/*******

CONSTANTS

*************/
const projectFooter='project-footer';

const cardRanks = ['clubs','diamonds','hearts','spades'];
const cardPrefixes = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];

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
let capitalize = (word) => {
  if(typeof word !== 'string'){
  	return word;
  }else{
  	return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

let displayFooterContent = () =>{
	let content="<center><span>Arrays Looping & Manipulation</span><br/><br/>"+
	"Copyright &copy; "+currentYear+". All Rights Reserved.</center>";
	document.getElementById(projectFooter).innerHTML+=content;
}

let displayNotification = (notificationPanel,alert,message) => {
	let notification ="<div class='alert "+alert+"' role='alert'>"+message+"</div>";
	document.getElementById(notificationPanel).innerHTML+=notification;
}

let displayCardDeckInfo = () => {
	let suits_content="<p><strong>Suits</strong></p><hr/>";
	let ranks_content="<p><strong>Ranks</strong></p><hr/>";
	cardRanks.forEach((rank)=>{
		suits_content+="<span class='card-deck-spacer'> &#42; "+capitalize(rank)+"</span>";
	});
	cardPrefixes.forEach((prefix)=>{
		ranks_content+="<span class='card-deck-spacer'> &#42; "+capitalize(prefix)+"</span>";;
	});
	document.getElementById('card-deck-suits').innerHTML+=suits_content;
	document.getElementById('card-deck-ranks').innerHTML+=ranks_content;
}

let clearForms = (type) =>{
	switch(type){
		case 'grocery-list':
		document.getElementById('grocery-list-message').innerHTML="";
		document.getElementById('grocery-list-items').value="";
		break;

		case 'word-play':
		document.getElementById('word-play-message').innerHTML="";
		document.getElementById('word-play-items').value="";
		break;

		case 'card-deck':
		document.getElementById('card-deck-message').innerHTML="";
		break;
	}
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
let displayGroceryList = () =>{
	document.getElementById('grocery-list-message').innerHTML="";
	let groceryItems=document.getElementById('grocery-list-items').value;
	if(groceryItems == ''){
		alert='alert-danger';
		message="<p><strong>Operation Failed.</strong><br>"
		+"<span>Please provide your grocery list items separated with comas</span></p>";
	}else{
		let items = groceryItems.split(',');
		let trimmedSortedItems=items.map((item)=>{
			return item.trim();
		}).sort();
		let content="<ol>";
	  trimmedSortedItems.forEach((item)=>{
	  	content+="<li>"+item+"</li>";
	  });
	  content+="</ol>";
		alert='alert-success';
		message="<p><center><strong>Your Grocery List</strong></center><hr></p>"+content;
	}
	displayNotification('grocery-list-message',alert,message);
}

let clearGroceryList = () => {
	clearForms('grocery-list');
}

/***************************

	WORD PLAY

*******************************/

let wordPlay = () => {
	document.getElementById('word-play-message').innerHTML="";
	let sentence=document.getElementById('word-play-items').value;
	if(sentence == ''){
		alert='alert-danger';
		message="<p><strong>Operation Failed.</strong><br>"
		+"<span>Please provide a sentence</span></p>";
	}else{
		let words = sentence.split(' ');
		let longReversedWords=words.map((word)=>{
			if(word.length >= 3){
				return word;
			}
		}).reverse();
		let content=longReversedWords.join(' ');
		console.log(content);
		alert='alert-success';
		message="<p><center><strong>Your Word Play</strong></center><hr></p>"+content;
	}
	displayNotification('word-play-message',alert,message);
}

let clearWordPlay = () => {
	clearForms('word-play');
}

/***************************

	WORD PLAY

*******************************/

let buildCardDeck = () => {
	document.getElementById('card-deck-message').innerHTML="";
	let content="<ul>";
	cardRanks.forEach((cardRank)=>{
  		cardPrefixes.forEach((cardPrefix)=>{
      	content+="<li>"+capitalize(cardPrefix)+" of "+cardRank +"</li>";
      });
  });
  content+="</ul>";
	console.log(content);
	alert='alert-success';
	message="<p><center><strong>Your Word Play</strong></center><hr></p>"+content;
	displayNotification('card-deck-message',alert,message);
}

let clearCardDeck = () => {
	clearForms('card-deck');
}

/**********************
	
	PIG LATIN

***************************/

let vowels = ['a','e','i','o','u'];

let pigLatinTranslator = (sentence) => {
	let words = sentence.split(' ');
  let translations = words.map((word)=>{
  	if(vowels.includes(word.charAt(0).toLowerCase())){
    		word+='ay';
        return word;
    }else{
    	let consonants='';
    	for(let index=0;index<word.length;index++){
      	if(vowels.includes(word.charAt(index).toLowerCase())){
          consonants+=word.slice(index,word.length);
          spliced=+consonants;
        }else{
          consonants+=word.charAt(index);
        }
      }
      spliced=consonants+'ay';
      return spliced;
    }
  });
  alert(translations.join(' '));
}

quote=prompt("Please enter your quote?");
pigLatinTranslator(quote);