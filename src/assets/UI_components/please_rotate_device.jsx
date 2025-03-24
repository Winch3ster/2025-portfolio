import { motion } from "framer-motion";
import textBundle from "../../msgbundle";

const PleaseRotateDevicePanel = () => {
    return(
        <div className="w-full h-screen overflow-hidden standard-dark-gray flex items-center justify-center">
            <div className="flex flex-col items-center">
                <motion.div
                className="rotate-phone"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 90, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType:"loop", repeatDelay:2, ease: "linear" }}
                />
                <div className="h-4"></div>
                <div className="text-white text-center">{textBundle["please.rotate.device"]}</div>
            </div>
        </div>
   )
}

export default PleaseRotateDevicePanel;

