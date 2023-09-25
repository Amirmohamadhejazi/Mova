import { type MantineThemeOverride } from '@mantine/core'
// import { rtlPlugin } from 'stylis-plugin-rtl'

const mantineThemeObject: MantineThemeOverride = {
    breakpoints: {
        xs: '576px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
    },
    fontFamily: 'unset',
    primaryColor: 'blue',
    primaryShade: { light: 5, dark: 5 },
    dir: 'rtl',
}

const ltrCacheObject = {
    key: 'mantine-ltr',
}

const rtlCacheObject = {
    key: 'mantine-rtl',
    // stylisPlugins: [rtlPlugin],
}

export { mantineThemeObject, rtlCacheObject, ltrCacheObject }
