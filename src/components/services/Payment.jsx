import {ContentWrapper, ServiceText, SecondaryText} from '../../components/services/Services.styled.js'

const Payment = () => {
  return (
    <ContentWrapper>
      <ServiceText>Умови оплати</ServiceText>
      <SecondaryText>
      Платіжні картки Visa/Mastercard
Безготівковий розрахунок із ПДВ
Apple Pay та Google Pay
Оплата онлайн на сайті
      </SecondaryText>
      <SecondaryText>
      Водії, що видають автомобілі, завжди мають бездротові платіжні термінали.
      </SecondaryText>
    </ContentWrapper>
  );
};

export default Payment;
