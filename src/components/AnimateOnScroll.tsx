import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({ children, className = '', delay = 0 }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? 'animate-on-scroll' : 'opacity-0'} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
