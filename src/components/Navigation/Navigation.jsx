import { useLocation } from 'react-router-dom';
import {
  GoBackIcon,
  GoBackLink,
  HomeIcon,
  Link,
  LogoLink,
  LogoText,
  LogoWrapper,
  Nav,
  NavBlock,
  NavList,
  NavListItem,
} from './Navigation.styled';
import logo from '../../images/auto.png';

const Navigation = () => {
  const location = useLocation();
  const isCatalogOrFavoritePage =
    location.pathname === '/catalog' || location.pathname === '/favorites';

  return (
    <Nav>
      <NavList>
        <NavBlock>
          <NavListItem>
            <Link to='/'>
              <HomeIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/catalog">Каталог</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/favorites">Улюблене</Link>
          </NavListItem>
        </NavBlock>
        <LogoLink to="/">
          <LogoWrapper>
            <img src={logo} alt="Auto Logo" width={60} height={40} />
            <LogoText>CfL</LogoText>
          </LogoWrapper>
        </LogoLink>
        {isCatalogOrFavoritePage && (
          <GoBackLink to="/">
            <GoBackIcon />
          </GoBackLink>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
