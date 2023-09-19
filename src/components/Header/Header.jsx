import Container from "components/Container/Container";
import { AppBar } from "./Header.styled";
import Navigation from "components/Navigation/Navigation";

const Header = () => {
 return(
    <AppBar>
        <Container>
            <Navigation />
        </Container>
    </AppBar>
 )
}

export default Header;