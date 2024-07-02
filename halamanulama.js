function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Close the menu after clicking a link (for mobile)
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}

// Ensure the home section is shown on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Function to toggle the menu in mobile view
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Function to show the correct section and hide others
function showSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Close the menu after clicking a link (for mobile)
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}

// Ensure the home section is shown on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    topFunction();
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

