const Saludo = ({nombre, children}) => {
    return (
        <h1>{children} {nombre}</h1>
    );
};

export default Saludo;