'use client'
import { type FC } from 'react'
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

const DSwiperWatchCart: FC = () => {
    // console.log(move)

    // Swiper next and prev btn
    // const SwiperButtons = ({ type }: { type: string }) => {
    //     const Swiper = useSwiper()
    //     return (
    //         <div
    //             className='flex justify-center items-center text-3xl p-[4px] rounded-lg  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'
    //             onClick={() => (type === 'next' ? Swiper.slideNext() : Swiper.slidePrev())}
    //         >
    //             {type === 'next' ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //     console.log('moved', move)
    // }, [move])

    return (
        <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            className='mySwiper h-[320px] rounded-lg  select-none relative ' // Correct class name
            loop
        >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
        </Swiper>
    )
}
// this not complied ... /////////////
export default DSwiperWatchCart
