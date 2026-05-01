import React,{createContext,useState} from "react"
import {askAI} from "../utils/gemini"
import {speak,listen} from "../utils/speech"

export const AssistantContext = createContext()

function AssistantProvider({children}){

const [messages,setMessages] = useState([])
const [listening,setListening] = useState(false)

// Send Message

async function sendMessage(text){

setMessages(prev=>[
...prev,
{user:true,text}
])

setListening(false)

const aiText = await askAI(text)

setMessages(prev=>[
...prev,
{user:false,text:aiText}
])

speak(aiText)

}


// Start Voice

function startVoice(){

setListening(true)

listen(sendMessage)

}

return(

<AssistantContext.Provider value={{
messages,
sendMessage,
startVoice,
listening
}}>

{children}

</AssistantContext.Provider>

)

}

export default AssistantProvider