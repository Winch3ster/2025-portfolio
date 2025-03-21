import { useState, useEffect } from "react";
import textBundle from "../../msgbundle";
import SimulationNav from "./simulation_navigation_bar";
import SimulationTitle from "./visit_my_github";
import effect from '../icons/effect.png';
import NotificationPanel from "./notification";
import { AnimatePresence } from "framer-motion";

const WordOverlay = () => {
    return (
        <div className='absolute top-5 left-20 pl-5 text-white tracking-widest z-20 standard-small-text-size'>
            {textBundle["model.created.in.blender"]}
        </div>
    );
};

const SimulationPageOverlay = () => {
    const [showNotification, setShowNotification] = useState(false);
    const closeNotificationCallback = () => {
        setShowNotification(false);
    };

    useEffect(() => {
        console.log("mounting SimulationPageOverlay");
        setTimeout(() => {
            setShowNotification(true);
        }, 1000);
    }, []);

    return (
        <>  
            <AnimatePresence>
                {showNotification && (
                    <NotificationPanel
                        closeNotificationCallback={closeNotificationCallback}
                        content={textBundle["notification.effect.composer"]}
                        icon={effect}
                    />
                )}
            </AnimatePresence>
            <WordOverlay />
            <SimulationNav />
            <SimulationTitle />
        </>
    );
};

export default SimulationPageOverlay;