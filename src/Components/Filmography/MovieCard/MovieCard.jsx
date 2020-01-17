import React from 'react'
import styles  from './MovieCard.module.scss'

const MovieCard = ({title, img, char, overview}) => {

    return (
        <div className={styles.Card}>
            <p className={styles.Text}>{title}</p>
        </div>
    )
}

export default MovieCard;