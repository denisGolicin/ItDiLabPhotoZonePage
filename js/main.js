//varible

//=======================================

// window.addEventListener('resize', function() {
//     if(window.matchMedia('(max-width: 767px)').matches) {
        
//     }
//     else{
        
//     }
// }, true);


// let h = document.querySelector('.block-team');
// h.addEventListener('touchstart', handleTouchStart5, false);        
// h.addEventListener('touchmove', handleTouchMove5, false);

// function getTouches5(evt) {
// return evt.touches ||             // browser API
//         evt.originalEvent.touches; // jQuery
// }                                                     
                                                                        
// function handleTouchStart5(evt) {
//     const firstTouch = getTouches5(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                
                                                                        
// function handleTouchMove5(evt) {
//     if(!isMobile) return;
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                        
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* right swipe */ 
            
//         } else {
//             /* left swipe */
            
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };

// let tg = {
//     token: "", 
//     chat_id: "" 
// }
// let sendTg = document.getElementById('sendTg');
// sendTg.addEventListener("click", function(e){
//     e.preventDefault();

//     let info = document.forms.forma;
//     let name = info.elements.namr.value;
//     let phone = info.elements.phoneE.value;

//     sendMessage(
//         "???????????? ?? ??????????!\n" +
//         "??????: " + String(name) + "\n" +
//         "??????????????: " + String(phone) + "\n" +
//         "???????????? ??????????: " + String(result) + "\n" +
//         "??????????: " + str + "\n" +
//         "??????????????????????: " + String(r)
//     );
//     // reset varible
//     // delay form
// })
// // https://api.telegram.org/bot715125500:5256737385:AAHlQd83rrsgc5vwjL0k-6mDYfsz7J_ZD7I/sendMessage?chat_id=-1001212271187&parse_mode=HTML&text=test
// function sendMessage(text)
// {
//     const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
//     const obj = {
//         chat_id: tg.chat_id, // Telegram chat id
//         text: text // The text to send
//     };
//     const xht = new XMLHttpRequest();
//     xht.open("POST", url, true);
//     xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//     xht.send(JSON.stringify(obj));

    
// }

let portfolioElement = [];
portfolioElement = document.querySelectorAll('.portfolio-item');
const portfolioWp = document.querySelector('.portfolio-pd');
const mainBlock = document.querySelector('.main-wrapper');
const projectAnim = document.querySelector('.project-anim');

const samaraButton = document.querySelector("#samaraButton");
const samara = document.querySelector("#samara");
const samaraOpen = document.querySelector("#samaraOpen");

samaraButton.addEventListener('click', function(){
    samara.style.display = 'none';
    scrollStatus(true);
})
samaraOpen.addEventListener('click', function(){
    samara.style.display = 'block';
    videoSelfi.style.display = 'none';
    avangard.style.display = 'none';
    led.style.display = 'none';
    scrollStatus(false);
})
//================================================================
const videoSelfiButton = document.querySelector("#videoSelfiButton");
const videoSelfi = document.querySelector("#videoSelfi");
const videoSelfiOpen = document.querySelector("#videoSelfiOpen");

videoSelfiButton.addEventListener('click', function(){
    videoSelfi.style.display = 'none';
    scrollStatus(true);
})
videoSelfiOpen.addEventListener('click', function(){
    samara.style.display = 'none';
    videoSelfi.style.display = 'block';
    avangard.style.display = 'none';
    led.style.display = 'none';
    scrollStatus(false);
})
//===================================================================
const ledButton = document.querySelector("#ledButton");
const led = document.querySelector("#led");
const ledOpen = document.querySelector("#ledOpen");

ledButton.addEventListener('click', function(){
    led.style.display = 'none';
    scrollStatus(true);
})
ledOpen.addEventListener('click', function(){
    samara.style.display = 'none';
    videoSelfi.style.display = 'none';
    avangard.style.display = 'none';
    led.style.display = 'block';
    scrollStatus(false);
})
//===================================================================
const avangardButton = document.querySelector("#avangardButton");
const avangard = document.querySelector("#avangard");
const avangardOpen = document.querySelector("#avangardOpen");

avangardButton.addEventListener('click', function(){
    avangard.style.display = 'none';
    scrollStatus(true);
})
avangardOpen.addEventListener('click', function(){
    samara.style.display = 'none';
    videoSelfi.style.display = 'none';
    avangard.style.display = 'block';
    led.style.display = 'none';
    scrollStatus(false);
})
//===================================================================

function scrollStatus(status){
    if(status){
        mainBlock.style.overflowY = 'auto';
    } else {
        mainBlock.style.overflowY = 'hidden';
    }
}


let scrollPortfolio = false;
let scrollProjectAnim = false;

if(portfolioElement.length > 5){
    portfolioWp.classList.remove('pr-modif');
} 

mainBlock.addEventListener('scroll', function() {
    const posTopPortfolio = portfolioWp.getBoundingClientRect().top;
    const posTopProjectAnim = projectAnim.getBoundingClientRect().top;
    //console.log(posTop)

    
    
    //console.log(mainBlock.scrollTop)

    if(posTopPortfolio < mainBlock.scrollTop - 200 && !scrollPortfolio){
        console.log('portfolioScroll');
        portfolioWp.classList.add('resetTop');
        scrollPortfolio = true;
    }
    if(posTopProjectAnim < mainBlock.scrollTop + 400 && !scrollProjectAnim){
        console.log('ProjectAnim');
        projectAnim.classList.add('resetTop');
        scrollProjectAnim = true;
    }
    
    
    // ???????? ???????????? ?????????????? ?????????????? ???????????? (?????? ????????)
    // elem.classList.toggle('visible', posTop <= 0);
    
    // ???????? ???????????? ???????????????????? ?????????? (?????? ????????)
    // elem.classList.toggle('visible', posTop < window.innerHeight);
    
    // ???????? ?????????????? ?????????????????? ?? ?????????????? ????????
    //elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
  });

document.addEventListener("DOMContentLoaded", function(){
    console.log('loaded');
});






