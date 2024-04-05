import React from 'react'
import NavbarComp from './NavbarComp'
import ContentComp from './ContentComp'
import { createGlobalStyle } from 'styled-components';

const BodyStyles = createGlobalStyle`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
`;
const Home = () => {
    return (
        <>
            <BodyStyles />
            <NavbarComp />
            <ContentComp />
        </>
    )
}

export default Home