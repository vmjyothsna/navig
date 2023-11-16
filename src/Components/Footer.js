import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    const author="jyothsna";
    return(
        <footer>
            <p>&copy;{2023}{author}{year}.All rights reserved.</p>
            <p>Thanks for visiting my vebsite!</p>
        </footer>
    );
}

export default Footer