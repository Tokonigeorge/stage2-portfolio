let nameMessage = "My name is Bukola Ebikefe. Slack username: Ishtar."
console.log(nameMessage);
alert(nameMessage);

let arrow = document.querySelector('.fa-caret-down');
const txt =  'CODE-SLEEP-EAT-CODE-SLEEP-EAT-REPEAT!';
let windowHeight = window.innerHeight;
let arrowDown = document.querySelector('.fa-angle-up');

const rotateText = (radius, text, origin)=> {
let classIndex = document.getElementsByClassName(`rotate-text`)[0],
deg = 360/txt.length;

[...text].forEach(i=> {
    i = `<p class="rotated-text" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${i}</p>`;
    classIndex.innerHTML += i;
    origin += deg;
})

}
rotateText(1000, txt , 0);


document.addEventListener('scroll', function(){
    rotateOnScroll();
    stopArrowAnimation();
})

function rotateOnScroll (e){
    if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        let scrollY = document.body.scrollTop || document.documentElement.scrollTop,
         deg = 360/txt.length;
        document.querySelectorAll('.rotated-text').forEach(i=> {
            i.style.transform = `rotate(${scrollY}deg)`;
            scrollY +=deg;
        })
    }
}

function stopArrowAnimation (e){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){arrow.classList.remove('animate');}
    else{arrow.classList.add('animate');}   
}



document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.querySelector('.circle-cursor');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

const displayTime = ()=>{
    let time = new Date;
    document.querySelector('.display-time').textContent = time.toLocaleString('en-US', { hour : 'numeric', minute: 'numeric', hour12: true});
}

displayTime();


arrow.addEventListener('click', scrollDown);

function scrollDown(e) {
    // let windowHeight = window.innerHeight;
    window.scrollTo({top: windowHeight, behavior: 'smooth'}); 
}

arrowDown.addEventListener('click', scrollUp);

function scrollUp(e) {
    window.scrollTo({top: 0, behavior: 'smooth'});
}








