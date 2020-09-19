import React, { useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

const Logo = ({ menuToggle }) => {
  const [{ x }, set] = useSpring(() => ({
    immediate: true,
    from: { x: 0 },
    to: { x: 1 },
    config: { duration: 150 },
  }));

  const handler = () => {
    menuToggle();
    set({
      from: { x: 0.35 },
      to: { x: 1 },
      immediate: false,
    });
  };

  const onMouseDownHandler = () => {
    set({
      from: { x: 0 },
      to: { x: 0.35 },
      immediate: false,
      reset: true,
    });
  };

  return (
    <div className="logo-container" onClick={handler} onMouseDown={onMouseDownHandler}>
      <div className="hamburger">
        <div className="hamburger-container">
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </div>
        <div className="ripple">
          <animated.div
            className="ripple-bg"
            style={{
              opacity: x.interpolate({ range: [0, 0.35, 0.6, 1], output: [0.1, 0.4, 0.3, 0.01] }),
              transform: x
                .interpolate({
                  range: [0, 0.1, 0.35, 0.6, 1],
                  output: [0.5, 0.8, 1, 1, 0.9],
                })
                .interpolate(value => `scale(${value})`),
            }}
          />
        </div>
      </div>
      <div className="logo-text">
        МЕНЮ
      </div>
    </div>
  );
};

export default Logo;


{/*<div id="waves" className="style-scope paper-ripple">*/}
{/*  <div className="wave-container style-scope paper-ripple"*/}
{/*       style="top: 0px; left: 0px; width: 40px; height: 40px; transform: translate3d(0px, 0px, 0px);">*/}
{/*    <div className="wave style-scope paper-ripple"*/}
{/*         style="background-color: rgb(96, 96, 96); opacity: 0.25; transform: scale3d(3.36127, 3.36127, 1);"></div>*/}
{/*  </div>*/}
{/*</div>*/}
