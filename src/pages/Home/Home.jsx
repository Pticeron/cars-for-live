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

// return (
//   <main>
//     <h1>Прокат автомобілів в Україні</h1>
//     <p>Ми там, де завжди потрібні</p>
//     <img src="https://via.placeholder.com/960x240" alt="" />
//     <ul>
//       <li>
//         <h3>Cтраховка авто</h3>
//         <p>
//           Подорожуйте спокійно і безпечно - ми беремо всі ризики на себе, адже
//           весь парк авто, який ми пропонуємо, повністю застрахований.
//         </p>
//       </li>
//       <li>
//         <h3>GPS - навігатор</h3>
//         <p>
//           Не губіться і економте час за допомогою GPS-навігатора, який підкаже
//           Вам оптимальний маршрут.
//         </p>
//       </li>
//       <li>
//         <h3>Дитяче крісло</h3>
//         <p>
//           Подорожуєте з дітьми? Захистіть своїх дітей за допомогою комфортного
//           дитячого крісла.
//         </p>
//       </li>
//       <li>
//         <h3>Wi-Fi інтернет</h3>
//         <p>
//           Залишайтеся на зв'язку і будьте в курсі всього, що відбувається зі
//           швидкісним Wi-Fi інтернетом.
//         </p>
//       </li>
//       <li>
//         <h3>Консьєрж-сервіс</h3>
//         <p>
//           Цілодобова підтримка з будь-якими питаннями, будь то бронювання
//           готелів або пошук кращих турів і товарів.
//         </p>
//       </li>
//       <li>
//         <h3>Допомога в дорозі</h3>
//         <p>
//           Закінчився запас палива? Потрібно поміняти колесо або зарядити
//           акумулятор? Дайте нам знати і наші фахівці приїдуть і допоможуть
//           вам.
//         </p>
//       </li>
//     </ul>
//   </main>
// );
