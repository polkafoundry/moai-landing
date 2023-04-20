import { FadeEffect } from "@/uikit/animation/fade-effect";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { HomeSection } from "../const";
import { useScreenActive } from "../ctx";
import styles from './faq.module.scss';

const faq = [
  { question: '1. What is Evil Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '2. Which blockchain is Wicked Moai on?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '3. How is the on-chain game world utilized in Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '4. What is Wicked Moai\'s token?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '5. What types of NFTs are available in Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '6. How many NFTs available in the collection?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '7. What is the rarity system for Wicked Moai NFTs and how does it affect gameplay?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '8. How can I contribute to the development of Wicked Moai, such as through suggesting new ideas or reporting bugs?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '9. Is there a community or forum for Wicked Moai where I can connect with other players and discuss strategies?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
  { question: '10. What is the roadmap for future updates and features for Wicked Moai?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et auctor lectus. Curabitur consectetur metus vitae tristique rhoncus. Nunc a ex nisl. Ut tincidunt sollicitudin massa ut sagittis. Mauris rutrum nulla dui, id vestibulum erat ultrices vitae. Cras eleifend magna cursus sem dapibus, vitae finibus augue convallis. Mauris nec mi maximus, placerat urna id, placerat felis. Nam massa ligula, sollicitudin et malesuada a, aliquam eu ipsum. Aenean ultricies cursus mi.' },
];

export function FAQ() {
  const show = useScreenActive(HomeSection.FAQ);
  const elRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (!show) setActiveIdx(0);
  }, [show])

  useEffect(() => {
    setTimeout(() => {
      setScroll(true);
    }, 3000)
    if (!elRef.current) return;
    elRef.current.onwheel = function (e) {
      e.stopPropagation();
    }
  }, []);

  const handleActive = (idx: number) => {
    setActiveIdx(idx);
  }

  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop flex items-center" style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <FadeEffect show={show} y={-50}>
          <h1 className='text-[48px] font-[500] mb-[30px]'>Frequent Asked Questions</h1>
        </FadeEffect>

        <div ref={elRef} className={clsx('max-h-[500px]', {
          'overflow-hidden': !scroll || !show,
          'overflow-auto': scroll && show,
        })}>
          <div className="pr-[40px]">
            <div className="grid grid-cols-2 gap-[60px]">
              <div className="w-full flex flex-col gap-[8px]">
                {faq.map((item, idx) => (
                  <FadeEffect key={idx} show={show} x={-idx * 40 + 30}>
                    <div className={clsx('relative py-[12px] px-[24px] rounded-[8px] transition-all', styles['faq-item'], {
                      [styles['faq-item-active']]: activeIdx === idx,
                    })}>
                      <div
                        onClick={() => handleActive(idx)}
                        className={clsx('font-[500] cursor-pointer transition-all', {
                          'text-[#F98306]': activeIdx === idx,
                        })}
                      >
                        {item.question}
                      </div>
                    </div>
                  </FadeEffect>
                ))}
              </div>
              <div className="w-full relative">
                <div className="sticky top-0 bottom-0">
                  <div className="flex justify-center items-center h-[450px]">
                    <div>
                      <div className='text-highlight text-[24px] font-[500] mb-[12px]'>{faq[activeIdx].question}</div>
                      <div className={clsx('font-[400] text-white/80', {
                      })}>{faq[activeIdx].answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}