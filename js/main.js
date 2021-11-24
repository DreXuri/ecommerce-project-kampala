
$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse')
    })
})
// <---------------auto typing on main--------------->
   let displayField = document.getElementById("typing");
   let arrayList = [
     " you.",
     " bold.",
     " African.",
   ];
   let index = 0; /////first letter///
   let word = 0; ////first word///

   function type() {
     if (index < arrayList[word].length) {
       displayField.innerHTML = arrayList[word].slice(0, index + 1);
       index++;
       setTimeout(type, 150);
     } else {
       setTimeout(erase, 100);
     }
   }
   function erase() {
     if (index > 0) {
       displayField.innerHTML = arrayList[word].substr(0, index - 1);
       index--;
       setTimeout(erase, 250);
     } else {
       word++;
       if (word >= arrayList.length) word = 0;
       { setTimeout(type, 1250);}
     }
   }
   type();
// <---------------auto typing on main--------------->

// <---------------owl carousel--------------->
$(".owl-carousel").owlCarousel();
