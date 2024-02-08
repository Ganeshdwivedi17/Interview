"use client"
import React from 'react'
import Star from '../assets/Star'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const BirdsGonnaBeHappy = () => {
    return (
        <div className='grid place-items-center xl:grid-cols-2 grid-cols-1 px-[25px] xl:px-[65px] py-[90px]'>
            <div className='xl:w-[400px]'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/db75/8da6/3550796dccb40b5b0e9f970ad6d31044?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qLvzxd49r0frZNw3F7SDIXf433BJCwkii2DdkK8kDn10WkrfGXCXXa48LEahht3LVXmXh5QTxuD70i73tdlcD~GizlMS4NJUuSGCM5aur9oYyiuZEOY4CjYF3m6pxg25h-X6f-09YJV-BtAoFvorBh8qxmIZOf5EidoOPOZo8uCJKtauQYR-AGmZOIo6uX~rRoOQVF-adJYwkfM6-v3Xk6kqSs2WKma6nEtfr3809Q1dlqY18OXVQcd2Y2cx7xpXYwFlU3y8-a1rIgcawNyEPXjH74raucwdaPIaB0pYDo8zsXTXFHxMK8Ef4s4QCr2xV1OdTUpHNumrEWE4PY837g__' alt='' />
            </div>
            <div>
                <p className='text-[14px] lg:text-[16px] font-[600] text-[#969595]'>Featured Book of the week</p>
                <h3 className='text-[#173F5F] my-[8px] text-[20px] xl:text-[28px]'>Birds gonna be happy</h3>
                <Star />
                <p className='text-[#767070] mt-[32px] text-[16px] xl:text-[18px]'>Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
                <button className='mt-[40px] border rounded-md hover:bg-[#173F5F] hover:text-white transition-colors border-[#173F5F] text-[16px] px-[35px] py-[10px]'>View More <ArrowRightAltIcon /></button>
            </div>
        </div>
    )
}

export default BirdsGonnaBeHappy