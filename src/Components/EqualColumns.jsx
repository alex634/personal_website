function EqualColumns({children, columns, className}) {
    return (<div className={`grid grid-cols-${columns} ${className}`}>
        {children}
    </div>
    );
}

export default EqualColumns;