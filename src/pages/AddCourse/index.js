import React from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormInput, StyledContainer } from "../../components";
import constants from "../../constants";
import { addCourse } from "../../store/actions/courseAction";

import { StyledTitle } from "./styles";
import useAddCourse from "./useAddCourse";

const FORM_LIST = [
	{ id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
	{ id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
	{ id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
	{ id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
	{ id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
	{ id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" },
];

const AddCourse = ({ AddCourse }) => {
	const { getter, setter } = useAddCourse();
	const navigate = useNavigate();

	const handleSubmit = () => {
		AddCourse(getter);

		navigate(constants.ROUTES.COURSE_LIST);
	};

	return (
		<StyledContainer>
			<StyledTitle>Add Course</StyledTitle>
			<Form>
				{FORM_LIST.map((item) => (
					<FormInput
						label={item.label}
						type={item.type}
						value={getter[item.id]}
						onChange={setter[item.id]}
						placeholder={item.placeholder}
						key={item.id}
					/>
				))}
				<ButtonGroup>
					<Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
						Submit
					</Button>
					<Button variant="secondary" onClick={() => navigate(constants.ROUTES.COURSE_LIST)}>
						Cancel
					</Button>
				</ButtonGroup>
			</Form>
		</StyledContainer>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		AddCourse: (data) => dispatch(addCourse(data)),
	};
};

export default connect(null, mapDispatchToProps)(AddCourse);
