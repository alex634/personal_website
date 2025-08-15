import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function Copied({children, s, className}) {
    const [visible, setVisible] = useState(false);

    function delayHide() {
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }

    function copyToClipboard() {
        setVisible(true);
        navigator.clipboard.writeText(s).then(()=>{return;})
        .catch((e)=>{return;});
    }

    return (
        <div onClick={copyToClipboard} onPointerLeave={delayHide} onMouseUp={delayHide} className={"relative m-0 p-0 copied-tooltip"}>
            {children}
            {visible && <div
            className={
                twMerge("absolute left-1/2 p-1 px-3 rounded-lg bg-primary-foreground text-sans text-lg -translate-x-1/2 -top-10 text-primary", className)}>
                copied
            </div>}
        </div>
    );
}

export default Copied;