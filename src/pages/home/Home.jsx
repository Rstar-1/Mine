import React from "react";
import Container from "../../utility/Container";
import Patch from "./components/Patch";

const Home = () => {
  return (
    <>
      <Container status={true} version="v1" style="py-40 w-full">
        <Patch />
      </Container>
    </>
  );
};

export default Home;
