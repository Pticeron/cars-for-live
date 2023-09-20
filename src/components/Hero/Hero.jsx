import Container from 'components/Container/Container';
import {
  ContentWrapper,
  Hero,
  HeroTextMain,
  HeroTextSecondary,
} from './Hero.styled';
import { RentalBtn } from 'components/Buttons/Buttons';

const HeroSection = () => {
  return (
    <Hero>
      <Container>
        <ContentWrapper>
          <HeroTextMain>Ми там, де завжди потрібні</HeroTextMain>
          <HeroTextSecondary>Прокат автомобілів в Україні</HeroTextSecondary>
          <RentalBtn width="160px" />
        </ContentWrapper>
      </Container>
    </Hero>
  );
};

export default HeroSection;
