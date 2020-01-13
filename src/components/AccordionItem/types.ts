export interface AccordionItemInterface {
    title: string;
    text: string;
    isActive?: boolean;
    id?: string;
    clickEvent?(id: string): any;
}
