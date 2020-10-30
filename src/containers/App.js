import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: {},
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://swapi.py4e.com/api/people/1/")
      .then((response) => response.json())
      .then((people) => {
        this.setState({ characters: people });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !characters.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Star Wars</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList characters={filteredCharacters} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;

/*const App = () => {
  return (
    <div className="tc">
      <h1>Star Wars Characters</h1>
      <SearchBox />
      <CardList characters={characters} />;
    </div>
  );
};
export default App;*/
