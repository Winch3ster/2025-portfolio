import instagramLogo from '../icons/instagram_white.png'
import linkedin from '../icons/linkedin_white.png'
import githubLogo from '../icons/github_white.png'
import textBundle from '../../msgbundle'

const LandingPageNavigationBar = () => {


    return(
        <div class="absolute z-20 right-0 top-0 w-full h-16 flex items-center justify-between lg:px-20 md:px-10 px-5">
           <div class="font-xspace lg:ml-10 md:ml-6 ml-1 text-white text-xl">{textBundle["common.kingston"]}</div>
        
            <div class="flex justify-evenly items-center opacity-90 ">
                
                <a href="https://www.instagram.com/king_st0ne/"  target="_blank">
                    <img className="individual-icon mr-5" src={instagramLogo} alt="" />
                </a>

                <a href="https://www.linkedin.com/in/kingston-lee-134bb2209/"  target="_blank">
                    <img className="individual-icon mr-5" src={linkedin} alt="" />
                </a>
                <a href="https://github.com/Winch3ster"  target="_blank">
                    <img className="individual-icon mr-5" src={githubLogo} alt="" />
                </a>

                <a href="https://drive.google.com/file/d/1zrB5VlNme9UOvUR8z0-qA09pIAMayWJd/view?usp=sharing"  target="_blank">
                    <div class="standard-button text-white bg-transparent border-2 border-white focus:outline-none  hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-1 cursor-pointer">{textBundle["common.resume"]}</div>                   
                </a>
            </div>

            
        </div>
    )

}












export default  LandingPageNavigationBar;