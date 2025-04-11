'use client';
import { useTransitionRouter } from 'next-view-transitions';

const Nav = () => {
  const router = useTransitionRouter();

  function slideInOut() {
    // defines old page animating out
    document.documentElement.animate(
      [
        {
          // defines starting state
          opacity: 1,
          transform: 'translateY(0)',
        },
        {
          // defines ending state
          opacity: 0.2,
          transform: 'translateY(-35%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13,1)',
        fill: 'forwards', // ensures that element stays in final position animation termination
        pseudoElement: '::view-transition-old(root)', // ensures that this animation applies to outgoing page
      }
    );

    // defines new page animating in
    document.documentElement.animate(
      [
        // here we are animating the clip-path NOT the page itself
        // clip-path controls how much the document is visible
        // starts with entire clipped at bottom
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)',
        },
        // clip-path expands to cover the whole doc from bottom to top
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0, 0 0)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13,1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)', // ensures that this animation applies to NEW page
      }
    );
  }

  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push('/', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Index
          </a>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              router.push('/projects', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Projects
          </a>
        </div>
        <div className="link">
          <a
            href="/info"
            onClick={(e) => {
              e.preventDefault();
              router.push('/info', {
                onTransitionReady: slideInOut,
              });
            }}
          >
            Info
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
