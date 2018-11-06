/*Carousel on index page*/
var arr = ["one", "two", "three"];
var dotArray = ["dot1", "dot2", "dot3"];
let currIndex = 0;
/*move to the next picture in array of slideshow images*/
function next(){
	console.log("called next , index: "+ currIndex);
	stripCarouselClasses(currIndex);
	document.getElementById(arr[currIndex]).classList.add("carousel-left");
	
	var newCurrIndex = (currIndex+1) % arr.length;
	/*change dots*/
	document.getElementById(dotArray[currIndex]).classList.remove("selected");
	document.getElementById(dotArray[newCurrIndex]).classList.add("selected");
	/*stage new selected element*/
	document.getElementById(arr[newCurrIndex]).classList.add("carousel-stage-right");
	document.getElementById(arr[newCurrIndex]).classList.add("selected");
	setTimeout(function(){
		console.log(currIndex);
		document.getElementById(arr[newCurrIndex]).classList.add("carousel-show");
		document.getElementById(arr[currIndex]).classList.remove("carousel-left");
		currIndex = newCurrIndex;
	},400);
}


function stripCarouselClasses(id){
	let x = document.getElementById(arr[currIndex]).classList;
	x.remove("selected");
	x.remove("carousel-show");
	x.remove("carousel-stage-right");
	x.remove("carousel-stage-left");
}

function previous(){
	console.log("called next , index: "+ currIndex);
	stripCarouselClasses(currIndex);
	document.getElementById(arr[currIndex]).classList.add("carousel-right");
	
	var newCurrIndex =  currIndex-1 % arr.length ;
	if(newCurrIndex < 0){
		newCurrIndex = arr.length -1;
	}
	/*change dots*/
	document.getElementById(dotArray[currIndex]).classList.remove("selected");
	document.getElementById(dotArray[newCurrIndex]).classList.add("selected");
	/*stage new selected element*/
	document.getElementById(arr[newCurrIndex]).classList.add("carousel-stage-left");
	document.getElementById(arr[newCurrIndex]).classList.add("selected");
	setTimeout(function(){
		console.log(currIndex);
		document.getElementById(arr[newCurrIndex]).classList.add("carousel-show");
		document.getElementById(arr[currIndex]).classList.remove("carousel-right");
		currIndex = newCurrIndex;
	},400);
}
