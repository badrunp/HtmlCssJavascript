const box = document.querySelector(".box");
const nav = document.querySelector(".nav");
const geser = document.querySelector(".container");
box.addEventListener("click", function() {
	nav.classList.toggle("active");
	this.classList.toggle("left");
	geser.classList.toggle("geser");
});


const textwrite = function(txtwrite, words, wait = 3000) {
	this.txtwrite = txtwrite;
	this.words = words;
	this.txt = '';
	this.txtindex = 0;
	this.wait = parseInt(wait, 0);
	this.type();
	this.ideleting = false
} 

textwrite.prototype.type = function() {
	
	const test = this.txtindex % this.words.length;
	const fulltxt = this.words[test];
	
	if(this.ideleting) {
		this.txt = fulltxt.substring(0, this.txt.length -1);
	}else{
		this.txt = fulltxt.substring(0, this.txt.length +1);
	} 
	
	this.txtwrite.innerHTML = '<span class="txt">'+ this.txt +'</span>';
	
	let typespeed = 400;
	if(this.ideleting) {
		typespeed /= 2;
	} 
	
	if(!this.ideleting && this.txt === fulltxt) {
		typespeed = this.wait;
		
		this.ideleting = true;
	}else if(this.ideleting && this.txt === "" ) {
		this.ideleting = false;
		
		this.txtindex++;
		
		typespeed = 1000;
		
	} 
	
	
	setTimeout(() => this.type(), typespeed);

} 


document.addEventListener("DOMContentLoaded", init);


function init() {
	const txtwrite = document.querySelector("#text");
	const words = JSON.parse(txtwrite.getAttribute("data-words"));
	const wait = txtwrite.getAttribute("data-wait");
	
	new textwrite(txtwrite, words, wait );
}