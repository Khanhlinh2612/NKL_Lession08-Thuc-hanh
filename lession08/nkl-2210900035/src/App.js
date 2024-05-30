import React, { Component } from 'react';
import NklListTasks from './components/NklListTasks';
import NklTaskAdd from './components/NklTaskAdd';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { nkl_taskId: 1, nkl_taskName: "Học lập trình frontend", nkl_level: "Small" },
        { nkl_taskId: 2, nkl_taskName: "Học lập trình reactjs", nkl_level: "Medium" },
        { nkl_taskId: 3, nkl_taskName: "Lập trình với Frontend - Reactjs", nkl_level: "High" },
        { nkl_taskId: 4, nkl_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", nkl_level: "Small" },
      ]
    }
  }

  nklHandldSumit = (param) => {
    console.log("App:", param);
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  }

  onUpdate = (updatedProducts) => {
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div className='container border mt-5'>
        <h1>nkl-2210900035</h1>
        <hr />
        <NklListTasks renderProducts={this.state.products} onUpdate={this.onUpdate} />
        <hr />
        <NklTaskAdd onSummit={this.nklHandldSumit} />
      </div>
    )
  }
}
