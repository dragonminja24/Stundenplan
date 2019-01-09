import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Bachelor Informatik" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
      this.props.changeStudiengang(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Studiengang:
          <div className="select-wrapper">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Bachelor Informatik">Bachelor Informatik</option>
              <option value="Bachelor Wirtschaftsinformatik">
                Bachelor Wirtschaftsinformatik
              </option>
              <option value="Master Autonomous Systems">
                Master Autonomous Systems
              </option>
              <option value="Master CSN">Master CSN</option>
            </select>
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
