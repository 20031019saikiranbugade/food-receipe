import React, { useState } from 'react'
import style from './AuthNav.module.css';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
    const [clicked, setClickedValue] = useState('home');
    const handleLogout = () => {
        localStorage.clear();
        window.location = '/';
    }
    return (
        <>
            <nav className={style.nav}>
                <div></div>
                <ul class={style.nav_links}>
                    <li><a href="#" onClick={() => setClickedValue('home')} className={`${clicked} === 'home' ? ${style.active} : "" `}><Link to='/auth/home'>Home</Link></a></li>
                    <li><a href="#" onClick={() => setClickedValue('add_product')} className={`${clicked} === 'add_product' ? ${style.active} : "" `}><Link to='/auth/addproduct'>Add Product</Link></a></li>
                    <button onClick={handleLogout} className="btn btn-secondary btn-block mb-2">Logout</button>
                </ul>
            </nav>
        </>
    )
}

export default AuthNavbar