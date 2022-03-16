import React from 'react';
import styled from 'styled-components';

const AreaWrapper = styled.article`
  display: flex;
  height: 35px;
  justify-content: center;
`;

const ChangeArea = styled.nav`
  align-self: center;
  &::after {
    background: url('img/arrow.png');
    content: '';
    width: 10px;
    height: 10px;
    display: inline-block;
    background-size: cover;
  }
`;

const ChangeAreaWrapper = () => {
  return (
    <>
      <AreaWrapper>
        <ChangeArea>서교동</ChangeArea>
      </AreaWrapper>
    </>
  );
};

ChangeAreaWrapper.displayName = 'ChangeArea';
export default ChangeAreaWrapper;
