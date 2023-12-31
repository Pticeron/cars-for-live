import Container from 'components/Container/Container';
import {
  FooterSection,
  LogoWrapper,
  FooterWrapper,
  ContactsTitle,
  ContactWrapper,
  ContactsText,
  TelIcon,
  EmailIcon,
} from './Footer.styled';
import auto from '../../images/auto.png';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <ContactWrapper>
            <ContactsTitle>Наші контакти</ContactsTitle>
            <ContactsText>
              <TelIcon /> +38 (073) 000 00 00
            </ContactsText>
            <ContactsText>
              <EmailIcon /> info@CarForLive.com
            </ContactsText>
          </ContactWrapper>
          <LogoWrapper>
            <img src={auto} alt="Rental Cars" width={320} height={120} />
          </LogoWrapper>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer