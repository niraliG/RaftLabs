import React, { Component } from "react";
import {Link} from 'react-router-dom';
class AddTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
          addTag : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const val = event.target.value;
    console.log(val);
    this.setState({ tagName: val });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/api/addtag`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json()
      alert("tag added");
      this.props.history.push("/");
    })
    .then(data=>{this.setState({data})
  console.log(this.state.name)})
  }

  render() {
    return (
          <>
      <div className="container">
        <h3>Add Tags</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Tag Name: </label>
            <input
              id="tagName"
              type="text"
              name="tagName"
              value={this.state.tagName}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit" name="submit">
            Add tag
          </button>
          <Link style={{"marginLeft":"5px"}} className="btn btn-primary" to="/">Back to home</Link>
        </form>
        </div>
      
          
         
    
      </>
    );
  }
}

export default AddTags;
