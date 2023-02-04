const page = document.querySelector('.page');
const toggle = page.querySelector('.toggle-input');
const toggleIcon = page.querySelector('.toggle-icon');

setCheckedState();

function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggle.checked = isTrue(localStorage.getItem('checked'));
    toggleTheme();
  }
}

function toggleTheme() {
  replaceClass();
  toggleIconTheme();
  updateLocalStorage();
}

function replaceClass() {
  if (toggle.checked) {
    page.classList.replace('light', 'dark');
  } else {
    page.classList.replace('dark', 'light');
  }
}

function toggleIconTheme() {
  if (page.classList.contains('light')) {
    toggleIcon.src = './images/moon.svg';
    toggleIcon.alt = 'Switch to Dark Mode';
  } else {
    toggleIcon.src = './images/sun.svg';
    toggleIcon.alt = 'Switch to Light Mode';
  }
}

function updateLocalStorage() {
  localStorage.setItem('checked', toggle.checked);
}

function isTrue(value) {
  return value === 'true';
}

toggle.addEventListener('change', toggleTheme);