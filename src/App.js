import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Components/Home/Home'
import Movies from './Components/Filmography/Filmography';

function App() {
  return (
    <Router>
        <h1 className={styles.StickyDiv}>Jeff</h1>
        <Route path="/" component={Home} />
        <Route path="/movies" component={Movies} />
    </Router>
  );
}

export default App;
