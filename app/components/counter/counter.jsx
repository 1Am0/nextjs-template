'use client'

import styles from "./counter.module.css";
import { useState, useEffect } from "react";

export default function Counter() {

  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(`useEffect callback from change to num (num is now ${num})`);
  }, [num]);

  function handleClick(val) {
    setNum(num + val);
  }

  function reset() {
    setNum(0);
  }

  return (
    <div className={styles.counter}>
      <div className={styles.row}>
        <button onClick={() => handleClick(-1)}>-</button>
        <div className={styles.display}>{num}</div>
        <button onClick={() => handleClick(1)}>+</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
      <p>This is a better example of a React functional component.</p>
      <p>It makes use of the 'useState' hook to track the state of the 'num' variable and show it on the page, which is the counter you are seeing.</p>
      <p>It also utilizes the 'useEffect' hook, which calls a callback function whenever 'num' is changed, as shown in the console print.</p>
      <p>Lastly, because it uses state, it has to render on the client side, as seen at the top of the file.</p>
      <p>View this code in './app/components/counter/counter.jsx'</p>
    </div>
  );
}
