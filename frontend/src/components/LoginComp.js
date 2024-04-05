import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ContactUsStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom right, #84fab0, #8fd3f4);
  }
`;


const LoginComp = () => {
    const navigate = new useNavigate();
    const getAuthentication = (e) => {
        const login = localStorage.getItem('isLogin');

        if (login) {
            window.location = '/auth/home';
        }
    }
    useEffect(() => {
        getAuthentication();
    });
    const [loginDetails, setLoginDetails] = useState({
        loginEmail: "",
        loginPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_URL;
        const authResult=await fetch(`${url}getAuthenticate`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({authDetails:loginDetails}),
        })
        const result=await authResult.json();
        if(result.isValid){
           localStorage.setItem('isLogin',result.isValid);
           window.location='/auth/home';
        }else{
            Swal.fire({
                text: 'Invalid email or password   !!!',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        }
    }
    return (
        <>
            <ContactUsStyles />
            <div class={styles.login_container}>
                <div class={styles.login_form}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <input type="email" name='loginEmail' onChange={handleChange} class={`${styles.form_control} form-control`} placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" name='loginPassword' onChange={handleChange} class={`${styles.form_control} form-control`} placeholder="Password" />
                        </div>
                        <button type="submit" className={`${styles.btn_primary} btn btn-primary btn-block`} >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginComp