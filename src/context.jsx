import { createContext } from "react";

export const simulationContext = createContext();

export const appContext = createContext();


export const MINIMUM_SCREEN_WIDTH = 500;
export const MINIMUM_MEDIUM_SCREEN_ASPECT_RATIO = 1.2

export const sliderVariants = {
incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
}),
active: { x: 0, scale: 1, opacity: 1 },
exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0
})
}

export const sliderTransition = {
duration: 0.5,
ease: [0.56, 0.03, 0.12, 1.04]
}


