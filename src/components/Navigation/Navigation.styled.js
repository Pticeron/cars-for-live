import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import {BsFillHouseFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavBlock = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoBackLink = styled(NavLink)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 30;
  margin-right: 10px;

  svg {
    fill: #660066;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 3px solid #fff;
      box-shadow: rgb(188 221 244) 0px 0px 15px;
    }
  }
`;

export const ButtonFilters = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;

  color: #fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 2px 2px 5px #000000;
  &:hover {
    color: #ffffff;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: 'Libre+Baskerville', italy;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  color: #660066;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #7b9ed9;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 3px solid #fff;
      box-shadow: rgb(188 221 244) 0px 0px 15px;
    }
  }
`;

export const HomeIcon = styled(BsFillHouseFill)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #660066;
  border-radius: 50%;
  border: 3px solid #660066;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(188 221 244) 0px 0px 15px;
`;

export const GoBackIcon = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  padding: 10px;
  color: #660066;
  border-radius: 50%;
  border: 3px solid #660066;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(188 221 244) 0px 0px 15px;
  margin: 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 110px;
  height: 40px;
  display: none;
  position: relative;
`;

export const LogoLink = styled(NavLink)`
  display: flex;

  color: #66066;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;
  margin-left: auto;

  &.active,
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const LogoText = styled.p`
  display: block;
  font-family: 'Libre+Baskerville', italy;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  position: absolute;
  color: #660066;
  top: -6px;
  right: -20px;
`;
