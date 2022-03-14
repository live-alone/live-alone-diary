import React from 'react';
import SelectAreaWrapper from '@presentational/landing/SelectArea';
import styled from 'styled-components';

const LandingMain = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url('img/background.jpeg');
  background-size: cover;
  z-index: -1;
  position: absolute;
`;

const Landing = () => {
  return (
    <>
      <LandingMain>
        <SelectAreaWrapper />
      </LandingMain>
    </>
  );
};

Landing.displayName = 'Landing';
export default Landing;
