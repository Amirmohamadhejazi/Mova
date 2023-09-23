/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            fontFamily: {
                yekan: ['var(--font-yekan)'],
            },
            colors: {
                yellow: {
                    100: '#fdf1c8',
                    200: '#fce28b',
                    300: '#facd4f',
                    400: '#f8b319',
                    500: '#f2960e',
                    600: '#d67109',
                    700: '#b24e0b',
                    800: '#903c10',
                    900: '#773210',
                },
            },
        },
    },
    plugins: [],
};

