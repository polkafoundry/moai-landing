import FooterMobile from "../../../components/mobile/main/footer";
import HeaderMobile from "../../../components/mobile/main/header";

const datas = [
  {
    title: "GENERAL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus justo, hendrerit et tristique quis, vulputate sed tellus. Donec id luctus nisi, nec tincidunt quam. In volutpat nibh sit amet turpis hendrerit, vitae aliquet felis porta. Sed nulla orci, blandit sit amet consectetur non, auctor ut enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla in quam at fermentum. Donec est libero, fermentum quis eleifend et, aliquam sit.",
  },
  {
    title: "COLLECTION, USE AND DISCLOSURE OF PERSONAL DATA",
    content:
      "Vestibulum ornare facilisis rutrum. Sed volutpat maximus tempus. Ut pharetra diam ipsum. Nullam quis convallis velit. Curabitur lorem velit, consectetur a consectetur eget, rhoncus vel nibh. Aenean varius lorem vitae tellus tincidunt accumsan. Morbi sapien lacus, eleifend in hendrerit sit amet, convallis non odio. Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu, dignissim lobortis leo. Vivamus vulputate pulvinar ipsum, nec",
  },
  {
    title: "WITHDRAWING YOUR CONSENT",
    content:
      "Curabitur lorem velit, consectetur a consectetur eget, rhoncus vel nibh. Aenean varius lorem vitae tellus tincidunt accumsan. Morbi sapien lacus, eleifend in hendrerit sit amet, convallis non odio. Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu, dignissim lobortis leo. Vivamus vulputate pulvinar ipsum, nec",
  },
  {
    title: "PROTECTION OF PERSONAL DATA",
    content:
      "Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu, dignissim lobortis leo. Vivamus vulputate pulvinar ipsum, nec",
  },
  {
    title: "ACCURACY OF PERSONAL DATA",
    content:
      "Morbi sapien lacus, eleifend in hendrerit sit amet, convallis non odio. Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu",
  },
  {
    title: "RETENTION OF PERSONAL DATA",
    content:
      "Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet.",
  },
];

const PrivacyPolicyMobile = () => {
  return (
    <div className="bg-[#0B0515]">
      <HeaderMobile />
      <div className="pt-[100px] text-[32px] leading-[38px] font-[500] max-w-[300px] mx-auto text-center">
        Privacy Policy
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
      <FooterMobile showAll={false} />
    </div>
  );
};

export default PrivacyPolicyMobile;
