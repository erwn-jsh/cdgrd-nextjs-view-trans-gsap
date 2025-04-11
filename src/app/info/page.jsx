'use client';
import ReactLenis from '@studio-freight/react-lenis';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(useGSAP);

const Info = () => {
  const container = useRef();

  useGSAP(
    () => {
      // breaks text into lines
      const text = new SplitType('.info p', {
        types: 'lines',
        tagName: 'div',
        lineClass: 'line',
      });

      // stores them in spans
      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      // animates each line
      gsap.set('.info p .line span', {
        y: 400,
        display: 'block',
      });

      gsap.to('.info p .line span', {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: 'power4.out',
        delay: 0.25,
      });

      // since SplitType dynamically modifies the text structure
      // cleanup func here reverts everything back to text
      // when component unmounts
      return () => {
        if (text) text.revert();
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="info" ref={container}>
        <div className="col">
          <img src="/portrait.jpeg" alt="" />
        </div>
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            hic laboriosam. Et ipsa officiis quia quas itaque dicta, dolorem
            ducimus ad dolore doloribus voluptatem excepturi aliquid non
            expedita quibusdam quisquam.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Info;
