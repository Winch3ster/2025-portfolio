
import '../../index.css'
import AvailabilityIndicator from './availability_indicator';

import emailLogo from '../icons/mail.png'
import instagramLogo from '../icons/instagram.png'
import linkedin from '../icons/linkedin.png'
import githubLogo from '../icons/github.png'
import hamburgerMenu from '../icons/hamburger_menu.png'
import backButton from '../icons/left-chevron.png'
import openNavButton from '../icons/right-chevron.png'
import { useEffect, useState } from 'react';



const SimulationNav = ({isOpen}) => {
    //This is for the navigation

    //Name, status --> looking for job, employed, unavailable, social media links 

    //Green --> looking for job
    //Gray --> unavailable

    const [contactDetailsIsOpened, setContactDetailsState] = useState(false);




    if(contactDetailsIsOpened){
        return(


            <div class="absolute right-20 top-1/4 z-20 py-16 items-center justify-between">
    
    
    
    
                <div className='standard-dark-gray' class=" w-full h-full z-20 py-12 items-center justify-between bg-white pl-10 pr-5 rounded-lg">
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
                                <img className="individual-icon" src={githubLogo} alt="" />

                            </div>
                        </div>
    
                        <div class="pl-20 cursor-pointer" onClick={() =>  setContactDetailsState(!contactDetailsIsOpened)}>
                            <img className="open-nav-btn-icon" src={backButton} alt="" />
                        </div>
    
    
    
                    </div>
                
                    
                    
               
                </div>
                
               
    
            </div>
           
            
        );
    }else{
        return(
           


            <div class="absolute z-20 right-5 top-0 w-15  h-full opacity-70">
               <div class="h-2/5 items-center justify-center flex">
                  <div class="bg-white w-0.5 h-full"></div>
               </div>

               <div class="h-1/5 items-center justify-center flex">
                  <div className="simulation-hamburger-menu flex justify-center items-center" >
                    <img class="h-5 w-5" src={hamburgerMenu} alt="" />
                  </div>
               </div>

               <div class="h-2/5 items-center justify-center flex">
                  <div class="bg-white w-0.5 h-full"></div>
               </div>


               
            </div>
        )
    }
    
   


}


export default SimulationNav;


/*

 <div class="w-full h-full flex items-center">
                    
                    <div className='open-nav-btn flex items-center justify-center' onClick={() =>  setContactDetailsState(!contactDetailsIsOpened)}>

                    </div>

                </div>




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