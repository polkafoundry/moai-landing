import { PropsWithChildren } from "react";
import { animated, useSpring } from "react-spring";

type FadeEffectProps = PropsWithChildren<{
  show: boolean,
  x?: number,
  y?: number,
  delay?: number,
  className?: string;
}>;

export function FadeEffect({ className, show, y = 0, x = 0, delay, children }: FadeEffectProps) {
  const [style] = useSpring(() => ({
    config: { mass: 5, tension: 2000, friction: 500,  },
    opacity: show ? 1 : 0.5,
    y: show ? 0 : y,
    x: show ? 0 : x,
    delay: delay,
    transform: '',
  }), [show]);

  return <animated.div className={className} style={style}>{children}</animated.div>
}