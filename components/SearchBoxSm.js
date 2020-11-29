import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchIconStyle: {
        color: 'rgba(235,87,87,0.9)',
        width: '25px',
        height: '25px'
       
        
    }
  });


const SearchBoxSm = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="search__main__wrapper">
                <div className="search__wrapper">
                    <div className="search__location__guest__wrapper"> 
                        <div 
                        className="search__location__wrapper"
                        onClick={() => {
                            props.openDropDownSideBarToggler();
                            props.locationToggleHandler('location')
                            }
                        }
                         >
                                 {`${props.locationSelectedName},\u00A0 Finland`}
                        </div> 
                        <div 
                        className="search__guest__wrapper"
                        onClick={() => {
                            props.openDropDownSideBarToggler()
                            props.locationToggleHandler('guest')}}>
                                { props.totalGuests === 0 ? 'Add guests' : props.totalGuests === 1 ? `${props.totalGuests} guest` :`${props.totalGuests} guests`}
                        </div>
                    </div>
                <div className="search__icon__wrapper">
                            <SearchIcon className={classes.searchIconStyle} />
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .search__main__wrapper {
                        display: flex;
                        width: ${ props.inHeader ? 'auto' : '100%'};
                        padding: ${props.inHeader ? '0px' : '32px 15px'}; 
                        justify-content: center;
                        align-items: center;
                        
                        
                    }

                    .search__wrapper {
                        min-width: ${ props.inHeader ? '0px' : '250px'};
                        max-width:  ${ props.inHeader ? 'auto' : '400px'};
                        width: ${ props.inHeader ? '380px' : '100%'};;
                        background: white;
                        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                        border-radius: 16px;
                        height: 65px;
                        overflow: hidden;
                        display: flex;
                    }

                    .search__location__guest__wrapper {
                        flex: 1 1 auto;
                        display:flex;
                        align-items: center;
                        
                    }

                    .search__location__wrapper {
                        
                        width: 50%;
                        height: 100%;
                        border-right: 1px solid rgba(242,242,242,1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        padding: 0px 6%;
                        font-size: 0.875rem;
                        font-family: 'Mulish', sans-serif;
                        color: #333333;
                        text-transform: capitalize;
                        font-weight: 400;
                        cursor: pointer;
                    }

                    .search__guest__wrapper {
                        
                        width: 50%;
                        height: 100%;
                        border-right: 1px solid rgba(242,242,242,1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        padding: 0px 6%;
                        font-size: 0.875rem;
                        font-family: 'Mulish', sans-serif;
                        color: #BDBDBD;
                        text-transform: capitalize;
                        font-weight: 400;
                        cursor: pointer;
                    }

                    .search__icon__wrapper {
                        min-width: 55px;
                        width: 55px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }

                    .search__icon {
                        width: 17px;
                        height: 17px;
                        color: #EB5757;

                    }

                    @media only screen and (min-width:760px) {
                     
                        .search__main__wrapper {
                          
                            display: none;
                            
                            
                            
                        }
                      }

                  
                    
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default SearchBoxSm;