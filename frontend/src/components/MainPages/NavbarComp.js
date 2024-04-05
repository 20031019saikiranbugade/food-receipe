import React from 'react'
import styles from './navbar.module.css'

const NavbarComp = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Foodie Delight</h1>
                <p>Your ultimate destination for delicious recipes!</p>
            </header>
        </>
    )
}

export default NavbarComp