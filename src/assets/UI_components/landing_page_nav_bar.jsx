import instagramLogo from '../icons/instagram_white.png'
import linkedin from '../icons/linkedin_white.png'
import githubLogo from '../icons/github_white.png'


const LandingPageNavigationBar = () => {


    return(
        <div class="absolute z-20 right-0 top-0 w-full h-16 flex items-center justify-between lg:px-20 md:px-10 px-5">
           <div class="font-xspace lg:ml-10 md:ml-6 ml-1 text-white text-xl">Kingston</div>
        
            <div class="flex justify-evenly items-center opacity-90 ">
                                        
                <img className="individual-icon mr-5" src={instagramLogo} alt="" />
                <img className="individual-icon mr-5" src={linkedin} alt="" />
                <img className="individual-icon mr-5" src={githubLogo} alt="" />
                <div class="standard-button text-white bg-transparent border-2 border-white focus:outline-none  hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-1 cursor-pointer">Resume</div>
            </div>

            
        </div>
    )

}



export default  LandingPageNavigationBar;