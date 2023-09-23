export interface ITabItem {
    name: string;
    link: string;
    Icon: JSX.Element;
    id: number;
}

export type TTabsDataProps = {
    items: ITabItem[]; // Specify that 'items' is an array of TabItem
    library: string;
    id: number;
};
