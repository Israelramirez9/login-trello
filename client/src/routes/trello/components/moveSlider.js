import { useState } from "react";

export default function moveSlider() {
    const [isMoved, setIsMoved] = useState(false)
    const slider = document.getElementsByClassName('.slider-container')

    isMoved ? slider.style.left = '-20rem' : slider.style.left = '0';
    setIsMoved(!isMoved)

}