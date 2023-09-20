import { useNavigate } from "react-router-dom";
import {  ErrorText, ErrorTextErr, HomeBtn, SectionContainer, Wrapper } from "./NotFoundPage.styled";
import Container from "components/Container/Container";
// import errImage from '../../images/NotFound.jpg';

const NotFoundPage =  () => {
const navigate = useNavigate();
return(
    <Wrapper>
        <Container>
<SectionContainer>
    <ErrorTextErr>404</ErrorTextErr>
    <ErrorText>Page not Found</ErrorText>
    <HomeBtn onClick={() => navigate('/')}>BackHome</HomeBtn>
    {/* <ErrorImg src={errImage} alt="page404" /> */}
</SectionContainer>
        </Container>
    </Wrapper>
)
}

export default NotFoundPage;
