import React from 'react';

class DeleteForm extends React.Component {
  state = {
    id: '',
    alert: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = `https://reqres.in/api/users/${this.state.id}`;
    document.confirm('Do you want do delete this item');
    try {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res.status);
        if (res.status == 204) {
          this.setState({
            alert: <div className="alert alert-success">Data Deleted</div>
          });
          alert('data deleted');
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-style-5">
          {this.state.alert}
          <fieldset>
            <legend>Delete Form</legend>
            <input
              type="number"
              name="name"
              placeholder="Enter id"
              value={this.state.id}
              onChange={e => this.setState({ id: e.target.value })}
            />
            <button className="btn" type="submit">
              Delete Data
            </button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default DeleteForm;
