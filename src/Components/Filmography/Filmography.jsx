import React, {useState, useEffect} from 'react';

import MovieCard from './MovieCard/MovieCard'

import TMDb from '../../APIs/TMDb';

import styles from './Filmography.module.scss';

const Filmography = ({}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log('get movies pls')
        TMDb.get('/person/4785/movie_credits')
        .then((response) => {
            console.log(response)
            //let mList = response.data.results.map((m) => )
            setMovies(response.data.cast)
        })
        /*.catch((error) => {
            console.log(error)
        })*/
        console.log('done')
    }, [])

    return(
        <div className={styles.Container}>
            <h2>Movies.</h2>
            <div className={styles.MovieList}>
                {movies.map((m) => <MovieCard  title={m.title} img={m.poster_path} char={m.character}/>)}
            </div>
        </div>
    )
}

export default Filmography;