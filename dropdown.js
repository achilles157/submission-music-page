// Get the dropdown buttons and lists
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownLists = document.querySelectorAll('.dropdown-list');

// Add event listeners to the dropdown buttons
dropdownButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior
    dropdownLists[index].classList.toggle('show'); // Toggle the dropdown visibility
  });
});

// Close the dropdown if user clicks outside the dropdown area
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownLists.forEach((list) => {
      list.classList.remove('show'); // Hide all dropdowns
    });
  }
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetID = link.getAttribute('href').substring(1); // Get target ID
    const targetSection = document.getElementById(targetID);

    // Scroll into view with offset for the navbar height
    const navBarHeight = document.querySelector('.navbar-container').offsetHeight;
    const offset = navBarHeight + 20; // Add extra padding
    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
