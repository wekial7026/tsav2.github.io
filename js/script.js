function textAppear(){
  const text = document.querySelector('#para1');

  let textPosition = text.getBoundingClientRect().top;

  let screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear');
  }
}
function textAppear2(){
  const text = document.querySelector('#para2');

  let textPosition = text.getBoundingClientRect().top;

  let screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear2');
  }
}

let nav = document.querySelector('nav');
let banner = document.querySelector('.banner');
let bannerHeight = banner.getBoundingClientRect().bottom;


window.addEventListener('scroll', function(event){
  event.preventDefault();
  if(window.scrollY >= bannerHeight) {
    nav.style.backgroundColor = '#3155A4';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});

window.addEventListener('scroll', textAppear);
window.addEventListener('scroll', textAppear2);
