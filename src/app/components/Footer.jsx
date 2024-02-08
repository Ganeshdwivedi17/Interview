"use client"
import React from 'react'
import Logo from '../assets/Logo'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    const footerlinkcss = "text-[#173F5F] hover:scale-105 transition-transform text-[14px] xl:text-[16px] font-[600] cursor-pointer my-[2px]"
    return (
        <div className='px-[25px] py-[100px] xl:px-[150px]'>
            <div className='grid grid-cols-1 place-items-center xl:grid-cols-3'>
                <div>
                    <Logo className={"w-32"} />
                    <p className='text-[16px] xl:text-[18px] font-[400] text-[#173F5F]'>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className='mt-[20px] grid grid-cols-4'>
                        <FacebookOutlinedIcon className='text-[#ED553B] hover:text-black' fontSize='large' /><LinkedInIcon className='text-[#ED553B] hover:text-black' fontSize='large' />
                        <TwitterIcon className='text-[#ED553B] hover:text-black' fontSize='large' /><YouTubeIcon className='text-[#ED553B] hover:text-black' fontSize='large' /></div>
                </div>
                <div>
                    <h3 className='text-[#ED553B] font-[600] text-[18px] xl:text-[24px]'>Company</h3>
                    <ul className='mt-[15px]'>
                        <li className={footerlinkcss}>Home</li>
                        <li className={footerlinkcss}>About us</li>
                        <li className={footerlinkcss}>Books</li>
                        <li className={footerlinkcss}>Ebooks</li>
                        <li className={footerlinkcss}>New Release</li>
                        <li className={footerlinkcss}>Contact</li>
                        <li className={footerlinkcss}>Blog</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#ED553B] font-[600] text-[18px] xl:text-[24px]'>Latest news</h3>
                    <ul className='mt-[15px]'>
                        <li className={footerlinkcss}>Home</li>
                        <li className={footerlinkcss}>About us</li>
                        <li className={footerlinkcss}>Books</li>
                        <li className={footerlinkcss}>Ebooks</li>
                        <li className={footerlinkcss}>New Release</li>
                        <li className={footerlinkcss}>Contact</li>
                        <li className={footerlinkcss}>Blog</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-[60px]'>
                <p>© 2022 Arihant. All Rights Reserved.</p>
                <p><span className='text-[#ED553B]'>Privacy </span>| Terms of Service</p></div>
        </div>
    )
}

export default Footer