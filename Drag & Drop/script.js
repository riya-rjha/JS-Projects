let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

for(i of lists){
    i.addEventListener('dragstart', (event)=>{
        let box = event.target;
        rightBox.addEventListener('dragover', (event)=>{
            event.preventDefault();
        })
        rightBox.addEventListener('drop', ()=>{
            rightBox.appendChild(box);
            box = null;
        })
        leftBox.addEventListener('dragover', (event)=>{
            event.preventDefault();
        })
        leftBox.addEventListener('drop', ()=>{
            leftBox.appendChild(box);
            box = null;
        })
    })
}