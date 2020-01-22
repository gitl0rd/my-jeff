import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import Movies from './Components/Filmography/Filmography';

function App() {
  return (
    <div>
      <h1 className={styles.StickyDiv}>Jeff</h1>
      <Movies></Movies>
    </div>
  );
}

export default App;
