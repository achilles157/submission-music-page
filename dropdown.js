const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownLists = document.querySelectorAll('.dropdown-list');

dropdownButtons.forEach((button, index) => {
  button.addEventListener('click', event => {
    dropdownLists[index].classList.toggle('show');
  });
});

document.addEventListener('click', event => {
  if (!event.target.closest('.dropdown')) {
    dropdownLists.forEach(list => {
      list.classList.remove('show');
    });
  }
});