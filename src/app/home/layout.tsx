import React from 'react';
import HomeLayout from '@/components/layouts/HomeLayout';

const Layout = ({ children }: { children: React.JSX.Element }) => {
    return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
