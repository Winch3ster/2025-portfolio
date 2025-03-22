import { motion } from 'framer-motion';
import closeBtn from '../icons/notification_close.png';

const SMALL_HEIGHT_ASPECT_RATIO = 2; //width/height 


const NotificationPanel = ({ closeNotificationCallback, content, icon }) => {
    const screenWithSmallHeight = window.innerWidth/ window.innerHeight > SMALL_HEIGHT_ASPECT_RATIO;
    const isMobile = window.matchMedia("(any-pointer: coarse)").matches &&  window.innerHeight < 500;


    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className={isMobile ? "notification-panel-mobile" :"notification-panel"} 
        >
            <div className='flex justify-end items-center cursor-pointer' onClick={closeNotificationCallback}>
                <img className='h-4 w-4' src={closeBtn} alt="close" />
            </div>
            <div className='flex justify-start items-center mt-2'>
                <div className='notification-icon'>
                    <img className='composure-effect-img' src={icon} alt="icon" />
                </div>
                <div className='w-6'></div>
                <div className={`${isMobile ? "text-xs" : "text-base"}`}>
                    {content}
                </div>
            </div>
        </motion.div>
    );
};

export default NotificationPanel;