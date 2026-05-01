export function speak(text){

const speech = new SpeechSynthesisUtterance(text)

speech.lang="en-US"

window.speechSynthesis.speak(speech)

}


export function listen(callback){

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.interimResults=false;

recognition.start();


recognition.onresult=(event)=>{

const text = event.results[0][0].transcript;

callback(text);

}


// Ignore no-speech error

recognition.onerror=(event)=>{

if(event.error==="no-speech"){

console.log("No speech detected")

}else{

console.log("Speech error:",event.error)

}

}

}