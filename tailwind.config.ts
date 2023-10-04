import type { Config } from 'tailwindcss'

import COLORS from './src/core/constants/colors/colors.constants'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '400px',
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        colors: { ...COLORS },
        extend: {
            fontFamily: {
                sans: ['var(--font-yekan)'],
            },
            backgroundImage : {'back' : "url('/public/images/comon/backgorund.pn')"}
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
}

export default config
