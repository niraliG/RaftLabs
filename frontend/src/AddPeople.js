import React, { Component } from "react";

class AddPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const val = event.target.value;
    console.log(val);
    this.setState({ name: val });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/api/people`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json()
      alert("people added");
      this.props.history.push("/viewpeople");
    })
    .then(data=>{this.setState({data})
  console.log(this.state.name)})
  }

  render() {
    return (
      <div className="addpeople">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit" name="submit">
            Add person
          </button>
        </form>
      </div>
    );
  }
}
export default AddPeople;
