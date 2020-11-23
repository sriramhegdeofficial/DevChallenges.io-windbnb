import React from 'react';
import Head from 'next/head';
import Layout from './../components/Layout';
import Header from './../components/Header';
import SearchBox from '../components/SearchBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HotelStaysResult from '../components/HotelStaysResult';
import HotelCard from '../components/HotelCard';

export default function Home() {

  var iPadPortrait = useMediaQuery('(min-width:760px)');
  var DesktopLarge = useMediaQuery('(min-width:1900px)');

  
  return (
    <React.Fragment>
      <Layout>
       
          <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>Welcome | Windbnb</title>
          </Head>
          <div className="content__container">
                <Header />

                <SearchBox inHeader={false} show={iPadPortrait ? false : true}/>
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
            
           
        }

        ::-webkit-scrollbar {
          width: 500px;
        }
        
        
      
      `}</style>
    </React.Fragment>
    
  )
}
