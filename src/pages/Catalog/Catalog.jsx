import { useSearchParams } from "react-router-dom";
import { ProductList } from "../../components/ProductList/ProductList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { getCars } from "../../fake.API";

const Catalog = () => {
  const car = getCars();
  const [searchParams, setSearchParams] = useSearchParams();
  const carName = searchParams.get("name") ?? "";

  const visibleCars = car.filter((car) =>
    car.name.toLowerCase().includes(carName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={carName} onChange={updateQueryString} />
      <ProductList products={visibleCars} />
    </main>
  );
};

export default Catalog;

