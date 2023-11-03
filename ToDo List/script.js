const button = document.getElementById('button-img');
const inputBox = document.getElementById('inputField');
const lists_container = document.getElementById('tasks-checklist');
const text = document.getElementById('invalid-text');

button.addEventListener('click', ()=>{
    //if nothing is entered in the inputBox
    if(inputBox.value === ''){
        text.innerHTML = 'You have to enter something!';
    }
    else{
        text.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        lists_container.appendChild(li);
        let span = document.createElement('span');
        //code to add cross sign
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

inputBox.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        event.preventDefault();
        button.click();
        event.value = '';
    }
})

lists_container.addEventListener('click',(event) =>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        //allows saving of data in a new variable
        saveData();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        text.innerHTML = '';
        saveData();
    }
}, false);

//Set items to storage
function saveData() {
    localStorage.setItem('inputBox', lists_container.innerHTML);
}

//Get items from storage
function getItemTask() {
    lists_container.innerHTML = localStorage.getItem('inputBox');
}

getItemTask();  
