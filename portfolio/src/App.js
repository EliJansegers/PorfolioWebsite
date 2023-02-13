import styles from "./style";


const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        NavBar
      </div>
    </div>
    <div className={`bg-oxford-blue ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        Main
      </div>
    </div>
    <div className={`bg-oxford-blue ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        Qualities
      </div>
    </div>
  </div>
);
export default App;
