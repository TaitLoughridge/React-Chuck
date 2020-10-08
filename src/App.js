import React, { Component } from 'react';
import Quote from './components/Quote';
import './App.css';

class App extends Component {
  state = {
    quoteData: [],
  };

    loadData = async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      return data;
    }

      handleClick = async () => {
        const quoteData = await this.loadData();
    
          this.setState({
            quoteData: quoteData,
          });
      };
  
  async componentDidMount() {
    const quoteData = await this.loadData();
    
    this.setState({
      quoteData: quoteData,
    });
  }

  render() {
    const { quoteData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chuck Quote</h1>
        </header>
          <Quote quoteData={quoteData}/>
        <button onClick={this.handleClick}>More Quotes</button>
      </div>
    );
  }
}
export default App;
