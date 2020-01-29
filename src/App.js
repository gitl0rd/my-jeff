import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Components/Pages/Home/Home'
import Movies from './Components/Pages/Filmography/Filmography';

function App() {
    return (
      <Router>
        <div className={styles.StickyHeader}>
          <h1 >Jeff</h1>
          <div className={styles.Links}>
            <a href='/'>Home</a>
            <a href='/movies'>Movies</a>
          </div>
        </div>
        <div className={styles.MainEvent}>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
        </div>
    </Router>
    );
}

export default App;
