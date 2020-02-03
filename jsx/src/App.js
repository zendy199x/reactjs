import React, {Component} from 'react';
import './App.css';

class App extends Component {

  showInfoProduct(product) {
    if(product.status) {
      return <h3>
                ID: { product.id} <br/>
                Name: { product.name } <br/>
                Price: { product.price} VND <br/>
                Status: { product.status ? 'Active' : 'Pending' }
            </h3>
    }
  }

  render() {
    var a = 5;
    var name = 'ducnv';
    var b = 7;
    var product = {
      id: 1,
      name: 'iPhone XS Max',
      price: 19000000,
      status: true
    }

    var users = [
      {
        id: 1,
        name: 'Nguyen Van Duc',
        age: 32
      },
      {
        id: 2,
        name: 'Nguyen Van Thuat',
        age: 37
      },
      {
        id: 3,
        name: 'Tran Thi Nguyet',
        age: 34
      }
    ];
    var elements = users.map((user, index) => {
      return  <div key={ user.id }>
                  <h2>Tên: { user.name } </h2>
                  <p>Tuổi: { user.age } </p>
              </div>
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a>Home</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="ml-30">
          <h2>
            a: { a } <br/>
            b: { b } <br/>
            a + b = { a + b }
          </h2>
          <h2>
            name: { name }
          </h2>
          { this.showInfoProduct(product)}
          <br/>
          <hr/>
          { elements }
        </div>
      </div>
      );
  }
}

export default App;
