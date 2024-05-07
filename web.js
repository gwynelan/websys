document.addEventListener("DOMContentLoaded", function() {
    // Get references to the slider elements
    const sliderContent = document.querySelector('.slider-content');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const slides = sliderContent.querySelectorAll('img');
    let currentSlideIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(function(slide) {
            slide.style.display = 'none';
        });

        // Show the slide at the given index
        slides[index].style.display = 'block';
    }

    // Show the initial slide
    showSlide(currentSlideIndex);

    // Event listener for the previous button
    prevButton.addEventListener('click', function() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        showSlide(currentSlideIndex);
    });

    // Event listener for the next button
    nextButton.addEventListener('click', function() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    });
});
