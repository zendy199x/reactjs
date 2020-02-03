import React,  {Component} from 'react';

class Product extends Component {

    render() {
      return (
      	<div>
       		 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        		<div className="thumbnail">
        			<img alt="iphone 6" src="https://cdn.fptshop.com.vn/Uploads/Originals/2016/1/4/635874987873313312_iphone-6-silver-5.jpg"/>
        			<div className="caption">
        				<h3>iPhone 6 Plus</h3>
        				<p>
        					9.000.000
        				</p>
        			</div>
        		</div>
        		<button type="button" className="btn btn-sucess">Mua hàng</button>
       		 </div>
   		 </div>
    );
  }
}

export default Product;
