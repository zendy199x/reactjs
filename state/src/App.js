import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                id: 1,
                name: 'Apple iPhone XS Max',
                price: 29000000,
                image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
                status: true
            },
            {
                id: 2,
                name: 'Apple iPhone X',
                price: 19000000,
                image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
                status: true
            },
            {
                id: 3,
                name: 'Apple iPhone 8 Plus',
                price: 15000000,
                image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/20/636808956101668511_iphone8-plus-64-vang-1.png',
                status: true
                }
            ],
            isActive: true
        };
        // this.onSetSate = this.onSetSate.bind(this);
    }

    onSetSate = () => {
    //     if(this.state.isActive === true) {
    //         this.setState({
    //             isActive : false
    //         });
    //     }else {
    //         this.setState({
    //             isActive: true
    //         });
    //     }
    // }
    
    this.setState({
        isActive : !this.state.isActive
    });
}

render() {

    let elements = this.state.products.map((product, index) => {
        let result = '';
        if (product.status) {
            result =    <tr key = { index }>
                            <td>{ index }</td>
                            <td>{ product.name}</td>
                            <td>
                                <span className="label label-success">{ product.price }</span>
                            </td>
                        </tr>
        }
        return result
    });

    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand">State</a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                { elements }
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-success" onClick = { this.onSetSate }>
                            Active: { this.state.isActive === true ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}
export default App;
