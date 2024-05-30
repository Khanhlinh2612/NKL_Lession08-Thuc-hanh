import React, { Component } from 'react';

export default class NklTaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nkl_taskId: 0,
      nkl_taskName: '',
      nkl_level: ''
    }
  }

  nklHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  nklHandleSubmit = (ev) => {
    console.log("Form2", this.state);
    ev.preventDefault();
    this.props.onSummit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Thêm mới lớp học</h2>
        <form className='col-md-6'>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">nkl_taskId</span>
            <input
              type="text"
              className="form-control"
              name='nkl_taskId'
              value={this.state.nkl_taskId}
              onChange={this.nklHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="t">nkl_taskName</span>
            <input
              type="text"
              className="form-control"
              name='nkl_taskName'
              value={this.state.nkl_taskName}
              onChange={this.nklHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="title">nkl_level</span>
            <input
              type="text"
              className="form-control"
              name='nkl_level'
              value={this.state.nkl_level}
              onChange={this.nklHandleChange}
            />
          </div>
          <button className='btn btn-success' onClick={this.nklHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
