import { Card, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 100px;
`;

const StyledCard = styled(Card)`
	width: 600px;
	padding: 30px;
`;

export { StyledCard, StyledContainer };
