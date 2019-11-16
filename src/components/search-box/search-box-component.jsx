import React from 'react';
import '../search-box/search-box-style.css';

export const SearchBox = ({placeholder,handlechange}) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={ handlechange}/>
    )
}