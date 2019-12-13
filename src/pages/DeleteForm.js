import React from 'react';

class DeleteForm extends React.Component {
  state = {
    id: '',
    alert: ""
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = `https://reqres.in/api/users/${this.state.id}`;

    try {
     fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        console.log(res.status)
        if(res.status == 204){
          this.setState({alert: <div className="alert alert-success">Data Deleted</div>})
        }
      })
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {

    return (
  
<div className="container">
<form onSubmit={this.handleSubmit} className="maxw-700 mrtb-100">
{this.state.alert}
<fieldset>
<legend>Delete Form</legend>
<input type="number" name="name" className="form-control" placeholder="Enter id" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })}/>
<button className="btn btn-danger" type="submit">Delete Data</button>
</fieldset>
</form>
</div>

    );
  }

}

export default DeleteForm;
