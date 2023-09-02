import React, {FC, PropsWithChildren} from 'react';

interface Props extends PropsWithChildren<React.ComponentProps<'button'>> {
    full?: boolean
}

const Button: FC<Props> = ({className, full, children, ...rest}) => {
    return (
        <button
            className={`btn btn-primary${full ? ' w-full' : ' '}hover:bg-white hover:border-white${className ? ` ${className}` : ""}`} {...rest}>{children}</button>
    );
};

export default Button;