import clsx from "clsx";

type ImageCard1Props = {
  img: string;
}

export function ImageCard1({ img }: ImageCard1Props) {
  return (
    <div className='relative my-2'>
      <div className="absolute top-0 right-0 bottom-0 left-0 border-2 border-[#E76F16] rotate-[6deg] rounded-[12px] "></div>
      <img src={img} className="rounded-[12px] border-2 border-[#E76F16] relative" />
    </div>
  )
}

type ImageCard2Props = {
  img: string;
}
export function ImageCard2({ img }: ImageCard2Props) {
  return (
    <div className='relative my-2'>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#E71A16] to-[#FC9303] rounded-[12px]">
        <div className="absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-black rounded-[12px]"></div>
      </div>

      <div className='relative'>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#E71A16] to-[#FC9303] rotate-[6deg] rounded-[12px] "></div>
        <img src={img} className="w-[300px] rounded-[12px] rotate-[6deg] relative p-[2px]" />
      </div>
    </div>
  );
}

export function ImageCard3({ imgClass, img }: { imgClass?: string, img: string }) {
  return (
    <div className='relative my-2'>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#E71A16] to-[#FC9303] rounded-[12px] rotate-[4deg]">
        <div className="absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-black rounded-[12px]"></div>
      </div>

      <div className='relative'>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#E71A16] to-[#FC9303] rounded-[12px] "></div>
        <img src={img} className={clsx(imgClass, "rounded-[12px] relative p-[4px]")} />
      </div>
    </div>
  );
}