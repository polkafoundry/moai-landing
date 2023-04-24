import Image from "next/image";
import { useRef, useState } from "react";

interface GameplayProps {
  className?: string;
  url?: string;
  preview?: string;
}

const VideoGameplay = ({ className, url, preview }: GameplayProps) => {
  const ref = useRef<any>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    console.log(ref);
    const isPaused = ref.current?.paused;
    if (isPaused) {
      ref?.current?.play();
      setIsPlaying(true);
    } else {
      ref?.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={className}>
      <div className="relative h-[190px] w-full max-w-[270px] mx-auto">
        <div
          style={{ width: "calc(100% - 16px)" }}
          className="absolute z-0 h-[164px] top-[12px] left-[8px] border-[2px] border-[#E76F16] rounded-[12px] rotate-[6deg]"
        ></div>
        <div
          style={{ width: "calc(100% - 16px)" }}
          className="absolute z-10 h-[164px] top-[12px] left-[8px] border-[2px] border-[#E76F16] rounded-[12px] overflow-hidden bg-black"
          onClick={() => handlePlay()}
        >
          <video
            className="w-full h-full rounded-[12px] object-cover pointer-events-none select-none"
            poster={preview}
            ref={ref}
          >
            <source src={url} />
          </video>
        </div>
        {!isPlaying && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src="/assets/icon-play-mobile.svg"
              width={48}
              height={48}
              onClick={() => handlePlay()}
              alt="icon play video"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const WickedMoai = () => {
  return (
    <div>
      <div className="text-[32px] leading-[38px] font-[500] text-center mt-[60px]">
        Wicked Moai
      </div>
      <p className="text-[14px] leading-[16px] text-[#F98306] text-center font-[500] max-w-[280px] mx-auto mt-[12px]">
        Join the Wicked Moai game world fully on-chain.
      </p>
      <VideoGameplay
        className="mt-5"
        url=""
        preview="/assets/game-1-preview-mobile.png"
      />
    </div>
  );
};

export default WickedMoai;
