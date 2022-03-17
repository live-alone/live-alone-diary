import React from 'react';
import styled from 'styled-components';

const LoginMain = styled.main`
  display: flex;
  background: #f3f5f6;
  flex-direction: column;
  align-items: center;
`;

const LoginWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  width: 300px;
`;

const Id = styled.input`
  width: 100%;
  height: 40px;
  border: solid #dbdbdb 1px;
  border-radius: 4px 4px 0 0;
  padding: 0 15px;
`;
const Pass = styled.input`
  width: 100%;
  height: 40px;
  border: solid #dbdbdb;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 4px 4px;
  padding: 0 15px;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 40px;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 15px 0;
  background: #81db29;
  color: #fff;
  border-radius: 4px;
`;

const LoginText = styled.article``;

const PassReset = styled.a`
  margin-right: 15px;
`;
const Join = styled.a``;

const SnsLogin = styled.article``;

const Naver = styled.a``;
const Kakao = styled.a``;
const FaceBook = styled.a``;

const Login = () => {
  return (
    <>
      <LoginMain>
        <LoginWrapper>
          <Id placeholder={'아이디'} />
          <Pass placeholder={'비밀번호'} />
        </LoginWrapper>
        <LoginButton>로그인</LoginButton>
        <LoginText>
          <PassReset>비밀번호 재설정</PassReset>
          <Join>회원가입</Join>
        </LoginText>
        <SnsLogin>
          <Naver></Naver>
          <Kakao></Kakao>
          <FaceBook></FaceBook>
        </SnsLogin>
      </LoginMain>
    </>
  );
};

Login.displayName = 'Login';
export default Login;
