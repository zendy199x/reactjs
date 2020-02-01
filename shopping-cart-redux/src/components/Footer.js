import React, {Component} from "react"

class Footer extends Component {
	render() {
		return (
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
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg"
											alt=""
										/>
										<a>
											<div className="mask waves-light waves-effect waves-light"></div>
										</a>
									</div>
								</li>
								<li>
									<div className="view overlay hm-white-slight z-depth-1">
										<img
											className="img-fluid"
											src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg"
											alt=""
										/>
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
		)
	}
}

export default Footer
