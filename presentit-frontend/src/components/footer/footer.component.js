import React from 'react';
import {contentFooter} from '../../content/contentFooter';
import {FooterStyle} from './footer.styles';

import { connect } from 'react-redux';

const Footer = ({userLanguage}) => {


    const content = contentFooter[userLanguage];
    console.log(content);
    return(
        <FooterStyle >
            <div className='content'>
                <div >
                    <div className="text top">
                        {content[0]}<a href="https://pablosolanoc.github.io/" target="_blank" rel="noopener noreferrer">{content[1]}</a>
                    </div>
                    <div className="text bottom">
                        <a className="linkPortfolio" href="https://github.com/pablosolanoc/presentIT" target="_blank" rel="noopener noreferrer">
                            {content[2]}
                        </a>
                    </div>
                </div>
                
            </div>
        </FooterStyle>
        
    )
}

const mapStateToProps = (state) => ({
    userLanguage:  state.user.userLanguage
})

export default connect(mapStateToProps, null)(Footer);




