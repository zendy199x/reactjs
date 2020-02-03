import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <div>
          	<div className="row">
          		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          			<Product />
          		</div>
          		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          			<Product />
          		</div>
          	</div>
          </div>
        </div>
    );
  }
}

export default App;
