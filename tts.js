let voicesDropDown = document.querySelector("#voicesDropDown");
let ttsInput =  document.querySelector("#ttsInput");
let btnSpeak =  document.querySelector("#btnSpeak");
let voices; 
const talk = ()=>{
  let speech = new SpeechSynthesisUtterance();
  speech.voice =  voices[voicesDropDown.value];
  speech.text = ttsInput.value || "This is just a test";
  speech.onerror = event =>console.log('error? ',event);
  window.speechSynthesis.speak(speech); 
}
btnSpeak.addEventListener('click',talk);
window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) =>{
    let option = document.createElement('option');
    option.value = i;
    option.innerText = voice.name;
    console.log(option);
    voicesDropDown.appendChild(option);
	});
};