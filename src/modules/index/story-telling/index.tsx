export function StoryTelling() {
  return (
    <div className="h-[100vh] pt-[75px] pb-[50px] backdrop"  style={{ backgroundImage: `url(/assets/bg-moai1.png)`, backgroundSize: 'cover' }}>
      <div className='container relative z-10 bg-transparent'>
        <h1 className='text-[48px] font-semibold mb-[25px]'>Story telling</h1>
        <div className='grid grid-cols-3 gap-[40px]'>
          <div className='col-span-2'>
            <div className='flex gap-[40px] text-white/80 mb-[28px]'>
              <div>Some time ago, there was an ancient god named the Makemake, who guarded the Rapa Nui of Easter Island, helped its islanders build Moai statues, and imbued these statues with the Mana spirit - symboling “Living for the future”. The Mana rests in the eyes of Moai, following the Rapa Nui islanders in their daily life and blessing them with strength, bravery, prosperity, peace, and protection. </div>
              <div>Nonetheless, as life began to grow prosperous, the people of Rapa Nui began to abandon their faith, and a group of wreckers eventually destroyed the eyes of Moai. This left the Mana with no home to go to, causing natural disasters and deathly diseases to rain on the Rapa Nui island, and slowly, people began
                to disappear. </div>
            </div>

            <div className='text-[var(--m-clr-text-orange)] font-[500] border-l-[4px] border-l-[var(--m-clr-text-orange)] pl-[20px] py-1 text-[20px]'>To protect the Moais, the Makemake hid them away in the shape of what we know today as “Wicked Moai NFT” - 1043 pieces all over the world. The ongoing search for them is becoming more intriguing, as people believe whoever beholds them, will not only be blessed but also unveil a mysterious ancient secret.</div>
          </div>
          <div className='col-span-1'>
            <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">Yo</div>
          </div>
        </div>
      </div>
    </div>
  )
}