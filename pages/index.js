import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from './../components/Layout';
import Header from './../components/Header';
import SearchBoxSm from '../components/SearchBoxSm';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HotelStaysResult from '../components/HotelStaysResult';
import HotelCard from '../components/HotelCard';
import DropDownSideBar from '../components/DropDownSideBar';
import stays from './../stays.json';


export default function Index() {

  
  const getIndexOfHotelCard = (value) => {
    if(value % 3 === 1) {
        return 'right';
    }else if(value % 3 === 2) {
        return 'both';
    }else {
        return 'left';
    }
}

const getIndexIfOnlyTwo = (value) => {
   if(value % 3 === 2) {
     return true;
   }else {
     return false;
   }
}

  const initialStaysList = (stay) => {
    return stay.city === 'Helsinki' && stay.country === 'Finland';
  }
 

 const staysSearchHandler = (location, numberOfGuests = 0) => {
    const searchResult = stays.filter((stay) => {
      return stay.city === location && stay.maxGuests > numberOfGuests
    });
    setInitialStays(searchResult);
 } 
  

  const [isDropDownSideBarOpen, setisDropDownSideBarOpen] = useState(false);
  const [locationSelectedName, setLocationSelectedName] = useState('Helsinki');
  const [totalGuests, setTotalGuests] = useState(0);
  const [adultPickerValue, setAdultPickerValue] = useState(0);
  const [childrenPickerValue, setChildrenPickerValue] = useState(0);
  const [toggleLocationSelector, setToggleLocationSelector ] = useState(true);
  const [initialStays, setInitialStays] = useState(stays.filter(initialStaysList));

  useEffect(() => {

    setTotalGuests(adultPickerValue + childrenPickerValue);
    console.log(`dropdownValue : ${isDropDownSideBarOpen}`);
    console.log(initialStays.length)
    
    
  }, [adultPickerValue, childrenPickerValue, isDropDownSideBarOpen, initialStays]);

  const openDropDownSideBarToggler = () => {
     if(isDropDownSideBarOpen === true) {
          
          setisDropDownSideBarOpen(false);
          document.body.style.position = 'static';
          document.body.style.overflowY = 'auto';
     }else {
        setisDropDownSideBarOpen(true);
        
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
     }
  }


  const locationSelectedNameHandler = (value) => {
     if( value === locationSelectedName) {
       return ;
     }else {
      setLocationSelectedName(value);
     }
      
  }

  const totalGuestsHandler = () => {
      setTotalGuests(adultPickerValue + childrenPickerValue);
  }

  const setPickerValue = (value, value2) => {
    if(value === 'adult') {
      if(value2 === 'plus') {
        setAdultPickerValue(adultPickerValue => adultPickerValue + 1);
      }else if(value2 === 'minus') {
        if(adultPickerValue > 0) {
          setAdultPickerValue(adultPickerValue => adultPickerValue - 1);
        }
      }
    }
    else if(value === 'children') {
      if(value2 === 'plus') {
        setChildrenPickerValue(childrenPickerValue => childrenPickerValue + 1);
      }else if(value2 === 'minus'){
        if(childrenPickerValue > 0) {
          setChildrenPickerValue(childrenPickerValue => childrenPickerValue - 1);
        }
      }
    }
  }

  const locationToggleHandler = (value) => {
    if(value === 'location') {
        setToggleLocationSelector(true);
    }else if(value === 'guest') {
        setToggleLocationSelector(false);
    }
}
  
  
  return (
    <React.Fragment>
      <Layout>
       
          <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>Welcome | Windbnb</title>
          </Head>
          <div className="pseudo__box" onClick={openDropDownSideBarToggler}></div>
          <div className="content__container">
                <DropDownSideBar 
                openDropDownSideBarToggler = {openDropDownSideBarToggler}
                locationSelectedName={locationSelectedName}
                isOpen={isDropDownSideBarOpen}
                locationSelectedNameHandler={locationSelectedNameHandler}
                totalGuestsHandler={totalGuestsHandler}
                totalGuests={totalGuests}
                adultPickerValue={adultPickerValue}
                childrenPickerValue={childrenPickerValue}
                setPickerValue={setPickerValue}
                locationToggleHandler={locationToggleHandler}
                toggleLocationSelector={toggleLocationSelector}
                staysSearchHandler={staysSearchHandler}
                />
                

                
                  
                
              
                
                <Header  
                openDropDownSideBarToggler = {openDropDownSideBarToggler}
                locationToggleHandler={locationToggleHandler}
                totalGuests={totalGuests}
                locationSelectedName={locationSelectedName}
                />

                <SearchBoxSm 
                     inHeader={false} 
                     openDropDownSideBarToggler = {openDropDownSideBarToggler}
                     locationToggleHandler={locationToggleHandler}
                     totalGuests={totalGuests}
                     locationSelectedName={locationSelectedName}
                     />
                <HotelStaysResult staysCount={initialStays.length}>
                  
                 {
                    initialStays.map((hotelCard, index) => {
                      if(initialStays.length === (index + 1) && getIndexIfOnlyTwo(initialStays.length)) {
                        return (
                        <React.Fragment key={JSON.stringify(hotelCard)}>
                            <HotelCard 
                                hotelCard={hotelCard}
                                pseudo={false}
                              />
                              <HotelCard 
                                hotelCard={hotelCard}
                                pseudo={true}
                            /> 
                        </React.Fragment>
                        
                     

                        )
                      }else {
                        return (<HotelCard 
                        key={JSON.stringify(hotelCard)}         
                        hotelCard={hotelCard}
                        pseudo={false}
                        />)
                      }
                      
                    })
                  }
                    
                    
                    
                    
                </HotelStaysResult>
          </div>
      </Layout>
      <style jsx>{`
          
          .content__container {
            width: 100%;
            min-width: 280px;
            min-height: 100%;
            padding: 0px 12px ;
            position: relative;
            
           
        }

      

        .pseudo__box {
          display: none;
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background: rgba(0,0,0,0.4);
          z-index: 50;
        }

        @media only screen and (min-width:760px) {
          .content__container {
           
            padding: 0px 7% ;
           
            
           
        }

       


        }

        @media only screen and (min-width: 1200px) {
          .pseudo__box {
            display: ${isDropDownSideBarOpen ? 'block' : 'none'};
           }
         
        }
        
        
      
      `}</style>
    </React.Fragment>
    
  )
}
