import { type TWatchCartData } from '@molecules/DSwipers/DSwiperWatchCart/resources'

import { supermanSmall, theLastOfUsSmall, wandaVisionSmall } from '@public/images/common'

const data: TWatchCartData[] = [
    {
        name: 'Wanda Vision',
        episodeLeft: 1,
        banner: wandaVisionSmall,
        Progress: 40,
        id: 0,
    },
    {
        name: 'Super Man',
        episodeLeft: 2,
        banner: supermanSmall,
        Progress: 20,
        id: 1,
    },
    {
        name: 'The Last Of Us',
        episodeLeft: 0,
        banner: theLastOfUsSmall,
        Progress: 100,
        id: 2,
    },
    {
        name: 'Wanda Vision',
        episodeLeft: 1,
        banner: wandaVisionSmall,
        Progress: 60,
        id: 3,
    },
]

export { data }
