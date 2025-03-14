
import '../../index.css'
import AvailabilityIndicator from './availability_indicator';

import emailLogo from '../icons/mail.png'
import instagramLogo from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'

import backButton from '../icons/left-chevron.png'
import openNavButton from '../icons/right-chevron.png'
const NavigationBar = ({isOpen}) => {
    //This is for the navigation

    //Name, status --> looking for job, employed, unavailable, social media links 

    //Green --> looking for job
    //Gray --> unavailable


    if(isOpen){
        return(


            <div class="absolute top-1/3 z-10 py-16 items-center justify-between">
    
    
    
    
                <div class=" w-full h-full z-10 py-12 items-center justify-between pl-10 pr-5 bg-white rounded-r-lg">
                    <div class="flex items-center">
    
                        <div>
                            <div class="flex items-center">
                                <div class="font-xspace text-xl">Kingston</div>
                                <div class="pl-10">
                                    <AvailabilityIndicator seekingJob={true}></AvailabilityIndicator>
                                </div>
                            
                            </div>
    
                    
    
                            <div class="w-full flex justify-evenly pt-5">
                            
                                <img className="individual-icon" src={emailLogo} alt="" />
                                <img className="individual-icon" src={instagramLogo} alt="" />
                                <img className="individual-icon" src={linkedin} alt="" />
                                
                            </div>
                        </div>
    
                        <div class="pl-20 ">
                            <img className="individual-icon" src={backButton} alt="" />
    
                        </div>
    
    
    
                    </div>
                
                    
                    
               
                </div>
                
               
    
            </div>
           
            
        );
    }else{
        return(
           


            <div class="absolute z-10 left-8 top-0 w-20  h-full">
                <div class="w-full h-full flex items-center">
                    
                    <div className='open-nav-btn flex items-center justify-center'>
                        <img className="open-nav-btn-icon animate-pulse" src={backButton} alt="" />

                    </div>

                </div>
            </div>
        )
    }
    
   


}


export default NavigationBar


/*


 <div class="absolute z-10 ml-20 items-center justify-between bg-amber-200">
    
                <img className="individual-icon" src={openNavButton} alt="" />

            </div>










 <>
        <div class="absolute w-full z-10 flex py-5 items-center justify-between pl-10 pr-20">
           
           <div class="flex items-center">
               <div class="font-xspace text-lg">Kingston</div>
               <div class="pl-10">
                   <AvailabilityIndicator seekingJob={true}></AvailabilityIndicator>
               </div>
           </div>
               
               
           <div class="w-56 flex justify-evenly">
               
               <img className="individual-icon" src={emailLogo} alt="" />
               <img className="individual-icon" src={instagramLogo} alt="" />
               <img className="individual-icon" src={linkedin} alt="" />
               
           </div>
       </div>
       <div class="absolute w-full h-17 z-5 left-0 top-0 bg-gradient from-color to-color opacity-25"></div> 

        </>

*/