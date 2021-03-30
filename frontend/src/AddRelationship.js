import { React, Component } from "react";
class AddRelationship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      people: [],
      tags: [],
      relationship: {
        firstPerson : "",
        secondPerson : "",
        tagId : ""
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    const id = this.props.match.params.id;
    //fetching selected person
    fetch(`${process.env.REACT_APP_BACKEND}/api/getpeoplebyid/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ person: result }));
    //fetching people
    fetch(`${process.env.REACT_APP_BACKEND}/api/getpeople`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ people: result });
      });
    //fectching tags
    fetch(`${process.env.REACT_APP_BACKEND}/api/gettags`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => this.setState({ tags: result }));
  }

  
  handleChange(event){
    const tagID = event.target.tagId._id;
    this.setState({relationship : {secondPerson: event.target.secondPerson.value}},{relationship:{tagId :tagID}})
    // console.log({relationship : {secondPerson: event.target.secondPerson.value}},{relationship:{tagId :tagID}});
  }

  handleSubmit(event) {
    this.setState({relationship:{firstPerson:this.state.person.name}})
    console.log(this.state.relationship.firstPerson);
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/api/addrelationship`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(this.state.relationship)
    })
    .then((res) => {
      res.json()
      alert("relationship added");
      this.props.history.push("/viewpeople");
    })
    .then(data=>{this.setState({relationship:data})
  })
  }
  render() {
    const selectedPerson = this.state.person.name;
    const people = this.state.people;
    const filteredPeople = people.filter((p) => p.name !== selectedPerson);
    const tags = this.state.tags;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h1>Add Relationship</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container" style={{ marginTop: "20px" }}>
            <div className="form-group row">
              <div className="col-xs-4">
                <label>First person name: </label>
                <input
                  id="firstName" type="text"className="form-control"name="firstName" value={selectedPerson}readOnly="readonly"
                  
                />
              </div>
            </div>
            <div className="form-group row">
              <label>Select the second person to add relationship</label>
              <select className="form-control" id="secondPerson" name="secondPerson"
              //  onChange={this.handleChange}
               >
                {filteredPeople.map((p, index) => (
                  <option key={index}>{p.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group row">
              <label>Select the relationship tag</label>
              <select className="form-control" id="tagId" name="tagId" 
              // onChange={this.handleChange}
              >
                {tags.map((t, index) => (
                  <option key={index}>{t.tagName}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary btn-lg" type="submit">
              Add Relationship
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRelationship;
