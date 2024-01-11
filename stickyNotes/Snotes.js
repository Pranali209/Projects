const addNote = document.getElementById("btnaddnote")
const main = document.querySelector(".main");

addNote.addEventListener(
    "click" ,
    function (params) {     
       addNoteNow()
    }
)

const addNoteNow =(text = "") =>
{
    const note = document.createElement("div");
    note.classList.add("box1");
    const color = Number.parseInt(Math.random() * 16777215);
    const bgcolor = "#" + color.toString(16);
    const angle =  ( Math.random() * 20) - 10 ;
    note.style.transform = `rotate(${angle}deg)`;
    note.style.backgroundColor = bgcolor;
    note.innerHTML = `<span class="material-symbols-outlined saveNote">bookmark</span>
    <span class="material-symbols-outlined deleteNote">delete</span>        
    <input type="text" class="heading" id="" value="Write our Note Here">
    <textarea class="content">${text}</textarea>`;
    
    
    
  const deleteNote = note.querySelector(".deleteNote");
  deleteNote.addEventListener(
    "click" ,
    function (params) {
        note.remove();
        noteSave();
    }   
)

note.querySelector(".saveNote").addEventListener(
    "click" ,
    function (params) {
        noteSave()
    }
)

main.appendChild(note);
// noteSave();
}

 const noteSave=() =>
{
    const allnotes = document.querySelectorAll(".box1 textarea");
    const data = [];
    allnotes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length === null)
    {
        localStorage.removeItem("allnotes");
    }
    else{
        localStorage.setItem("allnotes" , JSON.stringify(data));
    }
   

}

//self calling function
(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("allnotes"));
        // console.log(lsnotes);
        if(lsnotes===null)
        {
            addNoteNow()
        }
        else
        {
            lsnotes.forEach(
                (note)=>
                {           
                    addNoteNow(note);
                }
              )
        }
     
    }
)
()




