import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";
import { ChartMobile } from "./chart";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LITEPAPER } from "@/const/config";
import { dataMoaiToken } from "@/const/data";
const ChartComponent = dynamic(
  () => import("./chart").then((m) => m.ChartMobile),
  { ssr: false }
);


const MoaiToken = ({ moaiTokenRef }: any) => {
  return (
    <div className="pt-[60px]" ref={moaiTokenRef}>
      <div className="text-[32px] leading-[38px] text-center font-[500]">
        $MOAI
      </div>
      <p className="mt-3 text-[14px] leading-[22px] text-center px-5 max-w-[366px] mx-auto opacity-80">
        The $MOAI powers the Wicked Moai ecosystem's blockchain-based game
        world. It facilitates game participation, adoption, and advanced
        features while incentivizing players who contribute to the community
        with $MOAI.
      </p>
      <div className="px-10">
        <Link href={LITEPAPER} target={"_blank"}>
          <button className="btn-white w-full mt-5">
            <WhitePaperIcon /> WHITEPAPER
          </button>
        </Link>
        <button className="btn-cta w-full mt-3 disabled:opacity-70" disabled>
          Join DAO
        </button>
      </div>
      <div>
        <ChartComponent dataMoaiToken={dataMoaiToken} />
      </div>
      <div className="px-5">
        <div className="grid gap-3 px-5 py-4 border-[2px] border-[#FFFFFF] border-opacity-10">
          {[...dataMoaiToken]
            ?.sort((a, b) => b?.litres - a?.litres)
            ?.map((data: any, index: number) => {
              return (
                <div key={index} className="flex justify-between text-[16px]">
                  <div style={{ color: data?.color }}>{data?.country}</div>
                  <div>{`${data?.litres}%`}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MoaiToken;
