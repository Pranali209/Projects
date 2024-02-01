const container = document.getElementById('Logincontainer');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
 document.getElementById("btnsignIn").addEventListener("click" , ()=>{

    window.location.href='index.html'
 });

const ResumeBox = document.querySelector(".previewresume");
const formData = document.querySelector(".Resume-info");
const FormdetailsBox = document.querySelector(".details");
const ResumeDisplayBox=  document.querySelector(".previewresume")
const mainbox = document.querySelector(".main-content")

function ShowInfo(params) {
    
    const startYear = new Date(formData["WStartDate"].value).getFullYear();
    const endYear = new Date (formData["WEndDate"].value).getFullYear();
  
   const  EstartYear = new Date(formData["EStartDate"].value).getFullYear();
   const EendYear = new Date (formData["EEndDate"].value).getFullYear();

 
   const skillsPoint = formData["Skills"].value.split(",")
   let liElements = '';
   for (let i = 0; i < skillsPoint.length; i++) {
    liElements += `<li><p class="skill-title">${skillsPoint[i]}</p></li>`;
} 
    FormdetailsBox.style.display = "none";
    ResumeDisplayBox.style.display = "none"
    mainbox.style.opacity = "1"
    mainbox.innerHTML = `
    
    <section class="left-section">
    <div class="left-content">
    <div class="profile">
        <img src=${reader.result} alt="">
    </div>
    <h2 class="name">${formData["Fname"].value + ' '+ formData["Lname"].value}</h2>
     <p class="career">${formData["JobName"].value}</p>
    </div>
    <div class="contact-info">
    <h3 class="main-title">Contact Info</h3>
    <ul>
    <li>
        <i class="fa fa-phone"></i>
       ${formData["PhoneNumber"].value}
    </li>
    <li>
   <i class="fa fa-fax"></i>
        ${formData["EmailId"].value}
           </li>
           <li>
           <i class="fa fa-map-marker"></i>
           ${formData["Country"].value + ' '+ formData["City"].value}
       </li>
       <li>
       <i class="fa-brands fa-linkedin"></i>
       ${formData["Link"].value}
      </li>
       </ul>
       </div>
       <div class="skills-section">
       <h3 class="main-title">Skills</h3>
       <ul>   
       ${liElements}
       </ul>
</div>
    </section>
    <section class="right-section">
    <div class="right-main-content">
        <section class="about sect">
            <h2 class="right-title"> Summary</h2>
            <p class="para">
            ${formData["summary"].value}
            </p>
        </section>
        <section class="experince sect">
        <h2 class="right-title">Experience</h2>
        <div class="timeline">
            <div class="left-tl-content">
                <h5 class="tl-title"> ${formData["Cname"].value}</h5>
                <p class="para"> ${startYear +'-'+ endYear}</p>
            </div>
            <div class="right-tl-content">
                <div class="tl-content">
                    <h5 class="tl-title-2"> ${formData["JobTitle"].value}</h5>
                    <p class="para">
                    ${formData["workExp"].value} 
                    </p>
                </div>
            </div>
        </div>
       
    </section>
    <section class="education sect">
    <h2 class="right-title">Education</h2>
    <div class="timeline">
        <div class="left-tl-content">
            <h5 class="tl-title"> ${formData["ClgName"].value} </h5>
            <p class="para"> ${EstartYear +'-'+ EendYear}</p>
        </div>
        <div class="right-tl-content">
            <div class="tl-content">
                <h5 class="tl-title-2">Gcse's</h5>
                <p class="para">
                ${formData["EdcExp"].value} 
                </p>
            </div>
        </div>
    </div>
</section>

`

}
 function printtheresume(params) {
   window.print()
 }
