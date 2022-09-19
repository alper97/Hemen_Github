import React, { Component } from "react";
import Slider from "react-slick";
import s1 from "../../data/s1.png";
import s2 from "../../data/s2.png";
import s3 from "../../data/s3.png";



function slider() {

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (

    <>
      <Slider {...settings} className='container mx-auto shadow-lg'>

        <div className='h-[500px] w-auto bg-gradient-to-tr from-bg-gon via-bg-mpurp to-bg-mavi '>
          <div className="flex justify-around">
            <div className="w-auto h-[500px] grid items-center">
              <div>
                <h2 className="text-5xl font-bold text-white">PROFESYONEL <br /> TAMİRCİLERİ LİSTELE <br /> EN UYGUNUNU SEÇ </h2>
                <p className="text-xl text-white">Profesyonel tamirciler için hemen tıkla.</p>
              </div>
            </div>
            <div className="w-96 h-auto bottom-0">
              <img src={s2} alt="#" />
            </div>
          </div>
        </div>
        <div className='h-[500px] w-auto bg-gradient-to-tr from-bg-green via-bg-mgreen to-bg-laci'>
          <div className="flex justify-around">
            <div className="w-auto h-[500px] grid items-center">
              <div>
                <h2 className="text-5xl font-bold text-white">İHTİYACIN <br /> OLAN HİZMET <br /> BİR TIK UZAĞINDA </h2>
                <p className="text-xl text-white">Profesyonel inşaat ustaları için hemen tıkla.</p>
              </div>
            </div>
            <div className="w-96 h-auto bottom-0">
              <img src={s1} alt="#" />
            </div>
          </div>
        </div>
        <div className='h-[500px] w-auto bg-gradient-to-tr from-bg-pink via-bg-pinkb to-bg-pinkt'>
          <div className="flex justify-around">
            <div className="w-auto h-[500px] grid items-center">
              <div>
                <h2 className="text-5xl font-bold text-white">YORUMLARI İNCELE <br /> FİYAT TEKLİFİ AL <br /> HEMEN TIKLA </h2>
                <p className="text-xl text-white">En iyi temizlik için hemen tıkla.</p>
              </div>
            </div>
            <div className="w-96 h-auto bottom-0">
              <img src={s3} alt="#" />
            </div>
          </div>
        </div>
      </Slider>
    </>

  )
}

export default slider