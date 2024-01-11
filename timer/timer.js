// bcoz 1000 mils  = 1 sec
//  1sec =  60 min
//  60 min = 1 hrs 
//  by divinding by 1000 ,60 ,60



function clk() {
    var Largerdate = new Date();
    var smallerdate = new Date();
    var realasedate = "28 November 2023 7:09 PM"
    let endate = document.getElementById("relasedate");
    endate.innerHTML = realasedate;

    let inputs = document.getElementsByTagName('input');
    // setting the date as per the realse date 
    let myDate = new Date(realasedate);
    let todayDate = new Date();


    if (myDate >= todayDate) {
        Largerdate = myDate;
    }
    else {
        smallerdate = todayDate;
    }

    let datediff = Largerdate - smallerdate;
    if(datediff<0) return

    inputs[0].value = myDate.getDate() - todayDate.getDate();
    inputs[1].value = Number.parseInt(datediff / (1000 * 60 * 60));
    inputs[2].value = Number.parseInt(datediff / (1000 * 60));  
    inputs[3].value = Number.parseInt(datediff / 1000);

    if (inputs[3].value == 0) {
        
        let div2 = document.getElementById("col");
         div2.style.display = "none";
         let div1 = document.getElementsByClassName("overlay");
         div1[0].style.backgroundImage = 'url("https://i.gifer.com/origin/09/09d203a3fd8c0667a58603018409a394_w200.gif")';
       
    }
   

}

clk();

setInterval(() => {
    clk();
}, 1000)




//   hrs.value =   myDate.getHours() - todayDate.getHours();









