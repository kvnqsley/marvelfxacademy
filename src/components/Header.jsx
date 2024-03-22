import { useState } from "react"

const  Header =({handleTelegram,handler, handleContact,handleMenuToggle}) =>{


    return <>
    
    <header className={`w-full z-20   top-0  box-border ${handler.menu ? 'min-h-screen' : 'sm:min-h-max'}`}>
    <nav className={`md:flex   bg-inherit    grid   grid-cols-2 mt-4 items-center justify-between`}>
        <div className="flex-grow md:min-w-[60%]">
        <img src="/assets/react.svg" className="w-6 inline-block md:flex-grow-1 " alt="" />

        </div>
        <div  onClick={handleMenuToggle}
         className=" md:hidden justify-self-end w-max h-6  group cursor-pointer">
            <div className={`bg-white h-[2px] translate-x-1  ${handler.menu ? ' translate-y-2 -translate-x-3  rotate-45 w-4 ' : ' w-2  group-hover:bg-red-600 group-hover:-translate-x-2  ease-in delay-300 duration-200  '} `}></div>
            <div className={`bg-white h-[2px] mt-2 -translate-x-2 ${handler.menu ? ' translate-x-1 -rotate-45 w-4' : ' w-4 group-hover:-translate-x-2 group-hover:bg-red-600  ease-in delay-200 duration-300 ' }  h-1     `}></div>
            <div className={`${handler.menu ? 'hidden' : 'block group-hover:bg-red-600 group-hover:-translate-x-4 ease-in delay-100 duration-200   '} bg-white h-[2px] mt-1 w-3 `}></div>
        </div>
        <ul className={`md:flex md:flex-row bg-inherit flex-col justify-start md:justify-between  md:bg-inherit   md:mt-auto mt-4 min-h-screen  md:min-h-max  w-screen md:w-full md:h-full  m  z-20   ${handler.menu ? 'flex ' : 'hidden '} gap-y-4 w-full col-span-1  flex-col`}>
        <li  className={`py-3  md:py-auto`}>
            
            <a 
             href="#" target="_blank" rel="noopener noreferrer" className={`text-red-600 py-2 before:content-[''] 
            before:bg-red-600 before:h-[2px] before:w-0   before:absolute relative before:block
             before:left-[4rem] before:bottom-0   before:ease-in-out before:delay-300 before:duration-200
             hover:before:block hover:before:w-full hover:before:left-0
             after:content-[''] after:bg-red-600 after:h-[2px] after:w-0   after:absolute relative after:block
             after:left-0  after:bottom-0   after:ease-in-out after:delay-100 after:duration-300
             hover:after:block hover:after:w-full `}>Home</a></li>
        <li className={`py-3 md:py-auto`}>    <a onClick={handleContact} href="http://" target="_blank" rel="noopener noreferrer" className={`${handler.contactLink ? 'text-red-600' :''} py-2 before:content-[''] 
            before:bg-red-600 before:h-[2px] before:w-0   before:absolute relative before:block
             before:left-[4rem] before:bottom-0   before:ease-in-out before:delay-300 before:duration-200
             hover:before:block hover:before:w-full hover:before:left-0
             after:content-[''] after:bg-red-600 after:h-[2px] after:w-0   after:absolute relative after:block
             after:left-0  after:bottom-0   after:ease-in-out after:delay-100 after:duration-300
             hover:after:block hover:after:w-full hover:text-red-600 `}>Contact</a></li>
        <li className={`py-3 md:py-auto`}>
        <a onClick={handleTelegram} href="http://" target="_blank" rel="noopener noreferrer" className={`${handler.telegramLink ? 'text-red-600' :''} py-2 before:content-[''] 
            before:bg-red-600 before:h-[2px] before:w-0   before:absolute relative before:block
             before:left-[4rem] before:bottom-0   before:ease-in-out before:delay-300 before:duration-200
             hover:before:block hover:before:w-full hover:before:left-0
             after:content-[''] after:bg-red-600 after:h-[2px] after:w-0   after:absolute relative after:block
             after:left-0  after:bottom-0   after:ease-in-out after:delay-100 after:duration-300
             hover:after:block hover:after:w-full hover:text-red-600 `}><img src="/assets/telegram-svgrepo-com.svg" className="w-6
         inline-block" alt="telegram icon" /> Join Telegram </a>
        </li>
    
        
  
        </ul>
         </nav>
</header>
</>

}
export default Header