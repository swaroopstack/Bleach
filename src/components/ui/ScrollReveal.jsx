import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = "",
    textClassName = "",
    rotationEnd = "bottom bottom",
    wordAnimationEnd = "bottom bottom",
}) {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef?.current || window;

        const ctx = gsap.context(() => {
            const words = el.querySelectorAll(".word");

            // Subtle container settle (NO SCRUB)
            gsap.fromTo(
                el,
                { y: 24, opacity: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Word reveal — TIMED, NOT SCRUBBED
            gsap.fromTo(
                words,
                {
                    opacity: baseOpacity,
                    filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    stagger: {
                        each: 0.04,
                        from: "start",
                    },
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, el);

        return () => ctx.revert();
    }, [
        scrollContainerRef,
        enableBlur,
        baseOpacity,
        blurStrength,
    ]);


    return (
        <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
            <p className={`scroll-reveal-text ${textClassName}`}>
                {splitText}
            </p>
        </h2>
    );
}
