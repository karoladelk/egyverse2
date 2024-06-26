import React, { useState, useEffect, useRef } from 'react';

export default function FixedTitle() {
  const [visible, setVisible] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div ref={titleRef} className={`fixed-title ${visible ? '' : 'hidden'}`}>
      <h1>Your Fixed Title Here</h1>
    </div>
  );
}
