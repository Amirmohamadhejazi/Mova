import { IconBrandAsana, IconLayoutGrid, IconTableOptions, IconUsers } from '@tabler/icons-react'

import { RoutesEnum } from '@core/enums'

const SIDEBAR_ITEMS = [
    {
        icon: IconLayoutGrid,
        title: 'Dashboard',
        subItems: [
            {
                title: 'Projects',
                href: RoutesEnum.ProjectsOverview,
            },
        ],
    },
    {
        icon: IconUsers,
        title: 'Users',
        href: RoutesEnum.Users,
    },
    {
        icon: IconBrandAsana,
        title: 'Teams',
        href: RoutesEnum.Teams,
    },
    {
        icon: IconTableOptions,
        title: 'General',
        subItems: [
            {
                title: 'Areas',
                href: RoutesEnum.Areas,
            },
            {
                title: 'Aspects',
                href: RoutesEnum.Aspects,
            },
        ],
    },
]

export default SIDEBAR_ITEMS
