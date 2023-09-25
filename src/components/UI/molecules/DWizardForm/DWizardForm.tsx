import { Children, type FC, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { DButton } from '@atoms/DButton'

import { type IDWizardStepProps, type TDWizardFormType } from './resources'

const DWizardForm: FC<TDWizardFormType> & {
    Step: FC<IDWizardStepProps>
} = ({ initialStepToShow, children, submitButtonText }) => {
    const [currentStep, setCurrentStep] = useState(initialStepToShow)

    /* Getting Step Counts Based On Children That We Gives To The Component. */
    const stepCounts = Children.count(children)

    /* Getting Step Names From Every Children That Has Title Props. */
    // const stepNames = Children.map(children, (child) => child.props.title)

    /* Next Step Handler (Needs Refactor Later !!!!!) */
    const handleNext = async () => {
        if (currentStep < stepCounts - 1) {
            const currentStepComponent = children[currentStep]
            if (currentStepComponent.props.onSubmit) {
                await currentStepComponent.props.onSubmit()
            }
            setCurrentStep(currentStep + 1)
        }
    }

    /* Previous Step Handler */
    const handlePrevious = () => currentStep > 0 && setCurrentStep(currentStep - 1)

    return (
        <div className='flex flex-col'>
            {/* Rendering Stepper Section */}
            <div className='mb-8'>{/* <DStepper steps={stepNames} currentStep={currentStep} /> */}</div>
            {/* Rendering Each of Steps Based On CurrentStep State */}
            <>{children[currentStep]}</>
            {/* Rendering Action Bar Section */}
            <div className='flex items-center justify-end gap-2'>
                <DButton color='secondary' onClick={handlePrevious} disabled={currentStep === 0}>
                    <IconChevronRight />
                    بازگشت
                </DButton>
                {currentStep === stepCounts - 1 ? (
                    <DButton color='success' onClick={handleNext}>
                        {submitButtonText}
                        <IconChevronLeft />
                    </DButton>
                ) : (
                    <DButton color='success' onClick={handleNext}>
                        ذخیره و ادامه
                        <IconChevronLeft />
                    </DButton>
                )}
            </div>
        </div>
    )
}

/* Creating An Inner Component Of DWizardForm For Wrapping Each Steps Inside Of It. */
const DWizardStep: FC<IDWizardStepProps> = ({ children }) => {
    return <>{children}</>
}

DWizardForm.Step = DWizardStep

export default DWizardForm
