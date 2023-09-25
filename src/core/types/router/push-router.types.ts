import { type NavigateOptions } from 'next/dist/shared/lib/app-router-context'

type TPushRouterType = (href: string, options?: NavigateOptions | undefined) => void

export default TPushRouterType
