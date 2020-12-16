import React from 'react';
import './App.css';
import Form from './components/Form';
import Joke from './components/Joke';

const initialState = {
  joke: undefined,
  error: undefined
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  getJoke = async (e) => {
    e.preventDefault();
    const category = e.target.elements.category.value;
    const api_call = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await api_call.json();
    if (!category) {
      this.setState({
        error: 'please select a category'
      });
    } else {
      this.setState({
        joke: data.value,
        error: ''
      });
    }
  }

  render() {
    const {joke, error} = this.state;
    return(
      <div>
        <Form getJoke={this.getJoke} />
        <Joke joke={joke} error={error} />
      </div>
    );
  }
};

export default App;
