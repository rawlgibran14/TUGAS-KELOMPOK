
document.title = "Pion Laundry - Layanan Terbaik";

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector(".display-4");
    const serviceText = document.querySelector(".lead");

  
    welcomeText.classList.add("fade-in");
    serviceText.classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector(".display-4");
    const serviceText = document.querySelector(".lead");

    welcomeText.classList.add("slide-in");
    serviceText.classList.add("slide-in");
});

document.addEventListener("DOMContentLoaded", function () {
    const layananButton = document.querySelector('.slide-in-left');
    
   
    layananButton.classList.add('slide-in-left');
});


















