import React from 'react';

import {PathStyle} from './path.styles'

import { connect } from 'react-redux';

import {setPathFrom} from '../../redux/structure/structure.actions';

const Path = ({path, setPathFrom}) => {
    
    return(
        <PathStyle>
            {
                path.map((pathEntry, index) => (
                    <div key={index} identifier={index} className='location' onClick={() => setPathFrom(index)}><span>{pathEntry}</span></div>
                ))
            }
        </PathStyle>
    )

}


const mapStateToProps = (state) => ({
    path: state.structure.path
})

const mapDisptachToProps = (dispatch) => ({
    setPathFrom: (pathIndex) => dispatch(setPathFrom(pathIndex))
})

export default connect(mapStateToProps, mapDisptachToProps)(Path);