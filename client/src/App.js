import React from 'react';
import { connect } from 'react-redux';
import { cardsOperations } from './redux/ducks/cards';

const { getCardsData } = cardsOperations;

const App = ({ cardsState, getCardsData }) => {
  return (
    <div className="App">
      <button onClick={() => getCardsData()}>Press me</button>

    </div>
  );
}

const mapStateToProps = ({ cardsState }) => ({ cardsState });
const mapDispatchToProps = { getCardsData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
