// Preloader with delaay
const preloader = document.getElementById('loading');
setTimeout(function myFunction() {
    preloader.style.display = 'none';
}, 1000)


// Hamburger Menu
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}
hamburgerButton.addEventListener('click', toggleButton)


// Fancy Text Hero Section
const text = document.querySelector('.fancy');
console.log(text)
const stringText = text.textContent
console.log(stringText)
text.textContent = ''

const splitText = stringText.split('')
console.log(splitText)
for(let i =0; i< splitText.length;i++){
    text.innerHTML+= "<span>"+ splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50)

function onTick(){
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if(char === splitText.length){
        complete()
        return
    }
}

function complete(){
    clearInterval(timer)
    timer = null
}
