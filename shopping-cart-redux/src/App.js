import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
                <li>
                    <div className="logo-wrapper waves-light waves-effect waves-light">
                        <a>
                            <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                        </a>
                    </div>
                </li>
                <li>
                    <ul className="social">
                        <li>
                            <a className="icons-sm fb-ic">
                                <i className="fa fa-facebook"> </i>
                            </a>
                        </li>
                        <li>
                            <a className="icons-sm pin-ic">
                                <i className="fa fa-pinterest"> </i>
                            </a>
                        </li>
                        <li>
                            <a className="icons-sm gplus-ic">
                                <i className="fa fa-google-plus"> </i>
                            </a>
                        </li>
                        <li>
                            <a className="icons-sm tw-ic">
                                <i className="fa fa-twitter"> </i>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <form classNameName="search-form" role="search">
                        <div classNameName="form-group waves-light waves-effect waves-light">
                            <input type="text" classNameName="form-control" placeholder="Search" />
                        </div>
                    </form>
                </li>
                <li>

                    <ul className="collapsible collapsible-accordion">
                        <li>
                            <a className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-shopping-bag"></i> Product Page
                                <i className="fa fa-angle-down rotate-icon"></i>
                            </a>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="product.html" className="waves-effect">Product Page V.1</a>
                                    </li>
                                    <li>
                                        <a href="product-page.html" className="waves-effect">Product Page V.2</a>
                                    </li>
                                    <li>
                                        <a href="product-page-4.html" className="waves-effect">Product Page V.3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="active">
                            <a className="collapsible-header waves-effect arrow-r active">
                                <i className="fa fa-shopping-cart"></i> Cart Pages
                                <i className="fa fa-angle-down rotate-icon"></i>
                            </a>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="cart.html" className="waves-effect">Page with shopping cart</a>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="waves-effect">Page with contact form</a>
                                    </li>
                                    <li>
                                        <a href="contact-2.html" className="waves-effect">Page with contact form V.2</a>
                                    </li>
                                    <li>
                                        <a href="login.html" className="waves-effect">Page with sign in form</a>
                                    </li>
                                    <li>
                                        <a href="terms.html" className="waves-effect">Page with 'terms of use'</a>
                                    </li>
                                    <li>
                                        <a href="faq.html" className="waves-effect">Page with 'FAQ'</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-dashboard"></i> Homepages
                                <i className="fa fa-angle-down rotate-icon"></i>
                            </a>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="home-page.html" className="waves-effect">Ecommerce homepage default</a>
                                    </li>
                                    <li>
                                        <a href="home-page-2.html" className="waves-effect">Ecommerce homepage full width</a>
                                    </li>
                                    <li>
                                        <a href="home-page-3-carousel.html" className="waves-effect">Ecommerce homepage V.3 Carousel</a>
                                    </li>
                                    <li>
                                        <a href="home-page-3-full-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</a>
                                    </li>
                                    <li>
                                        <a href="home-page-3-half-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</a>
                                    </li>
                                    <li>
                                        <a href="home-page-4.html" className="waves-effect">Ecommerce homepage V.4</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-desktop"></i> Post Pages
                                <i className="fa fa-angle-down rotate-icon"></i>
                            </a>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="post.html" className="waves-effect">Page with column on the right</a>
                                    </li>
                                    <li>
                                        <a href="blog-post-left-column.html" className="waves-effect">Page with newsletter on the left</a>
                                    </li>
                                    <li>
                                        <a href="blog-post.html" className="waves-effect">Page with newsletter on the right</a>
                                    </li>
                                    <li>
                                        <a href="blog-post-full-width.html" className="waves-effect">Full width page with logged user</a>
                                    </li>
                                    <li>
                                        <a href="blog-post-full-width%20not%20logged%20in%20user.html" className="waves-effect">Full width page with not logged user</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-diamond"></i> Category Pages
                                <i className="fa fa-angle-down rotate-icon"></i>
                            </a>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="category-list-left-column.html" className="waves-effect">Category list with left column</a>
                                    </li>
                                    <li>
                                        <a href="category-list-right-column.html" className="waves-effect">Category list with right column</a>
                                    </li>
                                    <li>
                                        <a href="category-grid-left-column.html" className="waves-effect">Category grid with left column</a>
                                    </li>
                                    <li>
                                        <a href="category-right-column.html" className="waves-effect">Category grid with right column</a>
                                    </li>
                                    <li>
                                        <a href="category-grid-left-column-carousel.html" className="waves-effect">Category grid with left column carousel</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </li>

                <div className="sidenav-bg mask-strong"></div>

                <div className="ps__scrollbar-x-rail">
                    <div className="ps__scrollbar-x" tabIndex="0"></div>
                </div>
                <div className="ps__scrollbar-y-rail">
                    <div className="ps__scrollbar-y" tabIndex="0"></div>
                </div>
            </ul>

            <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                <div className="float-left">
                    <a data-activates="slide-out" className="button-collapse">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>

                <div className="breadcrumb-dn mr-auto">
                    <ol className="breadcrumb header-breadcrumb">
                        <li className="breadcrumb-item">
                            <a>Trang Chủ</a>
                        </li>
                    </ol>
                </div>

                <ul className="nav navbar-nav nav-flex-icons ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fa fa-user"></i> Tài Khoản</a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                            <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                            <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                        </div>
                    </li>
                </ul>

            </nav>

        </header>
        <main id="mainContainer">
            <div className="container">
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>Iphone 6 Plus</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <p className="card-text">
                                        Sản phẩm do apply sản xuất
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">15$</span>
                                        <span className="right">
                                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h3>
                    <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
                </h3>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                            alt="" className="img-fluid z-depth-0" />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>Iphone 6 Plus</strong>
                                        </h5>
                                    </td>
                                    <td>15$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty">1 </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a>—</a>
                                            </label>
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a>+</a>
                                            </label>
                                        </div>
                                    </td>
                                    <td>15$</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                            title="" data-original-title="Remove item">
                                            X
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>
                                        <h4>
                                            <strong>Tổng Tiền</strong>
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            <strong>15$</strong>
                                        </h4>
                                    </td>
                                    <td colSpan="3">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
        <footer className="page-footer center-on-small-only">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 ml-auto">
                        <h5 className="title social-section-title">Social Media</h5>
                        <div className="social-section text-md-left">
                            <ul className="text-center">
                                <li>
                                    <a className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-ins waves-effect waves-light">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-tw waves-effect waves-light">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-yt waves-effect waves-light">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-li waves-effect waves-light">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-dribbble waves-effect waves-light">
                                        <i className="fa fa-dribbble left"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-pin waves-effect waves-light">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-gplus waves-effect waves-light">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Delivery</h5>
                        <ul>
                            <li>
                                <a>Store Delivery</a>
                            </li>
                            <li>
                                <a>Online Delivery</a>
                            </li>
                            <li>
                                <a>Delivery Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a>Tracking</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Need help?</h5>
                        <ul>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                            <li>
                                <a>Return Policy</a>
                            </li>
                            <li>
                                <a>Product Registration</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-4">
                        <h5 className="title">Instagram Photos</h5>
                        <ul className="instagram-photos">
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2016 Copyright:
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                </div>
            </div>
        </footer>
        </div>
    );
  }
}

export default App;