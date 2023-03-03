import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";

import { Links } from "@core/enums";

import Logo from "@images/Bootsy.svg";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-bg-1 d-flex align-items-center">
			<div className="container-xxl">
				<div className="logo">
					<Link
						className="navbar-brand d-flex align-items-center"
						to={Links.Home}
					>
						<Logo width="150" height="32" />
					</Link>
				</div>
				<div
					className="collapse navbar-collapse gap-5"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav w-100 d-flex justify-content-end gap-5 fs-6">
						<Link className="nav-item nav-link" to={Links.Home}>
							Home
						</Link>
						<Link className="nav-item nav-link" to={Links.Products}>
							Products
						</Link>
						<Link className="nav-item nav-link" to={Links.About}>
							About Us
						</Link>
						<Link className="nav-item nav-link" to={Links.Contacts}>
							Contacts
						</Link>
					</div>
					<div className="d-flex gap-3 fs-5">
						<Link className="d-flex align-items-center" to="#">
							<FiSearch />
						</Link>
						<Link className="d-flex align-items-center" to="#">
							<FiShoppingBag />
						</Link>
						<Link className="d-flex align-items-center" to="#">
							<RiAccountCircleLine />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
