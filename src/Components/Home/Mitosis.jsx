import React, { useState } from 'react'

import styles from './Mitosis.module.scss'

const Mitosis = () => {

    const [cells, setCells] = useState([1, 2])

    const chop = () => {
        setCells([...cells, 1])
    }

    return (
        <div className={styles.House}>
            {cells.map((v, i) => <Cell size={v} order={i} key={i} action={chop}/>)}
        </div>
    )
}

const Cell = ({size, order, action}) => {
    return(
        <div className={styles.Cell} style={{}} onClick={action}><br /></div>
    )
}

export default Mitosis