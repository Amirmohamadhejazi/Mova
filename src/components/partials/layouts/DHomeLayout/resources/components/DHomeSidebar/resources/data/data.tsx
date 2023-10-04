import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { BsBookmarkCheck, BsBookmarkPlus } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineDownload } from 'react-icons/hi'
import { HiOutlineLogout } from 'react-icons/hi'
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdOutlineWatchLater } from 'react-icons/md'
import { RiHome2Line, RiVipCrown2Line } from 'react-icons/ri'
import { type TDSidebarTabsDataProps } from '..'

// Define an interface for the items within tabsData

const tabsData: TDSidebarTabsDataProps[] = [
    {
        items: [
            { name: 'خانه', link: '/', Icon: <RiHome2Line />, id: 0 },
            { name: 'جایزه ها', link: '/awards', Icon: <LiaCertificateSolid />, id: 1 },
            { name: 'سلبریتی ها', link: '/home2', Icon: <RiVipCrown2Line />, id: 2 },
        ],
        id: 0,
        library: 'منو',
    },
    {
        items: [
            { name: 'محتوای مختلف', link: '/home3', Icon: <MdOutlineWatchLater />, id: 0 },
            { name: 'بهترین ها', link: '/home4', Icon: <AiOutlineStar />, id: 1 },
            { name: 'دانلود شده ها', link: '/home5', Icon: <HiOutlineDownload />, id: 2 },
            { name: 'علاقه مندی', link: '/home5', Icon: <AiOutlineHeart />, id: 3 },
            { name: 'لیست های پخش', link: '/home6', Icon: <BsBookmarkPlus />, id: 4 },
            { name: 'دیده شده', link: '/home8', Icon: <BsBookmarkCheck />, id: 5 },
        ],
        id: 1,
        library: 'آرشیو',
    },
    {
        items: [
            { name: 'تنظیمات', link: '/setting', Icon: <FiSettings />, id: 0 },
            { name: 'خروج', link: '/home4', Icon: <HiOutlineLogout />, id: 1 },
        ],
        id: 2,
        library: 'عمومی',
    },
]
export { tabsData }
