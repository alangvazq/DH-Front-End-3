const Card02 = ({ children, textoBoton }) => {
    console.log(children, textoBoton);

    return (
        <div className="card-content">
            {children}
            {textoBoton && (
                <button>{textoBoton}</button>
            )}
        </div>
    );
}

export default Card02