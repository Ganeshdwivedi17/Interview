"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import BookHero from '../assets/images/BookHero.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {

    const Data = [
        { imgsrc: 'https://bookbins.in/wp-content/uploads/2023/08/Shrimadbhagwat-Geeta-Hindi-Buy-Online-Bookbins-Hardcover-1.png', title: 'Shri Bhagvad Gita', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.' },
        { imgsrc: 'https://bookbins.in/wp-content/uploads/2021/05/The-Psychology-Of-Money-Morgan-Housel-Buy-Online-Bookbins-1.png', title: 'the psychology of money', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.' },
        { imgsrc: 'https://bookbins.in/wp-content/uploads/2022/12/Lifes-Amazing-Secret-Gaur-Gopal-Das-Buy-Online-Bookbins-1.png', title: "Life's Amazing Secret", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.' },
        { imgsrc: 'https://bookbins.in/wp-content/uploads/2021/05/The-Intelligent-Investor-Benjamin-Graham-Buy-Online-Bookbins-1.png', title: 'The intelligent investor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.' }]


    return (
        <div className='w-full h-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="HeroSwipper"
            >
                {Data.map((item, index) =>
                    <SwiperSlide>
                        <div className='grid grid-cols-1 bg-gradient-to-r from-[#FFE5E5] via-[#F5FFFE] to-[#fff] xl:grid-cols-2 place-items-center overflow-hidden xl:px-[65px] px-[25px] xl:py-0 py-[200px] lg:py-[100px]'>
                            <div className=''>
                                <h3 className='text-[#173F5F] text-[24px] xl:text-[40px] font-[700]'>{item.title}</h3>
                                <p className='text-[#173F5F] mt-[10px] lg:text-[22px] text-[16px] font-medium'>{item.description}</p>
                                <button className='mt-[40px] border rounded-md hover:bg-[#173F5F] hover:text-white transition-colors border-[#173F5F] text-[16px] px-[35px] py-[10px]'>Read More <ArrowRightAltIcon /></button>
                            </div>
                            <div className='xl:mt-0 mt-[80px] lg:w-full w-[60vw] md:w-[45vw] overflow-hidden'>
                                <img className='w-full h-full object-cover object-right-top' src={item.imgsrc}
                                    alt='Hero-img' />
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Hero