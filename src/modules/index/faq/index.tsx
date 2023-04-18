import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

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
  const elRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
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
        <h1 className='text-[48px] font-[500] mb-[30px]'>Frequent Asked Questions</h1>

        <div ref={elRef} className='max-h-[500px] overflow-auto'>
          <div className="pr-[40px] flex flex-col gap-[8px] ">
            {faq.map((item, idx) => (
              <div key={idx} className={clsx('relative py-[12px] px-[24px] border-[2px] border-white/10 rounded-[8px] transition-all', {
                'border-white/10': activeIdx !== idx,
                'border-[#F98306]': activeIdx === idx,
              })}>
                <div
                  onClick={() => handleActive(idx)}
                  className={clsx('font-[500] cursor-pointer transition-all', {
                    'text-[#F98306]': activeIdx === idx,
                  })}
                >
                  {item.question}
                </div>

                <div className={clsx('pl-[18px] mt-[4px] transition-all overflow-hidden', {
                  'h-0': activeIdx !== idx,
                  'h-auto': activeIdx === idx,
                })}>{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}