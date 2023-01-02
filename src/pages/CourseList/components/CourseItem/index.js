import React from "react";
import { StyledListItem } from "./styles";
import { Button, ButtonGroup, Col } from "react-bootstrap";

const CourseItem = ({ data, onNavigateEdit, onDelete }) => {
	return (
		<StyledListItem action>
			<Col>
				<h3 className="lead">{data?.title}</h3>
				<p>{data?.description}</p>
			</Col>
			<ButtonGroup>
				<Button variant="primary" onClick={onNavigateEdit}>
					Edit
				</Button>
				<Button variant="danger" onClick={onDelete}>
					Delete
				</Button>
				<Button variant="secondary">Download</Button>
			</ButtonGroup>
		</StyledListItem>
	);
};

export default React.memo(CourseItem);
