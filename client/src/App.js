import React from "react";
import { Button, Card, Container } from "./components";
import { connect } from "react-redux";
import { cardsOperations } from "./redux/ducks/cards";

const {
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData,
} = cardsOperations;

const App = ({
  cardsState,
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData,
}) => {
  return (
    <>
      <Container>
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
        <Card title="Example title" description="lorem ipsum dude" />
      </Container>
    </>
  );
};

const mapStateToProps = ({ cardsState }) => ({ cardsState });
const mapDispatchToProps = {
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
