import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src=".\imgs\atltea-1170x740.jpg" alt=""/>
      <div className={styles.bannerText}>
        <h1>Black November!!</h1>
        <h2>Artigos com até 40% de desconto</h2>
      </div>
    
    </div>
  )
}

export default Banner