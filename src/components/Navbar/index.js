import React from "react";
import { Container, Navbar, NavLink } from "react-bootstrap";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";

const NavBarCamp = ({ menu }) => {
	return (
		<Navbar bg="light" expand="light" sticky={"top"}>
			<Container>
				<Navbar.Brand>Enigma Course</Navbar.Brand>
				<StyledNav>
					{menu?.map((item, index) => (
						<Link to={item.path} className="nav-link mx-3" key={index}>
							{item.name}
						</Link>
					))}
				</StyledNav>
			</Container>
		</Navbar>
	);
};

export default NavBarCamp;
