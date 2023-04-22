import {FaArrowRight,FaCrosshairs,FaCheckSquare,FaCircle,FaCheckCircle,FaEnvelope,FaAward,FaCreditCard,FaClock} from 'react-icons/fa'


export default function   MainContent() {
return <>
<main className='z-20'>
<section className="  md:grid-cols-2   grid grid-cols-1">
<div className={`w-full h-full  mt-16`}>
<h2 className="text-5xl font-bold">
    Brutally <span className="font-normal">  Beat The Markets</span> With Us</h2>

    <p className="text-lg mt-8">
        Experience what it means to be a Consistent and Successful Trader.
         Work hand in hand with Veteran Traders to <span className="font-semibold text-red-600">BRUTALLY</span> Beat the Markets!
    </p>

    <button className="rounded-full min-w-[40%] font-semibold  px-6 py-4 mt-8 bg-white text-black hover:bg-red-600">
        <a href="">
            Join Telegram
            <FaArrowRight className="inline-block ml-4"/>
        </a>
    </button>
</div>
<div className='sm:-mt-24 md:mt-auto mt-8 '>
<img src="/src/assets/images/phone--1536x1536.png" alt="" />
</div>
</section>
<section className='grid grid-cols-1 mt-12  md:grid-cols-2'>
  <div>
  <h3 className='text-3xl'>
        <span className='font-bold'>Unlock</span> your Trading Potential... Trade the <span className='font-bold'>MARVELMIND FX way!</span>
    </h3>
     <ul className='mt-4 list-disc ml-10'>
            <li><p>Learn from Professionals with over <span>7+ years of trading experience</span></p></li>
            <li><p><span>Technical &amp; Fundamental</span> Projectons and Analysis</p></li>
            <li><p>Enjoy <span>FREE</span> Forex Signals</p></li>
            <li><p>Get <span>Free Acess </span> to <span>Trading Strategies,Educational Materials and Indicators</span></p></li>
            <li><p>Our <span>24/7 Support Team</span>are <span>ALWAYS</span> available to help!</p></li>
            <li>All expense Paid <span>Prop Firm Accounts </span>and Members Only <span>Giveaways and contests</span></li>
        </ul>
        <button className="rounded-full text-inherit min-w-[40%] font-semibold  px-6 py-4 mt-8 bg-red-500 text-black hover:bg-red-600">
        <a href="">
            Join Telegram
            <FaArrowRight className="inline-block ml-4"/>
        </a>
    </button>
    
  </div>
  <div className='-z-10 relative mt-6  '>
    <FaCircle className='absolute animate-ping text-red-800 left-24 top-8 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 top-16 left-1/2 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 left-16  top-6 text-[.5rem]'/>
    <FaCircle className='absolute animate-ping text-red-800  right-2  top-4 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 right-6 top-8 text-[.5rem]'/>
    <FaCircle className='absolute  animate-ping text-red-800 right-1/2 top-4 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 left-1/3 text-[.5rem]'/>
    <FaCircle className='absolute animate-ping text-red-800 right-1/3 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 top-16 right-1/4 text-[.5rem]'/>
    <FaCircle className='absolute text-red-800 left-1/4 top-16 text-[.5rem]'/>
      <img src="src/assets/images/Crypto-Trading-Users-Image.webp" alt="world-map image" />
  </div>
</section>

<section className='mt-4'>
<div className='grid grid-cols-1 md:grid-cols-2  gap-8 '>

    <div className='border pb-4 px-4  h-max border-white'>
<h3 className='text-center text-xl mt-4 font-bold'>
    FREE PLAN
</h3>
<div className='font-bold relative text-3xl mt-8 text-center' >
    <sup className='text-rose-400'>$</sup> 0  <span className='font-light sm:relative sm:top-0 sm:left-0 absolute -top-2 right-7 md:text-xl text-neutral-400'> /Month</span>
</div>
<ul className='text-neutral-400 font-semibold'>
    <li  className='mt-2'><FaCheckCircle className='inline-block mr-4 text-xs text-rose-500'/>Free Forex Signals</li>
    <li  className='mt-2'><FaCheckCircle className='inline-block mr-4 text-xs text-rose-500'/>Weekly Market Analysis</li>
    <li  className='mt-2'><FaCheckCircle className='inline-block mr-4 text-xs text-rose-500'/>Educational Materials &amp; Indicators</li>
    <li  className='mt-2'><FaCheckCircle className='inline-block mr-4 text-xs text-rose-500'/>Members Only Giveaways and Contests</li>
</ul>
<button className="rounded-full relative left-1/4 text-inherit min-w-[60%] font-semibold  px-6 py-4 mt-8 bg-red-500 text-black hover:bg-red-600">
        <a href="">
            Join Telegram
            
        </a>
    </button>
    </div>
    <div className='bg-red-500 relative  pb-4 px-4 '>
        <h3 className='pt-6 text-center font-bold text-xl'>VIP PLANS</h3>
<ul className='text-neutral-300 font-semibold'>
    <li className='mt-8'><FaCheckCircle className='inline-block    mr-4 text-xs text-black'/>MARVELMIND FX Forex Mentorship</li>
    <li className='mt-2'><FaCheckCircle className='inline-block   mr-4 text-xs text-black'/>MARVELMIND FX VIP Aggressive/Sniper Forex Scalping Signals</li>
    <li className='mt-2'><FaCheckCircle className='inline-block   mr-4 text-xs text-black'/>MARVELMIND FX VIP Synthetic Trading Course</li>
   
    <li className='mt-2 p'><FaCheckCircle className='inline-block  mr-4 text-xs text-black'/>Deriv Synthetic Account Management Service</li>
</ul>
<button className='bg-white left-1/4 absolute bottom-2  mt-4 text-rose-500 rounded-full min-w-[60%]  font-semibold hover:bg-red-600 hover:text-white px-6 py-4'>Coming soon</button>
    </div>
</div>
<h3 className='font-semibold text-2xl text-center mt-8'>
We Are Here To Help You Fulfil And Reach All Of Your Trading Goals
</h3>
<div className='grid grid-cols-1 gap-2 md:gap-y-8 md:gap-x-12  mt-24 md:grid-cols-3'>

    <div className='mt-16 px-6 hover:bg-stone-900 pb-8 text-center md:mt-auto'>
    <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'> <FaCrosshairs className='text-rose-600  absolute top-3 left-3   inline-block  text-3xl'/>
        </span>
        <h3 className='text-center text-xl mt-8 font-bold'>
        Precise Accuracy
        </h3>
        <p className='mt-4 text-center text-neutral-400'>
        Trading with Calculated Risk and the Mindset to make Consistent Profit has trained us to be Strict with our Trading. This helps us maintain High Accuracy, Safe Drawdowns and Maximum Profits!
        </p>
    </div>

    <div className='mt-16 px-6 hover:bg-stone-900 pb-8 text-center md:mt-auto'>
    <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'> <FaEnvelope className='text-rose-600 absolute top-3 left-3 inline-block  text-3xl'/>
        </span>
        <h3 className='text-center text-xl mt-8 font-bold'>
        24/7 Customer Support
        </h3>
        <p className='mt-4 text-center text-neutral-400'>
        Our Customer Support are always on standby to make sure your valid questions and requests are answered on time! Feel free to message us  to get your queries solved by our support 24/7! </p>
    </div>

    <div className='mt-16 px-6 hover:bg-stone-900 md:pb-4 pb-8 text-center md:mt-auto'>
       <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'> <FaAward className='text-rose-600 absolute top-3 left-3   inline-block  text-3xl'/>
        </span>
        <h3 className='text-center text-xl mt-8 font-bold'>
        Consistency is in our Blood
        </h3>
        <p className='mt-4 text-center text-neutral-400'>
        Years of Experience has built our Team of traders into the Best there is! We are not into trading to make Lucky Wins… We are in it to stay consistent, Year in and Year out. With the guidance from our Team, Winning is a Sure thing!   </p>
    </div>
    <div className='mt-16 px-6 hover:bg-stone-900 pb-8 text-center md:mt-auto'>
    <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'> <FaCreditCard  className='text-rose-600 absolute top-3 left-3 inline-block  text-3xl'/>
        </span>
        <h3 className='text-center text-xl mt-8 font-bold'>
        Be Smart with your Money
        </h3>
        <p  className='mt-4 text-center text-neutral-400'>
        Trading is not a Game! It takes Patience, Years of Experience and Passion for the Charts. Taking time to pass through that learning curve will definitely cost you a lot of losses and falling victim to bad services claiming to help! Leverage our Expertise and save yourself a lot of time and money.
        </p>
         </div>
    
    <div className='mt-16 px-6 hover:bg-stone-900 pb-8 text-center md:mt-auto'>
    <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'> <FaClock className='text-rose-600 absolute top-3 left-3 inline-block  text-3xl'/>
       </span>
       
        <h3 className='text-center text-xl mt-8 font-bold'>
        Your Time is vaulable
        </h3>
        <p  className='mt-4 text-center text-neutral-400'>
        We watch the charts and look for potential opportunities just so you don’t have to! Our services will definitely make your Trading Journey a much more Enjoyable experience where you do not have to stay glued to the charts; Which means more time for yourself and loved ones! </p>
    </div>

    <div className='mt-16 px-6 hover:bg-stone-900 pb-8 md:pb-16 text-center md:mt-auto'>
    <span className='bg-stone-900 rounded-full relative h-14 w-14 inline-block'>
        <FaCheckSquare  className='text-rose-600 absolute top-3 left-3 inline-block  text-3xl' />
        </span>
        <h3 className='text-center text-xl mt-8 font-bold'>
        Leave the Heavy Lifting to us
        </h3>
        <p className='mt-4 text-center text-neutral-400'>
        We already trade for ourselves to pay the Bills… So leaving the Hard part to us isn’t really a Big Deal! From Technical to Fundamentals, Our Team of Veteran Traders are there to decode the Markets and translate it into Consistent Profits! </p>
    </div>
  
   
</div>
</section>
</main>

    </>
}