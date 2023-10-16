document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode');
    const html = document.querySelector('html');
    var inputDarkMode = document.getElementById('input-dark-mode');

    if (darkModeStorage) {
        html.setAttribute("dark", "true");
        inputDarkMode.checked = true;
        document.querySelector(".img").src = "sun-icon.png";
    }

    inputDarkMode.addEventListener('change', () => {

        if (inputDarkMode.checked) {
            html.setAttribute("dark", "true");
            localStorage.setItem('dark-mode', true);
            document.querySelector(".img").src = "sun-icon.png";

        } else {
            html.removeAttribute("dark");
            localStorage.removeItem('dark-mode');
            document.querySelector(".img").src = "moon-icon.png";
        }
    });
})

document.getElementById("menuIcon").addEventListener("click", function () {
    var dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

document.getElementById("menuzinho").addEventListener("click", function () {
    var drop = document.querySelector(".dropdown");
    if(drop.style.display ==="block")
    {
        drop.style.display = "none";
    }
});


$(function() {
    var duracao = 600;
    var intervalo = 2400;
 
    setInterval(function() {
       $('.carrossel>*:first-child').animate({'margin-left': '-100%'}, duracao, 'linear',
          function() {$(this).appendTo(this.parentElement).css('margin-left', '0');}
       )
    }, intervalo);
 })