import React from 'react';
import SearchBox from './SearchBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = (props) => {

     var iPadPortrait = useMediaQuery('(min-width:760px)');
    
    
    
    return(
        <React.Fragment>
            <header>
                <img className="logo"src="/logo.svg" alt="logo of windbnb" />
                <SearchBox inHeader={true} show={ !iPadPortrait ? false : true}/>
            </header>
            <style jsx>{
                `
                header {
                    width: 100%;
                    min-height: 50px;
                    height: 7%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: ${ iPadPortrait ? '18px' : '0px'};
                    padding-bottom: ${ iPadPortrait ? '65px' : '0px'};
                }

                .logo {
                    transform: translateY(-6.5%);
                    cursor: pointer;
                    
                }
                
                `
                }</style>
        </React.Fragment>
    )
}

export default Header;