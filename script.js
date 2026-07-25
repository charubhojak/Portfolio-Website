// Smooth scrolling for navbar links

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});