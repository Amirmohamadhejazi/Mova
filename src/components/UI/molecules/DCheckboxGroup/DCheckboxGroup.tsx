import { type FC } from 'react'
import { useListState } from '@mantine/hooks'

import { DCheckbox } from '@atoms/DCheckbox'

import { type IDCheckboxGroupProps } from './resources'

const DCheckboxGroup: FC<IDCheckboxGroupProps> = ({ initialValues, groupLabel }) => {
    const [values, handlers] = useListState(initialValues)

    const allChecked = values.every((value) => value.checked)
    const indeterminate = values.some((value) => value.checked) && !allChecked

    const renderCheckboxes = () => (
        <div className='flex flex-row gap-x-7 ml-8'>
            {values.map((value, index) => (
                <DCheckbox
                    label={value.label}
                    key={value.key}
                    checked={value.checked}
                    onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
                />
            ))}
        </div>
    )

    return (
        <div className='flex flex-col gap-y-4'>
            <DCheckbox
                checked={allChecked}
                indeterminate={indeterminate}
                label={groupLabel}
                onChange={() =>
                    handlers.setState((current) => current.map((value) => ({ ...value, checked: !allChecked })))
                }
            />
            {renderCheckboxes()}
        </div>
    )
}

export default DCheckboxGroup
