import React from 'react';
import { connect } from 'react-redux';
import { cardsOperations } from './redux/ducks/cards';

const {
  getCardsData,
  postCardData,
  patchCardData,
  deleteCardData
} = cardsOperations;

const App = ({ cardsState, getCardsData, postCardData, patchCardData, deleteCardData }) => {
  return (
    <div className="App">
      <button onClick={() => getCardsData()}>Get cards</button>
      <button onClick={() => postCardData({ title: 'lolaso', description: 'pruebalo puede que funcione' })}>Post a card</button>
      <button onClick={() => patchCardData('60491f8e351bcf2278e28390', { title: 'lmaaaaao' })}>Update a card</button>
      <button onClick={() => deleteCardData('60491f8e351bcf2278e28390')}>Delete card</button>
    </div>
  );
}

const mapStateToProps = ({ cardsState }) => ({ cardsState });
const mapDispatchToProps = { getCardsData, postCardData, patchCardData, deleteCardData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
