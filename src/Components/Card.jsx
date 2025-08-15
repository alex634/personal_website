function Card({className, children}) {
    return (<div
    className={`bg-primary-dark p-4 rounded-3xl ${className}`}
    >
        {children}
    </div>);
}

export default Card;