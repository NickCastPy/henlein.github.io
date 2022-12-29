navbar = document.querySelector('nav')
ham_btn = document.querySelector('.nav__ham')
nav = document.querySelector('.item__cont')
body = document.querySelector('body')
header = document.querySelector('.head')
body__container = document.querySelector('.body__container')
bar1 = document.querySelector('.first')
bar2 = document.querySelector('.second')
logo = document.querySelector('.logo')


// Hamburger Menu Animation

// Hide the navbar

let prev_scroll_p = window.pageYOffset;
window.onscroll = function() {
const curr_scroll_p = window.pageYOffset;
  if (prev_scroll_p > curr_scroll_p) {
    navbar.style.top = "0";
  }else {

    if(nav.classList.contains("active")){
      navbar.style.top = "0px";
    }else{
      navbar.style.top = "-71px";
    }
  }
  prev_scroll_p = curr_scroll_p;
  if(window.pageYOffset == 0){
    navbar.style.background = 'transparent'
    bar1.style.background = 'white'
    bar2.style.background = 'white'
    logo.style.color = 'white'
  } else{
    navbar.style.background = 'white'
    bar1.style.background = 'var(--grey)'
    bar2.style.background = 'var(--grey)'
    logo.style.color = 'var(--grey)'
  }
}

const ham_click = () => {
    if (nav.classList.contains("active")){
        // Appearance 
        nav.classList.remove("active");
        nav.style.transform = 'translateX(-101%)'
        body__container.style.filter = 'blur(0px)'
        // Form
        bar1.style.transform='rotate(0deg)'
        bar2.style.transform='rotate(0deg)'
        bar2.style.width='30px'
        bar2.style.margin=' 0 0 0 0'
        bar1.style.margin='0 0 10px 0'
        body__container.classList.remove('disable-scroll')
        body.classList.remove('disable-scroll')

    } else {
        // Appearance
        nav.classList.add('active')
        nav.style.transform = 'translateX(0%)'
        body__container.style.filter = 'blur(20px)'
        // Form
        bar1.style.transform='rotate(45deg)'
        bar2.style.transform='rotate(135deg)'
        bar2.style.width='40px'
        bar2.style.margin='-2px 0 0 0'
        bar1.style.margin='0 0 0 0'
        body.classList.add('disable-scroll')
        body__container.classList.add('disable-scroll')
    }
}

// Hotspot
const strap = document.querySelector('.strap')
const crystal = document.querySelector('.crystal')
const hands = document.querySelector('.hands')
const watch_case = document.querySelector('.case')

const strap_div = document.querySelector('.features__desc1')
const hands_div = document.querySelector('.features__desc2')
const watch_case_div = document.querySelector('.features__desc3')
const crystal_div = document.querySelector('.features__desc4')

active_desc = strap
strap.addEventListener('click', ()=>{
  strap_div.style.display = 'block';
  crystal_div.style.display = 'none';
  hands_div.style.display = 'none';
  watch_case_div.style.display = 'none';
  console.log('strap')
})
crystal.addEventListener('click', ()=>{
  crystal_div.style.display = 'block';
  strap_div.style.display = 'none';
  hands_div.style.display = 'none';
  watch_case_div.style.display = 'none';
  console.log('crystal_div')
})
hands.addEventListener('click', ()=>{
  strap_div.style.display = 'none';
  crystal_div.style.display = 'none';
  hands_div.style.display = 'block';
  watch_case_div.style.display = 'none';
  console.log('hands_div')
})
watch_case.addEventListener('click', ()=>{
  strap_div.style.display = 'none';
  crystal_div.style.display = 'none';
  hands_div.style.display = 'none';
  watch_case_div.style.display = 'block';
  console.log('watch_case_div')
})



