'use client'

import styles from "./invert.module.css";
import { useState, useEffect } from "react";

export default function Invert() {

  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(`useEffect callback from change to state (state is now ${state})`);
  }, [state]);

  function invertState(){
    setState(!state);
  }

  return (
    <div className={styles.counter}>
      <div className={styles.row}>
        <button onClick={() => invertState()}>Invert</button>
        <div className={styles.display}>{String(state)}</div>
      </div>
    </div>
  );
}
