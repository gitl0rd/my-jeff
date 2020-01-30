import React, { useState } from 'react' 


import styles from './ReviewForm.module.scss'
import JeffScale from './JeffScale'

const ReviewForm = () => {

    const [thing, setThing] = useState('')
    const [anotherThing, setAnotherThing] = useState('')
    const [rating, setRating] = useState(0)

    return (
        <div className={styles.Form}>
            <h2>Rate Jeff's performance</h2>
            <div>
                <p>Thing: </p>
                <input type="text"></input>
            </div>
            <div>
                <p>Another Thing: </p>
                <textarea rows="3"></textarea>
            </div>
            <div>
                <p>Rating: </p>
                <JeffScale />
            </div>
        </div>
    )
}

export default ReviewForm