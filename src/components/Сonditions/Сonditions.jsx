import Container from 'components/Container/Container';
import {
  Face,
  Paragraph,
  Reverse,
  ServiceCard,
  ServiceCardWrapper,
  ServiceContent,
  ServiceTitle,
  ServicesSection,
  Title,
} from './Сonditions.styled';

const Conditions = () => {
  return (
    <ServicesSection>
      <Container>
        <ServiceTitle>Для Вас це доступно</ServiceTitle>
        <ServiceCardWrapper>
          <ServiceCard>
            <Face>
              <ServiceContent>Cтраховка авто</ServiceContent>
            </Face>
            <Reverse>
              <ServiceContent>
                <Title>
                  <Paragraph>
                    Подорожуйте спокійно і безпечно - ми беремо всі ризики на
                    себе, адже весь парк авто, який ми пропонуємо, повністю
                    застрахований.
                  </Paragraph>
                </Title>
              </ServiceContent>
            </Reverse>
          </ServiceCard>
          <ServiceCard>
            <Face>
              <ServiceContent>GPS - навігатор</ServiceContent>
            </Face>
            <Reverse>
              <ServiceContent>
                <Title>
                  <Paragraph>
                    Не губіться і економте час за допомогою GPS-навігатора, який
                    підкаже Вам оптимальний маршрут.
                  </Paragraph>
                </Title>
              </ServiceContent>
            </Reverse>
          </ServiceCard>
          <ServiceCard>
            <Face>
              <ServiceContent>Консьєрж-сервіс</ServiceContent>
            </Face>
            <Reverse>
              <ServiceContent>
                <Title>
                  <Paragraph>
                    Цілодобова підтримка з будь-якими питаннями, будь то
                    бронювання готелів або пошук кращих турів і товарів
                  </Paragraph>
                </Title>
              </ServiceContent>
            </Reverse>
          </ServiceCard>
          <ServiceCard>
            <Face>
              <ServiceContent>Допомога в дорозі</ServiceContent>
            </Face>
            <Reverse>
              <ServiceContent>
                <Title>
                  <Paragraph>
                    Закінчився запас палива? Потрібно поміняти колесо або
                    зарядити акумулятор? Дайте нам знати і наші фахівці приїдуть
                    і допоможуть вам.
                  </Paragraph>
                </Title>
              </ServiceContent>
            </Reverse>
          </ServiceCard>
        </ServiceCardWrapper>
      </Container>
    </ServicesSection>
  );
};

export default Conditions;
