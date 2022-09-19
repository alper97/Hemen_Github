import enka from '../../data/enka.png'

function Section3() {
  return (
    <div className='container mx-auto shadow-md'>
      <div className='w-full'>
        <section className="pb-28 bg-base-white flex text-center gap-y-9 flex-col">
          <h5 className='text-2xl font-bold text-brand-color'>
            Öne Çıkan İşletmeler
          </h5>
          <div className='grid grid-cols-3 my-2 m-9 gap-7 '>
            <div className='rounded-lg bg-white border flex hover:shadow-lg'>
              <img src={enka} alt="image" className='w-48 h-40 object-contain bg-white rounded-l-lg py-4 pl-2 pr-4 border-r-2' />
              <div className='max-h-40  text-left p-3 flex flex-col gap-1'>
                <p className='text-lg font-semibold'>Enka Mühendislik</p>          
                <p className='text-xs font-bold'>İstanbul/Bağcılar</p>
                <p className='text-'>İçerik şöyle iyiz böyle iyiz vs. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur... </p> 
              </div>
            </div>
            <div className='rounded-lg bg-white border flex hover:shadow-lg'>
              <img src={enka} alt="image" className='w-48 h-40 object-contain bg-white rounded-l-lg py-4 pl-2 pr-4 border-r-2' />
              <div className='max-h-40  text-left p-3 flex flex-col gap-1'>
                <p className='text-lg font-semibold'>Enka Mühendislik</p>          
                <p className='text-xs'>İstanbul/Bağcılar</p>
                <p className='text-'>İçerik şöyle iyiz böyle iyiz vs. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur... </p> 
              </div>
            </div>
            <div className='rounded-lg bg-white border flex hover:shadow-lg'>
              <img src={enka} alt="image" className='w-48 h-40 object-contain bg-white rounded-l-lg py-4 pl-2 pr-4 border-r-2' />
              <div className='max-h-40  text-left p-3 flex flex-col gap-1'>
                <p className='text-lg font-semibold'>Enka Mühendislik</p>          
                <p className='text-xs'>İstanbul/Bağcılar</p>
                <p className='text-'>İçerik şöyle iyiz böyle iyiz vs. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur... </p> 
              </div>
            </div>
            <div className='rounded-lg bg-white border flex hover:shadow-lg'>
              <img src={enka} alt="image" className='w-48 h-40 object-contain bg-white rounded-l-lg py-4 pl-2 pr-4 border-r-2' />
              <div className='max-h-40  text-left p-3 flex flex-col gap-1'>
                <p className='text-lg font-semibold'>Enka Mühendislik</p>          
                <p className='text-xs'>İstanbul/Bağcılar</p>
                <p className='text-'>İçerik şöyle iyiz böyle iyiz vs. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur... </p> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Section3