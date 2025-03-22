
import { lazy, useEffect, useState } from "react";
import textBundle from "../msgbundle";

const LoadingPage = ({pageName}) => {

    const [isLoading, setIsLoading] = useState(true);
    function setIsLoadingHelper(){
        setIsLoading(false);
    }
    const [PageComponent, setPageComponent] = useState(null);

    useEffect(() => {
        if(pageName === "landing"){
            const LazyLandingPage = lazy(() => import("./landing_page"));
            setPageComponent(() => LazyLandingPage);
        }else{
            const LazyLandingPage = lazy(() => import("./simulation_page"));
            setPageComponent(() => LazyLandingPage);
        }
       

    }, []);


    return (
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
    );
};

export default LoadingPage; 