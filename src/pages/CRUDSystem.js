import React, { Component } from 'react';

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
        <div class="main">
          <div class="container maxw-700">
            <form>
              <div className="form-group">
                <label id="iss">Person Name: {this.state.pname} </label>
                <input
                  type="text"
                  placeholder="Enter Person Name"
                  className="form-control"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add Name"
                  className="btn btn-primary"
                  onClick={this.onAddItem}
                  disabled={!this.state.value}
                />
              </div>
            </form>
            <ul class="names-ul">
              {this.state.list.map((item, index) => (
                <li key={item}>
                  {item}
                  <button
                    class="crs-btn"
                    index={index}
                    onClick={() => this.onRemoveItem(index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default CRUDSystem;
