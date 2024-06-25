import { type PropsWithChildren, type ReactNode } from 'react'

interface IFetchingContainerProps extends PropsWithChildren {
    isSuccess: boolean
    isFetching: boolean
    isError: boolean
    errorBoundary?: ReactNode
    emptyBoundary?: ReactNode
}

export default IFetchingContainerProps
