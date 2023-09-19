import HeroSection from 'components/Hero/Hero';
import {
  ContentWrapper,
  HomeSection,
  HomeTextMain,
  HomeTextSecondary,
  HomeWrapper,
} from './Home.styled';
import BtnToTop from 'components/Buttons/BtnToTop';

const Home = ({ data }) => {
  return (
    <>
      <BtnToTop />
      <HeroSection>
        <HomeSection>
          <HomeWrapper>
            <ContentWrapper>
              <HomeTextMain>
                У сучасному суспільстві такі цінності як час і комфорт все
                більше виходять на передній план, тому така послуга як оренда
                автомобіля – вже перестала бути розкішшю, а стала щоденною
                необхідністю. Залежно від ситуації покупка машини не завжди є
                доцільним вкладенням коштів. Наприклад, для гостей Києва в
                туристичних, або бізнес цілях найкращим рішенням буде подобовий
                прокат авто – це недорого для вирішення тимчасових питань. Для
                резидентів столиці дана послуга також буде корисна під
                здійснення різного роду поїздок по Україні: оренда авто на
                весілля, відпочинок, фотосесію або просто в розважальних цілях.
                Життя непередбачуване і ніколи не знаєш, в яких ситуаціях може
                терміново знадобиться прокат автомобіля. Для вирішення даної
                проблеми існує сервіс компанії CarForLive – послуги автопрокату.
                Ми пропонуємо взяти машину в оренду на найвигідніших умовах –
                від 18 $ на добу.
              </HomeTextMain>
              <HomeTextSecondary>
                In modern society, such values as time and comfort increasingly
                come to the fore, so a service such as car rental has ceased to
                be a luxury, but has become a daily necessity. Depending on the
                situation, buying a car is not always an appropriate investment.
                For example, for guests of Kyiv for tourist or business
                purposes, the best solution would be daily car rental - it is
                inexpensive to solve temporary issues. For residents of the
                capital, this service will also be useful for making various
                types of trips around Ukraine: renting a car for a wedding,
                vacation, photo shoot or just for entertainment purposes. Life
                is unpredictable and you never know in which situations you may
                urgently need a car rental. To solve this problem, there is a
                service of the CarForLive company - car rental services. We
                offer to rent a car on the most favorable terms - from $18 per
                day.
              </HomeTextSecondary>
            </ContentWrapper>
          </HomeWrapper>
        </HomeSection>
      </HeroSection>
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
