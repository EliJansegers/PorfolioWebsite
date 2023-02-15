import styles from "./style";
import pf from './pictures/Bw.jpg'

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
    <img src={pf} alt='pf' width='400px' height='300px'></img>
  </div>
);
export default App;
