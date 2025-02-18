import React from 'react'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.root}>
        <p className={Styles.text}>Copyright &copy; Web3Bridge {new Date().getFullYear()}</p>
        <p className={Styles.text}>@sorxcode</p>
    </footer>
  )
}

export default Footer