import React from 'react';

const Header = (props) => {
    return(
        <React.Fragment>
            <header>
                <img className="logo"src="/logo.png" alt="logo of windbnb" />
            </header>
            <style jsx>{
                `
                header {
                    width: 100%;
                    min-height: 50px;
                    height: 7%;
                    display: flex;
                    align-items: center;
                    
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