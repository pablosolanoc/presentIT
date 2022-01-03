import React from 'react';
import {SearchBarStyle} from './searchBar.styles';
import {ReactComponent as Lupa} from '../../images/lupa.svg';

const SearchBar = ({searchBy, setSearchBy, searchInput}) => {

    const search = (event) => {
        // console.log({event1, event2})
        const searchTerm = event.target.value.toLowerCase();
        setSearchBy(searchTerm);
    }

    return(
        <SearchBarStyle>
            <input className='search' placeholder="Search by folder name" onChange={search} ref={searchInput}>
            </input>
            <Lupa className='lupa'></Lupa>
        </SearchBarStyle>
    )
}

const mapStateToProps = (state) => ({
    
})

export default SearchBar;