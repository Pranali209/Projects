const data = [`The period of events before the invention of writing systems is considered prehistory.
 "History" is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events. 
 Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts,
 and ecological markers. History is incomplete and still has debatable mysteries.`,

    `History is an academic discipline which uses a narrative to describe, examine, question, and analyze past events, 
     and investigate their patterns of cause and effect.
    Historians debate which narrative best explains an event, as well as the significance of different causes and effects.
    Historians debate the nature of history as an end in itself,
    and its usefulness in giving perspective on the problems of the present.`,

    `Herodotus, a 5th-century BC Greek historian, is often considered the "father of history", as one of the first historians in the Western tradition,[13] though he has been criticized as the "father of lies".[14][15] Along with his contemporary Thucydides, he helped form the foundations for the modern study of past events and societies.[16] Their works continue to be read today, and the gap between the culture-focused Herodotus and the military-focused Thucydides remains a point of contention or approach in modern historical writing. In East Asia, a state chronicle, the Spring and Autumn Annals, was reputed to date from as early as 722 BC, though only 2nd-century BC texts have survived.`,
    `It was from Anglo-Norman that history was brought into Middle English, and it has persisted. It appears in the 13th-century Ancrene Wisse, but seems to have become a common word in the late 14th century, with an early attestation appearing in John Gower's Confessio Amantis of the 1390s (VI.1383): "I finde in a bok compiled | To this matiere an old histoire, | The which comth nou to mi memoire". In Middle English, the meaning of history was "story" in general. The restriction to the meaning "the branch of knowledge that deals with past events; the formal record or study of past events, esp. human affairs" arose in the mid-15th century.[19`,
    `Historians write in the context of their own time, and with due regard to the current dominant ideas of how to interpret the past, and sometimes write to provide lessons for their own society. In the words of Benedetto Croce, "All history is contemporary history". History is facilitated by the formation of a "true discourse of past" through the production of narrative and analysis of past events relating to the human race.[22] `,
    `The study of history has sometimes been classified as part of the humanities, other times part of the social sciences.[25] It can be seen as a bridge between those two broad areas, incorporating methodologies from both. Some historians strongly support one or the other classification.[26]`,
    `Traditionally, historians have recorded events of the past, either in writing or by passing on an oral tradition, and attempted to answer historical questions through the study of written documents and oral accounts. From the beginning, historians have used such sources as monuments, inscriptions, and pictures. `,
    `There are varieties of ways in which history can be organized, including chronologically, culturally, territorially, and thematically. These divisions are not mutually exclusive, and significant intersections are present. It is possible for historians to concern themselves with both the very specific and the very general, though the trend has been toward specialization. `];



const btn = document.getElementById("btngenerate");
const maindiv = document.querySelector(".main");
const box = document.querySelector(".box");
const btnback = document.getElementById("back")
const userinput = document.getElementById("userinput");
const content = document.getElementById("content")
let counter = 0;

btn.addEventListener(
    "click", function (params) {
        paragenerator();
    }
)

const paragenerator = () => {
   box.style.display = "none";
   btnback.style.display = "inline";
   content.style.display = "block";
    if(userinput.value < 8)
    {
      
        for (let index = 0; index < userinput.value; index++) {
            counter = Number.parseInt(Math.random() * data.length);
            content.innerHTML += `${data[counter]} <br> <br>`;
            
        }
    //    maindiv.innerHTML = data[index];
    }
    else
    {
        counter = Number.parseInt(Math.random() * data.length);
        content.innerHTML += `${data[counter]} <br> <br>`;
    }
    
}



goback =()=>
{
    // maindiv.innerHTML = ""
    box.style.display = "block";
    content.innerHTML ="";
    content.style.display = "none";
    btnback.style.display = "none";
}