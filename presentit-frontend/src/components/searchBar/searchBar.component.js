import React from 'react';
import {SearchBarStyle} from './searchBar.styles';
import {ReactComponent as Lupa} from '../../images/lupa.svg';

const SearchBar = () => {


    return(
        <SearchBarStyle>
            <input className='search' placeholder="Search by folder name">
            </input>
            <Lupa className='lupa'></Lupa>
        </SearchBarStyle>
    )
}

export default SearchBar;