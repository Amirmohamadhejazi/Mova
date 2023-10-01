import {
    animationSpiderMan,
    batmanBeLeaguered,
    extraction2Thumbnail,
    interstellar,
    johnWick,
    lokiThumbnail,
    moneyHeist,
    onePiece,
    rikThumbnail,
    strangerThings,
    theLastOfUsSmall,
    theOriginals,
    venome,
} from '@public/images/common'

import { type TCategoryContentMoviesData } from '../types/types'

export const dataSwipeCategoryContentMovies: TCategoryContentMoviesData[] = [
    {
        data: [
            {
                name: 'Extraction 2',
                rate: 3,
                banner: extraction2Thumbnail,
                id: 0,
            },
            {
                name: 'Venome',
                rate: 4,
                banner: venome,
                id: 1,
            },
            {
                name: 'Interstellar',
                rate: 4,
                banner: interstellar,
                id: 2,
            },
            {
                name: 'johnWick',
                rate: 4,
                banner: johnWick,
                id: 3,
            },
        ],
        categoryName: 'محبوب ترین فیلم ها',
        id: 0,
    },
    {
        data: [
            {
                name: 'the Originals',
                rate: 5,
                banner: theOriginals,
                id: 0,
            },
            {
                name: 'loki',
                rate: 4,
                banner: lokiThumbnail,
                id: 1,
            },
            {
                name: 'StrangerThings',
                rate: 5,
                banner: strangerThings,
                id: 2,
            },
            {
                name: 'The last of Us',
                rate: 5,
                banner: theLastOfUsSmall,
                id: 3,
            },
            {
                name: 'Money Heist',
                rate: 5,
                banner: moneyHeist,
                id: 4,
            },
        ],
        categoryName: 'پر بازدید ترین سریال ها',
        id: 1,
    },
    {
        data: [
            {
                name: 'Spider-Verse',
                rate: 3,
                banner: animationSpiderMan,
                id: 0,
            },
            {
                name: 'Rick and Morty ',
                rate: 3,
                banner: rikThumbnail,
                id: 1,
            },
            {
                name: 'Batman  lego ',
                rate: 4,
                banner: batmanBeLeaguered,
                id: 2,
            },
            {
                name: 'One Piece ',
                rate: 4,
                banner: onePiece,
                id: 2,
            },
        ],
        categoryName: 'پر بازدید ترین انیمیشن ها',
        id: 1,
    },
]
