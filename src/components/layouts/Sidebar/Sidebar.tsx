'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RxCrossCircled } from 'react-icons/rx';

import { tabsData } from './data';

type T_tabsDataProps = {
    name: string;
    link: string;
    Icon: React.JSX.Element; // Use IconType for react-icons
    ActiveIcon: React.JSX.Element; // Use IconType for react-icons
    id: number;
};

function Sidebar() {
    const pathname = usePathname();
    console.log(pathname);

    const HandlerLink = ({
        children,
        link,
        items,
    }: {
        children: React.JSX.Element;
        link: boolean;
        items: T_tabsDataProps;
    }) => {
        console.log(link);

        return link ? children : <Link href={items.link}>{children}</Link>;
    };

    return (
        <aside className={`shrink-0 lg:w-[300px] `}>
            <div className=" sticky top-0">
                <div className="lg:hidden border-b py-4 px-4">
                    <RxCrossCircled className="cursor-pointer mr-auto" size={24} />
                </div>
                {tabsData.map((items: T_tabsDataProps) => (
                    <HandlerLink key={items.id} items={items} link={pathname === `${items.link}`}>
                        <div
                            className={`w-full select-none  flex items-center p-4 hover:bg-blue-50 duration-200 ${
                                pathname === `${items.link}` ? 'bg-blue-35  border-l-4 border-blue-500' : ''
                            } `}
                            key={items.id}
                        >
                            <div className="flex items-center">
                                {pathname === `${items.link}` ? items.ActiveIcon : items.Icon}
                                <span
                                    className={`font-medium text-2xl  ${
                                        pathname === `${items.link}` ? 'text-blue-500' : 'text-gray-800'
                                    }`}
                                >
                                    {items.name}
                                </span>
                            </div>
                        </div>
                    </HandlerLink>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
