import useMediaQuery from "../../../components/hooks/media-query";
import TermsConditionsMobile from "./terms-conditions-mobile";
import { DISCORD_URL, MOAI_EMAIL, TELE_URL, TWITTER_URL } from "@/const/config";
import { ExternalLink } from "@/uikit/external-link";

export function TermsAndConditions() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) return <TermsConditionsMobile />;

  return (
    <div className="h-screen bg-[#1E1E1E] pt-[70px] flex items-center">
      <div className="container">
        <h1 className="text-[48px] font-[500] mb-[20px]">
          Terms and Conditions
        </h1>

        <div
          onWheelCapture={(e) => e.stopPropagation()}
          className={"max-h-[450px] overflow-x-hidden overflow-y-auto"}
        >
          <div className="pr-[40px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
              <div className="w-full flex flex-col gap-[20px] text-white/80">
                <div>
                  This end-user agreement (the "Agreement") should be read by
                  you (the "User" or "you") in its entirety prior to your use of
                  Wicked Moai’s service or products. Be aware that this
                  Agreement constitutes a legally binding agreement between you
                  and Wicked Moai (referred to herein as "Wicked Moai", "us" or
                  "we") which owns and operates the website on the Internet and
                  the Service at moai3.xyz (the "Service"). By accessing or
                  using the site or Wicked Moai Services, you agree that you
                  have read, understood, and agree to be bound by this
                  agreement.
                </div>
                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    1. General Conditions of use
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      By signing up to use an Account through any of the Wicked
                      Moai Clients’ social websites made available through the
                      Wicked Moai Platform, you agree to comply with and be
                      legally bound by this Agreement. If you do not agree to
                      any of the terms set forth in this Agreement or any
                      subsequent modification to the Agreement, you may not
                      access or use any of the Wicked Moai Services and must
                      cancel your Wicked Moai Account immediately.
                    </li>
                    <li>
                      We may amend or modify this Agreement by posting such
                      amended or modified Agreement (“Revised Agreement”) on the
                      Wicked Moai Platform or by notifying you about the changes
                      via email. By continuing to access or use the Wicked Moai
                      Services once the Revised Agreement is effective, you
                      agree to be bound by its terms.
                    </li>
                    <li>
                      To be eligible to use the Wicked Moai Services, you must
                      be at least 18 years old (or the applicable age of
                      majority and contractual capacity in each qualifying
                      jurisdiction). By accessing or using the Wicked Moai
                      Services you represent and warrant that you are 18 or
                      older.
                    </li>
                    <li>
                      Wicked Moai disclaims any and all warranties, expressed or
                      implied, in connection with the service which is provided
                      to you "as is" and we provide you with no warranty or
                      representation whatsoever regarding its quality, fitness
                      for purpose, completeness, or accuracy.
                    </li>
                    <li>
                      The term "Wicked Moai", its domain names and any other
                      trademarks, or service marks used by Wicked Moai as part
                      of the Service (the "Trademarks"), are solely owned by
                      Wicked Moai. In addition, all content on the website,
                      including, but not limited to, the images, pictures,
                      graphics, photographs, animations, videos, music, audio,
                      and text (the "Site Content") belongs to Wicked Moai and
                      is protected by copyright and/or other intellectual
                      property or other rights. You hereby acknowledge that by
                      using the Service, you obtain no rights in the Site
                      Content and/or the Trademarks, or any part thereof. Under
                      no circumstances may you use the Site Content and/or the
                      Trade Marks without Wicked Moai’s prior written consent.
                      Additionally, you agree not to do anything that will harm
                      or potentially harm the rights, including the intellectual
                      property rights of Wicked Moai.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    2. Authority/Terms of Service
                  </div>
                  <div>
                    You agree to the rules of the Service provided and described
                    on the moai3.xyz website. Wicked Moai retains all authority
                    over the issuing, maintenance, and closing of the Service.
                    The decision of Wicked Moai’s management, concerning any use
                    of the Service, or dispute resolution, is final and shall
                    not be open to review or appeal.
                  </div>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    3. Your Representations and Warranties
                  </div>
                  Prior to your use of the Service and on an ongoing basis you
                  represent, warrant, covenant, and agree that:
                  <ul className="list-disc list-inside">
                    <li>
                      There is a risk of losing cryptocurrency & other funds of
                      value when using the Service and Wicked Moai has no
                      responsibility to you for any such loss;
                    </li>
                    <li>
                      Your use of the Service is at your sole option,
                      discretion, and risk. You hereby accept full
                      responsibility for any consequences that may arise from
                      your use of the Services, and expressly agree and
                      acknowledge that Wicked Moai shall have absolutely no
                      liability in this regard.
                    </li>
                    <li>
                      You are solely responsible for any applicable taxes which
                      may be payable on cryptocurrency traded or transacted by
                      you through your using the Service;
                    </li>
                    <li>
                      Any cryptographic tokens, blockchain technology, or
                      distributed ledger technology-related projects are new and
                      relatively untested, and outside of both our and our
                      Clients’ exclusive control. Any adverse changes in market
                      forces, technology, and regulatory environment impacting
                      our performance under this Agreement shall absolve us from
                      responsibility in this regard, including but not limited
                      to hacking attacks, possible theft, unfavorable regulatory
                      action, or unclear legal/tax status of cryptographic
                      tokens.
                    </li>
                    <li>
                      (i) You are eighteen years of age or older, (ii) you are
                      of the age of majority in your jurisdiction, (iii) you are
                      accessing the Service from a jurisdiction in which it is
                      legal to do so, (iv) your use of the Services is not
                      prohibited by applicable law, and at all times compliant
                      with applicable law; and (v) you are solely responsible
                      for use of the Services and, if applicable, for all
                      activities that occur on or through your User Account.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    4. Prohibited Uses & Termination
                  </div>
                  <div className="text-[24px] my-[8px] text-white">
                    4.1. In connection with your use of the Wicked Moai
                    Services, and your interactions with other Users, and third
                    parties you agree and represent you will not engage in any
                    illegal, unauthorized, or improper activity, which are:
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Infringe any proprietary rights, including but not limited
                      to copyrights, patents, trademarks, or trade secrets of
                      Wicked Moai;
                    </li>
                    <li>
                      Create multiple accounts, including for collusion and/or
                      abuse of service;
                    </li>
                    <li>
                      Use the Services to transmit any data or send or upload
                      any material that contains viruses, Trojan horses, worms,
                      time-bombs, keystroke loggers, spyware, adware, or any
                      other harmful programs or similar computer code designed
                      to adversely affect the operation of any computer software
                      or hardware;
                    </li>
                    <li>
                      Make any backup or archival copies of the Platform or any
                      part thereof, including disassembling or de-compilation of
                      the Platform;
                    </li>
                  </ul>

                  <div className="text-white">4.2</div>
                  <div>
                    We reserve the right to (a) modify or discontinue any
                    portion of the Wicked Moai Services, and (b) suspend or
                    terminate your access to the Wicked Moai Services, at any
                    time, and from time to time, without notice to you in
                    certain, limited circumstances described herein. You agree
                    that we shall not be liable to you or any third party for
                    any modification or termination of the Wicked Moai Services,
                    or suspension or termination of your access to the Wicked
                    Moai Services, except to the extent otherwise expressly set
                    forth herein.
                  </div>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    5. Know your Customer (“KYC”) and Anti-Money Laundering
                    (AML) Policy
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Wicked Moai is a permissionless, fully decentralized
                      platform for token sales, swaps, and decentralized
                      exchange. As a software development company, Wicked Moai
                      has no role in enforcing KYC by default, however, we do
                      provide such tools for fundraising entities using Wicked
                      Moai to enforce on their users, if the entities choose to
                      do so. The use of KYC/AML tools on Wicked Moai by
                      fundraising entities using the Service is completely at
                      the discretion of said entities.
                    </li>
                    <li>
                      Although Wicked Moai makes no warranty as to the merit,
                      legality, or juridical nature of any token (including
                      whether or not it is considered a security or financial
                      instrument under any applicable Securities Laws), token
                      sale or fundraiser on top of Wicked Moai, we nonetheless
                      understand the need of some token projects to require
                      KYC/AML on their token sale participants.
                    </li>
                    <li>
                      Therefore, and at the sole behest of fundraising entities
                      and/or competent regulatory authorities, Wicked Moai
                      reserves the right at any time:
                    </li>
                    <li>
                      To ask for any KYC documentation it deems necessary to
                      determine the identity and location of a User.
                    </li>
                    <li>
                      To restrict service and payment until identity is
                      sufficiently determined.
                    </li>
                    <li>
                      To share submitted KYC information and documentation to
                      3rd parties to verify the authenticity of submitted
                      information, and the end-user (you) agrees to this by
                      using the Service.
                    </li>
                    <li>
                      To confiscate any and all funds that are found to be in
                      violation of relevant and applicable anti-money laundering
                      (AML) and countering terrorism financing (CFT) laws and
                      regulations, and to cooperate with the competent
                      authorities when and if necessary.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    6. Retention of Intellectual Property Rights of Wicked Moai
                    Platform and Wicked Moai clients
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      The Wicked Moai Platform and all Wicked Moai Services,
                      including their design elements or concepts and any
                      underlying intellectual property, including, but not
                      limited to, all trademarks, are the property of Wicked
                      Moai and/or Wicked Moai Customers (as applicable), and are
                      protected by copyright, patent, trade secret, and other
                      intellectual property laws.
                    </li>
                    <li>
                      Wicked Moai and Wicked Moai Clients retain any and all
                      rights, title, and interest in and to Wicked Moai Platform
                      and Wicked Moai Services (including, without limitation,
                      all intellectual property rights), including all copies,
                      modifications, extensions, and derivative works thereof.
                      Your right to use the Wicked Moai Platform and Wicked Moai
                      Services is limited to the rights expressly granted in
                      these Terms. Except as stated in these Terms, nothing in
                      these Terms should be construed as conferring any right in
                      or license to Wicked Moai’s or any third party’s
                      intellectual rights.
                    </li>
                    <li>
                      You may not: Copy, create derivative works, distribute,
                      publish, reverse engineer, decompile, disassemble, modify,
                      or translate the Wicked Moai website or the Service; or
                      Use the Service that in any way is prohibited by
                      applicable laws or regulations (each of the above herein
                      defined as an "Unauthorized Use"). You agree that you will
                      be solely responsible for any damage, costs, or expenses
                      arising out of or in connection with any unauthorized use
                      by you
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    7. Jurisdiction and Governing Law
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      The laws of Panama (with the exclusion of any rules that
                      might lead to the use of any other law which is not the
                      law of Panama) will govern the validity and construction
                      of this Agreement, any separate agreement whereby we
                      provide you any services and any dispute arising out of or
                      in relation to this Agreement or such separate agreement.
                    </li>
                    <li>
                      Citizens and residents of and persons located in the
                      United States of America, China, Hong Kong, and all
                      sanctioned OFAC countries (DR Congo, Iran, Myanmar, Sudan,
                      Iraq, Ivory Coast, North Korea, Syria, Zimbabwe, Cuba,
                      Belarus, Liberia) (the ”Prohibited Jurisdictions”) are not
                      permitted to make use of the Service.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    8. Third-party services
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      The Services may include services, content, and
                      information owned, made available, or otherwise licensed
                      by a third party (“Third-Party Services”) or contain links
                      to Third Party Services. You understand that Third-Party
                      Services are the responsibility of the third party that
                      created or provided it and acknowledges that the use of
                      such Third Party Services is solely at your own risk.
                    </li>
                    <li>
                      Wicked Moai makes no representations and excludes all
                      warranties and liabilities arising out of or pertaining to
                      such Third Party Services, including its accuracy or
                      completeness.
                    </li>
                    <li>
                      All intellectual property rights in and to Third-Party
                      Services are the property of the respective third parties.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    9. Breach
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Without prejudice to any other rights, if a User breaches
                      in whole or in part any provision contained herein, Wicked
                      Moai reserves the right to take such action as it sees
                      fit, including terminating this Agreement or any other
                      agreement in place with the User and/or taking legal
                      action against such User.
                    </li>
                    <li>
                      You agree to indemnify and hold harmless Wicked Moai, its
                      affiliates, subsidiaries, licensors, and their respective
                      directors, officers, members, managers, employees, and
                      agents from and against any and all claims and expenses
                      arising out of your use of the Services, a breach of any
                      provision of these Terms by you or any person using the
                      Services on your behalf, a breach by you of any applicable
                      laws, or any third-party claim to the extent arising from
                      or connected with an allegation that your use of the
                      Services in accordance with these Terms infringes any
                      rights of a third party.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[24px] my-[8px] text-white">
                    10. Force Majeure
                  </div>
                  <ul className="list-disc list-inside">
                    <li>
                      Wicked Moai shall have no liability for delays, failure in
                      performance, or interruption of service which result
                      directly or indirectly from any cause or condition beyond
                      our reasonable control, including but not limited to, any
                      delay or failure due to any act of God, the act of civil
                      or military authorities, the act of terrorists, civil
                      disturbance, war, strike or other labor dispute, fire,
                      interruption in telecommunications or Internet services or
                      network provider services, failure of equipment and/or
                      software, other catastrophe or any other occurrence which
                      is beyond our reasonable control and shall not affect the
                      validity and enforceability of any remaining provisions.
                    </li>
                    <li>
                      You agree to indemnify and hold harmless Wicked Moai, its
                      affiliates, subsidiaries, licensors, and their respective
                      directors, officers, members, managers, employees, and
                      agents from and against any and all claims and expenses
                      arising out of your use of the Services, a breach of any
                      provision of these Terms by you or any person using the
                      Services on your behalf, a breach by you of any applicable
                      laws, or any third-party claim to the extent arising from
                      or connected with an allegation that your use of the
                      Services in accordance with these Terms infringes any
                      rights of a third party.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='text-[24px] my-[8px] text-white'>11. Force Majeure</div>
                  <ul className='list-disc list-inside'>
                    <li>Severability: If a provision of this Agreement is or becomes illegal, invalid, or unenforceable in any jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other provision hereof or the validity or enforceability in other jurisdictions of that or any other provision hereof.</li>
                    <li>Assignment: Wicked Moai reserves the right to assign this Agreement, in whole or in part, at any time without notice. The User may not assign any of his/her rights or obligations under this Agreement.</li>
                    <li>Third-Party Rights: Unless expressly provided to the contrary in this Agreement, a person who is not a party to this Agreement has no right to enforce or to enjoy the benefit of any term of this Agreement. Notwithstanding any term of this Agreement, no consent of any party who is not a party to this Agreement shall be required for the waiver, variation, or termination of any part of this Agreement.</li>
                    <li>Support and Notice: All notices, requests, demands, and determinations for Wicked Moai under these Terms (other than routine operational communications) shall be sent to our official accounts:
                      <ul className='list-disc list-inside pl-4'>
                        <li>Twitter: <ExternalLink className='text-[var(--m-clr-text-orange)]' href={TWITTER_URL}>{TWITTER_URL}</ExternalLink></li>
                        <li>Discord: <ExternalLink className='text-[var(--m-clr-text-orange)]' href={DISCORD_URL}>{DISCORD_URL}</ExternalLink></li>
                        <li>Telegram channel: <ExternalLink className='text-[var(--m-clr-text-orange)]' href={TELE_URL}>{TELE_URL}</ExternalLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full relative">
                <div className="sticky top-0 bottom-0">
                  <div className="flex justify-center items-center h-[450px]">
                    <img src="/assets/ava-moai-png1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
