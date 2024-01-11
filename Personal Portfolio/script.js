const timeout = 0;
const scroll = new LocomotiveScroll({

  el: document.querySelector('#main'),
  smooth: true

});

function firstPageAnimation() {
  let tl = gsap.timeline();
  tl.from(".navbar",
    {
      y: '-10',
      opacity: 0,
      duration: 1.6,
      ease: Expo.easeInOut,
    })
    .to(".boundingele",
      {
        y: '0',
        duration: 2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
      })
    .from(".homeFooter",
      {
        y: '-10',
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        opacity: 0
      })

}
const cursorcircle = (xScale ,yScale) => {
  window.addEventListener(
    "mousemove",
    function (dets) {
      document.querySelector(".cursorcircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale},${yScale})`;
    });
}

const cursorcircleskewfeature = () => {
  // define the default values
  let xScale = 0, yScale = 0, xprev = 0, yprev = 0;


//   on mousemovement calculate the diff btw the present location and the previous location on dat diff value, 
//  skew the circle which move along with the mouse  but make sure if the mouse has suddenly moved and 
//  the diff calculated is big den if that value is given to the skew , the circle might appear bigger
//   to avoid that we have to give the max and min values 
//   fr eg = set min value to be as 0.8 the circle should not be smaller den dis and max value 
//  is 1.2 the circle shud not be bigger den dis.
// so if we the diff is more then 1.2 den the value fr skew is 1.2 
// and if the difff is less then 0.8 then the skew value is 0.8  so this can be achived using a property called as clamp which is in gsap
// clamp(maxValue , minValue , value to want to clamp)
window.addEventListener("mousemove" , function(dets)
{
  clearTimeout(timeout);
  let diffX = dets.clientX - xprev;
  xprev = dets.clientX;
  let diffY = dets.clientY-yprev;
  yprev = dets.clientY
  xScale = gsap.utils.clamp(1.2 ,0.8 ,diffX)
  yScale = gsap.utils.clamp(1.2 ,0.8 ,diffY)

  cursorcircle(xScale,yScale);
  //add settimeout bcoz wen we der was a  mousemovement  and all of sudden the mouse was stopping 
  // the circle was not coming to its normalshape so we added the settimeout fucntion which runs after 100ms and brings the circle to normal

  timeout = setTimeout(function()
  {
     document.querySelector(".cursorcircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1)`;
  },100)
});
}

cursorcircleskewfeature();
cursorcircle()
firstPageAnimation()
// displaying the image when hovering over the project Section
 

  let rotate = 0
  document.querySelectorAll(".secondHeading").forEach(function (ele) {


    ele.addEventListener("mouseleave" , 
    function (details) {
       gsap.to(ele.querySelector("img"), {
         opacity:0,
         ease:Power3,
         duration:0.5,
         
       });
    });
  

    ele.addEventListener("mousemove" , 
     function (details) {
      //console.log(ele.getBoundingClientRect());
      // console.log(ele.getBoundingClientRect()) this give the values of the location of ele div where it is on the screen
        let Ydiff = (details.clientY - ele.getBoundingClientRect().top) ;
        let rotatedif = details.clientX-rotate;
        rotate = details.clientX;
        gsap.to(ele.querySelector("img"), {
          opacity:1,
          ease:Power3,
          top:Ydiff,
          left:details.clientX,
          rotate:gsap.utils.clamp(-20 ,20 , rotatedif*0.5),
        });
     });
  });

  





