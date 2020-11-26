import React, { useState } from 'react';
import Head from 'next/head';
import Layout from './../components/Layout';
import Header from './../components/Header';
import SearchBox from '../components/SearchBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HotelStaysResult from '../components/HotelStaysResult';
import HotelCard from '../components/HotelCard';
import DropDownSideBar from '../components/DropDownSideBar';

export default function Index() {

  var iPadPortrait = useMediaQuery('(min-width:760px)');
  var DesktopLarge = useMediaQuery('(min-width:1900px)');
  var DesktopMedium = useMediaQuery('(min-width: 1200px)');

  const [isDropDownSideBarOpen, setisDropDownSideBarOpen] = useState(false);

  const openDropDownSideBarToggler = () => {
     if(isDropDownSideBarOpen === true) {
      
       setisDropDownSideBarOpen(false);
       document.body.style.overflow = 'unset';
     }else {
      setisDropDownSideBarOpen(true);
      document.body.style.overflow = 'hidden';
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
                isOpen={isDropDownSideBarOpen}/>
                

                
                  
                
              
                
                <Header  
                openDropDownSideBarToggler = {openDropDownSideBarToggler}
                />

                <SearchBox 
                     inHeader={false} 
                     show={iPadPortrait ? false : true}
                     openDropDownSideBarToggler = {openDropDownSideBarToggler}
                     
                     />
                <HotelStaysResult>
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                    
                </HotelStaysResult>
          </div>
      </Layout>
      <style jsx>{`
          
          .content__container {
            width: 100%;
            max-width: ${ DesktopLarge ? '1800px' : '100%'};
            min-height: 100%;
            padding: ${iPadPortrait ? '0px 7%' : '0px 12px'} ;
            position: relative;
            
           
        }

      

        .pseudo__box {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background: rgba(0,0,0,0.4);
          display: ${ isDropDownSideBarOpen ? DesktopMedium ? 'block' : 'none' : 'none'};
          z-index: 50;
        }
        
        
      
      `}</style>
    </React.Fragment>
    
  )
}
