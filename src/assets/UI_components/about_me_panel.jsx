import textBundle from "../../msgbundle";
import leftChevron from '../icons/left-chevron.png'
import profile from '../profile.png'

const AboutMePanel = ({closePanelCallbackFunction}) => {

    return(
        <div>
            <div class='absolute w-full h-full bg-black opacity-30 z-30'></div>
            <div class="absolute right-30 top-10 about-me-panel-config w-3/4 h-1/2 rounded-2xl pt-5">
       
                <div class='panel-close' onClick={closePanelCallbackFunction}>
                    <img class='h-4 w-4'  src={leftChevron} alt="" />
                    <div>{textBundle["common.back"]}</div>
                </div>
                <div class='h-4'></div>

                <div class="flex px-8 py-14 justify-evenly">
                    <div class="flex justify-center items-center">

                        <div class="-mt-5">
                            <div class="  profile-pic-container">
                                <img src={profile} alt="" />
                            </div>
                            <div class="h-5"></div>
                            <div class='ml-1'>
                                <p>{textBundle["about.me.panel.name"]}</p>
                                <p>{textBundle["about.me.panel.age"]}</p>
                                <p>{textBundle["about.me.panel.based"]}</p>
                            </div>
                        </div>

                        </div>
                        <div class="w-7"></div>

                        <div class=" w-2/3 flex justify-center items-center">
                        <div class="-mt-10">
                            <div class="standard-dark-gray w-16 h-2 opacity-60 about-me-decor"></div>
                            <div class="h-4"></div>

                            <p>{textBundle["about.me.panel.description"]}</p>
                            <br></br>
                            <p>{textBundle["about.me.panel.description.2"]}</p>
                            <br></br>
                            <p class='font-bold'>{textBundle["about.me.panel.ps"]}</p>
                            <div class="h-5"></div>

                            <div class="flex">
                                <a href="https://www.instagram.com/king_st0ne/" target="_blank">
                                    <div class="mr-10 instagram-styled-btn">{textBundle["common.instagram"]}</div>
                                </a>

                                <a href="https://github.com/Winch3ster" target="_blank">
                                    <div class='github-styled-btn'>{textBundle["common.github.button.text"]}</div>
                                </a>
                            </div>
                            <div class="h-3"></div>
                            <div class="flex justify-end">
                                <div class="standard-dark-gray w-16 h-2 opacity-60"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )

}




export default AboutMePanel;