import React, { Component } from 'react';
import Header from '../../components/Header';

class CRUDSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ['Mohit', 'Aman', 'Lakhwinder']
    };

    if (localStorage.token) {
    } else {
      this.props.history.push('/login');
    }
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    // not allowed AND not working
    this.setState(state => {
      const list = state.list.concat(state.value);
      return {
        list,
        value: ''
      };
    });
  };

  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list
      };
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <form>
                <div className="form-group mb-3">
                  <label id="iss">Person Name: {this.state.pname} </label>
                  <input
                    type="text"
                    placeholder="Enter Person Name"
                    className="form-control"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="submit"
                    value="Add Name"
                    className="btn btn-primary"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                  />
                </div>
              </form>
              <div className="names-ul">
                {this.state.list.map((item, index) => (
                  <div
                    key={item}
                    className="px-3 py-2 m-2 text-light rounded position-relative bg-primary d-inline-block"
                  >
                    {item}
                    <button
                      className="crose-btn bg-danger border-0"
                      index={index}
                      onClick={() => this.onRemoveItem(index)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CRUDSystem;
