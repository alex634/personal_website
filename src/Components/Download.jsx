import { forwardRef } from 'react';

const Download = forwardRef(({fileLocation, downloadName}, ref) => {
    return (<a ref={ref} href={fileLocation} download={downloadName} className="hidden"/>);
});

export default Download;