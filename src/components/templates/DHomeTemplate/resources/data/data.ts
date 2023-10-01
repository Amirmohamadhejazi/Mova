import { type TMovieData } from '@molecules/DSwipers/DSwiperMoviesLarge/resources'

import { Annabel, extraction2, johnWick, kingsManPic } from '@public/images/common'

const dataSwiper: TMovieData[] = [
    {
        name: 'Extraction 2',
        banner: extraction2,
        id: 0,
    },
    {
        name: 'John Wick',
        banner: johnWick,
        id: 1,
    },
    {
        name: 'Kings Man',
        banner: kingsManPic,
        id: 2,
    },
    {
        name: 'Annabel',
        banner: Annabel,
        id: 3,
    },
]

export { dataSwiper }
