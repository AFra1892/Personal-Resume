document.querySelector(".footer-right button").addEventListener("click",handleClick);

function handleClick(){
    alert("YOUR MESSAGE SUBMITTED ");
}

let currentSection = 0;

const sectionss = document.querySelectorAll('.section');

window.addEventListener('wheel',f);

function f(event){
    event.preventDefault();
    const delta = event.deltaY;
    if(delta >0 && currentSection < sections.length-1){
        currentSection++;
    }
    else if(delta<0 && currentSection>0){
        currentSection--;
    }
    sections[currentSection].scrollIntoView({behavior:'smooth'});
    
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
    sections.forEach(sec=>{
        let tip = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id')

        if(top>=offset && top < offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });
}
