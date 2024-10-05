// JavaScript to handle dropdown menu interaction

// Function to toggle the dropdown visibility on click
function toggleDropdown(event) {
    const dropdown = event.target.nextElementSibling;

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        // Close other open dropdowns
        closeAllDropdowns();
        dropdown.style.display = "block";
    }
}

// Close all dropdowns
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => dropdown.style.display = "none");
}

// Add click event listener to all menu items
const menuItems = document.querySelectorAll('.menu-item a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDropdown(event);
    });
});

// Close dropdown if clicking anywhere outside the menu
window.addEventListener('click', function(event) {
    if (!event.target.matches('.menu-item a')) {
        closeAllDropdowns();
    }
});

// Function to prevent default action and add smooth transitions for dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link from navigating immediately
        const url = this.href;  // Store the link URL
        closeAllDropdowns();    // Close the dropdown
        setTimeout(() => {
            window.location.href = url; // Navigate after a brief delay for smooth transition
        }, 200); // 200ms delay for smoothness
    });
});

// JavaScript to insert SVGs for minimize and close buttons

document.addEventListener("DOMContentLoaded", function () {
    // Insert SVG for minimize button
    const minimizeBtn = document.querySelector(".minimize-btn");
    minimizeBtn.innerHTML = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="2" fill="black" />
        </svg>
    `;

    // Insert SVG for close button
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.innerHTML = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="9" y2="9" stroke="black" stroke-width="2"/>
            <line x1="1" y1="9" x2="9" y2="1" stroke="black" stroke-width="2"/>
        </svg>
    `;

    // Add hover effects to the minimize and close buttons for full selection
    const buttons = document.querySelectorAll('.buttons span');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#dcdcdc'; // Hover effect for buttons
        });
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#f0f0f0'; // Default state for buttons
        });
    });
});