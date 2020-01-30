import React, {useState} from 'react'
import head_png from '../../../Assets/Images/jeff-head.png'

import styles from './JeffScale.module.scss'

const JeffScale = () => {

    const [rating, setRating] = useState(0)
    const [actives, setActives] = useState([false, false, false, false, false, false])

    const hover = (n) => {
        console.log(n)
        setActives(actives.map( (_, i) => i <= n))
        
    }

    const click = (n) => {
        console.log(n)
        setRating(n)
        hover(n)
    }

    return (
        <div className={styles.Scale}>
            <Head star={1} active={actives[1]} hovered={hover} clicked={click}/>
            <Head star={2} active={actives[2]} hovered={hover} clicked={click}/>
            <Head star={3} active={actives[3]} hovered={hover} clicked={click}/>
            <Head star={4} active={actives[4]} hovered={hover} clicked={click}/>
            <Head star={5} active={actives[5]} hovered={hover} clicked={click}/>
            <p className={styles.Rating}>{rating}</p>
        </div>
    )
}

const Head = ({star, active, hovered, clicked}) => {

    const stoyle = active ? styles.Active : styles.Inactive;

    return (
        <div className={styles.Head} onClick={() => clicked(star)} onMouseOver={() => hovered(star)}>
            <img className={stoyle} src={head_png} />
        </div>
    )
}

export default JeffScale