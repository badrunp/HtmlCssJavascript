const ul = document.querySelector('.navbar ul');
const tombol = document.querySelector('.tombol');
const svg1 = document.querySelector('.myskill .kotak-2 .svg.satu circle:nth-child(2)');
const svg2 = document.querySelector('.myskill .kotak-2 .svg.dua circle:nth-child(2)');
const svg3 = document.querySelector('.myskill .kotak-2 .svg.tiga circle:nth-child(2)');
const up = document.querySelector('.up');


tombol.addEventListener('click', function() {
	ul.classList.toggle('active');
});

svg1.style.strokeDashoffset = 440 - (440 * 52) / 100;
svg2.style.strokeDashoffset = 440 - (440 * 68) / 100;
svg3.style.strokeDashoffset = 440 - (440 * 44) / 100;

AOS.init({
	duration: 800,

});


window.addEventListener('scroll', function() {
	up.classList.toggle('active', window.scrollY > 500);
});

function geser() {
	window.scrollTo({
		top: 0, 
		behavior: 'smooth' 
	})
} 

