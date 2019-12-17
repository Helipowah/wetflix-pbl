//NAV STICKY DESKTOP ONLY
document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
    
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunction);
    
    //window.onscroll = function() {myFunction()};
    
    // Get the navbar
    var navbar = document.getElementById("menu");
    
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            menu.classList.add("fixed")
        } else {
            menu.classList.remove("fixed");
        }
    }
})

//NAV STICKY DESKTOP ONLY