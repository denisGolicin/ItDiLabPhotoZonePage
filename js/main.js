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
//         "Заявка с сайта!\n" +
//         "Имя: " + String(name) + "\n" +
//         "Телефон: " + String(phone) + "\n" +
//         "Способ связи: " + String(result) + "\n" +
//         "Тариф: " + str + "\n" +
//         "Комментарий: " + String(r)
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







