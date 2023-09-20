import styled from 'styled-components';
import bg from '../../images/bg.jpg';

export const Hero = styled.div`
  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${bg});
  font-family: 'Libre+Baskerville', italy;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 80px;
  width: 800px;
  align-items: flex-start;
  margin-top: 80px;
`;

export const HeroTextMain = styled.h1`
  font-family: 'Libre+Baskerville', italy;
  color: #b0bbd6;
  font-weight: 700;
  font-size: 66px;
  line-height: 1.2;
  text-shadow: 1px 1px 2px #5c5757;
`;

export const HeroTextSecondary = styled.h2`
  color: #b0bbd6;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.6;
`;
