import {ContentWrapper, ServiceText, SecondaryText} from '../../components/services/Services.styled.js'

const Documents = () => {
  return (
    <ContentWrapper>
      <div>
        <ServiceText>Умови оренди автомобіля</ServiceText>
        <SecondaryText>
          Особа, яка орендує автомобіль, повинна мати дійсне посвідчення водія,
          стаж водіння від 2 років, а також вік не менше 23 років. Рішення про
          допуск водія, що не відповідає цим вимогам, приймаються індивідуально.
        </SecondaryText>
      </div>
      <div>
        <ServiceText>Необхідні документи</ServiceText>
        <SecondaryText>Паспорт <br></br>
         Водійське посвідчення  <br></br>
         ІПН (для громадян України)</SecondaryText>
      </div>
    </ContentWrapper>
  );
};

export default Documents;
