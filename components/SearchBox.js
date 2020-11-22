import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchIconStyle: {
        color: 'rgba(235,87,87,0.9)',
        width: '25px',
        height: '25px',
       
        
    }
  });


const SearchBox = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="search__main__wrapper">
                <div className="search__wrapper">
                    <div className="search__location__wrapper"></div> 
                    <div className="search__guest__wrapper"></div>
                    <div className="search__icon__wrapper">
                            <SearchIcon className={classes.searchIconStyle} />
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .search__main__wrapper {
                        width: 100%;
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
                        overflow: hidden;
                        display: flex;
                    }

                    .search__location__wrapper {
                        flex: 1 1 auto;
                        height: 100%;
                        border-right: 1px solid rgba(242,242,242,1);
                        
                    }

                    .search__guest__wrapper {
                        flex: 1 1 auto;
                        height: 100%;
                        border-right: 1px solid rgba(242,242,242,1);
                        
                    }

                    .search__icon__wrapper {
                        min-width: 55px;
                        width: 55px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .search__icon {
                        width: 17px;
                        height: 17px;
                        color: #EB5757;

                    }
                    
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default SearchBox;