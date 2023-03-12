import React from "react";
import { Image } from "@components/ui";

import shoe from "@images/running-shoes.png";

const HugeBanner = () => {
	return (
		<div className="banner_section">
			<div className="container-fluid">
				<section className="slide-wrapper">
					<div className="container-fluid">
						<div className="huge-banner__img position-absolute top-0 start-0">
							{/*<Image src={BgBanner} className="w-inherit" />*/}
						</div>
						<div
							id="myCarousel"
							className="carousel slide"
							data-ride="carousel"
						>
							<ol className="carousel-indicators">
								<li
									data-target="#myCarousel"
									data-slide-to="0"
									className="active"
								></li>
								<li
									data-target="#myCarousel"
									data-slide-to="1"
								></li>
								<li
									data-target="#myCarousel"
									data-slide-to="2"
								></li>
								<li
									data-target="#myCarousel"
									data-slide-to="3"
								></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="row">
										<div className="col-sm-5">
											<div className="banner_taital">
												<h1 className="banner_text">
													New Running Shoes{" "}
												</h1>
												<h1 className="mens_text">
													<strong>
														Men's Like Plex
													</strong>
												</h1>
												<p className="lorem_text">
													ipsum dolor sit amet,
													consectetur adipiscing elit,
													sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua.
												</p>
												<button className="buy_bt">
													Buy Now
												</button>
												<button className="more_bt">
													See More
												</button>
											</div>
										</div>
										<div className="col-sm-5">
											<div className="shoes_img">
												<Image src={shoe.src} />
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-sm-2 padding_0">
											<p className="mens_taital">
												Men Shoes
											</p>
											<div className="page_no">0/2</div>
											<p className="mens_taital_2">
												Men Shoes
											</p>
										</div>
										<div className="col-sm-5">
											<div className="banner_taital">
												<h1 className="banner_text">
													New Running Shoes{" "}
												</h1>
												<h1 className="mens_text">
													<strong>
														Men's Like Plex
													</strong>
												</h1>
												<p className="lorem_text">
													ipsum dolor sit amet,
													consectetur adipiscing elit,
													sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua.
												</p>
												<button className="buy_bt">
													Buy Now
												</button>
												<button className="more_bt">
													See More
												</button>
											</div>
										</div>
										<div className="col-sm-5">
											<div className="shoes_img">
												<Image src={shoe.src} />
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-sm-2 padding_0">
											<p className="mens_taital">
												Men Shoes
											</p>
											<div className="page_no">0/2</div>
											<p className="mens_taital_2">
												Men Shoes
											</p>
										</div>
										<div className="col-sm-5">
											<div className="banner_taital">
												<h1 className="banner_text">
													New Running Shoes{" "}
												</h1>
												<h1 className="mens_text">
													<strong>
														Men's Like Plex
													</strong>
												</h1>
												<p className="lorem_text">
													ipsum dolor sit amet,
													consectetur adipiscing elit,
													sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua.
												</p>
												<button className="buy_bt">
													Buy Now
												</button>
												<button className="more_bt">
													See More
												</button>
											</div>
										</div>
										<div className="col-sm-5">
											<div className="shoes_img">
												<Image src={shoe.src} />
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-sm-2 padding_0">
											<p className="mens_taital">
												Men Shoes
											</p>
											<div className="page_no">0/2</div>
											<p className="mens_taital_2">
												Men Shoes
											</p>
										</div>
										<div className="col-sm-5">
											<div className="banner_taital">
												<h1 className="banner_text">
													New Running Shoes{" "}
												</h1>
												<h1 className="mens_text">
													<strong>
														Men's Like Plex
													</strong>
												</h1>
												<p className="lorem_text">
													ipsum dolor sit amet,
													consectetur adipiscing elit,
													sed do eiusmod tempor
													incididunt ut labore et
													dolore magna aliqua.
												</p>
												<button className="buy_bt">
													Buy Now
												</button>
												<button className="more_bt">
													See More
												</button>
											</div>
										</div>
										<div className="col-sm-5">
											<div className="shoes_img">
												<Image src={shoe.src} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default HugeBanner;
