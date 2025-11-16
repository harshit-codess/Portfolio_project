import { useEffect, useState, useRef } from "react";


import React from 'react'

function useOnScreen() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       if(entry.isIntersecting) {
    //         console.log(entry);
    //         entry.target.classList.add("show");
    //       } else {
    //         entry.target.classList.remove("show")
    //       }
    //     },  
    //   );

    //   observer.observe(skillBox.current)
    // }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [])

    return [ref, isVisible] 
}

export default useOnScreen;
