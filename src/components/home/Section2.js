import { Icon } from "../../data/icons";

function Section2() {
  return (
    <div className='container mx-auto text-center pb-10 lg:pb-20 bg-base-white'>
      <div className='bg-gray-600 py-12'>
        <h5 className='text-2xl font-bold text-base-white'>
          Lorem İpsum Nasıl Çalışır ?
        </h5>
        <div className="flex justify-evenly my-16 ">
          <div className="flex flex-col justify-center items-center gap-y-6">
            <i className="border-2 rounded-full p-5 relative items-center">
              <Icon name="note" size={55} />
              <p className="absolute top-0 right-0 bg-base-white px-2 rounded-full font-bold text-brand-gray">1</p>
            </i>
            <p className="text-base-white text-2xl font-semibold ">Lorem, ipsum dolor.</p>
            <p className="text-base-white text-lg ">Lorem ipsum dolor sit.  <br />  Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <i className="border-2 rounded-full p-5 relative items-center">
              <Icon name="worker" size={55} />
              <p className="absolute top-0 right-0 bg-base-white px-2 rounded-full font-bold text-brand-gray">2</p>
            </i>
            <p className="text-base-white text-2xl font-semibold ">Lorem, ipsum dolor.</p>
            <p className="text-base-white text-lg ">Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-6">
            <i className="border-2 rounded-full p-5 relative items-center">
              <Icon name="success" size={55} />
              <p className="absolute top-0 right-0 bg-base-white px-2 rounded-full font-bold text-brand-gray">3</p>
            </i>
            <p className="text-base-white text-2xl font-semibold ">Lorem, ipsum.</p>
            <p className="text-base-white text-lg ">Lorem ipsum dolor sit. <br /> Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2