import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/myComponent";
import PersonDetails from "./components/strategy";
import PersonEditor from "./components/personEditor";

import Person from "./models/person";

class App extends Component {
  constructor(props) {
    super(props);
    const employee = new Person();
    employee.type = "employee";
    employee.name = "John E. Smith";
    employee.belongsWith = "Jane Cooper";

    const client = new Person();
    client.type = "client";
    client.name = "Richard Ayoade";
    client.belongsWith = "John E. Smith";

    this.state = {
      employee: employee,
      client: client,
      showStandardHeader: false
    };
  }

  pokeHandler = person => {
    this.setState({ pokedPerson: person });
  };
  editHandler = person => {
    this.setState({ editPerson: person });
  };

  render() {
    const {
      employee,
      client,
      showStandardHeader,
      pokedPerson,
      editPerson
    } = this.state;

    return (
      <div className="App">
        {showStandardHeader && (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        )}
        {showStandardHeader ? (
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        ) : (
          <div>
            <PersonDetails
              person={employee}
              pokeHandler={this.pokeHandler}
              editHandler={this.editHandler}
            />
            <PersonDetails
              person={client}
              pokeHandler={this.pokeHandler}
              editHandler={this.editHandler}
            />
            {pokedPerson && <h1>{pokedPerson.name} was poked!</h1>}
            {editPerson && <PersonEditor person={editPerson} />}
            {[1, 2, 3, 4, 5].map(i => {
              const myNameIsEarl = "Earl";

              return (
                <MyComponent
                  key={i}
                  useYourImagination={`You know, the usual FooBar stuff. ${myNameIsEarl} Version: ${i}`}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
