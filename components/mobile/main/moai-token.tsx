import { WhitePaperIcon } from "@/uikit/icons/whitepaper-icon";
import { ChartMobile } from "./chart";
import dynamic from "next/dynamic";
const ChartComponent = dynamic(
  () => import("./chart").then((m) => m.ChartMobile),
  { ssr: false }
);

const dataMoaiToken = [
  {
    country: "ECOSYSTEM GROWTH",
    litres: 50,
    color: "#ff1100",
  },
  {
    country: "TREASURY",
    litres: 3,
    color: "#ff5b00",
  },
  {
    country: "PUBLIC SALE",
    litres: 2,
    color: "#ff9404",
  },
  {
    country: "LIQUIDTY & LISTING",
    litres: 3,
    color: "#fccc06",
  },
  {
    country: "MARKETING",
    litres: 10,
    color: "#f7ff04",
  },
  {
    country: "ANGLE SALE",
    litres: 10,
    color: "#a7d90d",
  },
  {
    country: "TEAM",
    litres: 15,
    color: "#08cc15",
  },
];

const MoaiToken = ({ moaiTokenRef }: any) => {
  return (
    <div className="pt-[60px]" ref={moaiTokenRef}>
      <div className="text-[32px] leading-[38px] text-center font-[500]">
        $MOAI token
      </div>
      <p className="mt-3 text-[14px] leading-[22px] text-center px-5 max-w-[366px] mx-auto opacity-80">
        $MOAI (Wicked Moai token) is the token of the Wicked Moai ecosystem
        based on the blockchain. It can be used for adopting Moai, exchanging
        Moai, participating in games and using advanced functions in the Wicked
        Moai on-chain game world.
      </p>
      <p className="mt-3 text-[14px] leading-[22px] text-center px-5 max-w-[366px] mx-auto opacity-80">
        All players will gather in the community through $MOAI, participate in
        community governance and get incentives. Players who participate in the
        game and contribute to the community can obtain $MOAI incentives.
      </p>
      <div className="px-10">
        <button className="btn-white w-full mt-5">
          <WhitePaperIcon /> WHITEPAPER
        </button>
        <button className="btn-cta w-full mt-3">Join DAO</button>
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
