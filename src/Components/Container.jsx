function Container({breakpoint, children, className, style}) {
    return (
        <div className={"fixed inset-0 overflow-auto p-0 m-0"} >
            <div className={`m-0 p-0 relative max-w-screen-${breakpoint} min-w-0 mx-auto ${className}`} style={style}>
                {children} 
            </div>
        </div>
    );
}

export default Container;