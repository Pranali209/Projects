const box = document.getElementById("main");
let counter = 0;
const slide = document.querySelectorAll(".slider");
console.log(slide);
function slider(params) {
   
    
    slide.forEach(
        (image1 , index)=>
        {
           image1.style.left = `${index * 100}%`;
        }
    )
}

const next=()=>
{
    counter++;
    alert(counter);
    slideImage();
}
const slideImage = () => {
    slide.forEach(
        (image) => {
            image.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
// slider()