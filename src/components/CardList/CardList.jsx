import React from 'react';
import Card from '../Card/Card';
import { List, ListItem, SectionContainer } from './Card.List.styled';

const CardList = ({ cars }) => {
  return (
    <>
      <SectionContainer>
        <List>
          {cars.map(car => (
            <ListItem>
              <Card
                model={car.model}
                make={car.make}
                year={car.year}
                rentalPrice={car.rentalPrice}
                isFavorite={car.isFavorite}
                address={car.address}
                rentalCompany={car.rentalCompany}
                functionalities={car.functionalities}
                id={car.id}
                type={car.type}
                img={car?.img}
                fuelConsumption={car.fuelConsumption}
                engineSize={car.engineSize}
                description={car.description}
                accessories={car.accessories}
                rentalConditions={car.rentalConditions}
                mileage={car.mileage}
              />
            </ListItem>
          ))}
        </List>
      </SectionContainer>
    </>
  );
};

export default CardList;
