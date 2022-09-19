import ss1 from "../../data/ss1.jpg";
import ss2 from "../../data/ss2.jpg";
import ss3 from "../../data/ss3.jpg";

function Section1() {
  return (
    <div className='container mx-auto shadow-md'>
      <div className='w-full'>
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-base-white">
          <div class="container">
            <div class="flex flex-wrap justify-center mx-32 ">
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <a href="#">
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
                    <img
                      src={ss1}
                      alt="image"
                      class="w-full"
                    />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-4 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        block
                        hover:text-primary
                        "
                        >
                          Tadilat İnşaat Hizmetleri
                        </a>
                      </h3>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="
                      w-full
                      text-center
                      inline-block
                      py-4
                      px-7
                      border border-[#E5E7EB]
                      rounded-b-lg
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                      bg-but-orange
                      hover:bg-but-orange-foc
                      "
                    >
                      Kategoriler
                    </a>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <a href="#">
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
                    <img
                      src={ss2}
                      alt="image"
                      class="w-full"
                    />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-4 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        block
                        hover:text-primary
                        "
                        >
                          Montaj Ve Tamir Hizmetleri
                        </a>
                      </h3>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="
                      w-full
                      text-center
                      inline-block
                      py-4
                      px-7
                      border border-[#E5E7EB]
                      rounded-b-lg
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                      bg-but-orange
                      hover:bg-but-orange-foc
                      "
                    >
                      Kategoriler
                    </a>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                <a href="#">
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
                    <img
                      src={ss3}
                      alt="image"
                      class="w-full"
                    />
                    <div class="p-8 sm:p-9 md:p-7 xl:p-4 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        block
                        hover:text-primary
                        "
                        >
                          Temizlik Hizmetleri
                        </a>
                      </h3>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="
                      w-full
                      text-center
                      inline-block
                      py-4
                      px-7
                      border border-[#E5E7EB]
                      rounded-b-lg
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-white
                      transition
                      bg-but-orange
                      hover:bg-but-orange-foc
                      "
                    >
                      Kategoriler
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Section1