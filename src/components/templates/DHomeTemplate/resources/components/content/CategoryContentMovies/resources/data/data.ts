import { avatar1, moneyHeist, strangerThings, theLastOfUsSmall, thePhantomMenace } from '@public/images/common'

import { type TCategoryContentMoviesData } from '../types/types'

export const dataSwipeCategoryContentMovies: TCategoryContentMoviesData[] = [
    {
        data: [
            {
                name: 'Avatar 1',
                rate: 1,
                banner: avatar1,
                id: 0,
            },
            {
                name: 'the Phantom Menace',
                rate: 1,
                banner: thePhantomMenace,
                id: 1,
            },
            {
                name: 'the Phantom Menace',
                rate: 1,
                banner: thePhantomMenace,
                id: 1,
            },
            {
                name: 'the Phantom Menace',
                rate: 1,
                banner: thePhantomMenace,
                id: 1,
            },
            {
                name: 'the Phantom Menace',
                rate: 1,
                banner: thePhantomMenace,
                id: 1,
            },
        ],
        categoryName: 'محبوب ترین فیلم ها',
        id: 0,
    },
    {
        data: [
            {
                name: 'StrangerThings',
                rate: 5,
                banner: strangerThings,
                id: 0,
            },
            {
                name: 'The last of Us',
                rate: 5,
                banner: theLastOfUsSmall,
                id: 1,
            },
            {
                name: 'Money Heist',
                rate: 5,
                banner: moneyHeist,
                id: 1,
            },
        ],
        categoryName: 'پر بازدید ترین سریال ها',
        id: 1,
    },
]
