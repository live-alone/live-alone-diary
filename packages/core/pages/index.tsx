import Head from 'next/head';
import HeaderWrapper from '@presentational/Header';
import React from 'react';

export default function Home() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
      </style>
      <Head>
        <title>자취일기</title>
        <meta name="description" content="community site" />
        <meta name="keyword" content="community, web, contents, information" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <HeaderWrapper />
    </>
  );
}
