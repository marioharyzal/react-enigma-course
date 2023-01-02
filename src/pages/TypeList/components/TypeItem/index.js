import React from "react";
import { Col, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StyledListItem } from "./styles";
import constants from "../../../../constants";

const TypeItem = ({ data, params, onDelete }) => {
	const navigate = useNavigate();
	return (
		<StyledListItem action>
			<Col>
				<h3 className="lead">{data?.typeName}</h3>
			</Col>
			<ButtonGroup>
				<Button variant="primary" onClick={() => navigate(`${constants.ROUTES.EDIT_COURSE_TYPE}/${params}`)}>
					Edit
				</Button>
				<Button variant="danger" onClick={onDelete}>
					Delete
				</Button>
			</ButtonGroup>
		</StyledListItem>
	);
};

export default React.memo(TypeItem);
