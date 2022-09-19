import { Icon } from "../../data/icons";
import { FaRegHandshake } from 'react-icons/fa'
import { RiUserStarLine } from 'react-icons/ri'

function Section4() {
  return (
        <div className='container mx-auto text-center shadow-2xl pb-10 lg:pb-20 bg-base-white'>
          <div className='bg-[#3f37c9] py-12'>
            <h5 className='text-2xl font-bold text-base-white'>
              Neden bizi seçmelisiniz
            </h5>
            <div className="flex justify-evenly my-16">
              <div className="flex flex-col justify-center items-center gap-y-4">
                <i className="items-center mb-4">
                  <FaRegHandshake color="white" size={82} />
                </i>
                <p className="text-base-white text-2xl font-semibold ">Yeni müşterilerle tanış</p>
                <p className="text-base-white text-lg ">Vitrinini dijital dünyaya taşı binlerce <br /> potansiyel müşterilerle tanış.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-6">
                <i className="items-center mb-4">
                  <Icon name="web" size={82} />
                </i>
                <p className="text-base-white text-2xl font-semibold ">Verdiğin Hizmeti Göster</p>
                <p className="text-base-white text-lg ">Müşterilerine verdiğin hizmeti ve geçmiş <br /> işlerinden geri bildirimleri göster.</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-6">
                <i className="items-center mb-4">
                  <RiUserStarLine color="white" size={82} />
                </i>
                <p className="text-base-white text-2xl font-semibold ">Prestijinizi Oluştur</p>
                <p className="text-base-white text-lg ">Deneyimlerinizi paylaşarak yeni <br /> iş fırsatları  yakala.</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Section4