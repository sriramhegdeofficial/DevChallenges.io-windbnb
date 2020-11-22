import React from 'react';

const SearchBox = (props) => {
    return (
        <React.Fragment>
            <div className="search__main__wrapper">
                <div className="search__wrapper">
                    <div className="search__location__wrapper"></div> 
                    <div className="search__guest__wrapper"></div>
                    <div className="search__icon__wrapper"></div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .search__main__wrapper {
                        width: 100%;
                        border: 1px solid black;
                        padding: 32px 15px; 
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .search__wrapper {
                        width: 100%;
                        background: white;
                        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                        border-radius: 16px;
                        height: 65px;
                        border: 1px solid black;
                        overflow: hidden;
                        display: flex;
                    }

                    .search__location__wrapper {
                        flex: 1 1 auto;
                        height: 100%;
                        border: 2px solid blue;
                    }

                    .search__guest__wrapper {
                        flex: 1 1 auto;
                        height: 100%;
                        border: 2px solid green;
                    }

                    .search__icon__wrapper {
                        min-width: 70px;
                        width: 70px;
                        height: 100%;
                        border: 2px solid black;
                    }
                    
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default SearchBox;