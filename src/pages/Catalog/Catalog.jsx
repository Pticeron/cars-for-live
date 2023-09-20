import BtnToTop from "components/Buttons/BtnToTop";
import Container from "components/Container/Container";
import { FilterSection } from "components/Filter/Filter";

const Catalog = ({data}) => {
  
  return(
    <>
       <BtnToTop />
       <Container>
        <FilterSection data={data}/>
       </Container>
    </>
  )
};

export default Catalog;

