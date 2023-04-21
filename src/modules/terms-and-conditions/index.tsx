export function TermsAndConditions() {
  return (
    <div className='h-screen bg-[#1E1E1E] pt-[70px] flex items-center'>
      <div className='container'>
        <h1 className='text-[48px] font-[500] mb-[20px]'>Terms and Conditions</h1>

        <div onWheelCapture={e => e.stopPropagation()} className={('max-h-[500px] overflow-x-hidden overflow-y-auto')}>
          <div className="pr-[40px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
              <div className="w-full flex flex-col gap-[20px]">
                <div>
                  <div className='text-[20px] mb-[8px]'>OWNERSHIP</div>
                  <div className='text-white/80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus justo, hendrerit et tristique quis, vulputate sed tellus. Donec id luctus nisi, nec tincidunt quam. In volutpat nibh sit amet turpis hendrerit, vitae aliquet felis porta. Sed nulla orci, blandit sit amet consectetur non, auctor ut enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla in quam at fermentum. Donec est libero, fermentum quis eleifend et, aliquam sit amet arcu.</div>
                </div>

                <div>
                  <div className='text-[20px] mb-[8px]'>YOUR OBLIGATIONS</div>
                  <div className='text-white/80'>Vestibulum ornare facilisis rutrum. Sed volutpat maximus tempus. Ut pharetra diam ipsum. Nullam quis convallis velit. Curabitur lorem velit, consectetur a consectetur eget, rhoncus vel nibh. Aenean varius lorem vitae tellus tincidunt accumsan. Morbi sapien lacus, eleifend in hendrerit sit amet, convallis non odio. Curabitur eget nibh volutpat lorem eleifend maximus. Phasellus ut blandit sapien. Duis enim felis, dapibus ultricies quam eu, condimentum tempor orci. Mauris dui nunc, cursus sit amet risus id, feugiat porttitor justo. Duis ex lacus, ultricies vel quam eu, dignissim lobortis leo. Vivamus vulputate pulvinar ipsum, nec </div>
                </div>
              </div>
              <div className="w-full relative">
                <div className="sticky top-0 bottom-0">
                  <div className="flex justify-center items-center h-[450px]">
                    <img src='/assets/ava-moai-png1.png' />
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