import { FC } from 'react'

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};;