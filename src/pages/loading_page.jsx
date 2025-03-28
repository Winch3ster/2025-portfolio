
import { lazy, useEffect, useState } from "react";
import textBundle from "../msgbundle";

import { MINIMUM_SCREEN_WIDTH, MINIMUM_MEDIUM_SCREEN_ASPECT_RATIO} from '../context';
import PleaseRotateDevicePanel from "../assets/UI_components/please_rotate_device";
import TutorialPopup from "../assets/UI_components/tutorial";

const isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches;

var fetchedModel = false;
const LoadingPage = ({pageName}) => {



    const [matchLayoutCriteria, setmatchLayoutCriteria] = useState(true); 

    const checkForMatchingCriteria = () => {
    
        const innerHeight = window.innerHeight;
        const innerWidth = window.innerWidth
        const isPortrait = innerHeight > innerWidth;

    
        if (isTouchDevice && isPortrait && innerWidth < MINIMUM_SCREEN_WIDTH) {
            setmatchLayoutCriteria(false);
    
        } else if (isTouchDevice && !isPortrait) {
            setmatchLayoutCriteria(true);
        
        } else {

            if((innerWidth / innerHeight) < MINIMUM_MEDIUM_SCREEN_ASPECT_RATIO || innerHeight < 480){
                setmatchLayoutCriteria(false);
            }else{
                setmatchLayoutCriteria(true); //For computers, set to true
            } 
            
        }
    };

    const [isLoading, setIsLoading] = useState(true);
    
    function setIsLoadingHelper(){
        setIsLoading(false);
    }
    const [PageComponent, setPageComponent] = useState(null);

    function getLocalStorgaeShowTurorial(){
        const storageItem = localStorage.getItem("firstTimeLanding")
        if(storageItem == "true"){
            return true;
        }else if(storageItem == null){
            return true;
        }else{
            return false;
        }
    }
    const [showTutorial, setShowTutorial] = useState(getLocalStorgaeShowTurorial() && isTouchDevice);
    const [model, setModel] = useState();
    useEffect(() => {
      
        if(!showTutorial){
            
            if(pageName === "landing"){
                const LazyLandingPage = lazy(() => import("./landing_page").then((originalModule) => {
                    setShowTutorial(false);
                    return originalModule;
                }
                ));
                setPageComponent(() => LazyLandingPage);
              
            }else{
                const LazyLandingPage =  lazy(() =>  import("./simulation_page"));
                setPageComponent(() => LazyLandingPage);
                setShowTutorial(false)
            }
        }

        window.addEventListener("resize", checkForMatchingCriteria); // Listen for screen size changes
        checkForMatchingCriteria();
        return () => window.removeEventListener("resize", checkForMatchingCriteria); // Cleanup

    }, [showTutorial]);

    if(!fetchedModel){
        fetchedModel = true;
        fetch("/models/17_march_OO_raiser_portfolio_final_version_compression_blue_color_fixed.glb")
            .then(response => response.blob()) // Convert to Blob
            .then(blob => {
                const url = URL.createObjectURL(blob); // Create Object URL
                setModel(url);
            })
            .catch(error => console.error("Error preloading model:", error));
    }

    function closeTutorial(){
        
        setShowTutorial((prev) => {
            return false;
        });

        localStorage.setItem("firstTimeLanding", "false"); // Ensure string type
    }
    
    return matchLayoutCriteria ? (
    
        <>
        {
            showTutorial
                ? 
                <TutorialPopup closeTutorialCallback={closeTutorial}></TutorialPopup>
                :
                <div className="relative w-full h-full">
                    {isLoading && (
                        <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full standard-dark-gray z-50">
                            <div className="flex flex-col items-center">
                                <div className="loader"></div>
                                <div className="h-5"></div>
                                <div className="text-white text-xl">{textBundle["loading.asset"]}</div>
                            </div>
                        </div>
                    )}

                    {PageComponent && (
                        <PageComponent loadingCallback={setIsLoadingHelper} Home_scene_param={model} />
                    )}
                </div>
        }
                  
        </>
    ) : isTouchDevice ? (

        
        <PleaseRotateDevicePanel></PleaseRotateDevicePanel>
    ): 
    (<div className="w-full h-screen standard-dark-gray flex items-center justify-center text-white px-40">
        <div className='text-center'> 
            Please maximize your window or increase its aspect ratio for a better experience. 
        </div>
    </div>)
    ;
};

export default LoadingPage; 