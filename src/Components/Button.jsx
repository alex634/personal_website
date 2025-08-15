import {twMerge} from 'tailwind-merge';

function Button({children, variant, onClick, className}) {

let variantSpecificCSS = "";
const baseCSS = "filter brightness-100 border-4 text-2xl rounded-2xl pl-4 pr-4 pt-2 pb-2 font-header min-w-43 font-header-animate"

switch (variant) {
    case "main":
        variantSpecificCSS = "bg-secondary border-black text-black active:brightness-75 hover:brightness-90";
    break;
    case "muted":
        variantSpecificCSS = "bg-black border-black text-primary active:brightness-125 hover:brightness-110";
    break;
    default:
        variantSpecificCSS = "bg-secondary border-black text-black active:brightness-75 hover:brightness-90";
}

return (
    <button onClick={onClick} className={twMerge(baseCSS, variantSpecificCSS, className)}>
        {children}
    </button>
);
}

export default Button;