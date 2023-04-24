import { dataMoaiToken } from "@/const/data";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";
import dynamic from "next/dynamic";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import { ExternalLink } from "@/uikit/external-link";
import { LITEPAPER } from "@/const/config";
const ChartComponent = dynamic(() => import("./chart").then((m) => m.Chart), {
  ssr: false,
});

export function MoaiToken() {
  const show = useScreenActive(HomeSection.MOAI_TOKEN);

  return (
    <div className="backdrop">
      <div
        className="h-[100vh] py-[60px] lg:py-0 overflow-auto flex items-center z-10"
        style={{
          backgroundImage: `url(/assets/bg-moai.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full lg:h-auto container relative z-10 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
            <div className="grid-col-1 lg:col-span-1 w-full text-white/80">
              <FadeEffect show={show} y={-50}>
                <h1 className="text-[48px] font-[500] mb-[25px]">
                  $MOAI
                </h1>
              </FadeEffect>

              <div className="flex flex-col gap-[20px] text-white/80 mb-[28px]">
                <FadeEffect show={show} x={-100}>
                  <div>
                    The $MOAI powers the Wicked Moai ecosystem's
                    blockchain-based game world. It facilitates game
                    participation, adoption, and advanced features while
                    incentivizing players who contribute to the community with
                    $MOAI.
                  </div>
                </FadeEffect>
                <FadeEffect show={show} x={-200}>
                  <div className="flex gap-4 mt-2">
                    <div className="w-full">
                      <ExternalLink href={LITEPAPER}>
                        <button className="btn-white w-full">
                          <div className="flex items-center justify-center gap-2 hover:scale-[1.1] duration-150">
                            <WhitePaperIcon /> WHITEPAPER
                          </div>
                        </button>
                      </ExternalLink>
                    </div>
                    <button className="btn-cta w-full opacity-70" disabled>
                      Join DAO
                    </button>
                  </div>
                </FadeEffect>
              </div>
            </div>
            <div className="col-span-1 flex justify-center flex-col pb-8">
              <div className="min-h-[400px]">
                {show && <ChartComponent dataMoaiToken={dataMoaiToken} />}
              </div>
              <div className="px-5">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 px-5 py-4 border-[2px] border-[#FFFFFF] border-opacity-10">
                  {[...dataMoaiToken]
                    ?.sort((a, b) => b?.litres - a?.litres)
                    ?.map((data: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between text-[16px] uppercase"
                        >
                          <div style={{ color: data?.color }}>
                            {data?.country}
                          </div>
                          <div>{`${data?.litres}%`}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
