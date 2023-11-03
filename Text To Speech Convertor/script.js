let btn = document.getElementById('listen'); //btn
let textArea = document.getElementById('text'); //textArea
let voicesSelect = document.querySelector('select'); //select drop down list
let voices = []; //array for options of different voices

window.speechSynthesis.onvoiceschanged = () =>{ //on changin voices or options
    voices = window.speechSynthesis.getVoices(); //getAll voices in array of voices
    speech.voice = voices[0]; //add 0th element in voice

    voices.forEach((voice, i) => {
        (voicesSelect.options[i] = new Option(voice.name, i))
    }); 
    //check for each element in voices array 
   
}

voicesSelect.addEventListener("change", () => {
    speech.voice = voices[voicesSelect.value]; 
})

let speech = new SpeechSynthesisUtterance; //creating speech synthesis API
btn.addEventListener('click', ()=>{ 
    speech.text = textArea.value; //speech text given text's value
    window.speechSynthesis.speak(speech); //synthesizes speaking of text
})

