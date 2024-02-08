import React from 'react'

const GetOver = () => {
    return (
        <div className='bg-[#FAEFEF] flex flex-col items-center lg:flex-row lg:py-0 py-[50px]'>
            <div className=' overflow-hidden'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/1d52/38e7/4bac7db2dd2f8502469f3c1a3ac131ab?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMojE2QOJEnilKs8LtiJVsP3CyPagjwg54jaSkOV2PXDG5KNH50hepkPGto0taIw6KKYx5c9bDlI02Azl3txZTNti9HLx9aPUu7KtvnPHl3LT14-65NEo048sMNP5~k4NCMsBF7pL9GzdWcnG95pZ2gR8XZfrunbZJDXPVRdkt7cw8ZJUSWu3DGkb8SSGw3WvRSugPNA8SGwzCapkNUrxKXkNjZ8XMzeQvVXa4nTpji7CPPkIwcaYzLTmqegyvbzPG~yFqz6Gmmb8ryKm3HSrzKvsRKvksDk17HLkfffat5LMCke9nDPxuEKAMq0dbVWE-ET~ph1DCaswZ6rKx6RGQ__' alt='' />
            </div>
            <div className='px-[25px] xl:px-[125px] mt-[60px]'>
                <h3 className='text-[20px] xl:text-[32px] font-[700]'>Get over a 100 free books</h3>
                <p className='text-[16px] xl:text-[18px] font-[400] leading-[185%] mt-[15px]'>Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the popular book categories...</p>
                <div className='mt-[35px] flex flex-row'>
                    <input className='w-[55%] px-[16px] xl:w-[20vw]' type='email' placeholder='Enter your email address' />
                    <button className='bg-[#ED553B] hover:bg-white hover:border hover:border-[#ED5538] text-white text-[16px] hover:text-[#ED5538] font-[400] px-[10px] lg:px-[35px] py-[10px] transition-colors rounded-md'>Get Free books</button>
                </div>
            </div>

        </div>
    )
}

export default GetOver