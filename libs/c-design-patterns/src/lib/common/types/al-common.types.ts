export interface AldOptionItem {
    value?: any;
    label?: string;
    id?: string | number;
    description?: string;
    icon?: string;
    iconClass?: IconClass;
    selected?: boolean;
    expanded?: boolean;
    indeterminate?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    items?: AldOptionItem[];
    data?: any;
    hyperlink?: string;
}

export type ButtonVariant = 'ghost' | 'primary' | 'secondary' | 'light' | 'light-ghost' | 'danger' | 'success' | 'link' | 'unstyled';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type IconClass = 'al' | 'material-icons' | 'material-icons-outlined' | 'material-icons-round';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' ;
export type IconPosition = 'left' | 'right';

