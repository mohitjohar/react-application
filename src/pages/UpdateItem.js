import React, { Component } from 'react';
class UpdateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [42, 33, 68],
	  nvalue: '',
	  uvalue: ''
    };
    if(localStorage.token){

    }else{
      this.props.history.push('/login')
    }
  }
  onUpdateItems = () => {
    const a = this.state.nvalue;
	const b = this.state.uvalue;
	this.setState(state => {
		this.state.list[a] = b;
	});
	return true;

  };
  render() {
    return (
      <div class="container">
	  
        <ul class="names-ul">
          {this.state.list.map(item => (
            <li key={item}>The person is {item} years old.
			       
			</li>
          ))}
        </ul>
<form class="update-form">
		<div className="form-group"><input type="text"
		className="form-control"
		placeholder="Enter value witch you  have to Update" 
		value={this.state.nvalue}
		onChange={(e) => this.setState({ nvalue: e.target.value })}
		/></div>
		
		<div className="form-group"><input type="text"
		className="form-control"
		placeholder="Enter value to Update" 
		value={this.state.uvalue}
		onChange={(e) => this.setState({ uvalue: e.target.value })}
		/></div>
        <div className="form-group"><button type="button" class="btn btn-primary" onClick={this.onUpdateItems}>
          Update
        </button></div>
</form>
      </div>
    );
  }
}
export default UpdateItem;