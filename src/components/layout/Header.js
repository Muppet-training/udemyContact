import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<Link to="/" className="navbar-brand">
					{props.branding}
				</Link>
				<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link
								to="/contact/add"
								className="nav-link"
							>
								<i className="fas fa-plus" /> Add
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

Header.defaultProps = {
	branding: 'Pass in Props'
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};

export default Header;
