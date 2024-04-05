import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import AuthNavbar from '../AuthPages/AuthNavbar';
import style from './AuthNav2.module.css';

const BodyStyles = createGlobalStyle`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
`;
const AuthComp2 = () => {
    const [productDetails, setProductDetails] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_URL;
        const productResult = await fetch(`${url}getProducts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productDetails: productDetails }),
        })
        const res=await productResult.json();
        if(res.msg){
            window.location='/auth/home';
        }else{
            alert("Something went wrong");
        }
    }
    return (
        <>
            <BodyStyles />
            <AuthNavbar />
            <div class={style.container1}>
                <h1>Add Product</h1>

                <form onSubmit={handleSubmit}>
                    <div class={style.input_field}>
                        <label for="image">Image URL:</label>
                        <input type="text" id="image" required onChange={handleChange} name="image" placeholder="Enter image URL..." />
                    </div>


                    <div class={style.input_field}>
                        <label for="title">Product Title:</label>
                        <input type="text" id="title" required onChange={handleChange} name="title" placeholder="Enter Title..." />
                    </div>

                    <div class={style.input_field}>
                        <label for="description">Description:</label>
                        <textarea id="description" required onChange={handleChange} name='description' placeholder="Enter description..."></textarea>

                    </div>

                    

                   

                   

                   

                    

                    <button type="submit" class={style.submit_btn}>Add Product</button>
                </form>
            </div>
        </>
    )
}

export default AuthComp2