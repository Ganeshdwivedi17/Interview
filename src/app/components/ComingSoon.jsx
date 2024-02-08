"use client"
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ComingSoon = () => {
    return (
        <div className='bg-[#cee0e4] mx-[25px] xl:mx-[65px] my-[90px] grid grid-cols-1 md:grid-cols-3 gap-x-[50px] place-items-center overflow-hidden'>
            <div className='md:w-[80%] w-[50%] relative xl:-bottom-20'>
                <img className='w-full h-full object-cover' src='https://www.careerguide.com/career/wp-content/uploads/2023/01/517-5177637_student-holding-books-png-transparent-png-removebg-preview-1.png' alt='girl-img' />
            </div>
            <div className='text-center md:mt-0 mt-[20px]'>
                <h3 className='text-[#173F5F] text-[24px] xl:text-[48px] font-[700]'>Coming Soon</h3>
                <p className='text-[14px] xl:text-[18px] font-[500] text-[#173F5F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                <button className='mt-[40px] border rounded-md hover:bg-[#173F5F] hover:text-white transition-colors border-[#173F5F] text-[16px] px-[35px] py-[10px]'>Read More <ArrowRightAltIcon /></button>
            </div>
            <div className='md:mt-0 mt-[20px]'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/ecd6/c596/e9a0287e8bbb4578ac3a5a87fa457d89?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eSa2~~DJoDogjqoCjgrNEDCUH9AKP8dD~DmRj7WaCNyTEJUC~M~0iJdkijFe2NpYqlNU4v5Csmru2TJHBG1Tx1cHVl2eJOchcSj7u4AxuCYx8gK5kOhGRkMPcq4WTcnIjNNPZVoAYY8~-9AHfgHwhkJawqpnKsmbN7TuKt6k-C6LahbRviZRotu4unsWqyHbT1QTO4Qll9jUKByn7-DE1rp4ON11xvOSeUsloa3hwz-Bh0Xnyu2OQae5HQDuTcjQm-U1o47RwWSeahgGa-zNfRBkuGOj2Z-Lwwnm7UeKs9~SJLXqnTpWEfwPUUhpmTKKuFaIo3XmPia0TSsvByqeCQ__' alt='' />
            </div>
        </div>
    )
}

export default ComingSoon