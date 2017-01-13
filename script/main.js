'use strict';
var slideshow = {
	currentSlide: 0,
	slides: [
		{
			title: 'CD/DVD Production',
			image: 'http://lorempixel.com/600/300/technics/',
			text: 'From premastering and replication to custom packaging and technical support, we\'ll ensure your project runs seamlessly from start to finish.'
		},
		{
			title: 'USB Dulplication',
			image: 'http://lorempixel.com/600/300/technics/',
			text: 'Sed tincidunt maximus eros. Nam porttitor nulla at nunc porttitor, in tincidunt tellus placerat. Phasellus risus est, vulputate quis vestibulum.'
		},
		{
			title: 'Onsite Recording',
			image: 'http://lorempixel.com/600/300/technics/',
			text: 'Praesent malesuada orci in arcu faucibus commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et odio.'
		},
		{
			title: 'Additional Services',
			image: 'http://lorempixel.com/600/300/technics/',
			text: 'Maecenas condimentum non magna vitae tristique. Quisque sed faucibus est, a finibus dui. Praesent vehicula tellus tortor, non vehicula urna.'
		}
	],
	showSlide: function() {
		document.getElementById('carousel').querySelector('img')
			.setAttribute('src', this.slides[0].image);
		document.getElementById('carousel').querySelector('.text')
			.innerHTML = '<h4>'+ this.slides[0].title + '</h4>' + '<p>' + this.slides[0].text + '</p>';
	},
	nextSlide: function() {
		(this.currentSlide === this.slides.length-1) && (this.currentSlide = -1);
		this.currentSlide++;
		var next = this.currentSlide;
		console.log(next);
		document.querySelector('img')
			.setAttribute('src', this.slides[next].image);
		document.getElementById('carousel').querySelector('.text')
			.innerHTML = '<h4>'+ this.slides[next].title + '</h4>' + '<p>' + this.slides[next].text + '</p>';

	},
	prevSlide: function() {
		(this.currentSlide < 1) && (this.currentSlide = this.slides.length);
		this.currentSlide--;
		var prev = this.currentSlide;
		console.log(prev);
		document.querySelector('img')
			.setAttribute('src', this.slides[prev].image);
		document.getElementById('carousel').querySelector('.text')
			.innerHTML = '<h4>'+ this.slides[prev].title + '</h4>' + '<p>' + this.slides[prev].text + '</p>';
	}
};

slideshow.showSlide();
