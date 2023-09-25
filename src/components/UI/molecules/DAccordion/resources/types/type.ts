import { type FC, type ReactComponentElement } from 'react'
import {
    type AccordionControlProps,
    type AccordionItemProps,
    type AccordionPanelProps,
    type AccordionProps,
} from '@mantine/core'

type TAllowedChildrenType = ReactComponentElement<FC<AccordionItemProps>, AccordionItemProps> &
    ReactComponentElement<FC<AccordionControlProps>, AccordionControlProps> &
    ReactComponentElement<FC<AccordionPanelProps>, AccordionPanelProps>

interface IAccordionProps extends Omit<AccordionProps, 'children'> {
    children: Array<TAllowedChildrenType> | TAllowedChildrenType
}

type TDAccordionType = FC<IAccordionProps> & { Item: FC<AccordionItemProps> } & {
    Control: FC<AccordionControlProps>
} & {
    Panel: FC<AccordionPanelProps>
}

export default TDAccordionType
