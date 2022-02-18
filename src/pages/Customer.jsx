import { NavBar, CustomerDetailsCard } from "../components";
import { Container } from "react-bootstrap";

const Customer = () => {
  return (
    <>
      <Container fluid>
        <NavBar />
        <CustomerDetailsCard />
      </Container>
    </>
  );
};

export default Customer;
