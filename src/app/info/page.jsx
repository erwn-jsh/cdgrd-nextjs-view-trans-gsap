'use client';

import ReactLenis from '@studio-freight/react-lenis';

const Info = () => {
  return (
    <ReactLenis root>
      <div className="info">
        <div className="col">
          <img src="/portrait.jpeg" alt="" />
        </div>
        <div className="col">
          ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          hic laboriosam. Et ipsa officiis quia quas itaque dicta, dolorem
          ducimus ad dolore doloribus voluptatem excepturi aliquid non expedita
          quibusdam quisquam.
        </div>
      </div>
    </ReactLenis>
  );
};

export default Info;
