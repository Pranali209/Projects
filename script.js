// let arr = []
let arr = JSON.parse(localStorage.getItem("Names"))
function callme(params) {
    let arr = ["rani"]
    // arr.push(["raju"])
    localStorage.setItem("Names", JSON.stringify(arr));
    window.location.href = "tp2.html" 
}
    
    



function called(params) { 
    let myarr = JSON.parse(localStorage.getItem("Names"))
    let mydiv = document.getElementById("list"); 
    myarr.forEach(ele=> {
        console.log(ele);
        let li = document.createElement('tr');
        li.innerHTML += `<td class="disco">${ele}</td>`                   
        mydiv.appendChild(li);
       
    });
   
}

let dis = document.querySelector(".disco");
console.log(dis);
