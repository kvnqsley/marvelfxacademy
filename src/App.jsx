
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import {useState} from 'react'
function App() {
  const [handler,setHandler] = useState({
    menu :false,
   contactLink :false,
   telegramLink:false
})
const handleMenuToggle =()=>{
    setHandler(state=>{
        return{
            ...state,
            menu:!handler.menu
        }
    })
}
const handleContact =()=>{
    setHandler(state=>{
        return{
            ...state,
            contactLink:true,
            telegramLink:false
        }
    })
}
const handleTelegram =()=>{
    setHandler(state=>{
        return{
            ...state,
            contactLink:false,
            telegramLink:true
        }
    })
}
  return <> <Header handleContact={handleContact}
  handleTelegram={handleTelegram}
  handleMenuToggle={handleMenuToggle}
  handler={handler}/>
  {handler.menu ? null :
  <>
  <MainContent/>
  <Footer/>
  </>
    }
  
   
  </>
}

export default App
