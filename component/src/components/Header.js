import React,  {Component} from 'react';

class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-inverse">
        	<div className="container-fluid">
        		<a className="navbar-brand">Component</a>
        		<ul className="nav navbar-nav">
        			<li>
        				<a>Trang chủ</a>
        			</li>
        			<li className="active">
        				<a>Danh mục sản </a>
        			</li>
        		</ul>
        	</div>
        </nav>
    );
  }
}

export default Header;
