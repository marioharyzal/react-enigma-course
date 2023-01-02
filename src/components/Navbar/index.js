import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { StyledButton, StyledNav } from "./styles";
import { Link } from "react-router-dom";

const NavBarCamp = ({ menu, setLoggedIn }) => {
	const handleLogout = (e) => {
		e.preventDefault();
		setLoggedIn(false);
	};

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
					<StyledButton onClick={handleLogout} variant="outline-danger" size="sm">
						Logout
					</StyledButton>
				</StyledNav>
			</Container>
		</Navbar>
	);
};

export default NavBarCamp;
