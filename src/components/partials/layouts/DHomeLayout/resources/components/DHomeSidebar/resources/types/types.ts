export interface IDSidebarTabPropsItem {
    name: string
    link: string
    Icon: JSX.Element
    id: number
}

export type TDSidebarTabsDataProps = {
    items: IDSidebarTabPropsItem[] // Specify that 'items' is an array of TabItem
    library: string
    id: number
}
