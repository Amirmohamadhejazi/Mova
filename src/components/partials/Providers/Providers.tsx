'use client'

import { type FC } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { type ILayoutProps } from '@core/types'
import { mantineThemeObject, rtlCacheObject } from '@core/utils'

// Create a new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})

const Providers: FC<ILayoutProps> = ({ children }) => {
    // Create an Emotion cache based on the rtl direction.
    const cache = createEmotionCache(rtlCacheObject)
    cache.compat = true // Enable compatibility mode for the cache.

    // Use the useServerInsertedHTML hook to insert cached styles on the server side. (Disabling Flush action on the server to prevent styling issues in the client)
    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(' '),
            }}
        />
    ))

    /* Wrap the children with MantineProvider, passing the created cache and the direction state into it.
       We are not gonna use "withGlobalStyles" and "withNormalizeCSS", because we config the basic styles via tailwindcss.
       Feel free to wrap anything u wants here. such as redux provider, persistGate, context provider, portals and etc.
    */
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider emotionCache={cache} theme={mantineThemeObject}>
                {children}
            </MantineProvider>
        </QueryClientProvider>
    )
}

export default Providers
