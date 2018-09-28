/*jshint esversion: 6 */
import React, {Component} from 'react';
import logo from './images/pega-icon.svg';


class Header extends Component {
	render() {
		return ( 
			    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
					<img className="img-fluid"width="30" alt="Pega Logo" src={logo} />
			      	<span className="navbar-brand mr-auto mr-lg-0">PegaWORLD Design Track</span>
			    </nav>
				);
			}
}

export default Header;
