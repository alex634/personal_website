import { forwardRef } from 'react';

const Text = forwardRef (({children, variant, className}, ref) => {
    let variantStyle = "";

    switch(variant) {
        case "header":
            variantStyle="items-center text-center text-primary-foreground font-header font-header-animate text-5xl";
        break;
        case "paragraph":
            variantStyle="items-center text-center text-primary-foreground font-sans text-md";
        break;
        case "header-card":
            variantStyle=" text-primary-foreground text-left font-bold italic font-sans text-3xl";
        break;
    }

    return (<div ref={ref} className={`${variantStyle} ${className}`}>
        {children}
    </div>);
});

export default Text;