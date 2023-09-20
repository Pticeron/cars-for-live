import styled from 'styled-components';

export const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  padding: 70px 0 70px;
  background: #00466e1a;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px,
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

export const Face = styled.div`
  position: relative;
  background: #333;
  background: #445c84;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(0);
  transition: 1s;
  border-radius: 14px;
  width: 200px;
  height: 200px;
`;

export const Reverse = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform: translateY(-150px);
  transition: 1s;
  height: 150px;
  border-radius: 16px;
`;

export const ServiceContent = styled.div`
  opacity: 0.4;
  transition: 0.5s;
  font-size: 24px;
  font-family: 'Libre+Baskerville', italy;
  color: #fff;
`;

export const ServiceCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ServiceCard = styled.div`
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 80px;
  transition: 0.5s;
  background: #333;
  border-radius: 16px;
  transform: translateY(0);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${ServiceContent} {
    opacity: 0.4;
    transition: 1s;
  }

  &:hover {
    ${Face} {
      background: #ff0057;
      transform: translateY(-40px);
      transition: 1s;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      ${ServiceContent} {
        opacity: 1;
      }
    }

    ${Reverse} {
      transform: translateY(-40px);
      transition: 1s;
      border-bottom-left-radius: 14px;
      border-bottom-right-radius: 14px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    &:hover {
      ${Face} {
        background: #ff0057;
        transform: translateY(-50px);
        transition: 1s;

        ${ServiceContent} {
          opacity: 1;
        }
      }

      ${Reverse} {
        transform: translateY(-50px);
        transition: 1s;
      }
    }
  }
  @media (min-width: 1440px) {
    width: 200px;
    height: 200px;
    &:hover {
      ${Face} {
        background: #ff0057;
        transform: translateY(-75px);
        transition: 1s;

        ${ServiceContent} {
          opacity: 1;
        }
      }

      ${Reverse} {
        transform: translateY(-75px);
        transition: 1s;
      }
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  padding: 0;
  color: #660066;
  text-align: center;
  font-size: 24px;
  font-family: 'Libre+Baskerville', italy;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 14px;
`;

export const ServiceTitle = styled.h1`
  font-family: 'Libre+Baskerville', italy;
  position: relative;
  color: #660066;
  line-height: 1.4;
  text-shadow: 1px 1px 2px #5c5757;

  margin-bottom: 40px;
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: 25%;
    transform: translateX(-50%);
    width: 180px;
    height: 1px;
    background-color: #660066;
  }
  font-size: 28px;
  line-height: 1.2;
  margin-bottom: 50px;
`;
