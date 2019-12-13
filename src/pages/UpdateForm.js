import React from 'react';

class UpdateForm extends React.Component {
  state = {
    name: "",
    job: "",
    id: "",
    data: "",
    alertn: "",
    alertj: "",
    alerti: ""
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = `https://reqres.in/api/users/${this.state.id}`;
    const data = {
      name: this.state.name,
      job: this.state.job
    }

    try {
     fetch(url, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        console.error('Response:', res);


        if(this.state.name || this.state.job || this.state.id){
         this.setState({data: res})
         this.setState({alertn: ""})
         this.setState({alertj: ""})
         this.setState({alerti: ""})
        }
        if(this.state.job=="" || this.state.name=="" || this.state.id == ""){
          this.setState({data: ""})
        }
        if(this.state.name == ""){
          this.setState({alertn: <div className="alert alert-danger">Please Enter Name</div>})
        }
        if(this.state.job == ""){
          this.setState({alertj: <div className="alert alert-danger">Please Enter Job</div>})
        }
        if(this.state.id == ""){
          this.setState({alerti: <div className="alert alert-danger">Please Enter Id</div>})
        }
        
      })
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {
    if(this.state.data){
        var data1 = <tr>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.job}</td>
        <td>{this.state.data.updatedAt}</td>
        </tr>
    }else{
        data1 = ""
    }

    return (
  
<div className="container">
<form onSubmit={this.handleSubmit} className="maxw-700 mrtb-100">
<fieldset>
<legend>Update Form</legend>
<input type="number" name="id" className="form-control" placeholder="Your Id" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })}/>
{this.state.alerti}  
<input type="text" name="name" className="form-control" placeholder="Your Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
{this.state.alertn}
<input type="text" name="job" className="form-control" placeholder="Your Job" value={this.state.job} onChange={(e) => this.setState({ job: e.target.value })}/>
{this.state.alertj}
<button className="btn btn-primary" type="submit">Update Data</button>
</fieldset>
<br/>
<table>
  <tr><th>Name</th><th>Job</th><th>Updated at</th></tr>
  {data1}
</table>
</form>

</div>

    );
  }

}

export default UpdateForm;
