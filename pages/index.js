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
  

  
  return (
    <React.Fragment>
      <Layout>
          <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>Welcome | Windbnb</title>
          </Head>
          <Header />
          <SearchBox inHeader={false} show={iPadPortrait ? false : true}/>
          <HotelStaysResult>
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />
              
          </HotelStaysResult>
      </Layout>
    </React.Fragment>
    
  )
}
