document.addEventListener('DOMContentLoaded', () => {



    nextButton.addEventListener('click', () => {
        galleryImages.scrollBy({
            top: 0,
            left: galleryImages.clientWidth,
            behavior: 'smooth'
        });
    });
});

function Buttonclick(button,) {
    button.classList.toggle('clicked');
}


let slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
	displaySlide(slideIndex += n);
}

function activeSlide(n) {
	displaySlide(slideIndex = n);
}

function displaySlide(n) {
	let i;
	let totalslides =
		document.getElementsByClassName("slide");
	let totaldots =
		document.getElementsByClassName("footerdot");

	if (n > totalslides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = totalslides.length;
	}
	for (i = 0; i < totalslides.length; i++) {
		totalslides[i].style.display = "none";
	}
	for (i = 0; i < totaldots.length; i++) {
		totaldots[i].className =
			totaldots[i].className.replace(" active", "");
	}
	totalslides[slideIndex - 1].style.display = "block";
	totaldots[slideIndex - 1].className += " active";
}

// Only One button Program

const buttons = document.querySelectorAll('.model-selection');

buttons.forEach(button => {
    button.addEventListener('click', () => {
		buttons.forEach(btn => btn.classList.remove('clicked'));
		button.classList.add('clicked');
	});
});
