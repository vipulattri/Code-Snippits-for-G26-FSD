document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-container button");
    const searchInput = document.querySelector(".search-container input");
    
    searchButton.addEventListener("click", () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery === "") {
            alert("Please enter a destination");
            return;
        }
        
        alert(`Searching for hotels in ${searchQuery}...`);
    });
    
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Feature coming soon!");
        });
    });
});
