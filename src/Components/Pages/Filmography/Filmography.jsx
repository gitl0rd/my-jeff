import React, {useState, useEffect} from 'react';

import MovieCard from '../../Filmography/MovieCard/MovieCard'
import Review from '../../Reviews/Review'

import TMDb from '../../../APIs/TMDb';

import styles from './Filmography.module.scss';

const Filmography = ({}) => {

    const [movies, setMovies] = useState([]);
    const [review, setReview] = useState(null);

    useEffect(() => {
        console.log('get movies pls')
        TMDb.get('/person/4785/movie_credits')
        .then((response) => {
            console.log(response)
            //let mList = response.data.results.map((m) => )
            let sortedMovies = response.data.cast.sort((a, b) => b.popularity - a.popularity)
            setMovies(sortedMovies)
        })
        console.log('done')
    }, [])

    const cardClick = (infoObj) => {
        console.log(infoObj)
        setReview(<Review add info={infoObj} closeClick={closeReview} />)
    }

    const closeReview = () => {
        setReview(null)
    }

    return(
        <div>
            {review}
            <div className={styles.Container}>
                <div className={styles.MovieList}>
                    {movies.map((m) => <MovieCard title={m.title} img={m.poster_path} char={m.character} desc={m.overview} id={m.id} click={cardClick}/>)}
                </div>
            </div>
        </div>
        
    )
}

export default Filmography;