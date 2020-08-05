const box = document.querySelector(".box");
const nav = document.querySelector(".navbar");



box.addEventListener("click", function() {
	nav.classList.toggle("active");
});


const jumbo = document.querySelector(".jumbotron");
const count = 500;
let i = 0;

while( i < 100) {
	const el = document.createElement("div");
	el.className = "bintang";
	const width = Math.floor(Math.random() * innerWidth);
	const height = Math.floor(Math.random() * innerHeight);
	const size = Math.random() * 2;
	const duration = Math.random() * 10;
	
	
	el.style.left = width +"px";
	el.style.top = height +"px";
	el.style.width = 1+size +"px";
	el.style.height = 1+size +"px";
	el.style.animationDuration = 5+duration+"s";
	el.style.animationDelay = duration+"s";
	
	jumbo.appendChild(el);
	i++;
} 

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
	const txtwrite = document.querySelector(".kardun");
	const words = JSON.parse(txtwrite.getAttribute("data-words"));
	const wait = txtwrite.getAttribute("data-wait");
	
	new textwrite(txtwrite, words, wait );
}