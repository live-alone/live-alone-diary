import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 50px;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  background: ${(props: HeaderProps) =>
    props.landing ? 'transparent' : '#fff'};
`;

const MenuWrapper = styled.nav`
  display: ${(props: HeaderProps) => (props.landing ? 'none' : 'flex')};
`;

const MenuItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 10px;
  color: #555;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #81db29;
  }
`;

const HeaderLogo = styled.h1`
  font-family: 'godo', 'Noto Sans KR', san-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-right: 35px;
`;

const LoginButton = styled.button`
  padding: 0 16px;
  height: 40px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #81db29;
  color: #fff;
  border-radius: 4px;
  letter-spacing: 0.05em;
  margin-left: auto;
`;

interface HeaderProps {
  landing: boolean;
}

const HeaderWrapper = (props: HeaderProps) => {
  return (
    <Header landing={props.landing}>
      <HeaderLogo>자취일기</HeaderLogo>
      <MenuWrapper landing={props.landing}>
        <MenuItem>커뮤니티</MenuItem>
        <MenuItem>혼밥지도</MenuItem>
        <MenuItem>배달공구</MenuItem>
      </MenuWrapper>
      <LoginButton>로그인</LoginButton>
    </Header>
  );
};

export default HeaderWrapper;
