import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND}/api/gettags`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ tags: result }));
  }
  render() {
    const tags = this.state.tags;
    return (
      <>
        <div className="jumbotron">
          <div className="container" style={{ marginTop: "15px" }}>
            <h1>A relationship builder app</h1>
            <h2>Add people to get started..</h2>

            <Link
              className="btn btn-primary btn-lg "
              style={{ marginLeft: "5px", marginTop: "10px" }}
              to="/addpeople"
            >
              Add People
            </Link>
            <Link
              className="btn btn-primary btn-lg"
              style={{ marginLeft: "10px", marginTop: "10px" }}
              to="/viewpeople"
            >
              View People
            </Link>
          </div>
        </div>
        <div className="jumbotron">
          <div className="container" style={{ marginTop: "15px" }}>
            <h3>Available tags in the system are : </h3>
            {tags.map((t, index) => (
              <li key={index}>{t.tagName}</li>
            ))}
            <h4>To add more relationship tags, click below button</h4>
            <Link
              className="btn btn-primary btn-lg"
              style={{ "margin-left": "2px" }}
              to="/addtags"
              style={{ marginLeft: "5px", marginTop: "10px" }}
            >
              Add Tag
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
