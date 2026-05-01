import React,{useContext,useEffect,useRef} from "react"
import {AssistantContext} from "../context/AssistantContext"

function ChatBox(){

const {messages} = useContext(AssistantContext)

const bottomRef = useRef()

useEffect(()=>{

bottomRef.current?.scrollIntoView()

},[messages])

return(

<div className="chatbox">

{messages.map((msg,i)=>(

<div key={i}
className={msg.user?"user":"bot"}>

{msg.text}

</div>

))}

<div ref={bottomRef}/>

</div>

)

}

export default ChatBox