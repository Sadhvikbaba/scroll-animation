const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkboxes);

checkboxes();

function checkboxes(){
     const triggerBottom = window.innerHeight/  5 * 4;

     boxes.forEach(box =>{
         const boxtop = box.getBoundingClientRect().top;

         if(boxtop < triggerBottom){
             box.classList.add('show');
         } else{
             box.classList.remove('show')
            }
     });
}
/*
*   getBoundingClientRect   ==>     returns size of an element and its position relative to
     viewport       has 8 properties left,top,right,bottom,x,y,width,height
*   addEventListner         ==>     event handler to an event
*   queryselectorAll        ==>     selects and class or id (returns a nodelist of elements match the
     specified groud of selectors)
 */