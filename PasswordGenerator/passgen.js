const numberSet = "01234567890";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialSet = "@#$%^&*()!_" ;

const ramdomData = (dataset) =>
{
   return dataset[Number.parseInt(Math.random()*dataset.length)];
}

let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("nos");
let special = document.getElementById("spchar");
let finalpass = document.getElementById("passgen");
let length  = document.getElementById("length");
let passbox =document.getElementById("passgen");



const generatePassword = (password = "") =>
{
    
   
    if(upper.checked)
    {
        password += ramdomData(upperSet);
       
    }
     if(lower.checked)
    {
        password +=  ramdomData(lowerSet);
    }
     if(number.checked)
    {
        password +=ramdomData(numberSet);
    }
    if(special.checked){
        password +=  ramdomData(specialSet);
    }
    if(password.length < length.value)
    {   
      return  generatePassword(password);
    }

   
      passbox.innerHTML = truncatePassword(password);
    
}

truncatePassword=(password)=>
{
    if(password.length > length.value)
    {
        let substr = password.substring(0,length.value);
        // console.log(substr);
         return substr
    }
    else{
           return password
    }
}




