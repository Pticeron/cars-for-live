import {ContentWrapper, ServiceText, SecondaryText} from '../../components/services/Services.styled.js'

const Limitation = () => {
    return (
      <ContentWrapper>
        <ServiceText>Умови оренди</ServiceText>
        <SecondaryText>
        Добовий ліміт з пробігу – 300 км, але не більше 4500 км на місяць. У разі перепробігу кожен кілометр оплачується додатково згідно з тарифами компанії;
ВАЖЛИВО! Орендар може замовити послугу «Безлімітний пробіг», щоб не обмежувати себе за кілометри. Вартість послуги згідно з тарифами компанії.
        </SecondaryText>
        <SecondaryText>
        Ви можете безкоштовно змінити/скасувати своє бронювання.
        </SecondaryText>
      </ContentWrapper>
    );
  };
  
  export default Limitation;
  