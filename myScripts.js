/*Carousel on index page*/
var arr = ["one", "two", "three","four","five","six","seven","eight","nine"];
var dotArray = ["dot1", "dot2", "dot3","dot4","dot5","dot6","dot7","dot8","dot9"];
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

/* Automatic slideshow*/

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       /*slides[i].style.display = "none";  */
       slides[i].classList.add('hide');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    /*slides[slideIndex-1].style.display = "block";  */
    slides[slideIndex-1].classList.toggle('hide');
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function toggleMenu(){
	var container = document.getElementsByClassName('myContainer')[0];
	var menuBtn = document.getElementById('menu-btn');
	var menuContainer = document.getElementById('mobile-menu-container');
	container.classList.toggle("shift-left");
	menuBtn.classList.toggle("shift-left");
	menuContainer.classList.toggle("shift-left");

}