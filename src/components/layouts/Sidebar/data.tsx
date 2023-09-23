import { AiOutlineAreaChart } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';

type TtabsDataProps = {
    name: string;
    link: string;
    Icon: React.JSX.Element; // Use IconType for react-icons
    ActiveIcon: React.JSX.Element; // Use IconType for react-icons
    id: number;
};

const tabsData: TtabsDataProps[] = [
    {
        name: 'خانه',
        link: '/home',
        Icon: <FiHome className="  text-gray-800" />,
        ActiveIcon: <FiHome className="  text-blue-500" />,
        id: 0,
    },
    {
        name: 'خان2ه',
        link: '/hom2e',
        Icon: <AiOutlineAreaChart className="  text-gray-800" />,
        ActiveIcon: <AiOutlineAreaChart className="  text-blue-500" />,
        id: 0,
    },
];

export { tabsData };
