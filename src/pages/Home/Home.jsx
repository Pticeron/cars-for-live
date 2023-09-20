import HeroSection from 'components/Hero/Hero';
import {
  ContentWrapper,
  HomeSection,
  HomeTextMain,
  HomeTextSecondary,
  HomeWrapper,
} from './Home.styled';
import BtnToTop from 'components/Buttons/BtnToTop';
import Container from 'components/Container/Container';
import Conditions from 'components/Сonditions/Сonditions';

const Home = ({ data }) => {
  return (
    <>
      <BtnToTop />
      <HeroSection />
      <HomeSection>
        <Container>
          <HomeWrapper>
            <ContentWrapper>
              <HomeTextMain>
                У сучасному суспільстві такі цінності як час і комфорт все
                більше виходять на передній план, тому така послуга як оренда
                автомобіля – вже перестала бути розкішшю, а стала щоденною
                необхідністю.
              </HomeTextMain>
              <HomeTextSecondary>
                In modern society, such values as time and comfort increasingly
                come to the fore, so a service such as car rental has ceased to
                be a luxury, but has become a daily necessity.
              </HomeTextSecondary>
            </ContentWrapper>
          </HomeWrapper>
          <Conditions />
        </Container>
      </HomeSection>
    </>
  );
};

export default Home;
