import { RiHome2Line, RiVipCrown2Line } from 'react-icons/ri'
import { type TDSidebarTabsDataProps } from '..'

// Define an interface for the items within tabsData

const tabsData: TDSidebarTabsDataProps[] = [
    {
        items: [
            { name: 'خانه', link: '/', Icon: <RiHome2Line />, id: 0 },
            { name: 'سلبریتی ها', link: '/celebrity', Icon: <RiVipCrown2Line />, id: 1 },
        ],
        id: 0,
        library: 'منو',
    },
    ,
]
export { tabsData }
