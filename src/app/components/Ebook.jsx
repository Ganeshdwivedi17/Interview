"use client"
import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const Ebook = () => {
    return (
        <div className='grid grid-cols-1 px-[25px] xl:px-[65px] xl:grid-cols-2 place-items-center bg-gradient-to-r from-[#FFE5E5] via-[#F5FFFE] to-[#fff]'>
            <div>
                <p className='text-[14px] text-[#ED553B]'><HorizontalRuleIcon />ebook</p>
                <h3 className='text-[20px] text-[#173F5F] font-[700] xl:text-[40px]'>Access, Read, Practice & Engage
                    with Digital Content (eBook) </h3>
                <p className='text-[14px] mt-[5px] text-[#173F5F] text-medium xl:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='mt-[35px] flex flex-row'>
                    <input className='w-full px-[16px] xl:w-[25vw]' type='email' placeholder='Enter your email address' />
                    <button className='bg-[#ED553B] hover:bg-white hover:border hover:border-[#ED5538] text-white text-[16px] hover:text-[#ED5538] font-[700] px-[35px] py-[10px] transition-colors rounded-md'>Login</button>
                </div>
            </div>
            <div className='xl:h-[547px]'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/422b/6bbf/12074ee34769a99b7a1b022dc3a790cc?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9cwhiz8D41dmPv0QmvaYhORijQ-~U1emYkd01jt8q2hHOCJvCqtq8UXtDfvPl5NHHihcO76ZH1n5h7eSW5wALe5sgZwVnXE5cgn1bk8W9i4wARvjSFqY2VNier9LZv6aAWFaDQolQQpdagOpQyg8SGDsvKBtkCwFMZVI8gQmqhBUXCXie5tkPAxRYmWUkC1foaMSBZkvJMmB1iJohTjUj53ba2s51tiCS~fcJrOIWEC8o~tVL019plYncjeJDQPtB-nbrO0yg5gsANqa9en4t0E-cLDYpHLWZiZ4Avu45x3dGosX6P-SPoI-p2SIFFO5PkYm2NuQpwcIQQDZC2Arw__' alt='girl-img' />
            </div>
        </div >
    )
}

export default Ebook