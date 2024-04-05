import React, { useEffect, useState } from 'react'
import NavbarComp from '../MainPages/NavbarComp'
import { useParams } from 'react-router-dom';
import style from './Receipes.module.css';

const Receipes = () => {
    const { id } = useParams();
    const [foodreceipe, setfoodreceipe] = useState([]);
    const getReceipe = async () => {
        const url = process.env.REACT_APP_URL;
        const resultReceipe = await fetch(`${url}getReceipeInfo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        });
        const result = await resultReceipe.json();
        if (result.msg) {
            setfoodreceipe(result.details);
        }
    }
    useEffect(() => {
        getReceipe();
    }, []);
    return (
        <>
            <NavbarComp />
            <div className='container'>
                <div className='row'>
                    {
                        foodreceipe.map((ele, index) => {
                            return (
                                <>
                                    <div class={style.recipe_card}>
                                        <div class={style.recipe_header}>{ele.title}</div>
                                        <img class={style.recipe_image} src={ele.image} alt="Recipe Image" />
                                        <div class={style.recipe_content}>
                                            <h2>Instructions</h2>
                                            <p>{ele.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Receipes