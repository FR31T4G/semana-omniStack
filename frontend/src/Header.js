import React from 'react';

export default function Header(props){
    return(
        <header>
            <h1>{props.title}{props.conta}</h1>
        </header>
    );
}