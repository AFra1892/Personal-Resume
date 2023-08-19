document.querySelector(".footer-right button").addEventListener("click",handleClick);

function handleClick(){
    alert("YOUR MESSAGE SUBMITTED ");
}

let currentSection = 0;

const sections = document.querySelectorAll('.section');

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
