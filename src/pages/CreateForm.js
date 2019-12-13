import React from 'react';

class CreateForm extends React.Component {
  state = {
    name: "",
    salary: "",
    age: "",
    data: "",
    alertn: "",
    alerts: "",
    alerta: ""
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'https://reqres.in/api/users';
    const data = {
      name: this.state.name,
      salary: this.state.salary
    }

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        console.log("Response:", res);

        if(this.state.name || this.state.salary){
          this.setState({data: res})
          this.setState({alertn: ""})
          this.setState({alerts: ""})
         }
         if(this.state.name=="" || this.state.salary==""){
           this.setState({data: ""})
         }
         if(this.state.name == ""){
           this.setState({alertn: <div className="alert alert-danger">Please Enter Name</div>})
         }
         if(this.state.salary == ""){
           this.setState({alerts: <div className="alert alert-danger">Please Enter Salary</div>})
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
<fieldset>
<legend> Create Form</legend>
  
<input type="text" name="name" placeholder="Your Name" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
{this.state.alertn}
<input type="number" name="job" placeholder="Your Salery" className="form-control" value={this.state.salary} onChange={(e) => this.setState({ salary: e.target.value })}/>
{this.state.alerts}
<button className="btn btn-primary" type="submit">Add Data</button>
</fieldset>
<br/>
<table>
  <tr><th>Id</th><th>Name</th><th>Salary</th><th>Created At</th></tr>
  <tr>
        <td>{this.state.data.id}</td>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.salary}</td>
        <td>{this.state.data.createdAt}</td>
        </tr>
</table>
</form>
</div>

    );
  }

}

export default CreateForm;
