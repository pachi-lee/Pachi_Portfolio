const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showContent(){
    const main = document.querySelector('.main')
    main.style.display = 'block'
}
function removeContent(){
    const myprojects = document.querySelector('.myprojects')
    myprojects.style.display = 'none'
}
document.addEventListener("DOMContentLoaded", () => {
    const rotator = document.getElementById("rotator");
    const words = rotator.querySelectorAll("span");
    let index = 0;
  
    // show the first word
    words[index].classList.add("active");
  
    // on hover, flip to the next word
    rotator.addEventListener("mouseenter", () => {
      words[index].classList.remove("active");
      index = (index + 1) % words.length;
      words[index].classList.add("active");
    });
  });
  