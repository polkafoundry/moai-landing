import { faq } from "@/modules/index/faq";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  item: any;
}

const FAQ = ({ item }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "mt-2 rounded-[8px] p-[2px]",
        isShow
          ? "bg-gradient-to-r from-[#E71A16] to-[#FC9303]"
          : "bg-white bg-opacity-10"
      )}
      onClick={() => setIsShow(!isShow)}
    >
      <div className="bg-black px-5 py-4 rounded-[6px]">
        <div className={clsx(isShow ? "text-[#F98306]" : "")}>
          {item?.question}
        </div>
        {isShow && <div className="mt-2">{item?.answer}</div>}
      </div>
    </div>
  );
};

const AskedQuestion = ({ askQuestionRef }: any) => {
  return (
    <div className="pt-[60px]" ref={askQuestionRef}>
      <div className="max-w-[366px] mx-auto text-[32px] leading-[38px] text-center font-[500]">
        Frequently Asked Questions
      </div>
      <div className="px-5 mt-[12px]">
        {faq?.map((item: any, index: number) => {
          return <FAQ key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AskedQuestion;
