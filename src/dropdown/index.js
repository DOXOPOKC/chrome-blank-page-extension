'use strict'

const OPENED = 'visited-menu-drowdown-open';

const dropdownButtons = document.querySelectorAll('button.visited-menu');
const getOpenedValue = (node, className) => node.classList.contains(className);

const toggleDropdown = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const dropdownButtons = document.querySelectorAll('.visited-menu-drowdown');
  const isDropdownButton = getOpenedValue(e.target, 'visited-more-icon');

  dropdownButtons.forEach(dropdownButton => {
    const hasOpened = getOpenedValue(dropdownButton, OPENED);

    if (hasOpened && !isDropdownButton) {
      dropdownButton.classList.remove(OPENED);
    }
  });

  if (isDropdownButton) {
    const dropdownMenu = e.target.parentNode.parentNode.querySelector('.visited-menu-drowdown');

    if (getOpenedValue(dropdownMenu, OPENED)) {
      dropdownMenu.classList.remove(OPENED);
    } else {
      dropdownMenu.classList.add(OPENED);
    }
  }
};

dropdownButtons.forEach((dropdown) => {
  dropdown.addEventListener('click', toggleDropdown);
});

document.addEventListener('click', toggleDropdown);
