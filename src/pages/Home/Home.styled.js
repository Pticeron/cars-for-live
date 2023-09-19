import styled from 'styled-components';

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 600px;
  text-align: center;
`;

export const HomeTextMain = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 42px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px #5c5757;
`;

export const HomeTextSecondary = styled.h2`
  color: #8392b6;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  text-shadow: 1px 1px 2px #b7b0b0;
`;
