import React, { Component } from 'react';
import formatNumber from 'format-number';
import { store } from './store';
import photographer from './images/girl.png';
import action from './actions';
import './styles/index.css';
import './styles/App.css';

class App extends Component {
  handleBalance = e => {
    const { amount } = e.target.dataset;
    store.dispatch(action(+amount));
  };

  render() {
    return (
      <div className="App">
        <img
          className="App__userpic"
          src="https://image.flaticon.com/icons/png/512/57/57134.png"
          alt="user"
        />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: '$' })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.handleBalance}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={this.handleBalance}>
            WITHDRAW $5,000
          </button>
        </section>
      </div>
    );
  }
}

export default App;
