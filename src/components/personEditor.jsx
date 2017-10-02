import React, { Component } from "react";

export default class PersonEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { personName: props.person && props.person.name };
  }
  nameEdited = newVal => {
    const { person } = this.props;
    person.name = newVal;
    this.setState({ personName: newVal });
  };
  render() {
    const { personName } = this.state;

    return (
      <div>
        <h3>Editing: {personName}</h3>
        <div>
          Name:{" "}
          <input
            type="text"
            onChange={evt => this.nameEdited(evt.target.value)}
            value={personName}
          />
        </div>
      </div>
    );
  }
}
