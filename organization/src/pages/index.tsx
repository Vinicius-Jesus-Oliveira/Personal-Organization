import styles from '../styles/login.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <svg className={styles.login} xmlns="http://www.w3.org/2000/svg">
        <path d="M55.6,-65.2C69.5,-54.6,76.4,-34.7,77.1,-15.8C77.9,3.1,72.4,20.9,63.9,38.1C55.4,55.4,43.9,72.1,28.6,77C13.2,82,-5.8,75.2,-22.8,67.1C-39.8,59,-54.7,49.6,-61.6,36.2C-68.5,22.9,-67.4,5.6,-65.8,-13C-64.2,-31.6,-62.1,-51.5,-51,-62.6C-40,-73.7,-20,-75.9,0.4,-76.4C20.9,-77,41.7,-75.8,55.6,-65.2Z" transform="translate(100 100)" />
      </svg>
      {/* <div className={styles.login}></div> */}
      {/* <img src="images/logo.webp"/> */}
    </div>
  )
}
