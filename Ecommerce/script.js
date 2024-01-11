let mainbox = document.querySelector(".newArrival");
let counter = 0;
let cartArr =[]
const cart = document.getElementById("tableToCart");
dataInsideTheCart = [];
let slide = document.querySelectorAll(".newArrivalSection");
let Tshirts = ['images/p1.jpg', 'images/p2.jpg', 'images/p3.jpg', 'images/p4.jpg', 'images/p5.jpg', 'images/p6.jpg', 'images/P7.jpg'
    , 'images/P8.jpg'];
let Shirts = ['images/n2.webp', 'images/n3.jpg', 'images/n4.jpg', 'images/n5.jpg', 'images/n7.jpg', 'images/n8.jpg'];
let pants = ['images/pant1.jpg', 'images/pant2.jpg', 'images/pant3.webp', 'images/pant4.webp'];
const showslide = () => {
    slide.forEach(
        (image1, index) => {
            image1.style.left = `${index * 100}%`;
        }
    )
}

showslide()

document.querySelector(".hamburger").addEventListener("click",
    function (params) {
        document.querySelector(".navlinks").style.display = "flex";
        document.querySelector(".navlinks").style.right = `262px`;
        document.querySelector(".navlinks").style.top = `-4px`;
    })

document.querySelector(".closeburger").addEventListener("click",
    function (params) {
        document.querySelector(".navlinks").style.display = "none";
    });





// single product page
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}




// let product = document.querySelector(".products");
let ImageList = document.querySelectorAll(".productList");
ImageList.forEach(
    (ele) => {
        ele.addEventListener("click", function (eve) {
            // using object destructing to retrieve the values
            const { src } = this.querySelector('.PImage');
            const { textContent: ProductName } = this.querySelector('h5');
            const { textContent: ProductBrand } = this.querySelector('p');
            const { textContent: ProductPrize } = this.querySelector('span');
            localStorage.setItem("Image", src);
            localStorage.setItem("ProductName", ProductName);
            localStorage.setItem("ProductBrand", ProductBrand);
            localStorage.setItem("ProductPrize", ProductPrize);
            window.location.href = "Sproduct.html";
        });
    }
)



const DisplayImage = () => {
    let currentImg1 = localStorage.getItem("Image");
    let details = document.querySelectorAll(".Pdetails")
    details.forEach(
        (ele) => {
            ele.querySelector("h4").innerHTML = localStorage.getItem("ProductName");
            ele.querySelector("h5").innerHTML = localStorage.getItem("ProductBrand");
            ele.querySelector("span").innerHTML = localStorage.getItem("ProductPrize");
        }
    )
    document.querySelector(".Simage").src = currentImg1;
    let subDiv = document.querySelectorAll(".subImages");
    if (currentImg1.includes("P")) {
        // Shuffle the Tshirts array
        shuffleArray(Tshirts);

        // Display images sequentially
        subDiv.forEach((img, index) => {
            img.setAttribute('src', Tshirts[index]);
        });
    }
    else if (currentImg1.includes("pant")) {
        // Shuffle the pants array
        shuffleArray(pants);

        // Display images sequentially
        subDiv.forEach((img, index) => {
            img.setAttribute('src', pants[index]);
        });
    }
    else if (currentImg1.includes("n")) {
        // Shuffle the Shirts array
        shuffleArray(Shirts);

        // Display images sequentially
        subDiv.forEach((img, index) => {
            img.setAttribute('src', Shirts[index]);
        });
    }

}


// add to cart button coding
// const btnAddToCart = document.getElementById("AddToCart");
// console.log(btnAddToCart);

cartArr = JSON.parse(localStorage.getItem("cart")) || [];
const cartDisplay = () => {
    let proImage = localStorage.getItem("Image");
    console.log(cartArr);
    // console.log(ValuePresentInCart);
    if (cartArr.length <= 0) {
        cartArr = [{
            productImage: localStorage.getItem("Image"),
            productName: localStorage.getItem("ProductName"),
            productPrice: localStorage.getItem("ProductPrize"),
            quantity: 1
        }]
    }
   else
   {
      let ValuePresentInCart = cartArr.findIndex(ele => ele.productImage === proImage);
      console.log(ValuePresentInCart);
      if (ValuePresentInCart == -1) {
        cartArr.push({
            productImage: localStorage.getItem("Image"),
            productName: localStorage.getItem("ProductName"),
            productPrice: localStorage.getItem("ProductPrize"),
            quantity: 1
        })
    }
     
    else {
        cartArr[ValuePresentInCart].quantity =(Number.parseInt (cartArr[ValuePresentInCart].quantity)) + 1;
        console.log(cartArr[ValuePresentInCart].quantity);
    }
   }
    localStorage.setItem("cart", JSON.stringify(cartArr));
    console.log(cartArr);
    window.location.href = "cart.html";
}

 const displayInsidecartpage = ()=>
 {
    let Stotal = document.querySelector("#CartSubtotal");
    let carSubtotal = document.createElement("td");
     dataInsideTheCart = JSON.parse(localStorage.getItem("cart"));
     console.log( dataInsideTheCart);
     dataInsideTheCart.forEach(
        (ele) =>
        {
            let cartRow = document.createElement("tr");
            cartRow.innerHTML += `
            <td><i id="RemoveFrmCart" class="far fa-times-circle" ></i></td>
                        <td><img src="${ele.productImage}" alt=""></td>
                        <td>${ele.productName}</td>
                        <td>${ele.productPrice } <i class="fa fa-inr cart" aria-hidden="true"></i></td>
                        <td>${ele.quantity}</td>
            `
            cart.appendChild(cartRow);
        }
     )
     let sum=0;
     for(let i of dataInsideTheCart){
        sum+= Number.parseInt(i.productPrice)*Number.parseInt(i.quantity);
        }
         carSubtotal.innerHTML += sum;
         Stotal.appendChild(carSubtotal);
         let Totals = document.querySelector("#Carttotal");
        let totalRow =  document.createElement("td");
         totalRow.innerHTML += sum;
         Totals.appendChild(totalRow);


         let removeItem = document.getElementById("RemoveFrmCart");
         removeItem.addEventListener('click',function(e){
            console.log(e.target);
             let parentNode = this.parentNode.parentNode ;
             console.log(parentNode)
             parentNode.remove()
            //  cartArr.removeItem(parentNode);

           })
         }
 
//delete from the cart page



// removeItem.addEventListener('click', function(event){
//    console.log(event.target);
   

// })

let mainImage = document.querySelector(".Simage");
let images = document.querySelectorAll(".subImages");
images.forEach(
    (ele) => {
        ele.addEventListener("click", function (element) {
            mainImage.setAttribute('src', element.srcElement.currentSrc);
        })
    }
)


