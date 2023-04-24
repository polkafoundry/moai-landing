import Image from "next/image";
import FooterMobile from "../../../components/mobile/main/footer";
import HeaderMobile from "../../../components/mobile/main/header";

const datas = [
  {
    title: "OWNERSHIP",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus justo, hendrerit et tristique quis, vulputate sed tellus. Donec id luctus nisi, nec tincidunt quam. In volutpat nibh sit amet turpis hendrerit, vitae aliquet felis porta. Sed nulla orci, blandit sit amet consectetur non, auctor ut enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla in quam at fermentum. Donec est libero, fermentum quis eleifend et, aliquam sit.",
  },
  {
    title: "YOUR OBLIGATIONS",
    content:
      "Vestibulum ornare facilisis rutrum. Sed volutpat maximus tempus. Ut pharetra diam ipsum. Nullam quis convallis velit. Curabitur lorem velit, consectetur a consectetur eget, rhoncus vel nibh. Aenean varius lorem vitae tellus tincidunt accumsan. Morbi sapien lacus, eleifend in hendrerit sit amet, convallis non odio. Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu, dignissim lobortis leo. Vivamus vulputate pulvinar ipsum, nec",
  },
  {
    title: "FEES AND PAYPMENT",
    content:
      "Etiam non urna convallis, ornare ligula at, semper odio. Phasellus consectetur, lectus in tincidunt tempor, purus arcu hendrerit libero, a elementum dolor lacus a erat. Nullam sodales blandit risus nec dignissim. Integer sagittis facilisis diam a tincidunt. Etiam interdum felis at lectus egestas, et fringilla eros mollis. Vestibulum vulputate lobortis volutpat. Nam rhoncus eget quam quis auctor. Donec condimentum libero elit, sed feugiat eros fermentum nec. Nam at erat finibus nunc gravida efficitur. Nulla pharetra ultricies ligula, sed maximus sem tempor non. Fusce imperdiet nibh a congue vulputate. Morbi eros eros, condimentum sed laoreet sit amet, consequat ut urna. Sed vel lacus eu nulla mattis interdum eu at odio. Etiam metus ante, lobortis at blandit sit amet, finibus at diam.",
  },
];

const TermsConditionsMobile = () => {
  return (
    <div className="bg-[#0B0515]">
      <HeaderMobile />
      <div className="pt-[100px] text-[32px] leading-[38px] font-[500] max-w-[300px] mx-auto text-center">
        Terms and Conditions
      </div>
      {datas?.map((data: any, index: number) => {
        return (
          <div key={index} className="px-5">
            <div className="text-[16px] leading-[19px] mt-5 font-[500] uppercase">
              {data?.title}
            </div>
            <p className="text-[14px] leading-[22px] mt-3">{data?.content}</p>
          </div>
        );
      })}
      <div className="px-5 mt-10">
        <Image
          src="/assets/ava-moai-png1.png"
          className="w-full max-w-[290px] mx-auto"
          width={290}
          height={290}
          alt="moai"
        />
      </div>
      <FooterMobile showAll={false} />
    </div>
  );
};

export default TermsConditionsMobile;
