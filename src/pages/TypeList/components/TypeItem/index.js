import React from "react";
import { Col, Button, ButtonGroup } from "react-bootstrap";
import { StyledListItem } from "./styles";

const TypeItem = ({ data, onNavigateEdit, onDelete }) => {
	return (
		<StyledListItem action>
			<Col>
				<h3 className="lead">{data?.typeName}</h3>
			</Col>
			<ButtonGroup>
				<Button variant="primary" onClick={onNavigateEdit}>
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
