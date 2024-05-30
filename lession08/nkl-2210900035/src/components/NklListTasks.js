import React, { Component } from 'react';

export default class NklListTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingIndex: null,
      newTask: {
        nkl_taskId: '',
        nkl_taskName: '',
        nkl_level: ''
      }
    }
  }

  handleEdit = (index) => {
    this.setState({ editingIndex: index, newTask: { ...this.props.renderProducts[index] } });
  }

  handleSave = () => {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    // Validate the new task data
    if (!newTask.nkl_taskId || !newTask.nkl_taskName || !newTask.nkl_level) {
      alert('Please fill in all the fields.');
      return;
    }

    // Update the existing task
    renderProducts[editingIndex] = { ...newTask };
    this.setState({ editingIndex: null, newTask: { nkl_taskId: '', nkl_taskName: '', nkl_level: '' } });
    this.props.onUpdate(renderProducts);
  }

  handleCancel = () => {
    this.setState({ editingIndex: null, newTask: { nkl_taskId: '', nkl_taskName: '', nkl_level: '' } });
  }

  handleDelete = (index) => {
    let { renderProducts } = this.props;
    renderProducts.splice(index, 1);
    this.props.onUpdate(renderProducts);
  }

  handleInputChange = (e) => {
    this.setState({ newTask: { ...this.state.newTask, [e.target.name]: e.target.value } });
  }

  render() {
    let { renderProducts } = this.props;
    let { editingIndex, newTask } = this.state;

    let elementProduct = renderProducts.map((item, index) => {
      if (index === editingIndex) {
        return (
          <tr key={index}>
            <td><input type="text" name="nkl_taskId" value={newTask.nkl_taskId} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="nkl_taskName" value={newTask.nkl_taskName} onChange={this.handleInputChange} /></td>
            <td><input type="text" name="nkl_level" value={newTask.nkl_level} onChange={this.handleInputChange} /></td>
            <td>
              <button onClick={this.handleSave}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td>{item.nkl_taskId}</td>
            <td>{item.nkl_taskName}</td>
            <td>{item.nkl_level}</td>
            <td>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </td>
          </tr>
        );
      }
    });

    return (
      <div>
        <h2>Danh sách lớp học</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>nkl_taskId</th>
              <th>nkl_taskName</th>
              <th>nkl_level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    )
  }
}
