import React from 'react';
import Head from 'next/head';
import Layout from './../components/Layout';
import Header from './../components/Header';
import SearchBox from '../components/SearchBox';


export default function Home() {
  return (
    <React.Fragment>
      <Layout>
          <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <title>Welcome | Windbnb</title>
          </Head>
          <Header />
          <SearchBox />
      </Layout>
    </React.Fragment>
    
  )
}
