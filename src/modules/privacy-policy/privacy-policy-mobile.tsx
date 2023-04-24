import Link from "next/link";
import FooterMobile from "../../../components/mobile/main/footer";
import HeaderMobile from "../../../components/mobile/main/header";
import { DISCORD_URL, TELE_URL, TWITTER_URL, WEB_URL } from "@/const/config";
import { ExternalLink } from "@/uikit/external-link";

const PrivacyPolicyMobile = () => {
  return (
    <div className="bg-[#0B0515]">
      <HeaderMobile />
      <div className="pt-[100px] text-[32px] leading-[38px] font-[500] max-w-[300px] mx-auto text-center">
        Privacy Policy
      </div>
      <div className="w-full flex flex-col gap-[20px] text-white/80 px-5 mt-5">
        <div className="flex flex-col gap-4">
          <p>
            We appreciate your decision to join the Wicked Moai community.
            Wicked Moai, referred to herein as “Wicked Moai”, “we”, “us” or
            “our”. We have implemented this Privacy Policy to outline our data
            collection, use, and disclosure procedures for our websites,
            moai3.xyz, and all associated websites that link to or mention this
            Privacy Policy as we are committed to preserving your privacy.
          </p>

          <p>
            This Privacy Policy together with our Terms of Services sets out the
            basis on which any personal data we collect from the user (referred
            to herein as “you”).
          </p>

          <p>
            By accessing the platform and using our services, you consent to the
            collection, storage, use, and disclosure of your personal data, in
            accordance with this Privacy Policy. We will not collect any
            information from you, except where it is knowingly and explicitly
            provided by you.
          </p>

          <p>
            Wicked Moai is dedicated to upholding your right to privacy and
            making sure that any personal information we may have about you is
            secure, handled with care, and used, stored, and released in line
            with this Privacy Policy. To understand our policies and how we will
            handle your personal data, please read this Policy carefully. Please
            refrain from using our services or giving Wicked Moai platforms your
            personal information if you disagree with this privacy statement.
          </p>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            1. Reasons We Collect Your Data
          </div>
          <div className="text-[18px] my-[8px] text-white">
            1.1 Wicked Moai will collect your Personal Data only by lawful and
            fair means for the following purposes. One or more purposes may
            apply simultaneously.
          </div>
          <ul className="list-disc list-inside">
            <li>To verify your identity for security purposes;</li>
            <li>
              To provide services to you as a user, for example, processing your
              requests or managing your account;
            </li>
            <li>To update you on technical progress of Wicked Moai;</li>
            <li>
              To contact you in relation to the management and administration of
              your Wicked Moai account
            </li>
            <li>
              To email you our newsletter or communicate with you in other form
              about our products or services that we think may be of interest to
              you;
            </li>
            <li>
              To take appropriate action if Wicked Moai has reason to suspect
              that unlawful activity or misconduct of a serious nature has been,
              is being or may be engaged in that relates to our functions and
              activities;
            </li>
            <li>To comply with a legal or regulatory obligation.</li>
          </ul>

          <div className="text-[18px] my-[8px] text-white">1.2</div>
          <div>
            You may choose to deal with us on an anonymous basis or to use a
            pseudonym unless it is not practicable for us to deal with
            individuals who we cannot identify or we are required by law to only
            deal with identified individuals. Also, if you do not provide Wicked
            Moai with the Personal Data we request, we may be unable to process
            your request to become a User, provide you with our services or
            respond to your enquiry or complaint. Examples of Personal Data That
            may be collected by Wicked Moai include your name, email address,
            telephone numbers, your date of birth, other verification
            information such as your Service usage activities. By becoming a
            User or otherwise choosing to provide Wicked Moai with Personal Data
            You consent to Wicked Moai collecting, using and disclosing your
            Personal Data For the above purposes.
          </div>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            2. Types of Data We Collect
          </div>
          <div className="text-[18px] my-[8px] text-white">
            2.1. The types of Personal Data that Wicked Moai may collect from
            you are:
          </div>
          <ul className="list-disc list-inside">
            <li>
              Personal identification information: name, email address, country,
              date of birth, nationality, photo of identification document
              (national ID card or passport), photo of you holding your
              identification document;
            </li>
            <li>User non-custodial wallet address, telegram username.</li>
          </ul>

          <div className="text-[18px] my-[8px] text-white">
            2.2. With regard to each of your visits to our Wicked Moai platform
            and access to the services we may automatically collect the
            following information:
          </div>
          <ul className="list-disc list-inside">
            <li>Transaction data including purchases of crypto assets;</li>
            <li>
              The smart contract stored in your non-custodial wallet address;
            </li>
            <li>
              Technical data including IP address, time zone setting and
              locations, operating system, and other technologies on your device
              used to access the platform;
            </li>
            <li>
              Information about your visits, including the full Uniform Resource
              Locators (URL) clickstream to, through and from the Wicked Moai
              (including date and time);
            </li>
            <li>
              Products or pools you viewed or searched for; page response times,
              download errors, length of visits to certain pages, page
              interaction information (such as scrolling, clicks, and
              mouse-overs), and methods used to browse away from the page;
            </li>
            <li>
              Information regarding the provision of Wicked Moai services we
              might receive from any other sources.
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            3. Collection of Your Data
          </div>
          <div className="text-[18px] my-[8px] text-white">
            3.1. You directly provide Wicked Moai with most of the data we
            collect. We collect data and process data when you:
          </div>
          <ul className="list-disc list-inside">
            <li>Register online and use the Wicked Moai platform services;</li>
            <li>
              Voluntarily complete a Client survey or provide feedback on any of
              our message boards or via email;
            </li>
            <li>
              Contact us, we will keep a record of the information shared during
              the correspondence.
            </li>
          </ul>
          <div className="text-[18px] my-[8px] text-white">3.2</div>
          <div>
            Additionally, we may receive information about you from publicly
            available sources and collect technical and usage data automatically
            when you use our services. For example, we may aggregate your usage
            data to calculate the percentage of users accessing a specific
            feature of the services.
          </div>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            4. Management of Your Data
          </div>
          <ul className="list-disc list-inside">
            <li>
              Wicked Moai will take all reasonable steps to ensure that the
              Personal Data which it collects, uses or discloses is correct and
              is stored in a secure environment which is accessed only by
              authorised persons.
            </li>
            <li>
              Wicked Moai will destroy or permanently de-identify the Personal
              Data we hold when it is no longer required for any purpose
              permitted.
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            5. Security of Your Data
          </div>
          <ul className="list-disc list-inside">
            <li>
              The security of your Personal Data is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is totally secure. Therefore, we
              cannot warrant its absolute security of any information which you
              transmit. Any information which you transmit to Wicked Moai is
              transmitted at your own risk.
            </li>
            <li>
              Remember to always log out of your account when you have completed
              your time on the website. This is particularly important if you
              share a computer with another person. You are responsible for the
              security of and access to your own computer, mobile device or any
              other handset used to access the website.
            </li>
            <li>
              However, we strive to use commercially acceptable means to protect
              your Personal Data, from misuse, loss and unauthorised access,
              modification and disclosure including by using password protected
              systems and databases and security technology. Wicked Moai
              employees, agents and contractors are required to maintain the
              confidentiality of users’ Personal Information and trading
              behaviour. We will comply with the requirements of applicable laws
              in the event of a data or security risk.
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            6. Law Enforcement
          </div>
          <div>
            Under certain circumstances, Wicked Moai may be required to disclose
            your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g., a court or a government
            agency).
          </div>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            7. Business Transactions
          </div>
          <div>
            You are aware that if Wicked Moai is ever involved in a merger,
            acquisition by another organisation or goes through asset sale, your
            personal data might be among the assets transferred. We will provide
            notice before your Personal Data is transferred and becomes subject
            to a different Privacy Policy.
          </div>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            8. Link to Other Third Parties
          </div>
          <div>
            Under certain circumstances, Wicked Moai may be required to disclose
            your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g., a court or a government
            agency).
          </div>
        </div>

        <div>
          <div className="text-[24px] my-[8px] text-white">
            9. Contact Details
          </div>
          <div>
            If you believe that someone has provided us with your Personal Data
            and you would like to request that it be removed from our database,
            please contact us at our contact email as specified below. Besides,
            if you have any queries, requests for access or correction or
            complaints relating to the handling of your personal data, please
            also contact us.
          </div>
          <ul className="list-disc list-inside">
            <li>
              Website:{" "}
              <Link className="text-[var(--m-clr-text-orange)]" href="/">
                {WEB_URL}
              </Link>
            </li>
            <li>
              Twitter:{" "}
              <ExternalLink
                className="text-[var(--m-clr-text-orange)]"
                href={TWITTER_URL}
              >
                {TWITTER_URL}
              </ExternalLink>
            </li>
            <li>
              Discord:{" "}
              <ExternalLink
                className="text-[var(--m-clr-text-orange)]"
                href={DISCORD_URL}
              >
                {DISCORD_URL}
              </ExternalLink>
            </li>
            <li>
              Telegram:{" "}
              <ExternalLink
                className="text-[var(--m-clr-text-orange)]"
                href={TELE_URL}
              >
                {TELE_URL}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <FooterMobile showAll={false} />
    </div>
  );
};

export default PrivacyPolicyMobile;
