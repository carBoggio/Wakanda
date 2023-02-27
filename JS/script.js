const toggle = document.querySelector(".logo-ham__img");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const carusel = document.querySelector(".box-4-carousel-container");



toggle.addEventListener("click", () => {
    nav.classList.toggle("rigth");
        if (nav.classList.contains("rigth")){
            body.classList.remove("hidden");
           
        }
        else {
            body.classList.add("hidden");
            
        }
        
    });
    
