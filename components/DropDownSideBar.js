import React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/core/styles';
import SearchLocationResultCard from './SearchLocationResultCard';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    closeIconStyle: {
        color: '#333333',
        width: '18px',
        height: '18px'
       
        
    },
    searchIconStyle: {
        color: '#F2F2F2',
        width: '18px',
        height: '18px',
        marginRight: '8px'
       
        
    }
  });

const DropDownSideBar = (props) => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className="container">
                <div className="title__wrapper">
                    <h5 className="title">Edit your search</h5>
                    <CloseRoundedIcon 
                        className={classes.closeIconStyle}
                        onClick={props.openDropDownSideBarToggler}/>
                </div>
                <div className="search__location__guest__wrapper">
                    <div className="search__item__wrapper search__location__wrapper">
                        <h5 className="search__location__title">location</h5>
                        <h6 className="search__location__value">Helsinki, Finland</h6>
                    </div>
                    <div className="search__item__wrapper search__guest__wrapper">
                        <h5 className="search__guest__title">guests</h5>
                        <h6 className="search__guest__value">Add guests</h6>
                    </div>
                </div>
                <div className="search__location__cards__wrapper">
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                    <SearchLocationResultCard />
                </div>
                <div className="search__button__wrapper">
                    <button className="search__button">
                        <SearchIcon className={classes.searchIconStyle}/>Search
                    </button>
                </div>
            </div>
            <style jsx>{
                `

                .container {
                    width: 100%;
                    height: ${ props.isOpen ? '80vh' : '0px'};
                    background: white;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    padding: ${ props.isOpen ? '13px' : '0px'};
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;

                }

                .title__wrapper {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .title {
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 0.75rem;
                    color: #333333;
                }

                .search__location__guest__wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    overflow: hidden;
                    
                }

                .search__item__wrapper {
                    width: 100%;
                    height: 57px;
                    bakcground: red;
                    padding: 2.4% 8%;
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    font-family: 'Mulish', sans-serif;
                    flex-direction: column;
                }

                .search__location__wrapper {
                    border-bottom: 0.5px solid #F2F2F2;
                }

                .search__guest__wrapper {
                    border-top: 0.5px solid #F2F2F2;
                }

                .search__location__title {
                    text-transform: uppercase;
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 0.5625rem;
                    color: #333333;
                    
                }

                .search__location__value {
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0.875rem;
                    color: #333333;
                }

                .search__guest__title {
                    text-transform: uppercase;
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 0.5625rem;
                    color: #333333;
                }

                .search__guest__value {
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0.875rem;
                    color: #BDBDBD;
                }

                .search__location__cards__wrapper {
                    width: 100%;
                    margin-top: 32px;
                    flex: 1 1 auto;
                    max-height: 50%;
                    overflow-y: scroll;
                }

                .search__button__wrapper {
                    width: 100%;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .search__button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 126px;
                    height: 48px;
                    background: rgba(235, 87, 87, 0.9);
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    border: none;
                    outline: none;
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 0.875rem;
                    color: #F2F2F2;
                    text-transform: capitalize;
                }
                
                
                `
            }</style>
        </React.Fragment>
    );
}

export default DropDownSideBar;