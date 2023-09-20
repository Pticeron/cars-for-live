import React from 'react';
import Container from "components/Container/Container";
import { FilterSection } from "components/Filter/Filter";
import { useSelector } from "react-redux";

const Favorites =  ({ data }) => {
const favorite = useSelector(state => state.favorite);
const favoriteCars = data.filter(car => favorite.includes(car.id));
return (
    <>
        <Container>
            <FilterSection data={favoriteCars} />
        </Container>
    </>
)
}

export default Favorites;
