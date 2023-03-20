// Changes NavBar styles on scroll 

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)  
})

// Show/Hide Nav Menu 

const menu = document.querySelector(".navMenu")
const menuBtn = document.querySelector("#openMenuBtn")
const closeBtn = document.querySelector("#closeMenuBtn")


menuBtn.addEventListener( 'click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// Close Nav Menu 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)

