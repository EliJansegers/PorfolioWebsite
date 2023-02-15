import styles from "./style";
import pf from './pictures/BwResized.jpg'

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
    <div className={`bg-oxford-blue ${styles.paddingX} ${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-6xl text-platinum pt-3 pb-3">About me</h1>
        <img src={pf} alt='pf' className="rounded-full w-80 h-80"></img>
      </div> 
    </div>
  </div>
);
export default App;
