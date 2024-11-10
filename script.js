let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()

    if(hours>0 && hours<12){
        speak("Good Morning sir")
    }
    else{
        speak("Good Evening sir")
    }
}

window.addEventListener('load',()=>{
    wishme()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assitant , created by nitin baghel")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart...")
        window.open("https://www.flipkart.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open Calculator")){
        speak("opening Calculator...")
        window.open("Calculator://")
    }

    else if(message.includes("time")){

        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
        
    }

    else if(message.includes("date")){

        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
        
    }
    




    else{

        let finalText = "this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")

        speak(finalText)
        
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
    

}