import React from 'react';
import {SearchBarStyle} from './searchBar.styles';
import {ReactComponent as Lupa} from '../../images/lupa.svg';

import { connect } from 'react-redux';

const SearchBar = ({searchBy, setSearchBy, searchInput, userLanguage}) => {

    const search = (event) => {
        // console.log({event1, event2})
        const searchTerm = event.target.value.toLowerCase();
        setSearchBy(searchTerm);
    }

    return(
        <SearchBarStyle>
            <input className='search' placeholder={userLanguage == 'en' ? "Search by file/folder name" : "Buscar archivo/carpeta por nombre"} onChange={search} ref={searchInput}>
            </input>
            <Lupa className='lupa'></Lupa>
        </SearchBarStyle>
    )
}

const mapStateToProps = (state) => ({
    userLanguage: state.user.userLanguage
})

export default connect(mapStateToProps, null)(SearchBar);