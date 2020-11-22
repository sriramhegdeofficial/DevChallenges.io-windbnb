import React from 'react';

const SearchBox = (props) => {
    return (
        <React.Fragment>
            <div className="search__main__wrapper">
                <div className="search__wrapper">

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
                    }
                    
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default SearchBox;