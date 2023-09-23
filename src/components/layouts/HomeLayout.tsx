import React from 'react';
import Sidebar from './Sidebar/Sidebar';
const HomeLayout = ({ children }: { children: React.JSX.Element }) => {
    return (
        <div className="flex min-h-screen ">
            <Sidebar />
            <section className="flex-grow w-full overflow-hidden bg-[#F0F2F5]">
                <div className="h-full">{children}</div>
            </section>
        </div>
    );
};

export default HomeLayout;
