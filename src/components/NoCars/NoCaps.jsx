import { NoFollowImg, NoFollowText, SectionContainer } from "./NoCars.styled";
import cars from '../../images/cars.jpg';


const NoCars = () => {
return (
    <SectionContainer>
        <NoFollowText>No cars available</NoFollowText>
        <NoFollowImg src={cars} alt="Car parking" />
    </SectionContainer>
)
}

export default NoCars;