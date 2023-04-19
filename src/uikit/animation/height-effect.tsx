import { PropsWithChildren } from "react";
import { animated, useSpring } from "react-spring";

const config = { mass: 5, tension: 2000, friction: 500 };

type HeightEffectProps = PropsWithChildren<{
  show: boolean,
  height: number,
  delay?: number,
}>;

export function HeightEffect({ show, height, delay, children }: HeightEffectProps) {
  const [style] = useSpring(() => ({
    config,
    // opacity: show ? 1 : 0,
    y: show ? 0 : -50,
    transform: '',
    height: show ? height : 0,
  }), [show]);

  return <animated.div style={style}>{children}</animated.div>
}