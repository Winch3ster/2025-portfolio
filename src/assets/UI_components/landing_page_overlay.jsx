
import textBundle from "../../msgbundle";

const LandingPageOverlay = () => {


    return(
        <div class="absolute z-20  w-full bottom-0 left-0 flex items-end justify-center bg-transparent overflow-hidden">
           <div class="lg:w-1/2 lg:px-0  md:px-40 px-10 w-full h-72">

                <p class="text-4xl text-white text-center">{textBundle["landing.page.welcome"]}</p>
                
                <div class="flex justify-center mt-2">
                    <div class='h-5 bg-transparent border-t-3 border-t-white w-25 opacity-50'></div>

                </div>

                <p className="text-white text-center">
                    {textBundle["landing.page.welcome.message"]}
                </p>
                <div class='h-8 bg-transparent '></div>

                <div className="flex justify-center items-center">
                    <a className='enter-simulation-btn' href='/simulation'>
                        
                        <span>
                            {textBundle["landing.page.enter.simulation"]}
                            
                        </span>
                        <div className="chevron"></div>

                    </a>

                </div>


                <div class="flex justify-center mt-4">
                    <div class='h-25 bg-white w-0.5 opacity-50 '></div>

                </div>




           </div>
        </div>
    )

}



export default  LandingPageOverlay;