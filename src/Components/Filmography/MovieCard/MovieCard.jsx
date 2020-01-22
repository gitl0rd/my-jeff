import React from 'react'
import styles  from './MovieCard.module.scss'

const MovieCard = ({title, img, char, overview}) => {
    const getImage = () => {
        const goteem = <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + img} />
        if (img) {
            return goteem
        } else {
            return <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/aAS4AQnaPDfgC8l69ohmyGr2UOD.jpg'} />
        }
    }

    return (
        <div className={styles.Card}>
            <div className={styles.Title}>{title}</div>
            <div className={styles.Img}>
                {/*<img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + img} />*/}
                {getImage()}
            </div>
            <div className={styles.Character}>{char}</div>
            {/*<p className={styles.Text}>{overview}</p>*/}
        </div>
    )
}

export default MovieCard;