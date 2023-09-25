import React, { type FC } from 'react'

const DLoadingSpinner: FC = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='200px'
            height='200px'
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid'
            style={{ background: 'none', display: 'block', shapeRendering: 'auto' }}
        >
            <circle
                cx='50'
                cy='50'
                r='32'
                strokeWidth='6'
                stroke='#1e1e2d'
                strokeDasharray='50.26548245743669 50.26548245743669'
                fill='none'
                strokeLinecap='round'
            >
                <animateTransform
                    attributeName='transform'
                    type='rotate'
                    dur='1.25s'
                    repeatCount='indefinite'
                    keyTimes='0;1'
                    values='0 50 50;360 50 50'
                ></animateTransform>
            </circle>
            <circle
                cx='50'
                cy='50'
                r='25'
                strokeWidth='6'
                stroke='#20c997'
                strokeDasharray='39.269908169872416 39.269908169872416'
                strokeDashoffset='39.269908169872416'
                fill='none'
                strokeLinecap='round'
            >
                <animateTransform
                    attributeName='transform'
                    type='rotate'
                    dur='1.25s'
                    repeatCount='indefinite'
                    keyTimes='0;1'
                    values='0 50 50;-360 50 50'
                ></animateTransform>
            </circle>
        </svg>
    )
}

export default DLoadingSpinner
