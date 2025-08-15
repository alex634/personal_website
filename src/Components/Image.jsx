import { useState } from 'react';

function Image({className, src, width, height}) {
    const [loaded, setLoaded] = useState(false);
 
    return (
    <>
    {
        !loaded && (<div className={`rounded-xl bg-primary loading-img ${className}`}
        style={{width: width, height: height}}
        >
        </div>)
    }

    <img
    src={src}
    onLoad={() => {setLoaded(true)}}
    className={`rounded-xl ${!loaded ? "hidden": ""} ${className}`}
    style={{width: width, height: height}}
    />

    </>
    );
}

export default Image;