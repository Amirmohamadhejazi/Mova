import { RiHome2Line, RiVipCrown2Line } from 'react-icons/ri';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineDownload } from 'react-icons/hi';
import { BsBookmarkPlus, BsBookmarkCheck } from 'react-icons/bs';
import { LiaCertificateSolid } from 'react-icons/lia';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';

// Define an interface for the items within tabsData
interface TabItem {
    name: string;
    link: string;
    Icon: JSX.Element;
    id: number;
}

type TtabsDataProps = {
    items: TabItem[]; // Specify that 'items' is an array of TabItem
    library: string;
    id: number;
};

const tabsData: TtabsDataProps[] = [
    {
        items: [
            { name: 'خانه', link: '/home', Icon: <RiHome2Line/>, id: 0 },
            { name: 'جایزه ها', link: '/home1', Icon: <LiaCertificateSolid/>, id: 1 },
            { name: 'سلبریتی ها', link: '/home2', Icon: <RiVipCrown2Line/>, id: 2 },
        ],
        id: 0,
        library: 'منو',
    },
    {
        items: [
            { name: 'محتوای مختلف', link: '/home3', Icon: <MdOutlineWatchLater/>, id: 0 },
            { name: 'بهترین ها', link: '/home4', Icon: <AiOutlineStar/>, id: 1 },
            { name: 'دانلود شده ها', link: '/home5', Icon: <HiOutlineDownload/>, id: 2 },
            { name: 'علاقه مندی', link: '/home5', Icon: <AiOutlineHeart/>, id: 3 },
            { name: 'لیست های پخش', link: '/home6', Icon: <BsBookmarkPlus/>, id: 4 },
            { name: 'دیده شده', link: '/home8', Icon: <BsBookmarkCheck/>, id: 6 },
        ],
        id: 1,
        library: 'آرشیو',
    },
    {
        items: [
            { name: 'تنظیمات', link: '/home3', Icon: <FiSettings/>, id: 0 },
            { name: 'خروج', link: '/home4', Icon: <HiOutlineLogout/>, id: 1 },
        ],
        id: 1,
        library: 'عمومی',
    },
];
export { tabsData };
