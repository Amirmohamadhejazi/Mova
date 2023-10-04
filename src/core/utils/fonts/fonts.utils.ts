import localFont from 'next/font/local'
export const yekan = localFont({
    src: [
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebThin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebRegular.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebMedium.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebBold.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/iranyekan/ttf/IRANYekanWebExtraBold.ttf',
            weight: '600',
            style: 'normal',
        },
    ],
    display: 'block',
    variable: '--font-yekan',
})
