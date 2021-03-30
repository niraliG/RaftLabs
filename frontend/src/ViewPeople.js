import { React, Component } from "react";
import { Link } from "react-router-dom";
class ViewPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked : false,
      checkedCount : 0,
      people : []
    }
    this.handleCheckboxOnChange = this.handleCheckboxOnChange.bind(this);
  }

  componentDidMount(){
    fetch(`${process.env.REACT_APP_BACKEND}/api/getpeople`,{
      method : 'GET',
    })
      .then(res=>res.json())
        .then(result=>
          this.setState({people: result})
        )
  }
  handleCheckboxOnChange(){
    this.setState(initialState=>({isChecked : !initialState.isChecked},{checkedCount: this.state.checkedCount+1})
    )}
  render() {
    const checkedValue = this.state.checkedCount;
    if(checkedValue==2)
    alert('You selected two people');
    const people = this.state.people;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">People</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((ppl, index)=>(
              <tr key={index}>
                <td>
                <input type="checkbox" onChange={this.handleCheckboxOnChange} style={{"marginRight":"5px"}} />
                  {ppl.name}</td>
                <td><Link className="btn btn-primary" to={"/addrelationship/"+ppl._id}>Add Relationship</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Link className="btn btn-primary btn-lg" style={{"marginLeft":"10px"}} to="/">Back to home</Link>
          </div>
      </div>
    );
  }
}


export default ViewPeople;