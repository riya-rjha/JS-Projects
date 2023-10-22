let notesContainer = document.querySelector('.notes-container');
let btn = document.getElementById('btn');
//notes + inputBox
let inputText = document.querySelectorAll('.notes-content');

btn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    inputBox.className = 'notes-content';
    inputBox.setAttribute('contenteditable', 'true');
    let imgDlt = document.createElement('img');
    imgDlt.src = 'Images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(imgDlt);
})

notesContainer.addEventListener('click',(event)=>{
    if(event.target.tagName === 'IMG'){
        event.target.parentElement.remove();
        saveData();
    }
    else if (event.target.tagName === 'P'){
        inputText = document.querySelectorAll(".notes-content");
        inputText.forEach(i=>{
            i.onkeyup = () => {
                saveData();
            }
        })
    }
})

//Set items to storage
function saveData() {
    localStorage.setItem('inputBox', notesContainer.innerHTML);
}

//Get items from storage
function getItemTask() {
    notesContainer.innerHTML = localStorage.getItem('inputBox');
}

getItemTask(); 
