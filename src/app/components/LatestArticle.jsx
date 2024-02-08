import React from 'react'
import LatestArticleCard from './LatestArticleCard'

const LatestArticle = () => {
    return (
        <div className='bg-[#F7FCFC] xl:px-[65px] px-[25px] py-[50px]'>
            <div className='text-center'>
                <p className='text-[#7A7A7A] text-[14px] normal-medium'>Read Our Articles</p>
                <h3 className='text-[#173F5F] mt-[20px] font-[500] text-[24px] xl:text-[40px]'>Latest Articles</h3>
            </div>
            <div className='grid grid-cols-1 place-items-center mt-[53px]'>
                <div className='grid grid-cols-1 lg:gap-y-0 gap-y-[50px] lg:grid-cols-3 lg:gap-x-[46px] xl:gap-x-[50px] place-items-center'>
                    <LatestArticleCard imgsrc={'https://s3-alpha-sig.figma.com/img/01c7/d617/f48c64bbe2b1835a6c37804d3db5dcae?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSjw5JGF3MiEe244i64a3CHEPQqtGw3ss5yK9egzcQBKH-uJFhr~ZWVI9d18pkF5nL0gBysakm5XYhZh~EgkFHWoStFTp3zv1Aqg1r~mTb5WxaHM0ZZ4WVLVdEmeaeU7V5hTzMWGvA6tsRhYjNdNQSK99~kq6~F4UWxadcGYjOP~3Ku0ewmHRID8XzR1TUH~9vluG427D6KaZDjkNhsynuFtlUl~ZbGMpDNH1j6V841DllhH7YRHfpoS0wyz7Rsz67aeDUXgO4dP2g-Ex4TdS0iiWvKJo929NkQrfNMv8n5yRwRPZtp4mderCjfAjX0dbHfHOiJeAbDSCIWpaQ~dlA__'} title={'Reading books always makes the moments happy'} />
                    <LatestArticleCard imgsrc={'https://media.istockphoto.com/id/625990416/photo/girl-absorbedly-reading-open-book.jpg?s=612x612&w=0&k=20&c=rxTtC968LKkRlBai6wxDibphM7YtvdxE78mDWINvW9E='} title={'Reading books always makes the moments happy'} />
                    <LatestArticleCard imgsrc={'https://s3-alpha-sig.figma.com/img/12da/216c/35eafc1160411159e1482dc4ea91636e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b5YWxwr93hCnKRL48xEVk9PkUyq8l95bPzRvpFQVePVy1efEXXzba8xbpiWk~wskG54M9qdYONmU3W5BP-5aI7rc64EhMnCyTcyU2enkcr8ZMl~GUlNcPyiz4CIqzHOmAfal74gTE3dfHpVp9xqk3tBuSdVy0mHuOIfhmsKTM2NzTbgshsQjBz21Js4okP~zVaNc~-YNXptySrEYiL8A93fzVM65JrDzbWv2gw2iptel2USpuZ2Di-zl~eHezxhw~KNDnbkHkxqPsQuS2KIkpYQvmP0CHVcVEH1dbTNa2MKMnqEDKmnADH9wBE2~O~Ky0fhmAu-USkGQLxgyGvNFZg__'} title={'Reading books always makes the moments happy'} />
                </div>
                <button className='border self-center mt-[60px] rounded-md hover:bg-[#173F5F] hover:text-white transition-colors border-[#173F5F] text-[16px] px-[35px] py-[10px]'>Read All Articles</button>
            </div>
        </div>
    )
}

export default LatestArticle