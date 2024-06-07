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
