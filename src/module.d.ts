export interface GenericComponent {
    as?: keyof JSX.IntrinsicElements;
    additionalClassNames?: string;
    children?: React.ReactNode;
    rest?: any;
    style?: any;
}
