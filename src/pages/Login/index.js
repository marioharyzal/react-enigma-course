import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components";
import constants from "../../constants";
import { StyledCard, StyledContainer } from "./styles";
import useLogin from "./useLogin";

const FORM_LIST = [
	{ id: "username", label: "Username", type: "text", placeholder: "Username..." },
	{ id: "password", label: "Password", type: "password", placeholder: "Password..." },
];

const Login = ({ setIsLoggedIn }) => {
	const { getter, setter } = useLogin();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoggedIn(true);
		navigate(constants.ROUTES.DASHBOARD);
	};

	return (
		<>
			<StyledContainer>
				<StyledCard>
					<h4>Login here</h4>
					{FORM_LIST.map((formInput) => (
						<FormInput
							label={formInput.label}
							type={formInput.type}
							value={getter[formInput.id]}
							onChange={setter[formInput.id]}
							placeholder={formInput.placeholder}
							key={formInput.id}
						/>
					))}
					<Button variant="success" onClick={handleLogin}>
						Login
					</Button>
				</StyledCard>
			</StyledContainer>
		</>
	);
};

export default Login;
