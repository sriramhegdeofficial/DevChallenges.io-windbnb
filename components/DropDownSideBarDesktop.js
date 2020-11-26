import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import SearchLocationResultCard from './SearchLocationResultCard';
import Picker from './Picker';



const useStyles = makeStyles({
    searchIconStyle: {
        color: '#F2F2F2',
        width: '18px',
        height: '18px',
        marginRight: '8px'
       
        
    }
  });


const DropDownSideBarDesktop = (props) => {

    

    const classes = useStyles();
    return (
        <React.Fragment>
                <div className="container">
                        <div className="search__item__main__wrapper">
                                <div className="search__location__wrapper">
                                    <h5 className="search__location__title">location</h5>
                                    <h6 className="search__location__value">{props.locationSelectedName}</h6>
                                </div>

                                <div className="search__location__cards__wrapper">
                                    <SearchLocationResultCard 
                                    locationName="Helsinki, Finland"
                                    locationSelectedNameHandler={props.locationSelectedNameHandler}/>
                                    <SearchLocationResultCard 
                                    locationName="Helsinki, Finland"
                                    locationSelectedNameHandler={props.locationSelectedNameHandler}/>
                                    <SearchLocationResultCard 
                                    locationName="Oulu, Finland"
                                    locationSelectedNameHandler={props.locationSelectedNameHandler}/>
                                    <SearchLocationResultCard 
                                    locationName="Oulu, Finland"
                                    locationSelectedNameHandler={props.locationSelectedNameHandler}/>
                                 </div>
                        </div>
                             <div className="search__item__main__wrapper">
                                    <div className="search__guest__wrapper">
                                        <h5 className="search__guest__title">guests</h5>
                                        <h6 className="search__guest__value">{ props.totalGuests === 0 ? 'Add guests' : props.totalGuests === 1 ? `${props.totalGuests} guest` :`${props.totalGuests} guests`}</h6>
                                    </div>
                                    <div className="picker__main__wrapper">
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
                                                    {...props}/>
                                                </div>
                                    </div>
                        </div>
                        <div className="search__item__main__wrapper search__button__wrapper">
                            <button className="search__button">
                                    <SearchIcon className={classes.searchIconStyle}/>Search
                            </button>
                        </div>
                </div>
            <style jsx>{`
                .container {
                   
                    width: 100%;
                    height: 68vh;
                    background: white;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    display: flex;
                    justify-content: space-evenly;
                    padding: 60px 50px;
                    overflow: scroll;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                .container::-webkit-scrollbar {
                        display: none;
                }

                .search__item__main__wrapper {
                    width: 30%;
                    flex-direction: column;
                    
                    
                    
                }

                .search__location__wrapper, .search__guest__wrapper {
                    width: 100%;
                    height: 57px;
                     display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    font-family: 'Mulish', sans-serif;
                    flex-direction: column;
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    padding: 10px 20px;
                    margin-bottom: 20px;
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

                .picker__main__wrapper {
                    overflow: scroll;
                    min-height: 200px;
                    height: 80%;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                .picker__main__wrapper::-webkit-scrollbar {
                    display: none;
                }



                .guest__picker__wrapper {
                    width: 100%;
                    padding: 0px 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    
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
                    
                    height: 57px;
                     display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-family: 'Mulish', sans-serif;
                    
                   
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

                .search__location__cards__wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                    min-height: 200px;
                    height: 80%;
                    overflow: scroll;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                    
                }

               
            

            .search__location__cards__wrapper::-webkit-scrollbar {
                display: none;
              }
              
                
                   
            
            `}</style>
        </React.Fragment>
    );
}

export default DropDownSideBarDesktop;