import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import './hero.css';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt={`Image ${id}`} />
      </div>
      <motion.h2 style={{ y, left: '83%', top: "86%", color: '#2a7a8d' }}>{`${id}`}</motion.h2>
    </section>
  );
}

export default function ImageSection({ onEnd }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const endRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnd();
        }
      },
      { threshold: 1 }
    );

    if (endRef.current) {
      observer.observe(endRef.current);
    }

    return () => {
      if (endRef.current) {
        observer.unobserve(endRef.current);
      }
    };
  }, [onEnd]);

  return (
    <div ref={containerRef} style={{ position: 'relative', color:"white" }}>
   <div className="overlay-content"
   style={{position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 1}}></div>

      {["Egyptian Temples", "Egyptian Museums", "Egyptian Tombs"].map((image) => (
        <Image key={image} id={image} />
      ))}
      {/* <motion.div className="progress" style={{ scaleX, position: 'absolute', bottom: "1%", left: 0, right: 0 }} /> */}
      <div ref={endRef} style={{ height: "3px" }}></div>
    </div>
    
  );
}
