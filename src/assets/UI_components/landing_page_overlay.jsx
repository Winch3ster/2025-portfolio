
import textBundle from "../../msgbundle";

const SMALL_HEIGHT_ASPECT_RATIO = 2; //width/height 

const LandingPageOverlay = () => {

    const screenWithSmallHeight = window.innerWidth/ window.innerHeight > SMALL_HEIGHT_ASPECT_RATIO;
    const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;
    const nearSquareScreenSize = window.innerWidth / window.innerHeight < 1.5;
    
    return(
        <div class="absolute z-20  w-full bottom-0 left-0 flex flex-col items-center justify-center bg-transparent overflow-hidden">
           <div class={`lg:w-1/2 lg:px-0  md:px-40 px-10 ${isMobile ?  "h-50" : nearSquareScreenSize ? "h-72" : "h-72"}  `}>

                <p class={`${isMobile ? "text-2xl" :  "text-4xl"}  text-white text-center`}>{textBundle["landing.page.welcome"]}</p>
                
                <div class={`flex justify-center ${isMobile ? screenWithSmallHeight ? "mt-0": "mt-1" : "mt-2"}`}>
                    <div class='h-5 bg-transparent border-t-3 border-t-white w-25 opacity-50'></div>

                </div>

                <p className={`text-white text-center ${isMobile ? "text-sm"  :"text-base"}`}>
                    {textBundle["landing.page.welcome.message"]}
                </p>
                <div class={`  ${isMobile ? "h-4": "h-8"} bg-transparent `}></div>

                <div className="flex justify-center items-center">
                    <a className='enter-simulation-btn' href='/simulation'>
                        <span >
                            {textBundle["landing.page.enter.simulation"]}
                        </span>
                        <div className="chevron"></div>
                    </a>      
                </div>

            
                <div class="flex justify-center mt-4">
                    <div class='h-40 bg-white w-0.5 opacity-50 '></div>
                </div>
               




           </div>
        </div>
    )

}



export default  LandingPageOverlay;