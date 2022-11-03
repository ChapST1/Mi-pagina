const moon = document.getElementById('moon');

moon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.className == 'dark-mode') {
        moon.className = "fa-solid fa-sun";
        localStorage.setItem('DarkMode', 'on')
    } else {
        moon.className = "fa-solid fa-moon";
        localStorage.setItem('DarkMode', 'off')
    }
})

if (localStorage.getItem('DarkMode') == 'on') {
    document.body.classList.toggle('dark-mode');
    moon.className = 'fa-solid fa-sun'
} else {
    document.body.classList.remove('dark-mode');
    moon.className = 'fa-solid fa-moon'
}


