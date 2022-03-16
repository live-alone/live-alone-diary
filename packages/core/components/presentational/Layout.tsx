import HeaderWrapper from '@presentational/Header';
import React, { ReactElement } from 'react';

interface LayoutProps {
  props: {
    displayName: string;
  };
  children: ReactElement;
}

const Layout = ({ children, props }: LayoutProps) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
      </style>
      <HeaderWrapper landing={/Landing|Login/.test(props.displayName)} />
      {children}
    </>
  );
};

Layout.displayName = 'Layout';
export default Layout;
