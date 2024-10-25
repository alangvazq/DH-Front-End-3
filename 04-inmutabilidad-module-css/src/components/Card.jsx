import React from 'react'
import styles from './Card.module.css'

const Card = ({nombre, imagen, precio}) => {
    return (
    <div>
        <h1>Productos</h1>
        <ul>
            <li className={styles.card}>
                <h2>{nombre}</h2>
                <img src={imagen} />
                <h3>{precio}</h3>
            </li>
        </ul>
    </div>
    )
}

export default Card
