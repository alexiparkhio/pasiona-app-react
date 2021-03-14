import React, { useEffect } from "react";
import { NewCard, Card, Container, LoadingSpinner } from "./components";
import { connect } from "react-redux";
import { cardsOperations } from "./redux/ducks/cards";

const {
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData
} = cardsOperations;

const App = ({
  cardsState: { isLoading, data },
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData,
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getCardsData() }, []);

  const newCardHandler = (title, description) => postCardData({ title, description });
  const updateCardHandler = (cardId, title, description) => patchCardData(cardId, { title, description });
  const deleteCardHandler = cardId => deleteCardData(cardId);

  return (
    <>
      <Container>
        {isLoading ? (<>
          <LoadingSpinner />
        </>) : (<>
          {data?.data?.length ? data.data.map(({ id, title, description, created, updated }) => (<Card key={title} cardId={id} title={title} description={description} created={created} updated={updated} onDelete={deleteCardHandler} onUpdate={updateCardHandler} />))
            :
            (<></>)}
          <NewCard onSubmit={newCardHandler} />
        </>)}
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
