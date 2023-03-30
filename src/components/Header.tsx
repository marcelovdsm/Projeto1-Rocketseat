import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export const Header = (props) => {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
    </header>
  )
}