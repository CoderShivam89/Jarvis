import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AssistantProvider from './context/AssistantContext'

ReactDOM.createRoot(document.getElementById('root')).render(

<AssistantProvider>

<App/>

</AssistantProvider>

)