import React from 'react';
import '../public/globals.css';
import Layout from '@presentational/Layout';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>자취일기</title>
        <meta name="description" content="community site" />
        <meta name="keyword" content="community, web, contents, information" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Layout props={{ displayName: Component.displayName }}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
