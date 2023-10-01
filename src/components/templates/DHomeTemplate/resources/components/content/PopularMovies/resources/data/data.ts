import { type TPopularMovieData } from '..'

import { extraction2Thumbnail, lokiThumbnail, rikThumbnail } from '@public/images/common'

export const dataSwipePopularMovies: TPopularMovieData[] = [
    {
        name: 'Loki',
        rate: 4,
        banner: lokiThumbnail,
        id: 0,
    },
    {
        name: 'Extraction 2',
        rate: 2,
        banner: extraction2Thumbnail,
        id: 1,
    },
    {
        name: 'Rick and morti',
        rate: 1,
        banner: rikThumbnail,
        id: 2,
    },
]
