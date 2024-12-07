// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



const reactElement = React.createElement(
  'a',
  { href: 'http:google.com',
    target: '_blank'},
    'click me to visit google'
)



// createRoot(document.getElementById('root')).render(
//   <>
//      <App />
//      <h1>chai or react whit vite </h1>
//      </>
 

// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement

)
