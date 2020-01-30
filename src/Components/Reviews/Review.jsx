import React from 'react';

import ReviewForm from './ReviewForm/ReviewForm'

import styles from './Review.module.scss'

const Review = ({id, info, add, view, closeClick}) => {
    
    const getImage = () => {
        const goteem = <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + info.i} />
        if (info.i) {
            return goteem
        } else {
            return <img src={'https://image.tmdb.org/t/p/w440_and_h660_face/aAS4AQnaPDfgC8l69ohmyGr2UOD.jpg'} />
        }
    }

    const renderLeft = () => {
        let infoObj;
        if (!info) {
            infoObj = {}
        } else {
            infoObj = info
        }
        return (
            <div className={styles.Left}>
                <div>
                    <h1>{infoObj.t}</h1>
                    <h3>{infoObj.c}</h3>
                </div>
                {/*getImage()*/}
                <p>{infoObj.d}</p>
            </div>
        )
    }


    const renderRight = () => {
        if (add) {
            return <ReviewForm id={id} />
        } else if (view) {

        } else {

        }
    }
    
    return (
        <div>
            <div className={styles.Background} onClick={closeClick}></div>
            <div className={styles.ReviewCard}>
                <div className={styles.Close} onClick={closeClick}>x</div>
                {renderLeft()}
                <div className={styles.Right}>
                    {renderRight()}
                </div>
                
            </div>
        </div>
        
    )
}

export default Review;