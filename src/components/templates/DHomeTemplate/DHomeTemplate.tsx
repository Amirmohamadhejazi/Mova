'use client'
import { type FC } from 'react'
import Image from 'next/image'
// import required modules
import { Navigation, Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { kingsManPic, NoBodyPic } from '@public/images/common'

import 'swiper/css/pagination'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6 bg-red-200 text-center mx-12'>
                <Swiper
                    pagination={{ clickable: true }} // Enable clickable pagination
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className='mySwiper h-full max-h-[300px]' // Correct class name
                >
                    <SwiperSlide>
                        <Image alt='NoBodyPic' src={NoBodyPic} className='relative' />
                        <div className='w-full justify-between flex absolute bottom-8 text-white px-5'>
                            <div className='px-4 py-2 flex items-center justify-center rounded bg-gray-400 backdrop-blur-md	'>
                                هم اکنون تماشا کنید!
                            </div>

                            <div className='px-4 py-2 flex items-center justify-center rounded bg-yellow-400'>
                                اضافه به لیست+
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kingsManPic' src={kingsManPic} />
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>

            <div className='col-span-2 bg-red-400 text-center'>more items</div>
        </div>
    )
}

export default DHomeTemplate
