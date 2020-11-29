import React, { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/core/styles';
import SearchLocationResultCard from './SearchLocationResultCard';
import SearchIcon from '@material-ui/icons/Search';
import Picker from './Picker';
import stays from './../stays.json';

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
  

const DropDownSideBarMobile = (props) => {

  
    const uniqueStays = [];
  
    
    
    

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
                    <div 
                    className="search__item__wrapper search__location__wrapper"
                    onClick={() => props.locationToggleHandler('location')}
                    >
                        <h5 className="search__location__title">location</h5>
                        <h6 className="search__location__value">{`${props.locationSelectedName},\u00A0 Finland`}</h6>
                    </div>
                    <div 
                        className="search__item__wrapper search__guest__wrapper"
                        onClick={() => props.locationToggleHandler('guest')}>
                            <h5 className="search__guest__title">guests</h5>
    <h6 className="search__guest__value">{ props.totalGuests === 0 ? 'Add guests' : props.totalGuests === 1 ? `${props.totalGuests} guest` :`${props.totalGuests} guests`}</h6>
                    </div>
                </div>
                <div className="search__location__cards__wrapper">
                   
                {
                    stays.map(stay => {
                        if(!uniqueStays.includes(stay.city)) {
                            uniqueStays.push(stay.city);
                            return (
                                <SearchLocationResultCard 
                                key={JSON.stringify(stay)}
                                locationName={`${stay.city}`}
                               locationSelectedNameHandler={props.locationSelectedNameHandler}/>
                            )
            
                        }
                      
                    })
                }    
               
                    
          
                    
                </div>
                <div className="guest__picker__wrapper">
                    <div className="guest__adult_picker__wrapper">
                        <h3 className="adult__picker__title">Adults</h3>
                        <h4 className="adult__picker__age">Adults Ages 13 or above</h4>
                        <Picker 
                        pickerType="adult"
                        {...props}/>
                    </div>
                    <div className="guest__children_picker__wrapper">
                        <h3 className="children__picker__title">Children</h3>
                        <h4 className="children__picker__age">Ages 2-12</h4>
                        <Picker 
                        pickerType="children"
                        {...props} />
                    </div>
                   
                </div>
                <div className="search__button__wrapper">
                    <button 
                    onClick={() => {
                        props.staysSearchHandler(props.locationSelectedName, props.totalGuests);
                        props.openDropDownSideBarToggler();
                    
                    }}
                    className="search__button"
                    >
                        <SearchIcon className={classes.searchIconStyle}/>Search
                    </button>
                </div>
            </div>
            <style jsx>{
                `

                .container {
                    width: 100%;
                    height: 80vh;
                    background: white;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    padding: 13px;
                    display: flex;
                    flex-direction: column;
                    overflow: auto;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                   
                }

                .container::-webkit-scrollbar {
                    display: none;
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
                    margin-bottom: 20px;
                    
                    
                }

                .search__item__wrapper {
                    width: 100%;
                    min-height: 57px;
                     padding: 10px 20px;
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
                    min-height: 200px;
                    height: 50%;
                    overflow-y: scroll;
                    display: ${ props.toggleLocationSelector ? 'block' : 'none'};
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                .search__location__cards__wrapper::-webkit-scrollbar {
                    display: none;
                  }
                  
                 

                .guest__picker__wrapper {
                    width: 100%;
                    padding: 0px 20px;
                    display: ${ !props.toggleLocationSelector ? 'flex' : 'none'};
                    flex-direction: column;
                    align-items: flex-start;
                    overflow: scroll;
                    
                }

                .guest__adult_picker__wrapper, .guest__children_picker__wrapper  {
                    margin-bottom: 35px;
                }

              
                .adult__picker__title, .children__picker__title {
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 0.875rem;
                    margin-bottom: 4px;
                    color: #333333;
                }

                .adult__picker__age, .children__picker__age {
                    opacity: 0.2;
                    font-family: 'Mulish', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 0.875rem;
                    color: #333333;
                    margin-bottom: 10px;
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

                @media only screen and (max-height: 400px) {

                    .container {
                    
                    overflow: scroll;
                
                   
                }
         
                }
                
                
                `
            }</style>
        </React.Fragment>
    );
}

export default DropDownSideBarMobile;