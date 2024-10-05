function toggleDropdown(event) {
    const dropdown = event.target.nextElementSibling;

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        closeAllDropdowns();
        dropdown.style.display = "block";
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => dropdown.style.display = "none");
}

const menuItems = document.querySelectorAll('.menu-item a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        toggleDropdown(event);
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.menu-item a')) {
        closeAllDropdowns();
    }
});

const dropdownLinks = document.querySelectorAll('.dropdown a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.href;
        closeAllDropdowns();
        setTimeout(() => {
            window.location.href = url; // Navigate after a brief delay for smooth transition
        }, 200); // 200ms delay for smoothness
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const minimizeBtn = document.querySelector(".minimize-btn");
    minimizeBtn.innerHTML = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="2" fill="black" />
        </svg>
    `;

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.innerHTML = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="1" x2="9" y2="9" stroke="black" stroke-width="2"/>
            <line x1="1" y1="9" x2="9" y2="1" stroke="black" stroke-width="2"/>
        </svg>
    `;

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