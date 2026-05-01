import React,{useState,useContext} from "react"
import {AssistantContext} from "../context/AssistantContext"

function InputBox(){

const [text,setText] = useState("")

const {sendMessage,startVoice}
= useContext(AssistantContext)

return(

<div className="inputBox">

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Type message..."
/>

<button onClick={()=>sendMessage(text)}>
Send
</button>

<button onClick={startVoice}>
🎤 Speak
</button>

</div>

)

}

export default InputBox