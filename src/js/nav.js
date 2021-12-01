// import React, {useRef} from 'react' 

// const nav = () => {
//     const humy = useRef(null);
//     const navhum = useRef(null);
//     const work = useRef(null);
//     const footer = useRef(null);
//     const body = useRef(null);
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default nav

// // navigation
// // function clicked(a,index){
// //     let dd = a.getAttribute("for");
// //     clearTimeout(animate);
// //     slideIndex = index;
// //     showSlides();
// //   }

//   let humy = document.getElementById("humy");
//   let navhum = document.getElementById("navhum");
//   let work = document.getElementById("work");
//   let footer = document.getElementById("footer");
//   let body = document.getElementsByTagName("body");

//   let checked = humy.checked;
//   humy.onclick =  function(){
//     if (humy.checked) {
//           navhum.style.transform= "translateX(0)";
//            work.style.filter   = "brightness(.25)";
//            footer.style.filter = "brightness(.25)";
//            body[0].style.overflowY  = "hidden";
//            work.style.cursor   = "default";
//            footer.style.cursor = "default";
      
//       work.onclick = function(){
//         clickoutsidebox()
//       }
//       footer.onclick = function(){
//         clickoutsidebox()
//       }
//     }
//     else {
//       clickoutsidebox()
//     } 

//   }

// function clickoutsidebox(){
//   navhum.style.transform= "translateX(-100%)";
//        humy.checked        = false;
//        work.style.filter   = "brightness(1)";
//        footer.style.filter = "brightness(1)";
//   body[0].style.overflowY  = "auto";
//        work.style.cursor   = "auto";
//        footer.style.cursor = "auto";
// }
