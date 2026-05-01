import React,{useContext} from "react"
import {AssistantContext} from "../context/AssistantContext"

import ai from "../assets/ai.png"
import listeningGif from "../assets/listening.gif"

function Avatar(){

const {listening} = useContext(AssistantContext)

return(

<div>

<img
src={listening ? listeningGif : ai}
className="ai"
/>

</div>

)

}

export default Avatar