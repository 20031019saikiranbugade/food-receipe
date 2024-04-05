import React from 'react'

import { createGlobalStyle } from 'styled-components';
import ContentComp from '../MainPages/ContentComp';
import AuthNavbar from './AuthNavbar';

const BodyStyles = createGlobalStyle`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
`;
const AuthComp = () => {
    return (
        <>
            <BodyStyles />
            <AuthNavbar />
            <ContentComp />
        </>
    )
}

export default AuthComp