const page = document.querySelector(".page");
const toggle = document.querySelector("toggle-input");
toggle.addEventListener("change", toggleTheme);
function toggleTheme(){
    if(toggle.checked){
        page.classList.replace('light', 'dark');
    }else{
        page.classList.replace('dark', 'light');
    }
    if(page.classList.contains('light')){
        toggleIcon.src = './moon.png';
        toggleIcon.alt = 'Switch to Dark Mode';
    }else{
        toggleIcon.src = './sun.png';
        toggleIcon.alt = 'Switch to Light Mode'
    }
    localStorage.setItem("checked", toggle.checked);
}
function setCheckedState(){
    if(!(localStorage.checked == undefined)){
        toggle.checked = (localStorage.getItem("checked")=="true");
        toggleTheme();
    }
}