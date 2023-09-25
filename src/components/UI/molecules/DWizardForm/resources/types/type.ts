import { type FC, type ReactElement, type ReactNode } from 'react'

type TDWizardFormType = {
    submitButtonText: string
    initialStepToShow: number
    children: Array<ReactElement<IDWizardStepProps, FC<IDWizardStepProps>>>
}

interface IDWizardStepProps {
    title: string
    children: ReactNode
    onSubmit?: () => Promise<void>
}

export type { TDWizardFormType, IDWizardStepProps }
