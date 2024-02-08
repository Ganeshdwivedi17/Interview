"use client"
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const LatestArticleCard = ({ imgsrc, title }) => {
    return (
        <div className=''>
            <div className='2xl:w-[25vw] 2xl:h-[400px] h-[300px] w-[90vw] xl:h-[315px] xl:w-[370px]'><img className='w-full h-full object-cover' src={imgsrc} alt='LatestArticleCard' />

            </div>
            <div className='mt-[25px] 2xl:w-[25vw] w-[90vw] xl:w-[370px]'>
                <p className='text-[14px] text-[74642F] font-[400]'>2 Aug, 2020</p>
                <h3 className='xl:text-[26px] mt-[10px] text-[#173F5F] font-[500] text-[20px]'>{title}</h3>
                <hr className='my-[5px] bg-black' />
                <div className='flex justify-end flex-row gap-x-5'>
                    <TwitterIcon fontSize='small' />
                    <FacebookOutlinedIcon fontSize='small' />
                    <InstagramIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default LatestArticleCard