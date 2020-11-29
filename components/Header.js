import React from 'react';
import SearchBox from './SearchBox';


const Header = (props) => {

    
    
    
    
    return(
        <React.Fragment>
            <header>
                <img className="logo"src="/logo.svg" alt="logo of windbnb" />
                <SearchBox
                    inHeader={true} 
                    {...props}
                    />
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
                    padding-top: 0px;
                    padding-bottom: 0px;
                }

                .logo {
                    transform: translateY(-6.5%);
                    cursor: pointer;
                    
                }

                @media only screen and (min-width:760px) {
                     
                    header {
                        padding-top: 18px;
                        padding-bottom: 65px;
                    }
                  }
                
                
                `}</style>
        </React.Fragment>
    )
}

export default Header;