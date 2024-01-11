// the problem is dat ki if we move on the div where we want images to pop everytime we move we need to create a div
// and den display the image in that div but as have mousemove eventlistener div will get created on every mousemove 
// the number of div's created wil be more then 100 which we dont want hence we add a throttling function in dis
//where we run the code (whoes execuetions has to be only fr few times irrrespective of the emouse movement) that code w
// we write inside the function in the below example the welcome is printed only after 500ms irrespective how much 
// we move the mouse on the heading div
// throttling : to reduce the execuetion of the  one particular function 

var arr = [`images/movie1.jpg` ,`images/movie2.jpg`,`images/movie3.jpg`,`images/movie4.jpg`,`images/movie5.jpg`,
`images/movie6.jpeg`,`images/movie7.jpg`,`images/movie8.jpg`,`images/movie9.jpg`,`images/movie10.jpg`
]
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}


document.querySelector("#heading").addEventListener("mousemove", throttleFunction((dets) => {
    let divele = document.createElement('div');
    let image = document.createElement('img');
    let num = Number.parseInt(Math.random() * arr.length) ;
    image.setAttribute("src", arr[num]);

    divele.classList.add('imagepop');

    divele.style.left = `${dets.clientX}px`;
    divele.style.top = `${dets.clientY}px`;


    divele.appendChild(image);

    document.querySelector("#heading").appendChild(divele);
    gsap.to(image, {
        y: "0",
        ease: Power1,
        duration: 0.6,
    })
    gsap.to(image, {
        y: "100%",
        ease: Power2,
        delay: 0.6,
    })
    

    setTimeout(function (params) {
        divele.remove()
    }, 2000)
},300)
)

const PopularAPIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const RecentAPIURL = 
"https://api.themoviedb.org/3/trending/all/day?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const getMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        showPopularMovie(data.results);
    }

   

 document.querySelector(".btn2").addEventListener("click" , function () {
    document.querySelector(".btn1"). classList.remove("active");
    document.querySelector(".btn2").classList.add("active");
    document.getElementById("subpage").innerHTML="";
    getMovies(PopularAPIURL)
 })

 document.querySelector(".btn1").addEventListener("click" , function () {
    document.querySelector(".btn2").classList.remove("active");
    document.querySelector(".btn1").classList.add("active");
    document.getElementById("subpage").innerHTML="";
    getMovies(RecentAPIURL)
 })

 const showPopularMovie = (data)=>
 {
 
    data.forEach((item)=>
    {
        let imagediv = document.createElement("div");
        imagediv.classList.add("moviedisplay");
        
        let image = document.createElement("img");
        image.classList.add("showmovie");
        image.setAttribute("src" , `${IMGPATH+item.poster_path}`)  ;

        let title = document.createElement("p");
        title.textContent = item.original_title;

        let rating = document.createElement("p");
        rating.textContent = item.vote_average;

       
       imagediv.appendChild(image);
       imagediv.appendChild(title);
       imagediv.appendChild(rating);
       document.getElementById("subpage").appendChild(imagediv); 
    })
   
 }


 document.getElementById("btnsearchmovie").addEventListener("click" , function () {
  
    document.getElementById("subpage").innerHTML="";
    var userInput = document.getElementById("search").value;
    
    getMovies(SEARCHAPI+userInput);
 })

 




 