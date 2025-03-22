
import { lazy, use, useContext, useEffect, useState } from "react";
import textBundle from "../msgbundle";

import {appContext, MINIMUM_SCREEN_WIDTH} from '../context';
import PleaseRotateDevicePanel from "../assets/UI_components/please_rotate_device";
import TutorialPopup from "../assets/UI_components/tutorial";


const LoadingPage = ({pageName}) => {
    
    const [matchLayoutCriteria, setmatchLayoutCriteria] = useState(true); 

    const checkForMatchingCriteria = () => {
        const isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches;
        const isPortrait = window.innerHeight > window.innerWidth;
    
        if (isTouchDevice && isPortrait && window.innerWidth < MINIMUM_SCREEN_WIDTH) {
            setmatchLayoutCriteria(false);
    
        } else if (isTouchDevice && !isPortrait) {
            setmatchLayoutCriteria(true);
        
        } else {
            setmatchLayoutCriteria(true); //For computers, set to true
        }
    };

    const [isLoading, setIsLoading] = useState(true);
    
    function setIsLoadingHelper(){
        setIsLoading(false);
    }
    const [PageComponent, setPageComponent] = useState(null);

    const [firstTimeLanding, setFirstTimeLanding] = useState(localStorage.getItem("firstTimeLanding"));
      
    useEffect(() => {
        if(localStorage.getItem("firstTimeLanding") == null){
            localStorage.setItem("firstTimeLanding", true)
            console.log("localStorage is null: " + localStorage.getItem("firstTimeLanding"));
          }
          
        if(pageName === "landing"){
            const LazyLandingPage = lazy(() => import("./landing_page"));
            setPageComponent(() => LazyLandingPage);
        }else{
            const LazyLandingPage = lazy(() => import("./simulation_page"));
            setPageComponent(() => LazyLandingPage);
        }

        window.addEventListener("resize", checkForMatchingCriteria); // Listen for screen size changes
        checkForMatchingCriteria();
        return () => window.removeEventListener("resize", checkForMatchingCriteria); // Cleanup
       
    }, [matchLayoutCriteria]);

    function closeTutorial(){
        setFirstTimeLanding(false);
        localStorage.setItem("firstTimeLanding", false)
    }

    function allCriteriaToShowTutorial(){
        const isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches;

        //user must be first time entering the site AND is a mobile/ touch screen user
        return (localStorage.getItem("firstTimeLanding") == null || localStorage.getItem("firstTimeLanding") == "true") && isTouchDevice;
    }
    
    return matchLayoutCriteria ? (

        <>
        {
            allCriteriaToShowTutorial()
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
                        <PageComponent loadingCallback={setIsLoadingHelper} />
                    )}
                </div>
        }
                  
        </>
    ) : (
        <PleaseRotateDevicePanel></PleaseRotateDevicePanel>
    );
};

export default LoadingPage; 