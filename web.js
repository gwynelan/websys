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



//UPDATED web.js//


document.addEventListener("DOMContentLoaded", function() {
    // Get references to the slider elements
    const sliderContent = document.querySelector('.slider-content');
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

    // Function to move to the next slide
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    // Show the initial slide
    showSlide(currentSlideIndex);

    // Automatically move to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
});


//menuscript.js//


document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    if (query) {
        document.getElementById('searchInput').value = query;
        searchRecipes(query);
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchRecipes(query);
});

function searchRecipes(query) {
    // Implement your search logic here and update the results list
    const results = document.getElementById('menu');
    const menuItems = document.getElementsByClassName('menu-item');
    
    // Loop through each menu item and check if it contains the search query
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        const title = menuItem.querySelector('h3').textContent.toLowerCase();
        const description = menuItem.querySelector('p').textContent.toLowerCase();
        
        // If the title or description contains the search query, display the menu item
        if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
            menuItem.style.display = 'block';
        } else {
            menuItem.style.display = 'none';
        }
    }
}
